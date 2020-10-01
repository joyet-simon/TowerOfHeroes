import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { HeroStats } from "./heroStats";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const statCloud = [
      { hp: "323-334", mp: "55", strength: "20-22", dex: "7-9", vitality: "16-18", magic: "19-22", spirit: "17-19", luck: "14-17" },
      { hp: "8965-9508", mp: "851-905", strength: "98-100", dex: "55-62", vitality: "89-96", magic: "98-100", spirit: "93-100", luck: "22-29" }
    ];
    const statAeris = [
      { hp: "264-280", mp: "62-65", strength: "14-19", dex: "7-13", vitality: "15-20", magic: "17-24", spirit: "18-24", luck: "14-20" },
      { hp: "8305-8809", mp: "942-994", strength: "71-78", dex: "51-58", vitality: "76-83", magic: "100", spirit: "98-100", luck: "21-28" }
    ];
    const statTifa = [
      { hp: "315-334", mp: "49-52", strength: "15-20", dex: "10-16", vitality: "15-20", magic: "15-20", spirit: "14-19", luck: "14-20" },
      { hp: "8521-9033", mp: "800-850", strength: "89-96", dex: "64-71", vitality: "78-85", magic: "82-89", spirit: "89-96", luck: "23-30" }
    ];
    const statBarret = [
      { hp: "335-356", mp: "46-49", strength: "18-23", dex: "7-13", vitality: "17-24", magic: "15-20", spirit: "13-18", luck: "13-20" },
      { hp: "9443-9999", mp: "748-796 ", strength: "94-100", dex: "47-54", vitality: "97-100", magic: "78-85", spirit: "82-89", luck: "20-27" }
    ];
    const statNanaki = [
      { hp: "328-349", mp: "49-52", strength: "14-19", dex: "14-19", vitality: "16-21", magic: "15-20", spirit: "14-19", luck: "14-20" },
      { hp: "8982-9552", mp: "814-866", strength: "84-91", dex: "71-78", vitality: "85-92", magic: "84-91", spirit: "89-96", luck: "21-28" }
    ];
    const statCid = [
      { hp: "340-363", mp: "44-47", strength: "16-21", dex: "8-14", vitality: "16-22", magic: "15-20", spirit: "14-20", luck: "14-20" },
      { hp: "8683-9270", mp: "776-822", strength: "85-92", dex: "54-61", vitality: "90-97", magic: "79-86", spirit: "83-90", luck: "20-27" }
    ];
    const statCait = [
      { hp: "347-370", mp: "51-54", strength: "14-19", dex: "7-13", vitality: "14-19", magic: "15-20", spirit: "15-21", luck: "14-20" },
      { hp: "8608-9132", mp: "822-869", strength: "78-85", dex: "51-58", vitality: "74-81", magic: "89-96", spirit: "93-100", luck: "23-30" }
    ];
    const statVincent = [
      { hp: "269-287", mp: "53-56", strength: "13-18", dex: "7-13", vitality: "14-19", magic: "15-20", spirit: "15-21", luck: "14-20" },
      { hp: "8211-8771 ", mp: "859-915", strength: "74-81", dex: "51-58", vitality: "74-81", magic: "89-96", spirit: "93-100", luck: "23-30" }
    ];
    const statYuffie = [
      { hp: "262", mp: "46-51", strength: "13-18", dex: "10-17", vitality: "12-18", magic: "14-19", spirit: "12-18", luck: "14-18" },
      { hp: "8472-8989", mp: "790-841", strength: "82-89", dex: "70-77", vitality: "78-85", magic: "85-92", spirit: "86-93", luck: "25-32" }
    ];

    const heroes = [
      { id: 1, name: "Cloud Strife", age: 21, size: 1.73, birthPlace: "Nibelheim", birthDate: "19 Août", description: "Personnage principal de l'histoire, Cloud est engagé par Avalanche, un groupe écologique terroriste qui œuvre pour le bien de la Planète. Il fut, dans le passé, membre du SOLDAT, l'armée d'élite de la Shinra.", stat7: statCloud[0], stat99: statCloud[1], image: "cloud.jpg" },
      { id: 2, name: "Aeris Gainsborough", age: 22, size: 1.63, birthPlace: "Village Glaçon", birthDate: "7 Février", description: "Etant jeune fille, Aéris fut adoptée par Elmyra et passa toute son enfance dans les taudis du Secteur 5 de Migdar. Elle est en réalité la dernière survivante des Cetras, peuple premier de la Planète, et la fille d'Ifalna et du professeur Gast. Pour cette raison, elle est recherchée par la Shinra qui voit en elle un cobaye très intéressant, dont les pouvoirs pourraient servir à mener vers la Terre Promise.", stat7: statAeris[0], stat99: statAeris[1], image: "aerith.jpg" },
      { id: 3, name: "Tifa Lockhart", age: 20, size: 1.67, birthPlace: "Nibelheim", birthDate: "3 Mai", description: "Dotée d'une profonde mélancolie, Tifa est avant tout une amie d'enfance de Cloud et est sans conteste le personnage qui le connaît le mieux. Elle est aussi adhérente au groupe écologique d'Avalanche et gère d'ailleurs le bar du Secteur 7 qui sert de planque au groupe : le Septième ciel.", stat7: statTifa[0], stat99: statTifa[1], image: "tifa.jpg" },
      { id: 4, name: "Barret Wallace", age: 35, size: 1.97, birthPlace: "Corel", birthDate: "15 Décembre", description: "arret, d'apparence intouchable et invulnérable, possède un véritable cœur en or derrière ses muscles. Meurtri par la traîtrise de la Shinra dans le passé, qui avait provoqué la destruction de son village natal, Corel, la mort de sa femme Minna et celle de son meilleur ami, Dayne, il n'a jamais cessé de vouloir se venger d'elle et des réacteurs Mako qui détruisent la Planète. Il est aussi et surtout le leader d'Avalanche, le groupe écologique ayant vu le jour au Canyon Cosmo, en compagnie de ses plus vieux coéquipiers : Biggs, Jesse et Wedge. Très protecteur, il ne vit plus que pour sa fille, Marlène, qui est le seul être qui lui reste.", stat7: statBarret[0], stat99: statBarret[1], image: "varret.jpg" },
      { id: 5, name: "Nanaki", age: 16, size: 1.20, birthPlace: "Canyon Cosmo", birthDate: "Inconnue", description: "Personnage charismatique ressemblant fort à un lion, Nanaki est d'autant plus surprenant qu'il a une longévité nettement supérieure à celle d'un humain. Il présente deux personnalités : une mature, réfléchie, posée, intelligente, et la deuxième un peu plus plaintive et colérique en présence de son grand-père, Bugenhagen. Il est aussi très fier et dégage une certaine tristesse : sa race est quasiment éteinte.", stat7: statNanaki[0], stat99: statNanaki[1], image: "nanaki.jpg" },
      { id: 6, name: "Cid Highwind", age: 32, size: 1.78, birthPlace: "Inconnu", birthDate: "22 Février", description: "Passablement irritant, orgueilleux et râleur, Cid est cependant d'une loyauté sans limite et d'une confiance à toute épreuve. Prêt à tout pour venir en aide à ses compagnons, il n'hésite pas à aller jusqu'à combattre la Shinra qu'il respectait tant auparavant. Il est un amoureux de la liberté et rêve de voyager dans l'espace intersidéral depuis toujours. Hanté par le grand échec du Projet spatial dans lequel il avait dû choisir entre la vie de Shera, sa compagne, et son rêve, il montre son intérêt pour les autres sans pour autant abandonner ses propres convictions.", stat7: statCid[0], stat99: statCid[1], image: "cid.jpg" },
      { id: 7, name: "Cait Sith", age: 1, size: 1, birthPlace: "Inconnu", birthDate: "Inconnue", description: "D'une apparence grotesque et bien pensée à la fois, Cait Sith est un personnage dont les motivations sont très floues. Possédant le pouvoir de prédire occasionnellement l'avenir, il est en réalité un chat reposant sur une peluche-robot dirigée par une personne qui n'est pas inconnue.", stat7: statCait[0], stat99: statCait[1], image: "caitsith.jpg" },
      { id: 8, name: "Vincent Valentine", age: 27, size: 1.84, birthPlace: "Inconnu", birthDate: "13 Octobre", description: "Très mystérieux, discret et réservé, Vincent possède un côté vampirique lié à son apparence et son passé. Charismatique à souhait, il ne parle jamais pour ne rien dire, et son attitude est très effacée du reste du groupe. Son passé est assez trouble : il a fait partie des Turks, semble avoir un rapport direct avec la naissance de Sephiroth et a une dent contre Hojo, un scientifique de la Shinra et du Projet Jénova. Torturé, Vincent donne l'impression de vouloir expier ses fautes et d'être à la recherche de son seul amour, une certaine Lucrécia.", stat7: statVincent[0], stat99: statVincent[1], image: "vincent.jpg" },
      { id: 9, name: "Yuffie Kisaragi", age: 16, size: 1.60, birthPlace: "Utai", birthDate: "20 Novembre", description: "Espiègle et moqueuse, Youfie est un personnage qui froisse les nerfs, lié à son comportement infantile. Ne vivant que par intérêt, elle apportera beaucoup de soucis à Avalanche. Toutefois, cette manie de voler s'explique par l'envie de revoir sa ville natale briller comme autrefois. Originaire d'Utai, une ville aux couleurs asiatiques, elle est la fille d'un grand ninja, et excelle au combat grâce à sa maîtrise du ninjutsu.", stat7: statYuffie[0], stat99: statYuffie[1], image: "yuffie.jpg" },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
