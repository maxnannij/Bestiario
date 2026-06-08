import { Monster, ArmorType, MonsterType } from "../types";

// ==========================================
// 1. KOBOLDS DATA
// ==========================================

export const KOBOLD_GROUP_TRAIT = {
  name: "¡Nooooo!",
  description: "Cuando un aliado a 2 casillas o menos muere, realiza un ataque de inmediato de forma gratuita.",
  trigger: "Muerte de un aliado cercano"
};

export const KOBOLDS_DATA: Monster[] = [
  {
    id: "kobold-minion",
    name: "Minion Kobold",
    englishName: "Kobold Minion",
    level: "1/4",
    levelValue: 0.25,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/8",
    type: MonsterType.Minion,
    group: "Kobolds",
    groupDescription: "Pequeños seres dragónidos, maníacos y traviesos. Ferozmente protectores de los suyos.",
    groupTrait: KOBOLD_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural en el dado."
      },
      {
        name: "Defensa Simplificada",
        description: "Cuando múltiples minions atacan a un único objetivo, su daño se combina y se cuenta como un solo ataque para que los héroes puedan Defenderse o Interponerse contra todos a la vez."
      }
    ],
    attacks: [
      {
        name: "Apuñalar (Stab)",
        description: "Ataque rápido cuerpo a cuerpo.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "kobold-standard",
    name: "Kobold",
    englishName: "Kobold",
    level: "1/3",
    levelValue: 0.33,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 12,
    hpMax: 12,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Normal,
    group: "Kobolds",
    groupDescription: "Pequeños seres dragónidos, maníacos y traviesos. Ferozmente protectores de los suyos.",
    groupTrait: KOBOLD_GROUP_TRAIT,
    abilities: [],
    attacks: [
      {
        name: "Apuñalar (Stab)",
        description: "Ataque básico con daga cuerpo a cuerpo.",
        damageDice: "1d4+2"
      },
      {
        name: "Honda (Sling)",
        description: "Ataque a distancia mediana.",
        damageDice: "1d4+2",
        range: 8
      }
    ]
  },
  {
    id: "kobold-sneak",
    name: "Kobold Sigiloso",
    englishName: "Kobold Sneak",
    level: "1/2",
    levelValue: 0.5,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 15,
    hpMax: 15,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Elite,
    group: "Kobolds",
    groupDescription: "Pequeños seres dragónidos, maníacos y traviesos. Ferozmente protectores de los suyos.",
    groupTrait: KOBOLD_GROUP_TRAIT,
    abilities: [
      {
        name: "¡Venganza! (Revenge!)",
        description: "Cuando un aliado muere, puedes moverte hasta 6 casillas antes de usar tu reacción natural de ataque por ¡Nooooo!."
      }
    ],
    attacks: [
      {
        name: "Apuñalar (Stab)",
        description: "Ataque traicionero cuerpo a cuerpo.",
        damageDice: "1d4+2"
      },
      {
        name: "Honda (Sling)",
        description: "Lanzamiento preciso con honda.",
        damageDice: "1d4+2",
        range: 8
      }
    ]
  },
  {
    id: "kobold-clanger",
    name: "Kobold Campanero",
    englishName: "Kobold Clanger",
    level: "1",
    levelValue: 1.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 16,
    hpMax: 16,
    speed: "6 casillas",
    armor: ArmorType.Heavy,
    challengeRating: "1/2",
    type: MonsterType.Leader,
    group: "Kobolds",
    groupDescription: "Pequeños seres dragónidos, maníacos y traviesos. Ferozmente protectores de los suyos.",
    groupTrait: KOBOLD_GROUP_TRAIT,
    abilities: [
      {
        name: "¡CLANG!",
        description: "Los aliados que puedan escuchar tus ensordecedores campanazos tiran 1 dado de daño adicional cuando realizan cualquier ataque con éxito."
      }
    ],
    attacks: [
      {
        name: "Campanazo (Clang Attack)",
        description: "Acción de soporte ruidosa que activa el beneficio de sonido metálico para todos los aliados cercanos.",
        damageDice: "-"
      },
      {
        name: "Apuñalar Improvisado (Stab)",
        description: "Ataque rústico con daga.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "kobold-trapper",
    name: "Kobold Trampero",
    englishName: "Kobold Trapper",
    level: "1",
    levelValue: 1.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 26,
    hpMax: 26,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/2",
    type: MonsterType.Elite,
    group: "Kobolds",
    groupDescription: "Pequeños seres dragónidos, maníacos y traviesos. Ferozmente protectores de los suyos.",
    groupTrait: KOBOLD_GROUP_TRAIT,
    abilities: [
      {
        name: "¡Trampa! (Trap!)",
        description: "Cuando un enemigo se mueve de manera adyacente a ti o a uno de tus aliados, este activa una de tus letales trampas pre-preparadas. Se puede activar una sola vez de cada tipo por encuentro.",
        trigger: "Movimiento enemigo adyacente"
      },
      {
        name: "Trampa: ¡ABEJAS! (BEEES!)",
        description: "Causa de forma inevitable 5d4 de daño directo (no se puede fallar ni evadir). Además, causa la mitad de ese daño a TODAS las criaturas aliadas y enemigas adyacentes al objetivo."
      },
      {
        name: "Trampa: ¡RED OCULTA! (HIDDEN NET!)",
        description: "El objetivo cae en una red tejida bajo las hojas y queda Retenido/Restringido (Dificultad de escape DC 10)."
      }
    ],
    attacks: [
      {
        name: "Lanzar Escorpiones (Throw Scorpion)",
        description: "Lanza recipientes con escorpiones enfadados. Realiza dos ataques en una sola acción.",
        damageDice: "1d4+2",
        range: 8,
        isMultiAttack: true,
        multiattackCount: 2
      }
    ]
  },
  {
    id: "kobold-denwarden",
    name: "Kobold Guardián de la Guarida",
    englishName: "Kobold Denwarden",
    level: "1",
    levelValue: 1.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 20,
    hpMax: 20,
    speed: "6 casillas",
    armor: ArmorType.Medium,
    challengeRating: "1/2",
    type: MonsterType.Leader,
    group: "Kobolds",
    groupDescription: "Pequeños seres dragónidos, maníacos y traviesos. Ferozmente protectores de los suyos.",
    groupTrait: KOBOLD_GROUP_TRAIT,
    abilities: [
      {
        name: "¡Mantener la Posición! (Hold!)",
        description: "Los aliados adyacentes al Guardián de la Guarida se cubren con sus escudos y ganan automáticamente Armadura Media (M), ignorando los modificadores de daño de estadísticas."
      }
    ],
    attacks: [
      {
        name: "Apuñalar Doble (Stab x2)",
        description: "Apuñala ferozmente con dos hojas cortas. Realiza dos ataques en una sola acción.",
        damageDice: "1d4+2",
        isMultiAttack: true,
        multiattackCount: 2
      },
      {
        name: "Honda (Sling)",
        description: "Proyectil a distancia contra objetivos lejanos.",
        damageDice: "1d4+2",
        range: 8
      }
    ]
  }
];

export const KOBOLD_LOOT = [
  "Miel silvestre pegajosa",
  "MUCHÍSIMO cordel enredado",
  "Sándwiches medio mordidos (definitivamente robados)",
  "Objetos brillantes sin valor real (piedras de río, botones de cobre)",
  "Pintura de dragón (hecha de forma precaria sobre cuero, hecha con amor)",
  "Carnes en descomposición con mal olor",
  "Trampas portátiles (jaulas pequeñas, pinchos oxidados, cepos que crujen)"
];

export const KOBOLD_SAMPLE_ENCOUNTERS = [
  {
    level: 1,
    title: "Incursión Sorpresa (Kobolds Nvl 1)",
    description: "Ideal para iniciar una campaña. Un grupo de exploradores ruidosos kobolds.",
    monsters: [
      { monsterId: "kobold-standard", count: 3, role: "Kobold Flunkies" },
      { monsterId: "kobold-minion", count: 4, role: "Minions" }
    ]
  },
  {
    level: 2,
    title: "Emboscada en la Cueva (Kobolds Nvl 2)",
    description: "Una fuerza de defensa kobold coordinada con ruidos de alarma y trampas.",
    monsters: [
      { monsterId: "kobold-standard", count: 6, role: "Kobolds estándar de apoyo" },
      { monsterId: "kobold-sneak", count: 4, role: "Flanqueando sigilosamente" },
      { monsterId: "kobold-clanger", count: 1, role: "Campanero dando ánimos y alerta" },
      { monsterId: "kobold-trapper", count: 1, role: "Trampero cerrando las rutas de escape" }
    ]
  },
  {
    level: 3,
    title: "Cámara del Huevo de Dragón (Kobolds Nvl 3)",
    description: "La línea de defensa final de la tribu. Guardianes fuertemente armados y trampas letales.",
    monsters: [
      { monsterId: "kobold-trapper", count: 3, role: "Tramperos cubriendo los accesos" },
      { monsterId: "kobold-denwarden", count: 2, role: "Guardianes protectores" },
      { monsterId: "kobold-sneak", count: 3, role: "Embaucadores ágiles" }
    ]
  }
];

// ==========================================
// 2. GOBLINS DATA
// ==========================================

export const GOBLIN_GROUP_TRAIT = {
  name: "Escurridizo",
  description: "Cuando un héroe falla un ataque contra un goblin, el goblin puede moverse inmediatamente de forma gratuita hasta 2 casillas sin provocar ataques de oportunidad.",
  trigger: "Ataque del oponente fallado"
};

export const GOBLINS_DATA: Monster[] = [
  {
    id: "goblin-minion",
    name: "Goblin Esbirro",
    englishName: "Goblin Minion",
    level: "1/4",
    levelValue: 0.25,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/8",
    type: MonsterType.Minion,
    group: "Goblins",
    groupDescription: "Astutos, escurridizos y letales en gran número. Atacan desde las copas de los árboles o arbustos densos.",
    groupTrait: GOBLIN_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata al minion goblin. No asestan golpes críticos y fallan automáticamente con un 1 natural."
      },
      {
        name: "Ataques Rápidos Combinados",
        description: "El daño infligido a un oponente se combina para simplificar las tiradas de defensa de los héroes en combate masivo."
      }
    ],
    attacks: [
      {
        name: "Apuñalar (Slasher)",
        description: "Cuchillazo rápido con una daga mellada de metal.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "goblin-standard",
    name: "Goblin de Vanguardia",
    englishName: "Goblin Vanguard",
    level: "1/3",
    levelValue: 0.33,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 12,
    hpMax: 12,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Normal,
    group: "Goblins",
    groupDescription: "Astutos, escurridizos y letales en gran número. Atacan desde las copas de los árboles o arbustos densos.",
    groupTrait: GOBLIN_GROUP_TRAIT,
    abilities: [],
    attacks: [
      {
        name: "Hachón Corto",
        description: "Ataque cuerpo a cuerpo.",
        damageDice: "1d6+2"
      },
      {
        name: "Arco Corto (Shortbow)",
        description: "Andanadas rápidas a distancia.",
        damageDice: "1d6",
        range: 10
      }
    ]
  },
  {
    id: "goblin-archer",
    name: "Goblin Escupidor de Flechas",
    englishName: "Goblin Archer",
    level: "1/2",
    levelValue: 0.5,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 14,
    hpMax: 14,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Elite,
    group: "Goblins",
    groupDescription: "Astutos, escurridizos y letales en gran número. Atacan desde las copas de los árboles o arbustos densos.",
    groupTrait: GOBLIN_GROUP_TRAIT,
    abilities: [
      {
        name: "Flecha Alquitranada",
        description: "Una vez por encuentro, prende fuego a las vestiduras del enemigo, causándole 1d4 de daño ardiente continuo adicional hasta el inicio de su próximo turno."
      }
    ],
    attacks: [
      {
        name: "Arco de Precisión",
        description: "Disparo excelente a distancia desde escondites.",
        damageDice: "1d6+3",
        range: 12
      },
      {
        name: "Daga Ligera",
        description: "Defensa desesperante a corta distancia.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "goblin-shaman",
    name: "Chamán Goblin de las Hierbas",
    englishName: "Goblin Shaman",
    level: "1",
    levelValue: 1.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 18,
    hpMax: 18,
    speed: "6 casillas",
    armor: ArmorType.Medium,
    challengeRating: "1/2",
    type: MonsterType.Leader,
    group: "Goblins",
    groupDescription: "Astutos, escurridizos y letales en gran número. Atacan desde las copas de los árboles o arbustos densos.",
    groupTrait: GOBLIN_GROUP_TRAIT,
    abilities: [
      {
        name: "Seta de Alivio",
        description: "Los aliados goblins que inicien su turno a 3 casillas o menos del chamán recuperan 2 Puntos de Vida gracias al brebaje que gotea de sus fetiches."
      }
    ],
    attacks: [
      {
        name: "Ráfaga de Esporas Ácidas",
        description: "Un proyectil mágico que disuelve escudos o metales de armadura.",
        damageDice: "1d6+3",
        range: 8
      },
      {
        name: "Palo de Chamanismo",
        description: "Golpe rústico con madera seca ritual.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "goblin-boss",
    name: "Capitán de Asalto Goblin",
    englishName: "Goblin Warden",
    level: "1",
    levelValue: 1.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 24,
    hpMax: 24,
    speed: "6 casillas",
    armor: ArmorType.Medium,
    challengeRating: "1/2",
    type: MonsterType.Leader,
    group: "Goblins",
    groupDescription: "Astutos, escurridizos y letales en gran número. Atacan desde las copas de los árboles o arbustos densos.",
    groupTrait: GOBLIN_GROUP_TRAIT,
    abilities: [
      {
        name: "¡Peguen Juntos!",
        description: "Cuando realizas con éxito un ataque cuerpo a cuerpo, un aliado goblin adyacente al héroe atacado puede usar su reacción para asestar un golpe de forma gratuita de inmediato."
      }
    ],
    attacks: [
      {
        name: "Doble Cimitarra Ligera",
        description: "Asalta combinando dos espadas duales en dos ráfagas.",
        damageDice: "1d6+3",
        isMultiAttack: true,
        multiattackCount: 2
      }
    ]
  }
];

export const GOBLIN_LOOT = [
  "Taza de hojalata oxidada y deforme",
  "Brochetas de ratas secas campestres (almuerzo)",
  "Manojo de llaves que no abren nada",
  "Mapas de caminos toscos dibujados con lodo",
  "Saco de dientes de lobos y jabalíes",
  "Piedra afiladora con runas goblins",
  "Hierbas curativas secas amargas"
];

export const GOBLIN_SAMPLE_ENCOUNTERS = [
  {
    level: 1,
    title: "Asaltantes de Caminos (Goblins Nvl 1)",
    description: "Un grupo típico de salteadores goblin asalta el carruaje de los héroes de forma frontal.",
    monsters: [
      { monsterId: "goblin-standard", count: 3, role: "Goblins de Vanguardia" },
      { monsterId: "goblin-minion", count: 4, role: "Minions hostigadores" }
    ]
  },
  {
    level: 2,
    title: "Sotobosque Traicionero (Goblins Nvl 2)",
    description: "Los goblins atacan desde los arbustos coordinados con pases curativos y andanadas de flechas.",
    monsters: [
      { monsterId: "goblin-standard", count: 4, role: "Vanguardia de choque" },
      { monsterId: "goblin-archer", count: 2, role: "Arqueros con fuego y peste" },
      { monsterId: "goblin-shaman", count: 1, role: "Chamán mágico de las setas" }
    ]
  },
  {
    level: 3,
    title: "Horda Comandada (Goblins Nvl 3)",
    description: "Comandante de asalto guiando tropas organizadas en un ataque masivo.",
    monsters: [
      { monsterId: "goblin-boss", count: 2, role: "Capitanes de Asalto" },
      { monsterId: "goblin-archer", count: 3, role: "Arqueros precisos" },
      { monsterId: "goblin-standard", count: 5, role: "Infantería general" }
    ]
  }
];

// ==========================================
// 3. SKELETONS DATA
// ==========================================

export const ESQUELETO_GROUP_TRAIT = {
  name: "Fragmentación de Huesos",
  description: "Debido a su naturaleza esquelética hueca, los esqueletos ignoran el daño perforante y cortante de armas normales: todo daño de esta clase se reduce permanentemente en 2 puntos.",
  trigger: "Recibir daño cortante o perforante"
};

export const ESQUELETOS_DATA: Monster[] = [
  {
    id: "skeleton-minion",
    name: "Esqueleto Reanimado (Esbirro)",
    englishName: "Skeleton Minion",
    level: "1/4",
    levelValue: 0.25,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "5 casillas",
    armor: ArmorType.None,
    challengeRating: "1/8",
    type: MonsterType.Minion,
    group: "Esqueletos",
    groupDescription: "Giles de guerra reanimados por necromancia antigua. Marchan implacables cargando armas carcomidas.",
    groupTrait: ESQUELETO_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño exitoso fulmina al esqueleto. Son inmunes al veneno, frío y cansancio."
      }
    ],
    attacks: [
      {
        name: "Zarpazo de Falange",
        description: "Arañazo de dedos secos.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "skeleton-warrior",
    name: "Guerrero de la Tumba",
    englishName: "Skeleton Warrior",
    level: "1/3",
    levelValue: 0.33,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 11,
    hpMax: 11,
    speed: "5 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Normal,
    group: "Esqueletos",
    groupDescription: "Giles de guerra reanimados por necromancia antigua. Marchan implacables cargando armas carcomidas.",
    groupTrait: ESQUELETO_GROUP_TRAIT,
    abilities: [],
    attacks: [
      {
        name: "Espada Carcomida de Cripta",
        description: "Golpe contundente con hoja herrumbrada.",
        damageDice: "1d6+2"
      },
      {
        name: "Arco del Sepulcro",
        description: "Proyectil a distancia mediana.",
        damageDice: "1d6+1",
        range: 10
      }
    ]
  },
  {
    id: "skeleton-marksman",
    name: "Arquero Siniestro del Sepulcro",
    englishName: "Skeleton Marksman",
    level: "1/2",
    levelValue: 0.5,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 14,
    hpMax: 14,
    speed: "5 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Elite,
    group: "Esqueletos",
    groupDescription: "Giles de guerra reanimados por necromancia antigua. Marchan implacables cargando armas carcomidas.",
    groupTrait: ESQUELETO_GROUP_TRAIT,
    abilities: [
      {
        name: "Puntería de las Cenizas",
        description: "Ignora coberturas de campo con arcos y tiran con ventaja si el oponente no puede verlos."
      }
    ],
    attacks: [
      {
        name: "Flecha Gélida Seca",
        description: "Andanadas mágicas cargadas de escarcha sepulcral.",
        damageDice: "1d6+3",
        range: 12
      }
    ]
  },
  {
    id: "skeleton-guardian",
    name: "Protector de los Ancestros",
    englishName: "Skeletal Defender",
    level: "1",
    levelValue: 1.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 22,
    hpMax: 22,
    speed: "5 casillas",
    armor: ArmorType.Medium,
    challengeRating: "1/2",
    type: MonsterType.Leader,
    group: "Esqueletos",
    groupDescription: "Giles de guerra reanimados por necromancia antigua. Marchan implacables cargando armas carcomidas.",
    groupTrait: ESQUELETO_GROUP_TRAIT,
    abilities: [
      {
        name: "Falange Escudo",
        description: "Los aliados cercanos que permanezcan de forma adyacente al Protector reciben la regla de reducción de daño: reduce en 1 punto cualquier golpe físico."
      }
    ],
    attacks: [
      {
        name: "Estoque de Hierro Frío",
        description: "Apuñalada penetrante que drena temperaturas corporales.",
        damageDice: "1d8+2"
      }
    ]
  }
];

export const ESQUELETO_LOOT = [
  "Monedas de plata antiguas con efigies despintadas",
  "Polvo sagrado sepulcral",
  "Anillo de sello de latón familiar",
  "Puntas de flechas de pedernal pulido",
  "Fragmento de sudario de lino podrido",
  "Pendiente de cobre antiguo"
];

// ==========================================
// 4. ZOMBIES DATA
// ==========================================

export const ZOMBI_GROUP_TRAIT = {
  name: "Fuerza de la Tumba (Undead Fortitude)",
  description: "La primera vez que un zombi es reducido a 0 HP por un ataque que no sea un golpe crítico, realiza una tirada espiritual o el director de juego tira un dado: con probabilidad de 50% (4, 5 o 6 en 1d6) el zombi ignora el golpe fatal y permanece de pie con 1 HP.",
  trigger: "Reducción de Puntos de Vida a 0"
};

export const ZOMBIS_DATA: Monster[] = [
  {
    id: "zombie-minion",
    name: "Caminante Putrefacto (Esbirro)",
    englishName: "Zombie Minion",
    level: "1/4",
    levelValue: 0.25,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "4 casillas",
    armor: ArmorType.None,
    challengeRating: "1/8",
    type: MonsterType.Minion,
    group: "Zombis",
    groupDescription: "Cuerpos insaciables e inertes de carne corrupta. Su vigor inhumano les hace aguantar castigos que matarían soldados.",
    groupTrait: ZOMBI_GROUP_TRAIT,
    abilities: [
      {
        name: "Cuerpo Sin Dolor",
        description: "Cualquier golpe exitoso les quita la vida (salvo uso de la habilidad Fuerza de la Tumba). Son inmunes a venenos y parálisis."
      }
    ],
    attacks: [
      {
        name: "Mordisco Hambriento",
        description: "Presión letal de mandíbula.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "zombie-standard",
    name: "Zombi Insaciable",
    englishName: "Zombie",
    level: "1/3",
    levelValue: 0.33,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 18,
    hpMax: 18,
    speed: "4 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Normal,
    group: "Zombis",
    groupDescription: "Cuerpos insaciables e inertes de carne corrupta. Su vigor inhumano les hace aguantar castigos que matarían soldados.",
    groupTrait: ZOMBI_GROUP_TRAIT,
    abilities: [],
    attacks: [
      {
        name: "Aplastamiento Corporal (Slam)",
        description: "Caída aplastante de puño y hombro.",
        damageDice: "1d6+2"
      }
    ]
  },
  {
    id: "zombie-spore",
    name: "Zombi de Esporas Tóxicas",
    englishName: "Spore Zombie",
    level: "1/2",
    levelValue: 0.5,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 24,
    hpMax: 24,
    speed: "4 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Elite,
    group: "Zombis",
    groupDescription: "Cuerpos insaciables e inertes de carne corrupta. Su vigor inhumano les hace aguantar castigos que matarían soldados.",
    groupTrait: ZOMBI_GROUP_TRAIT,
    abilities: [
      {
        name: "Nube de Esporas",
        description: "Al morir por cualquier causa fiscal, la carne hinchada estalla liberando esporas ácidas. Todo héroe adyacente toma 2d4 de daño por ácido de forma inevitable."
      }
    ],
    attacks: [
      {
        name: "Zarpazo Infeccioso",
        description: "Cuchillada cargada de bacterias putrefactas.",
        damageDice: "1d6+2"
      }
    ]
  },
  {
    id: "zombie-giant",
    name: "Gigante Zombi Colosal",
    englishName: "Hulking Zombie",
    level: "2",
    levelValue: 2.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 42,
    hpMax: 42,
    speed: "5 casillas",
    armor: ArmorType.Heavy,
    challengeRating: "1.5",
    type: MonsterType.Leader,
    group: "Zombis",
    groupDescription: "Cuerpos insaciables e inertes de carne corrupta. Su vigor inhumano les hace aguantar castigos que matarían soldados.",
    groupTrait: ZOMBI_GROUP_TRAIT,
    abilities: [
      {
        name: "Masa Implacable",
        description: "El gigante zombi no puede ser derribado de espaldas o empujado del campo debido a su peso."
      }
    ],
    attacks: [
      {
        name: "Golpe Sísmico a las Dos Manos",
        description: "Golpe aplastante masivo que derriba la víctima en caso de golpe.",
        damageDice: "2d6+4"
      }
    ]
  }
];

export const ZOMBI_LOOT = [
  "Ropas rasgadas coloniales podridas",
  "Alforjas cubiertas de lodo antiguo",
  "Una brújula latón torcida inútil",
  "Amuleto de fe sagrado roto de oro",
  "Llaves de bronce familiares oxidadas",
  "Monedas de cobre desgastadas sucias con tierra"
];

export const UNDEAD_SAMPLE_ENCOUNTERS = [
  {
    level: 1,
    title: "Alzamiento en la Cripta (No Muertos Nvl 1)",
    description: "Esqueletos inquietos emergen de las tumbas de tierra al paso del grupo.",
    monsters: [
      { monsterId: "skeleton-warrior", count: 2, role: "Esqueletos de Vanguardia" },
      { monsterId: "skeleton-minion", count: 5, role: "Huesos reanimados" }
    ]
  },
  {
    level: 2,
    title: "Ataque de la Horda Putrefacta (Zombis Nvl 2)",
    description: "La carne caminante avanza en bloque acorralando a los asustados colonos.",
    monsters: [
      { monsterId: "zombie-standard", count: 5, role: "Zombis insaciables" },
      { monsterId: "zombie-minion", count: 6, role: "Caminantes putrefactos esbirros" }
    ]
  },
  {
    level: 3,
    title: "Guardia del Rey Necrófago (Undead Nvl 3)",
    description: "Fuerza mixta defensiva de criptas protegiendo reliquias impías.",
    monsters: [
      { monsterId: "skeleton-guardian", count: 1, role: "Protector Ancestral" },
      { monsterId: "skeleton-warrior", count: 4, role: "Guerreros de tumba" },
      { monsterId: "skeleton-marksman", count: 3, role: "Arqueros del sepulcro" },
      { monsterId: "zombie-spore", count: 2, role: "Zombis de Esporas" }
    ]
  }
];

// ==========================================
// 5. ORCS DATA
// ==========================================

export const ORCO_GROUP_TRAIT = {
  name: "Carga Implacable",
  description: "Cuando un orco se mueve una distancia mínima de 3 casillas en línea recta directo hacia un oponente antes de atacar, su golpe goza de un asombroso impulso: tira un dado de daño de arma adicional si el ataque resulta exitoso.",
  trigger: "Arremetida de carga en línea recta"
};

export const ORCOS_DATA: Monster[] = [
  {
    id: "orc-raider",
    name: "Orco Asaltante",
    englishName: "Orc Raider",
    level: "1/2",
    levelValue: 0.5,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 20,
    hpMax: 20,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/2",
    type: MonsterType.Normal,
    group: "Orcos",
    groupDescription: "Guerreros indomables de fisionomía brutal y tribal. Buscan la gloria de combate ganando superioridad física.",
    groupTrait: ORCO_GROUP_TRAIT,
    abilities: [],
    attacks: [
      {
        name: "Hacha de Batalla Pesada",
        description: "Corte destructivo de una sola mano.",
        damageDice: "1d8+3"
      },
      {
        name: "Jabalina de Acero",
        description: "Lanzamiento corto poderoso.",
        damageDice: "1d6+3",
        range: 6
      }
    ]
  },
  {
    id: "orc-berserker",
    name: "Orco Furioso (Berserker)",
    englishName: "Orc Berserker",
    level: "1",
    levelValue: 1.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 30,
    hpMax: 30,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/2",
    type: MonsterType.Elite,
    group: "Orcos",
    groupDescription: "Guerreros indomables de fisionomía brutal y tribal. Buscan la gloria de combate ganando superioridad física.",
    groupTrait: ORCO_GROUP_TRAIT,
    abilities: [
      {
        name: "Ira Viviente",
        description: "Cuando la salud del berserker está por debajo de 15 puntos de golpe (50% o menos), sus ataques se imbuyen en sangre ganando puntería de Ventaja absoluta."
      }
    ],
    attacks: [
      {
        name: "Gran Hacha Barbada",
        description: "Asesta golpes brutales a dos manos cortando corazas.",
        damageDice: "1d12+4"
      }
    ]
  },
  {
    id: "orc-shaman",
    name: "Orco Clérigo de la Tormenta",
    englishName: "Orc Shaman",
    level: "1",
    levelValue: 1.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 24,
    hpMax: 24,
    speed: "6 casillas",
    armor: ArmorType.Medium,
    challengeRating: "1/2",
    type: MonsterType.Elite,
    group: "Orcos",
    groupDescription: "Guerreros indomables de fisionomía brutal y tribal. Buscan la gloria de combate ganando superioridad física.",
    groupTrait: ORCO_GROUP_TRAIT,
    abilities: [
      {
        name: "Bendición del Ojo Único",
        description: "Todos los orcos aliados que se encuentren a 3 casillas o menos ganan una maestría excelente: pueden repetir cualquier 1 natural que obtengan en sus dados de daño."
      }
    ],
    attacks: [
      {
        name: "Lanza de Relámpagos",
        description: "Arremetida de lanza cargada de electricidad ruidosa.",
        damageDice: "1d6+2 + 1d6 de rayo"
      },
      {
        name: "Perno Siniestro de Trueno",
        description: "Descarga sónica mágica.",
        damageDice: "1d8+3",
        range: 8
      }
    ]
  },
  {
    id: "orc-warlord",
    name: "Señor de la Guerra Hachazo-Sangriento",
    englishName: "Orc Warlord",
    level: "2",
    levelValue: 2.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 52,
    hpMax: 52,
    speed: "6 casillas",
    armor: ArmorType.Heavy,
    challengeRating: "2.0",
    type: MonsterType.Leader,
    group: "Orcos",
    groupDescription: "Guerreros indomables de fisionomía brutal y tribal. Buscan la gloria de combate ganando superioridad física.",
    groupTrait: ORCO_GROUP_TRAIT,
    abilities: [
      {
        name: "Grito de los Clanes",
        description: "Una vez por encuentro, asume postura de guerra. Todos los aliados orcos ganan inmediatamente 5 HP temporales y avanzan de forma gratuita hasta 3 casillas libres en dirección al enemigo."
      }
    ],
    attacks: [
      {
        name: "Mandoble del Devastador",
        description: "Cortes pesados letales a gran escala.",
        damageDice: "2d6+4",
        isMultiAttack: true,
        multiattackCount: 2
      }
    ]
  }
];

export const ORCO_LOOT = [
  "Collar de falanges talladas a mano de oponentes",
  "Pieles de lobos salvajes olorosas",
  "Cuerno lleno de alcohol de cebada agrio",
  "Gemas brutas valiosas extraídas de cuevas",
  "Amuleto de metal con marcas rituales tribales",
  "Daga forjada a golpes de martillo tosca"
];

export const ORC_SAMPLE_ENCOUNTERS = [
  {
    level: 2,
    title: "Exploradores de Batalla (Orcos Nvl 2)",
    description: "Una pequeña escuadra que inspecciona valles interiores de reinos humanos.",
    monsters: [
      { monsterId: "orc-raider", count: 3, role: "Orcos Asaltantes de vanguardia" }
    ]
  },
  {
    level: 3,
    title: "Caza Sangrienta de Tribu (Orcos Nvl 3)",
    description: "Feroz asalto comandado liderado por guerreros enloquecidos por fervor bélico.",
    monsters: [
      { monsterId: "orc-berserker", count: 2, role: "Orcos Berserkers" },
      { monsterId: "orc-raider", count: 3, role: "Orcos Asaltantes" }
    ]
  },
  {
    level: 4,
    title: "Corte del Devastador (Orcos Nvl 4)",
    description: "Incursión del gran caudillo comandando la guardia de élite armada.",
    monsters: [
      { monsterId: "orc-warlord", count: 1, role: "Señor de la Guerra Hachazo-Sangriento" },
      { monsterId: "orc-shaman", count: 1, role: "Chamán de las tormentas" },
      { monsterId: "orc-berserker", count: 3, role: "Guerreros de vanguardia" },
      { monsterId: "orc-raider", count: 4, role: "Asaltantes de apoyo" }
    ]
  }
];

// ==========================================
// 6. LIMBO - CONSTRUCTOS DEL OLVIDO
// ==========================================

export const CONSTRUCTO_GROUP_TRAIT = {
  name: "Reciclaje de Chatarra",
  description: "Cuando un constructo aliado a 3 casillas o menos es destruido, este monstruo puede usar una reacción inmediata para recuperar 5 puntos de golpe (o 1 HP si es un Minion) absorbiendo engranajes remanentes de su carcasa.",
  trigger: "Destrucción de un constructo aliado"
};

export const CONSTRUCTOS_DATA: Monster[] = [
  {
    id: "construct-tin-minion",
    name: "Esbirro de Hojalata",
    englishName: "Tin Scoundrel",
    level: "1/4",
    levelValue: 0.25,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "5 casillas",
    armor: ArmorType.None,
    challengeRating: "1/8",
    type: MonsterType.Minion,
    group: "Constructos del Olvido",
    groupDescription: "Autómatas desechados, juguetes mecánicos oxidados y colosos de chatarra a medio desmantelar... Deambulan buscando engranajes de repuesto en el Limbo.",
    groupTrait: CONSTRUCTO_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural en el dado."
      },
      {
        name: "Defensa Simplificada",
        description: "Cuando múltiples minions atacan a un único objetivo, su daño se combina y se cuenta como un solo ataque para agilizar la defensa."
      }
    ],
    attacks: [
      {
        name: "Tenazas de Latón (Brass Pliers)",
        description: "Pellizco irritante de fuerza neumática simple.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "construct-gear-warden",
    name: "Guardián de Engranajes Oxidados",
    englishName: "Rusted Gear Warden",
    level: "1/2",
    levelValue: 0.5,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 16,
    hpMax: 16,
    speed: "5 casillas",
    armor: ArmorType.Medium,
    challengeRating: "1/4",
    type: MonsterType.Normal,
    group: "Constructos del Olvido",
    groupDescription: "Autómatas desechados, juguetes mecánicos oxidados y colosos de chatarra a medio desmantelar... Deambulan buscando engranajes de repuesto en el Limbo.",
    groupTrait: CONSTRUCTO_GROUP_TRAIT,
    abilities: [],
    attacks: [
      {
        name: "Llave de Presión (Spanner Slam)",
        description: "Zarpazo pesado con una llave de tuercas desportillada.",
        damageDice: "1d6+2"
      }
    ]
  },
  {
    id: "construct-memory-keeper",
    name: "Coleccionista de Engranajes",
    englishName: "Gear Collector",
    level: "1",
    levelValue: 1.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 28,
    hpMax: 28,
    speed: "6 casillas",
    armor: ArmorType.Medium,
    challengeRating: "1/2",
    type: MonsterType.Elite,
    group: "Constructos del Olvido",
    groupDescription: "Autómatas desechados, juguetes mecánicos oxidados y colosos de chatarra a medio desmantelar... Deambulan buscando engranajes de repuesto en el Limbo.",
    groupTrait: CONSTRUCTO_GROUP_TRAIT,
    abilities: [
      {
        name: "Giro Sincrónico",
        description: "Mientras se encuentre adyacente a otro aliado constructo, gana +1 a su defensa contra ataques cuerpo a cuerpo."
      }
    ],
    attacks: [
      {
        name: "Pinza Recolectora (Scavenge Claw)",
        description: "Arpa metálica para despojar de corazas al adversario.",
        damageDice: "1d8+3"
      },
      {
        name: "Proyector de Vapor Caliente",
        description: "Chorros de vapor hirviente que entorpecen la visión.",
        damageDice: "1d6",
        range: 8
      }
    ]
  },
  {
    id: "construct-scrapyard-colossus",
    name: "Coloso de Chatarra Abandonado",
    englishName: "Scrapyard Colossus",
    level: "2",
    levelValue: 2.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 58,
    hpMax: 58,
    speed: "4 casillas",
    armor: ArmorType.Heavy,
    challengeRating: "2.0",
    type: MonsterType.Leader,
    group: "Constructos del Olvido",
    groupDescription: "Autómatas desechados, juguetes mecánicos oxidados y colosos de chatarra a medio desmantelar... Deambulan buscando engranajes de repuesto en el Limbo.",
    groupTrait: CONSTRUCTO_GROUP_TRAIT,
    abilities: [
      {
        name: "Vapor de Desahogo",
        description: "Una vez por encuentro, como acción inmediata, emite una espesa humareda sibilante que impone Desventaja en ataques lejanos contra sí mismo y sus aliados adyacentes hasta que el coloso actúe en el siguiente turno."
      }
    ],
    attacks: [
      {
        name: "Mazazo Hidráulico de Muelles",
        description: "Golpes destructores de hierro fundido y chatarra pesada.",
        damageDice: "2d8+4",
        isMultiAttack: true,
        multiattackCount: 2
      }
    ]
  }
];

export const CONSTRUCTO_LOOT = [
  "Engranaje de latón grabado con iniciales borrosas de su forjador",
  "Muelle con tensión perpetua inexplicable que cruje al tacto",
  "Bote de lubricante reseco con sutil aroma a lavanda",
  "Chapa de identificación militar de un antiguo reino olvidado",
  "Caja de música oxidada que solo emite estática y lamento",
  "Tornillo de plata pulida que brilla levemente en la penumbra"
];

// ==========================================
// 7. LIMBO - ECOS DEL LIMBO (Espíritus / Humanos)
// ==========================================

export const ECO_GROUP_TRAIT = {
  name: "Interferencia de Memorias",
  description: "Debido a su naturaleza evanescente, cuando un Eco sufre daño físico de un héroe, emite un pulso estático que confunde al atacante: el héroe debe tirar su siguiente ataque con Desventaja a menos que sople una brizna de recuerdo consciente.",
  trigger: "Al sufrir daño directo de ataques"
};

export const ECOS_DATA: Monster[] = [
  {
    id: "eco-wanderer-minion",
    name: "Alma Errante Desvaída",
    englishName: "Faded Wanderer",
    level: "1/3",
    levelValue: 0.33,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/8",
    type: MonsterType.Minion,
    group: "Ecos del Limbo",
    groupDescription: "Espíritus melancólicos o seres humanos desorientados que atravesaron umbrales invisibles. Atacan buscando mentes cálidas.",
    groupTrait: ECO_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural en el dado."
      },
      {
        name: "Flotar Etéreo",
        description: "Ignora los efectos de terreno difícil menores y posee inmunidad total al daño causado por empujones o caídas en combate."
      }
    ],
    attacks: [
      {
        name: "Tacto Frígido (Sorrow Touch)",
        description: "Contacto espectral gélido que extrae energía consciente.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "eco-rusted-knight",
    name: "Caballero de Armadura Oxidada",
    englishName: "Rusted Plate Knight",
    level: "1",
    levelValue: 1.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 22,
    hpMax: 22,
    speed: "5 casillas",
    armor: ArmorType.Heavy,
    challengeRating: "1/2",
    type: MonsterType.Normal,
    group: "Ecos del Limbo",
    groupDescription: "Espíritus melancólicos o seres humanos desorientados que atravesaron umbrales invisibles. Atacan buscando mentes cálidas.",
    groupTrait: ECO_GROUP_TRAIT,
    abilities: [
      {
        name: "Código Recobrado",
        description: "Cuando la vida del Caballero cae por debajo de 11 HP, jura un último ideal que le concede instantáneamente +2 a su defensa hasta el final de la batalla."
      }
    ],
    attacks: [
      {
        name: "Mandoble Desportillado (Rust Blade)",
        description: "Corte pesado cargado de pesadumbres e inercia fantasmal.",
        damageDice: "1d10+3"
      }
    ]
  },
  {
    id: "eco-weaver-threads",
    name: "Tejedora de Hilos Perdidos",
    englishName: "Weaver of Lost Threads",
    level: "2",
    levelValue: 2.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 42,
    hpMax: 42,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1",
    type: MonsterType.Elite,
    group: "Ecos del Limbo",
    groupDescription: "Espíritus melancólicos o seres humanos desorientados que atravesaron umbrales invisibles. Atacan buscando mentes cálidas.",
    groupTrait: ECO_GROUP_TRAIT,
    abilities: [
      {
        name: "Amnesia Inducida",
        description: "Un héroe a su elección que esté a 6 casillas o menos debe gastar su movimiento para recordar su nombre; de lo contrario, su daño se reduce a la mitad durante el turno actual."
      }
    ],
    attacks: [
      {
        name: "Agujas del Pesar (Memory Needle)",
        description: "Hilos de luz fantasmal dirigidos a enredar mentes ajenas.",
        damageDice: "1d6+3",
        range: 8
      }
    ]
  }
];

export const ECO_LOOT = [
  "Diario íntimo de viaje con todas las páginas en un blanco incorruptible",
  "Anillo de bodas sin inscripción de nombres ni metales puros",
  "Llave de plata que no abre ninguna cerradura que quede en pie en el mundo",
  "Retrato en miniatura pintado cuyo rostro se sumerge en la bruma de tinta",
  "Cinta de pelo de seda descolorida con aroma a rocío viejo",
  "Medallón vacío de cobre que emite un susurro lejano de voces amigas"
];

// ==========================================
// 8. LIMBO - RELIQUIAS PERDIDAS (Objetos Animados)
// ==========================================

export const RELIQUIA_GROUP_TRAIT = {
  name: "Gravedad de lo Perdido",
  description: "Estar cerca de estas reliquias entorpece el movimiento. Las casillas adyacentes a las Reliquias cuentan como terreno difícil debido a la distorsión gravitacional de su vacío existencial.",
  trigger: "Permanecer adyacente a una reliquia perdida"
};

export const RELIQUIAS_DATA: Monster[] = [
  {
    id: "relic-empty-ledger",
    name: "Libro de Cuentas Vacío",
    englishName: "Empty Ledger",
    level: "1/2",
    levelValue: 0.5,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 14,
    hpMax: 14,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Normal,
    group: "Reliquias Perdidas",
    groupDescription: "Objetos comunes repletos de valor sentimental o histórico que cobraron una sutil malevolencia existencial tras ser olvidados de golpe.",
    groupTrait: RELIQUIA_GROUP_TRAIT,
    abilities: [
      {
        name: "Contrato del Vacío",
        description: "Cada golpe exitoso del libro grava la mente del héroe. El afectado tiene -1 casilla de movimiento en su siguiente turno debido a deudas no saldadas de su pasado."
      }
    ],
    attacks: [
      {
        name: "Látigo de Páginas Cortantes",
        description: "La fricción de cientos de hojas de papel volando en torbellino denso.",
        damageDice: "1d6+2"
      }
    ]
  },
  {
    id: "relic-weeping-doll",
    name: "Muñeca de Porcelana Llorosa",
    englishName: "Weeping Porcelain Doll",
    level: "1",
    levelValue: 1.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 25,
    hpMax: 25,
    speed: "5 casillas",
    armor: ArmorType.None,
    challengeRating: "1/2",
    type: MonsterType.Elite,
    group: "Reliquias Perdidas",
    groupDescription: "Objetos comunes repletos de valor sentimental o histórico que cobraron una sutil malevolencia existencial tras ser olvidados de golpe.",
    groupTrait: RELIQUIA_GROUP_TRAIT,
    abilities: [
      {
        name: "Llantos de Soledad",
        description: "Cualquier héroe que empiece su turno contiguo a la muñeca recibe 2 puntos de daño directo psíquico por la aflicción de la desesperanza."
      }
    ],
    attacks: [
      {
        name: "Grito de Tinta Negra",
        description: "Alarido sordo escupiendo lágrimas de lodo espiritual.",
        damageDice: "1d8+3",
        range: 6
      }
    ]
  },
  {
    id: "relic-erased-key",
    name: "Llave del Calabozo Borrado",
    englishName: "Key of the Erased Dungeon",
    level: "2",
    levelValue: 2.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 46,
    hpMax: 46,
    speed: "6 casillas",
    armor: ArmorType.Heavy,
    challengeRating: "2.0",
    type: MonsterType.Leader,
    group: "Reliquias Perdidas",
    groupDescription: "Objetos comunes repletos de valor sentimental o histórico que cobraron una sutil malevolencia existencial tras ser olvidados de golpe.",
    groupTrait: RELIQUIA_GROUP_TRAIT,
    abilities: [
      {
        name: "Cerradura del Ser",
        description: "Una vez por turno, cuando la llave asesta un golpe, puede 'cerrar' el ingenio de la víctima: el héroe afectado no puede usar consumibles ni habilidades especiales en su siguiente turno."
      }
    ],
    attacks: [
      {
        name: "Embestida de Bronce Macizo",
        description: "Carga demoledora de metal denso y herrumbre flotante.",
        damageDice: "1d12+4"
      }
    ]
  }
];

export const RELIQUIA_LOOT = [
  "Lápiz gastado que vuelve a afilarse por las noches de forma autónoma",
  "Muñeca diminuta de trapo remendada mil veces con hilo de cáñamo",
  "Pluma estilográfica cargada con un vial de llanto negro y espeso",
  "Carta de amor arrugada de caligrafía elegante fechada hace un siglo",
  "Grial de estaño agrietado que enfría el agua al instante tras verterla",
  "Moneda de bronce antigua pulida por el roce constante de un dedo desaparecido"
];

export const LIMBO_SAMPLE_ENCOUNTERS = [
  {
    level: 1,
    title: "Ecos en las Grietas del Olvido (Limbo Nvl 1)",
    description: "Espíritus hambrientos de recuerdos y autómatas descalibrados deambulan por las inmediaciones del nexo cósmico.",
    monsters: [
      { monsterId: "construct-tin-minion", count: 4, role: "Esbirros de Hojalata" },
      { monsterId: "eco-wanderer-minion", count: 3, role: "Almas Errantes Desvaídas" },
      { monsterId: "relic-empty-ledger", count: 1, role: "Libro de Cuentas Vacío" }
    ]
  },
  {
    level: 2,
    title: "La Patrulla Hermética (Limbo Nvl 2)",
    description: "Un caballero sin rostro marcha severo junto a guardianes mecánicos que se alimentan de metrallas.",
    monsters: [
      { monsterId: "eco-rusted-knight", count: 1, role: "Caballero de Armadura Oxidada" },
      { monsterId: "construct-gear-warden", count: 2, role: "Guardianes de Engranajes Oxizados" },
      { monsterId: "relic-empty-ledger", count: 2, role: "Libros de Cuentas Vacíos" }
    ]
  },
  {
    level: 3,
    title: "Reunión de Juguetes Perdidos (Limbo Nvl 3)",
    description: "Una desahuciada tejedora hilvana los traumas de tétricas muñecas llorosas y recolectores insaciables.",
    monsters: [
      { monsterId: "eco-weaver-threads", count: 1, role: "Tejedora de Hilos Perdidos" },
      { monsterId: "relic-weeping-doll", count: 2, role: "Muñecas de Porcelana Llorosa" },
      { monsterId: "construct-memory-keeper", count: 1, role: "Coleccionista de Engranajes" },
      { monsterId: "construct-tin-minion", count: 4, role: "Esbirros de Hojalata de vanguardia" }
    ]
  },
  {
    level: 4,
    title: "Gran Juicio de la Cerradura Exánime (Limbo Nvl 4)",
    description: "El coloso de chatarra ruge en estática mientras la gran llave intenta encarcelar la mismísima alma de los héroes.",
    monsters: [
      { monsterId: "construct-scrapyard-colossus", count: 1, role: "Coloso de Chatarra Abandonado" },
      { monsterId: "relic-erased-key", count: 1, role: "Llave del Calabozo Borrado" },
      { monsterId: "eco-rusted-knight", count: 2, role: "Caballeros de Armadura Oxidada" },
      { monsterId: "construct-gear-warden", count: 2, role: "Guardianes de Engranajes de apoyo" }
    ]
  }
];

// ==========================================
// 9. MONSTRUOSIDADES
// ==========================================

export const MONSTRUOSIDAD_GROUP_TRAIT = {
  name: "Presencia Aterradora",
  description: "Cuando una Monstruosidad reduce a un enemigo a la mitad de sus puntos de golpe máximos o menos, todos los aliados de la monstruosidad en un radio de 3 casillas obtienen ventaja en su próximo ataque de inmediato debido al pánico sembrado.",
  trigger: "Infligir gran daño o asustar a un objetivo"
};

export const MONSTRUOSIDADES_DATA: Monster[] = [
  {
    id: "monstruosidad-basilisco-minion",
    name: "Cría de Basilisco del Fango",
    englishName: "Mud Basilisk Hatchling",
    level: "1/2",
    levelValue: 0.5,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Minion,
    group: "Monstruosidades",
    groupDescription: "Criaturas feroces de anatomía alterada o poderes anómalos no naturales.",
    groupTrait: MONSTRUOSIDAD_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural en el dado."
      },
      {
        name: "Piel Escamosa",
        description: "El primer ataque físico de cada turno que sufra esta cría cuenta con reducción de 1 de daño."
      }
    ],
    attacks: [
      {
        name: "Mordisco Petrificante Menor",
        description: "Dentellada que entumece las articulaciones del objetivo.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "monstruosidad-grifo-oxidado",
    name: "Grifo de Plumas Metálicas",
    englishName: "Metallic-Feathered Griffon",
    level: "1",
    levelValue: 1.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 24,
    hpMax: 24,
    speed: "7 casillas",
    armor: ArmorType.Medium,
    challengeRating: "1/2",
    type: MonsterType.Normal,
    group: "Monstruosidades",
    groupDescription: "Criaturas feroces de anatomía alterada o poderes anómalos no naturales.",
    groupTrait: MONSTRUOSIDAD_GROUP_TRAIT,
    abilities: [
      {
        name: "Picada de Caza",
        description: "Si se mueve al menos 4 casillas antes de atacar, su picotazo inflige 2 de daño adicional y puede empujar 1 casilla al objetivo."
      }
    ],
    attacks: [
      {
        name: "Picotazo Desgarrador",
        description: "Corte pesado con su afilado pico de latón.",
        damageDice: "1d10+2"
      }
    ]
  },
  {
    id: "monstruosidad-quimera",
    name: "Engendro de Quimera Menor",
    englishName: "Lesser Chimera Spawn",
    level: "2",
    levelValue: 2.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 48,
    hpMax: 48,
    speed: "6 casillas",
    armor: ArmorType.Heavy,
    challengeRating: "1.0",
    type: MonsterType.Elite,
    group: "Monstruosidades",
    groupDescription: "Criaturas feroces de anatomía alterada o poderes anómalos no naturales.",
    groupTrait: MONSTRUOSIDAD_GROUP_TRAIT,
    abilities: [
      {
        name: "Exhalación Ígnea",
        description: "Una vez por encuentro, exhala fuego en un cono de 3 casillas. Daño 2d6 a todos los objetivos en el área."
      }
    ],
    attacks: [
      {
        name: "Garras y Mordisco Cósmico",
        description: "Ataques encadenados de cabeza de cabra y león combinados.",
        damageDice: "1d8+3",
        isMultiAttack: true,
        multiattackCount: 2
      }
    ]
  }
];

export const MONSTRUOSIDADES_LOOT = [
  "Pluma metálica pulida sumamente afilada que brilla como cobre",
  "Frasco con bilis de basilisco densa de color amarillo fosforescente",
  "Cuerno de bronce pequeño roto con runas místicas grabadas",
  "Garra curtida perfecta para usarse como punta de flecha o daga",
  "Garra de grifo seca con restos de cenizas calientes de volcán",
  "Ojo petrificado de reptil que conserva un brillo ámbar sutil"
];

// ==========================================
// 10. LIMOS Y OOZES
// ==========================================

export const OOZE_GROUP_TRAIT = {
  name: "Cuerpo Amorfo y Ácido",
  description: "Los limos y oozes ignoran los efectos de agarre, parálisis y daño por caída. Además, cualquier ataque de arma cuerpo a cuerpo no mágica que golpee a un Ooze hace que el arma sufra desgaste corrosivo imitando 2 puntos de daño ácido al atacante.",
  trigger: "Ser atacado cuerpo a cuerpo o deslizarse"
};

export const OOZES_DATA: Monster[] = [
  {
    id: "ooze-puddle-minion",
    name: "Pudín de Ácido Errante",
    englishName: "Errant Acid Puddle",
    level: "1/2",
    levelValue: 0.5,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "4 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Minion,
    group: "Limos y Oozes",
    groupDescription: "Masas protoplasmáticas sin mente que deambulan devorando cualquier materia orgánica o metálica que crucen.",
    groupTrait: OOZE_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural en el dado."
      },
      {
        name: "Propagación Corrosiva",
        description: "Al morir, estalla en un charco de ácido de 1 casilla que inflige 2 de daño de ácido a quien lo pise en su turno."
      }
    ],
    attacks: [
      {
        name: "Pseudópodo Ácido",
        description: "Pequeño latigazo viscoso que derrite telas y cuero.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "ooze-gelatinous-cube",
    name: "Cubo Gelatinoso Ancestral",
    englishName: "Ancient Gelatinous Cube",
    level: "2",
    levelValue: 2.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 38,
    hpMax: 38,
    speed: "4 casillas",
    armor: ArmorType.None,
    challengeRating: "1.0",
    type: MonsterType.Normal,
    group: "Limos y Oozes",
    groupDescription: "Masas protoplasmáticas sin mente que deambulan devorando cualquier materia orgánica o metálica que crucen.",
    groupTrait: OOZE_GROUP_TRAIT,
    abilities: [
      {
        name: "Cuerpo Transparente",
        description: "Si el Cubo no se ha movido este turno, requiere una tirada de Percepción exitosa para ser detectado. Los héroes que no lo detecten y entren en su casilla quedan Engullidos, sufriendo 3 de daño de ácido al inicio de cada uno de sus turnos hasta que escapen de su interior."
      }
    ],
    attacks: [
      {
        name: "Engullir y Absorber",
        description: "Estirar su forma cúbica para engullir materia viva completa.",
        damageDice: "1d10+2"
      }
    ]
  },
  {
    id: "ooze-slime-lord",
    name: "Limo Carnívoro Sangriento",
    englishName: "Bloody Carnivorous Slime",
    level: "3",
    levelValue: 3.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 54,
    hpMax: 54,
    speed: "5 casillas",
    armor: ArmorType.Medium,
    challengeRating: "2.0",
    type: MonsterType.Leader,
    group: "Limos y Oozes",
    groupDescription: "Masas protoplasmáticas sin mente que deambulan devorando cualquier materia orgánica o metálica que crucen.",
    groupTrait: OOZE_GROUP_TRAIT,
    abilities: [
      {
        name: "División Celular",
        description: "Al caer por primera vez por debajo del 50% de sus puntos de golpe máximos (27 HP), genera inmediatamente un Pudín de Ácido Errante en una casilla libre adyacente para confundir a los atacantes."
      }
    ],
    attacks: [
      {
        name: "Azote Envolvente Corrosivo",
        description: "Latigazos gruesos ruidosos cargados de burbujas digestivas.",
        damageDice: "2d6+4",
        isMultiAttack: true,
        multiattackCount: 2
      }
    ]
  }
];

export const OOZES_LOOT = [
  "Frasco hermético con gelatina verde brillante que gotea lentamente",
  "Gema semipreciosa tragada a medio digerir que aún brilla",
  "Punta de flecha derretida que conserva un sutil halo templado",
  "Vial de ácido corrosivo útil para derretir cerraduras simples",
  "Restos de un escudo de acero disuelto y deformado por completo",
  "Esencia líquida viscosa que emite burbujas al exponerse al aire"
];

// ==========================================
// 11. COLINAS Y CAMPOS (HILL & FIELD)
// ==========================================

export const HILLS_AND_FIELDS_GROUP_TRAIT = {
  name: "Terreno Abierto e Impredecible",
  description: "Las criaturas de Colinas y Campos dominan la caza en espacios abiertos. Mientras se encuentren bajo luz natural o cielo abierto, obtienen un bono de +1 casilla a su velocidad de movimiento. Además, si inician su turno escondidas o tienen cobertura, su primer ataque de ese turno inflige 1d4 de daño adicional.",
  trigger: "Moverse bajo cielo abierto o atacar usando cobertura"
};

export const HILLS_AND_FIELDS_DATA: Monster[] = [
  {
    id: "hill-field-blood-crow-minion",
    name: "Cuervo Sanguinario de los Campos",
    englishName: "Crop Blood Crow",
    level: "1/2",
    levelValue: 0.5,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "2 casillas (Vuelo 8 casillas)",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Minion,
    group: "Colinas y Campos",
    groupDescription: "Criaturas salvajes, depredadores hambrientos y guardianes de las llanuras que acechan en los pastizales.",
    groupTrait: HILLS_AND_FIELDS_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural en el dado."
      },
      {
        name: "Caza Distractiva",
        description: "Mientras este cuervo esté adyacente a un enemigo, los aliados del cuervo obtienen ventaja en tiradas de ataque contra ese enemigo."
      }
    ],
    attacks: [
      {
        name: "Picotazo al Ojo",
        description: "Ataque rápido de vuelo directo apuntando a las partes blandas.",
        damageDice: "1d4"
      }
    ]
  },
  {
    id: "hill-field-bulette-pup",
    name: "Cría de Bulette de las Praderas",
    englishName: "Prairie Bulette Pup",
    level: "1",
    levelValue: 1.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 26,
    hpMax: 26,
    speed: "5 casillas (Excavar 4 casillas)",
    armor: ArmorType.Medium,
    challengeRating: "1/2",
    type: MonsterType.Normal,
    group: "Colinas y Campos",
    groupDescription: "Criaturas salvajes, depredadores hambrientos y guardianes de las llanuras que acechan en los pastizales.",
    groupTrait: HILLS_AND_FIELDS_GROUP_TRAIT,
    abilities: [
      {
        name: "Erupciones de Tierra",
        description: "Cuando la cría de Bulette emerge de excavar, todos los enemigos adyacentes a la casilla por la que sale deben superar una tirada de salvación de Fuerza o quedar tumbados."
      }
    ],
    attacks: [
      {
        name: "Zarpazo Terrestre",
        description: "Golpe pesado con sus garras delanteras blindadas.",
        damageDice: "1d8+2"
      }
    ]
  },
  {
    id: "hill-field-scarecrow-stalker",
    name: "Acechador de Paja de Algodón",
    englishName: "Cotton Scarecrow Stalker",
    level: "2",
    levelValue: 2.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 36,
    hpMax: 36,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1",
    type: MonsterType.Normal,
    group: "Colinas y Campos",
    groupDescription: "Criaturas salvajes, depredadores hambrientos y guardianes de las llanuras que acechan en los pastizales.",
    groupTrait: HILLS_AND_FIELDS_GROUP_TRAIT,
    abilities: [
      {
        name: "Mirada Aterradora",
        description: "Cualquier criatura viva que inicie su turno a 3 casillas o menos del espantapájaros debe superar un chequeo mental o sufrir desventaja en sus tiradas de ataque debido al terror psicológico."
      }
    ],
    attacks: [
      {
        name: "Garras de Guadaña",
        description: "Cuchillas oxidadas atadas a sus dedos de madera que cortan la carne.",
        damageDice: "2d4+2"
      }
    ]
  },
  {
    id: "hill-field-ankheg-reaper",
    name: "Ankheg Segador de Cosechas",
    englishName: "Ankheg Crop Reaper",
    level: "3",
    levelValue: 3.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 52,
    hpMax: 52,
    speed: "6 casillas (Excavar 3 casillas)",
    armor: ArmorType.Heavy,
    challengeRating: "2",
    type: MonsterType.Leader,
    group: "Colinas y Campos",
    groupDescription: "Criaturas salvajes, depredadores hambrientos y guardianes de las llanuras que acechan en los pastizales.",
    groupTrait: HILLS_AND_FIELDS_GROUP_TRAIT,
    abilities: [
      {
        name: "Mandíbulas de Presión",
        description: "Si el Ankheg acierta su ataque de mordisco, atrapa al objetivo. El objetivo queda agarrado (Velocidad 0) y sufre 4 de daño ácido al inicio de cada uno de sus turnos hasta que escape."
      }
    ],
    attacks: [
      {
        name: "Mordisco Corrosivo Presor",
        description: "Pinzas afiladas cargadas de jugos altamente corrosivos que trituran metal y huesos.",
        damageDice: "2d6+3"
      },
      {
        name: "Chorro de Ácido Lineal",
        description: "Escupe un chorro de ácido hirviente en una línea de 5 casillas (Recarga 5-6). Daño de 3d6 ácido a todos en el área, o mitad si superan un chequeo de Destreza.",
        damageDice: "3d6"
      }
    ]
  }
];

export const HILLS_AND_FIELDS_LOOT = [
  "Espiga de trigo de oro macizo que nunca se marchita",
  "Frasco de veneno recolectado de las glándulas de un Ankheg",
  "Guadaña de mano oxidada pero extrañamente ligera y letal",
  "Plumas de cuervo negro que brillan como amatistas bajo el sol",
  "Placa quitinosa de Bulette excelente para reforzar armaduras",
  "Semilla de calabaza gigante maldita que susurra por las noches"
];

export const HILLS_AND_FIELDS_SAMPLE_ENCOUNTERS = [
  {
    name: "Emboscada en el Trigal",
    monsters: [
      { id: "hill-field-ankheg-reaper", count: 1 },
      { id: "hill-field-scarecrow-stalker", count: 2 },
      { id: "hill-field-blood-crow-minion", count: 4 }
    ],
    description: "Un grupo de campesino fantásticos y acechadores emergen silenciosamente de las espigas de un trigal maldito dirigidos por un enorme Ankheg."
  },
  {
    name: "La Guarida Excavadora",
    monsters: [
      { id: "hill-field-bulette-pup", count: 2 },
      { id: "hill-field-ankheg-reaper", count: 1 }
    ],
    description: "Bajo la tierra de las colinas áridas, crías de bulettes y un ankheg cazan en perfecta y letal simbiosis."
  }
];

// ==========================================
// 12. DRAGONES Y DRACOS (DRAGONS & DRAKES)
// ==========================================

export const DRAGON_GROUP_TRAIT = {
  name: "Presencia Abrasadora",
  description: "Las criaturas dracónicas exudan un aura de pánico y calor elemental. Cualquier enemigo que comience su turno a 1 casilla de una criatura dracónica activa sufre de inmediato 1d6 de daño elemental (Fuego, Frío o Eléctrico) y no puede realizar reacciones en este turno (CD de salvación física/mental 12).",
  trigger: "Iniciar el turno adyacente a una criatura dracónica"
};

export const DRAGONS_DATA: Monster[] = [
  {
    id: "dragon-ash-drake-minion",
    name: "Cría de Draco de las Cenizas",
    englishName: "Ash Drake Wyrmling",
    level: "1",
    levelValue: 1.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "3 casillas (Vuelo 6 casillas)",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Minion,
    group: "Dragones y Dracos",
    groupDescription: "Señores del cielo y las profundidades primigenias. Desde crueles dracos menores hasta titanes de escamas impenetrables que dominan la magia elemental.",
    groupTrait: DRAGON_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural en el dado."
      },
      {
        name: "Hambre Ígnea",
        description: "Si un enemigo adyacente cae inconsciente o muere, el Draco obtiene un ataque de picotazo inmediato de forma gratuita."
      }
    ],
    attacks: [
      {
        name: "Picotazo Caliente",
        description: "Dentellada rápida cargada con chispas de azufre.",
        damageDice: "4 fuego"
      }
    ]
  },
  {
    id: "dragon-frost-drake",
    name: "Draco de Escarcha de los Riscos",
    englishName: "Crag Frost Drake",
    level: "3",
    levelValue: 3.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 38,
    hpMax: 38,
    speed: "5 casillas (Escalar 4 casillas)",
    armor: ArmorType.Medium,
    challengeRating: "1",
    type: MonsterType.Normal,
    group: "Dragones y Dracos",
    groupDescription: "Señores del cielo y las profundidades primigenias. Desde crueles dracos menores hasta titanes de escamas impenetrables que dominan la magia elemental.",
    groupTrait: DRAGON_GROUP_TRAIT,
    abilities: [
      {
        name: "Escamas de Glaciar",
        description: "Cuando el draco es golpeado por un ataque cuerpo a cuerpo, el atacante sufre 1d4 de daño de frío debido al aura gélida que brota de sus escamas congeladas."
      }
    ],
    attacks: [
      {
        name: "Mordisco de Hielo Seco",
        description: "Mordedura pesada que petrifica los tejidos con frío extremo.",
        damageDice: "1d10+3"
      },
      {
        name: "Coletazo Congelante",
        description: "Látigo veloz con su cola acorazada. Reduce la velocidad del objetivo en 2 casillas en su próximo turno.",
        damageDice: "1d6+2"
      }
    ]
  },
  {
    id: "dragon-young-storm-tempest",
    name: "Tempestad Dracónica Juvenil",
    englishName: "Young Storm Wyrm",
    level: "5",
    levelValue: 5.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 82,
    hpMax: 82,
    speed: "6 casillas (Vuelo 10 casillas)",
    armor: ArmorType.Medium,
    challengeRating: "4",
    type: MonsterType.Elite,
    group: "Dragones y Dracos",
    groupDescription: "Señores del cielo y las profundidades primigenias. Desde crueles dracos menores hasta titanes de escamas impenetrables que dominan la magia elemental.",
    groupTrait: DRAGON_GROUP_TRAIT,
    abilities: [
      {
        name: "Carga Voltaica",
        description: "Cuando recibe daño eléctrico o al inicio de su turno, puede cargarse de corriente de forma inestable. En su siguiente ataque que impacte, inflige 2d6 de daño eléctrico adicional a un enemigo adyacente secundario."
      },
      {
        name: "Resistencia Legendaria (1/día)",
        description: "Si la Tempestad falla una tirada de salvación, puede elegir tener éxito en su lugar."
      }
    ],
    attacks: [
      {
        name: "Zarpazo Relámpago",
        description: "Garras envueltas en arcos de estática de alto voltaje.",
        damageDice: "2d6+4"
      },
      {
        name: "Aliento de Centellas",
        description: "Exhala una línea eléctrica de 8 casillas (Recarga 5-6). Daño de 4d6 eléctrico a todos en la trayectoria, o mitad de daño con un salvamento exitoso de Destreza.",
        damageDice: "4d6"
      }
    ]
  },
  {
    id: "dragon-sulfur-flame",
    name: "Dragón de Flama Sulfúrica",
    englishName: "Sulfur Flame Dragon",
    level: "8",
    levelValue: 8.0,
    size: "Enorme",
    sizeEnglish: "Huge",
    hp: 135,
    hpMax: 135,
    speed: "6 casillas (Vuelo 12 casillas)",
    armor: ArmorType.Heavy,
    challengeRating: "7",
    type: MonsterType.Leader,
    group: "Dragones y Dracos",
    groupDescription: "Señores del cielo y las profundidades primigenias. Desde crueles dracos menores hasta titanes de escamas impenetrables que dominan la magia elemental.",
    groupTrait: DRAGON_GROUP_TRAIT,
    abilities: [
      {
        name: "Escudo de Lava",
        description: "Cuando los puntos de golpe del dragón descienden por debajo de la mitad por primera vez (67 HP), emite una onda térmica expansiva. Todos los enemigos dentro de un radio de 2 casillas sufren 3d6 de daño de fuego instantáneo."
      },
      {
        name: "Resistencia Legendaria (2/día)",
        description: "Si falla una tirada de salvación, elige tener éxito de todas formas."
      }
    ],
    attacks: [
      {
        name: "Mordisco Devastador",
        description: "Tritura al objetivo entre fauces de fuego infernal.",
        damageDice: "2d10+5"
      },
      {
        name: "Garra Afilada Doble",
        description: "Ataque rápido y de amplio barrido con garras que puede herir a dos criaturas adyacentes a la vez.",
        damageDice: "2d6+4"
      },
      {
        name: "Aliento del Volcán",
        description: "Exhala una ráfaga de fuego en un cono de 6 casillas (Recarga 5-6). Daño de 6d6 de fuego a todos en el área, o mitad de daño con un salvamento con éxito de Destreza.",
        damageDice: "6d6"
      }
    ]
  }
];

export const DRAGON_LOOT = [
  "Escama de dragón rojo perfectamente conservada e inmune al fuego extremo",
  "Dije de jade tallado con la efigie de un dragón dorado de la antigüedad",
  "Corazón de drakeling palpitante que emite calor radiante constante",
  "Zafiro de tormenta cargado de arcos eléctricos estáticos latentes",
  "Colmillo de dragón esculpido a mano como una daga rústica (+1 daño elemental)",
  "Pergamino con antiguas runas escritas en el lenguaje dracónico puro de MCDM"
];

export const DRAGON_SAMPLE_ENCOUNTERS = [
  {
    name: "La Cerca de la Flama Silenciosa",
    monsters: [
      { id: "dragon-sulfur-flame", count: 1 },
      { id: "dragon-ash-drake-minion", count: 4 }
    ],
    description: "Un imponente Dragón de Flama Sulfúrica despierta apoyado por sus fieles crías de dracos que vuelan en círculos cerrando el escape de los héroes."
  },
  {
    name: "La Grieta de la Tempestad Gélida",
    monsters: [
      { id: "dragon-young-storm-tempest", count: 1 },
      { id: "dragon-frost-drake", count: 2 }
    ],
    description: "Una tormenta violenta ruge en el paso de montaña cuando una Tempestad Dracónica Juvenil desciende de las nubes escoltada por dos letales dracos de escarcha."
  }
];

// ==========================================
// 13. ARAÑAS Y ARÁCNIDOS (SPIDERS & ARACHNIDS)
// ==========================================

export const SPIDERS_GROUP_TRAIT = {
  name: "Red de Emboscada",
  description: "Las arañas ignoran las penalizaciones de terreno difícil causadas por telarañas y trepan superficies sin necesidad de chequeos. Sus ataques cuerpo a cuerpo contra enemigos que estén atrapados, agarrados o tumbados infligen 1d6 de daño por veneno adicional.",
  trigger: "Atacar a un objetivo con movilidad reducida (atrapado, agarrado o tumbado)"
};

export const SPIDERS_DATA: Monster[] = [
  {
    id: "spider-web-crawler-minion",
    name: "Tejedor de Sombras Minion",
    englishName: "Shadow Weaver Minion",
    level: "2",
    levelValue: 2.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "4 casillas (Trepar 4 casillas)",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Minion,
    group: "Arañas y Arácnidos",
    groupDescription: "Tejedores de sombras y venenosos cazadores de ocho patas que acechan en las cavernas y bosques oscuros.",
    groupTrait: SPIDERS_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural."
      },
      {
        name: "Mordedura Sincronizada",
        description: "Si más de dos arañas minion están adyacentes al mismo objetivo, todos sus ataques obtienen ventaja."
      }
    ],
    attacks: [
      {
        name: "Mordisco de Colmillo Fino",
        description: "Picadura rápida que inyecta toxinas leves.",
        damageDice: "3 veneno"
      }
    ]
  },
  {
    id: "spider-giant-harrier",
    name: "Araña Acosadora Gigante",
    englishName: "Giant Harrier Spider",
    level: "4",
    levelValue: 4.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 48,
    hpMax: 48,
    speed: "6 casillas (Trepar 6 casillas)",
    armor: ArmorType.Medium,
    challengeRating: "1",
    type: MonsterType.Normal,
    group: "Arañas y Arácnidos",
    groupDescription: "Tejedores de sombras y venenosos cazadores de ocho patas que acechan en las cavernas y bosques oscuros.",
    groupTrait: SPIDERS_GROUP_TRAIT,
    abilities: [
      {
        name: "Tejedora de Trampas",
        description: "Puede esparcir una zona de telaraña de 2x2 casillas como una acción de reubicación. El terreno se vuelve difícil para criaturas sin el rasgo del grupo Arañas."
      }
    ],
    attacks: [
      {
        name: "Mordedura Venenosa",
        description: "Entierra sus enormes quelíceros e inyecta un veneno paralizante.",
        damageDice: "2d6+3"
      },
      {
        name: "Disparo de Red Seda",
        description: "Lanza una red de seda viscosa a un objetivo hasta a 6 casillas de distancia. Si impacta, el objetivo queda atrapado (Velocidad 0) hasta que supere un chequeo de Fuerza.",
        damageDice: "Especial"
      }
    ]
  },
  {
    id: "spider-broodmother-leader",
    name: "Gran Araña Viuda de la Camada",
    englishName: "Great Broodmother Widow",
    level: "6",
    levelValue: 6.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 92,
    hpMax: 92,
    speed: "6 casillas (Trepar 6 casillas)",
    armor: ArmorType.Heavy,
    challengeRating: "4",
    type: MonsterType.Leader,
    group: "Arañas y Arácnidos",
    groupDescription: "Tejedores de sombras y venenosos cazadores de ocho patas que acechan en las cavernas y bosques oscuros.",
    groupTrait: SPIDERS_GROUP_TRAIT,
    abilities: [
      {
        name: "Nido Viviente",
        description: "Cada vez que la Viuda de la Camada recibe daño por primera vez en un turno, emergen de inmediato 2 Tejedores de Sombras Minions en casillas adyacentes vacías."
      },
      {
        name: "Aura de Veneno Volátil",
        description: "Los enemigos a 2 casillas o menos de la Viuda sufren desventaja en sus tiradas de salvación contra venenos o estados de atrapado."
      }
    ],
    attacks: [
      {
        name: "Mordisco Necrotizador Presor",
        description: "Mordedura letal que pudre la carne y el equipamiento humano.",
        damageDice: "2d8+4"
      },
      {
        name: "Lluvia de Telaraña Hirviente",
        description: "Ataque de cono de 5 casillas (Recarga 5-6) que baña a los héroes en hilos cáusticos pegajosos. Hace 4d6 de veneno y los atrapa en el área a menos que pasen un chequeo de Destreza.",
        damageDice: "4d6"
      }
    ]
  }
];

export const SPIDERS_LOOT = [
  "Glándula de seda refinada que permite restaurar arcos o tejer mantos ligeros",
  "Anillo de colmillo de araña chapado en bronce que añade veneno leve a las armas",
  "Veneno concentrado de Viuda Negra lo suficientemente denso para fundir plata",
  "Fragmento de capullo de seda lunar con propiedades regenerativas para heridas",
  "Huevo de araña gigante que tiembla de hambre térmica",
  "Ocarina de seda petrificada que atrae a pequeños arácnidos de las sombras"
];

export const SPIDERS_SAMPLE_ENCOUNTERS = [
  {
    name: "La Fosa de la Viuda de la Camada",
    monsters: [
      { id: "spider-broodmother-leader", count: 1 },
      { id: "spider-giant-harrier", count: 2 },
      { id: "spider-web-crawler-minion", count: 4 }
    ],
    description: "Una enorme masa de telarañas oscurece el fondo de la fosa cavernosa, donde una letal Viuda de la Camada acecha con su descendencia hambrienta."
  }
];

// ==========================================
// 14. TROLLS Y REGENERADORES (TROLLS & REGENERATORS)
// ==========================================

export const TROLLS_GROUP_TRAIT = {
  name: "Furia de Regeneración",
  description: "Estas feroces criaturas recuperan 2d6 puntos de golpe al inicio de cada uno de sus turnos si les queda al menos 1 punto de golpe. Si reciben daño de fuego o ácido, este factor de curación se desactiva por completo hasta el inicio de su siguiente turno.",
  trigger: "Iniciar el turno con vida y no haber tomado daño de fuego o ácido en la ronda anterior."
};

export const TROLLS_DATA: Monster[] = [
  {
    id: "troll-scrawler-minion",
    name: "Troll de Sanguijuela Minion",
    englishName: "Leech Troll Minion",
    level: "2",
    levelValue: 2.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "5 casillas",
    armor: ArmorType.None,
    challengeRating: "1/2",
    type: MonsterType.Minion,
    group: "Trolls y Regeneradores",
    groupDescription: "Bestias voraces y gigantescas con una capacidad de curación biológica absurdamente acelerada y garras implacables.",
    groupTrait: TROLLS_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural."
      },
      {
        name: "Tenacidad Troll",
        description: "La primera vez que este minion va a ser derrotado por un ataque que no inflija daño de fuego o ácido, hace una tirada de salvación de Fortaleza fácil (CD 10); si pasa, sobrevive con 1 punto de salud."
      }
    ],
    attacks: [
      {
        name: "Arañazo Sucio",
        description: "Garras mugrientas que infectan heridas de los héroes.",
        damageDice: "4 físico"
      }
    ]
  },
  {
    id: "troll-cave-hunter",
    name: "Troll Sangre-Corrupta de Cueva",
    englishName: "Cave Corrupted Troll",
    level: "5",
    levelValue: 5.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 84,
    hpMax: 84,
    speed: "6 casillas",
    armor: ArmorType.Medium,
    challengeRating: "3",
    type: MonsterType.Normal,
    group: "Trolls y Regeneradores",
    groupDescription: "Bestias voraces y gigantescas con una capacidad de curación biológica absurdamente acelerada y garras implacables.",
    groupTrait: TROLLS_GROUP_TRAIT,
    abilities: [
      {
        name: "Furia Desarrollada",
        description: "Cuando los puntos de golpe del Troll descienden de la mitad de su HP máximo, sus ataques obtienen un dado adicional de daño físico (+1d6) y su velocidad de movimiento aumenta en +1 casilla."
      }
    ],
    attacks: [
      {
        name: "Doble Garra Descalzante",
        description: "Dos golpes feroces consecutivos con zarpas con garras.",
        damageDice: "2d6+4"
      },
      {
        name: "Mordisco de Fauces Gigantes",
        description: "Intenta triturar la armadura del oponente de un solo mordisco.",
        damageDice: "1d12+4"
      }
    ]
  },
  {
    id: "troll-swamp-warlord",
    name: "Rey Troll de los Pantanos",
    englishName: "Swamp Troll Warlord",
    level: "7",
    levelValue: 7.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 118,
    hpMax: 118,
    speed: "6 casillas (Nadar 4 casillas)",
    armor: ArmorType.Heavy,
    challengeRating: "5",
    type: MonsterType.Leader,
    group: "Trolls y Regeneradores",
    groupDescription: "Bestias voraces y gigantescas con una capacidad de curación biológica absurdamente acelerada y garras implacables.",
    groupTrait: TROLLS_GROUP_TRAIT,
    abilities: [
      {
        name: "Hedor de Putrefacción",
        description: "Todo enemigo vivo que inicie su turno adyacente al Rey Troll queda envenenado (desventaja en ataques) hasta el final de su turno debido a las esporas fétidas de su piel de lodo."
      },
      {
        name: "Regeneración Legendaria (1/día)",
        description: "Si es afectado por un efecto de control de masas pesado o aturdimiento, puede gastar esta resistencia para curarse y romper el efecto mágicamente al inicio de su turno."
      }
    ],
    attacks: [
      {
        name: "Maza Rústica de Madera Petrificada",
        description: "Golpe demoledor con una enorme porra improvisada.",
        damageDice: "2d10+5"
      },
      {
        name: "Desmembrar",
        description: "Sujeta fuertemente a un objetivo con sus garras e intenta despedazarlo (Requiere agarrar primero).",
        damageDice: "3d8+5"
      }
    ]
  }
];

export const TROLLS_LOOT = [
  "Glándula de sangre verde palpitante con un factor de curación increíble",
  "Collar hecho con orejas secas amputadas de un troll de los riscos",
  "Uña gigante afilada como daga que causa heridas que siguen sangrando",
  "Piel de troll musgosa perfecta para fabricar botas de pantano",
  "Gema ácida incrustada que vibra cuando entra en contacto con fuego cercano",
  "Maza rústica de madera petrificada que pesa como piedra de montaña"
];

export const TROLLS_SAMPLE_ENCOUNTERS = [
  {
    name: "La Guarida del Rey del Pantano",
    monsters: [
      { id: "troll-swamp-warlord", count: 1 },
      { id: "troll-cave-hunter", count: 1 },
      { id: "troll-scrawler-minion", count: 4 }
    ],
    description: "En el espeso fango de los pantanos de lodo, un Rey Troll dirige a su horda en una cacería de aventureros confiados en su inmortalidad."
  }
];

// ==========================================
// 15. GIGANTES ELEMENTALES (ELEMENTAL GIANTS)
// ==========================================

export const GIANTS_GROUP_TRAIT = {
  name: "Golpe de Falla Tectónica",
  description: "Debido a su colosal impacto elemental, cuando un gigante asesta un golpe crítico o reduce a un enemigo a menos de la mitad de su vida, provoca un temblor de 2 casillas de radio que derriba a todos los enemigos terrestres y les causa 1d8 de daño por fuerza.",
  trigger: "Impactar un golpe crítico o infligir daño masivo que baje al oponente de la mitad de su vida."
};

export const GIANTS_DATA: Monster[] = [
  {
    id: "giant-stone-scout-minion",
    name: "Explorador de los Gigantes de Piedra Minion",
    englishName: "Stone Giant Scout Minion",
    level: "4",
    levelValue: 4.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "6 casillas",
    armor: ArmorType.Medium,
    challengeRating: "1",
    type: MonsterType.Minion,
    group: "Gigantes Elementales",
    groupDescription: "Antiquísimos titanes vinculados a las fuerzas puras del universo: tierra viva, fuego eterno y nubes de tormenta destructiva.",
    groupTrait: GIANTS_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural."
      },
      {
        name: "Piel de Granito",
        description: "Los minions de gigante de piedra son inmunes a los daños colaterales menores de área o ráfagas de viento."
      }
    ],
    attacks: [
      {
        name: "Lanzamiento de Pedrusco Ciclópeo",
        description: "Arroja un pedazo de roca tallada a gran distancia.",
        damageDice: "6 físico"
      }
    ]
  },
  {
    id: "giant-fire-forgekeeper",
    name: "Gigante de Fuego Guardián de Forja",
    englishName: "Fire Giant Forgekeeper",
    level: "7",
    levelValue: 7.0,
    size: "Grande",
    sizeEnglish: "Large",
    hp: 125,
    hpMax: 125,
    speed: "5 casillas",
    armor: ArmorType.Heavy,
    challengeRating: "5",
    type: MonsterType.Elite,
    group: "Gigantes Elementales",
    groupDescription: "Antiquísimos titanes vinculados a las fuerzas puras del universo: tierra viva, fuego eterno y nubes de tormenta destructiva.",
    groupTrait: GIANTS_GROUP_TRAIT,
    abilities: [
      {
        name: "Forja Viviente",
        description: "Al inicio de cada turno, el gigante irradia calor abrasador. Los enemigos a 1 casilla reciben 2d6 de daño por fuego de forma automática."
      },
      {
        name: "Armamento Calcinante",
        description: "La gran maza del gigante arde de forma permanente. Sus ataques de fuego ignoran la resistencia a la quemadura común."
      }
    ],
    attacks: [
      {
        name: "Gran Maza de Latón Fundido",
        description: "Golpe demoledor que baña el suelo con chispas de latón en llamas.",
        damageDice: "3d8+5"
      },
      {
        name: "Pisotón de Yunque de Fuego",
        description: "Saca el pie descalzo golpeando el suelo en un cono de 3 casillas. Enemigos en el área quedan tumbados y sufren daño físico por las ondas de calor.",
        damageDice: "2d6+4"
      }
    ]
  },
  {
    id: "giant-cloud-tyrant",
    name: "Monarca de los Gigantes de las Nubes",
    englishName: "Cloud Giant Monarch",
    level: "9",
    levelValue: 9.0,
    size: "Enorme",
    sizeEnglish: "Huge",
    hp: 165,
    hpMax: 165,
    speed: "7 casillas (Vuelo 9 casillas)",
    armor: ArmorType.Heavy,
    challengeRating: "8",
    type: MonsterType.Leader,
    group: "Gigantes Elementales",
    groupDescription: "Antiquísimos titanes vinculados a las fuerzas puras del universo: tierra viva, fuego eterno y nubes de tormenta destructiva.",
    groupTrait: GIANTS_GROUP_TRAIT,
    abilities: [
      {
        name: "Manto de Viento Divino",
        description: "El gigante está protegido por corrientes de alta presión. Todos los proyectiles a distancia que se lancen contra él tienen desventaja para golpearlo."
      },
      {
        name: "Resistencia Legendaria de Titán (2/día)",
        description: "Si el Monarca falla un chequeo de salvación de aturdimiento físico o mental, puede elegir tener éxito en su lugar."
      }
    ],
    attacks: [
      {
        name: "Espadón de Escarcha Ciclónica",
        description: "Corte de barrido colosal con una espada gigantesca hecha de hielo puro de las nubes.",
        damageDice: "4d10+6"
      },
      {
        name: "Llamado de Rayos Celestes",
        description: "Invoca 3 relámpagos del cielo en diferentes casillas dentro de 12 casillas (Recarga 5-6). Cada relámpago causa 5d6 de daño de trueno.",
        damageDice: "5d6"
      }
    ]
  }
];

export const GIANTS_LOOT = [
  "Espadón de escarcha de un gigante de las nubes reducido de tamaño mágicamente",
  "Fragmento de carbón eterno ardiente que arde bajo el agua de la montaña",
  "Runas talladas en basalto que conceden poder sobre el magnetismo metálico",
  "Cinto de cuero de Mammut curtido con refuerzos de latón antiguo de las forjas",
  "Ojo de granito que permite ver la composición de los minerales bajo tierra",
  "Corona de platino y nubes flotantes que nunca acumula aire caliente"
];

export const GIANTS_SAMPLE_ENCOUNTERS = [
  {
    name: "Emboscada del Bastión del Fuego y Piedra",
    monsters: [
      { id: "giant-cloud-tyrant", count: 1 },
      { id: "giant-fire-forgekeeper", count: 1 },
      { id: "giant-stone-scout-minion", count: 3 }
    ],
    description: "Una alianza profana entre los monarcas de la nube y los guardianes del fuego causa temblores tectónicos mortales a lo largo de las tierras libres."
  }
];

// ==========================================
// 16. DEMONIOS (DEMONS)
// ==========================================

export const DEMONS_GROUP_TRAIT = {
  name: "Esencia Seductora",
  description: "Los demonios manipulan los corazones y mentes de los mortales. Al inicio del turno de la criatura, cualquier héroe adyacente debe superar un chequeo mental (CD 12) o sufrir desventaja en sus tiradas de ataque contra cualquier objetivo que no sea este demonio durante este turno.",
  trigger: "Iniciar el turno adyacente a un aliado demoníaco"
};

export const DEMONS_DATA: Monster[] = [
  {
    id: "demon-imp-minion",
    name: "Duendecillo Imp del Fuego Minion",
    englishName: "Fire Imp Minion",
    level: "3",
    levelValue: 3.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "5 casillas (Vuelo 6 casillas)",
    armor: ArmorType.None,
    challengeRating: "1/2",
    type: MonsterType.Minion,
    group: "Demonios",
    groupDescription: "Habitantes de los planos de fuego y engaño, maestros en tentar a los mortales y consumir sus almas.",
    groupTrait: DEMONS_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 natural."
      },
      {
        name: "Inspiración Diabólica",
        description: "Mientras esté vivo, concede +1 de bonificación a las tiradas de ataque de los aliados demoníacos adyacentes a sus enemigos."
      }
    ],
    attacks: [
      {
        name: "Mordidita Ardiente",
        description: "Un pequeño y punzante mordisco con dientes de obsidiana ardiente.",
        damageDice: "4 fuego"
      }
    ]
  },
  {
    id: "demon-succubus-temptress",
    name: "Súcubo Tentadora del Abismo",
    englishName: "Abyssal Succubus Temptress",
    level: "4",
    levelValue: 4.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 44,
    hpMax: 44,
    speed: "6 casillas (Vuelo 6 casillas)",
    armor: ArmorType.None,
    challengeRating: "2",
    type: MonsterType.Normal,
    group: "Demonios",
    groupDescription: "Habitantes de los planos de fuego y engaño, maestros en tentar a los mortales y consumir sus almas.",
    groupTrait: DEMONS_GROUP_TRAIT,
    abilities: [
      {
        name: "Seducción Psíquica",
        description: "Si un héroe inicia su turno bajo el efecto de la Esencia Seductora del Súcubo, recibe de inmediato 2d4 de daño psíquico debido a ilusiones abrumadoras de deseo."
      }
    ],
    attacks: [
      {
        name: "Beso del Alma",
        description: "Succiona la energía vital y mental con un beso sutil y altamente letal.",
        damageDice: "2d6+4 psíquico"
      },
      {
        name: "Látigo de Sombras Candentes",
        description: "Látigo vaporoso de oscuridad que quema tanto la carne como los pensamientos del rival.",
        damageDice: "1d8+3 fuego"
      }
    ]
  },
  {
    id: "demon-incubus-torment",
    name: "Íncubo del Tormento Mental",
    englishName: "Mind Torment Incubus",
    level: "5",
    levelValue: 5.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 76,
    hpMax: 76,
    speed: "6 casillas (Vuelo 6 casillas)",
    armor: ArmorType.Medium,
    challengeRating: "4",
    type: MonsterType.Elite,
    group: "Demonios",
    groupDescription: "Habitantes de los planos de fuego y engaño, maestros en tentar a los mortales y consumir sus almas.",
    groupTrait: DEMONS_GROUP_TRAIT,
    abilities: [
      {
        name: "Mirada Hipnótica",
        description: "Al final de su movimiento, el Íncubo puede obligar a un enemigo adyacente a realizar una tirada de salvación mental CD 13. Si falla, el objetivo debe gastar su siguiente reacción inmediatamente para interponerse y defender al Íncubo si es atacado."
      }
    ],
    attacks: [
      {
        name: "Garra Profana Pesada",
        description: "Golpe con garras afiladas imbuidas de ponzoña sombría y fuego elemental.",
        damageDice: "2d8+4"
      },
      {
        name: "Susurro Desgarrador",
        description: "Lanza una palabra corrupta de tormento que causa estragos en los centros nerviosos del oponente (Rango 5).",
        damageDice: "3d6 psíquico"
      }
    ]
  }
];

export const DEMONS_LOOT = [
  "Corazón de súcubo preservado que todavía emite calor y un sutil perfume a canela",
  "Látigo de cuero negro espinado con runas abisales que canalizan calor elemental",
  "Cáliz de obsidiana grabado con los nombres de doce señores del infierno",
  "Fragmento de cuerno de íncubo sumamente afilado apto para engarzar en dagas de ataque psíquico",
  "Pergamino con un pacto de sangre en blanco que otorga favores prohibidos una vez firmado",
  "Piedra de alma resplandeciente que contiene fragmentos de aliento de azufre"
];

export const DEMONS_SAMPLE_ENCOUNTERS = [
  {
    name: "La Corte de los Susurros Ardientes",
    monsters: [
      { id: "demon-succubus-temptress", count: 1 },
      { id: "demon-incubus-torment", count: 1 },
      { id: "demon-imp-minion", count: 4 }
    ],
    description: "En las profundidades de un palacio en ruinas envuelto en bruma escarlata, una súcubo y un íncubo conspiran rodeados por imps ruidosos para corromper las almas del grupo."
  }
];

// ==========================================
// 17. ABERRACIONES (ABERRATIONS)
// ==========================================

export const ABERRATIONS_GROUP_TRAIT = {
  name: "Fractura de la Psique",
  description: "Las aberraciones operan en una frecuencia mental incomprensible de disonancia psiónica. Cuando logran infligir daño psíquico exitoso a un enemigo, reducen de forma temporal el valor del chequeo mental del objetivo en -2 hasta el final de la ronda de combate.",
  trigger: "Infligir daño psíquico directo a un enemigo"
};

export const ABERRATIONS_DATA: Monster[] = [
  {
    id: "aberration-brain-parasite-minion",
    name: "Cerebro Parásito Minion",
    englishName: "Brain Larva Parasite Minion",
    level: "2",
    levelValue: 2.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: "Regla de Minion (1 golpe)",
    hpMax: 1,
    speed: "5 casillas",
    armor: ArmorType.None,
    challengeRating: "1/4",
    type: MonsterType.Minion,
    group: "Aberraciones",
    groupDescription: "Criaturas de pesadilla nacidas del vacío psiónico, capaces de consumir la mente y tomar el control de sus víctimas.",
    groupTrait: ABERRATIONS_GROUP_TRAIT,
    abilities: [
      {
        name: "Sin Puntos de Golpe",
        description: "Cualquier daño mata a un minion. Sus ataques no pueden asestar golpes críticos y fallan automáticamente con un 1 de forma natural."
      },
      {
        name: "Sobrecarga Sináptica",
        description: "Cuando un cerebro parásito muere, provoca un doloroso zumbido psíquico. Todos los enemigos adyacentes sufren 2 de daño psíquico inmediato de forma automática."
      }
    ],
    attacks: [
      {
        name: "Picadura Neuronal",
        description: "Una descarga rápida de impulsos eléctricos negativos directo a los nervios.",
        damageDice: "3 psíquico"
      }
    ]
  },
  {
    id: "aberration-intellect-devourer",
    name: "Devorador de Intelecto Acechador",
    englishName: "Stalking Intellect Devourer",
    level: "3",
    levelValue: 3.0,
    size: "Pequeño",
    sizeEnglish: "Small",
    hp: 36,
    hpMax: 36,
    speed: "6 casillas",
    armor: ArmorType.None,
    challengeRating: "1",
    type: MonsterType.Normal,
    group: "Aberraciones",
    groupDescription: "Criaturas de pesadilla nacidas del vacío psiónico, capaces de consumir la mente y tomar el control de sus víctimas.",
    groupTrait: ABERRATIONS_GROUP_TRAIT,
    abilities: [
      {
        name: "Infección Craneal (CD 12)",
        description: "Cuando un enemigo queda inconsciente o a 0 puntos de golpe adyacente al devorador de intelecto, este puede deslizarse dentro de su cráneo. El devorador controla el cuerpo del héroe por un turno completo antes de ser expulsado mágicamente o destruido si se reduce al huésped a menos de la mita de su vida."
      }
    ],
    attacks: [
      {
        name: "Punzadura Psiónica Directa",
        description: "Lanza un rayo invisible que golpea dolorosamente el cerebro de la víctima en un cono psíquico.",
        damageDice: "2d6+3 psíquico"
      },
      {
        name: "Garras de Cuatro Patas",
        description: "Zarpazos desesperados con sus patas carnosas con forma de dedos.",
        damageDice: "1d8+2 físico"
      }
    ]
  },
  {
    id: "aberration-sovereign-devourer",
    name: "Soberano Devorador Filomental",
    englishName: "Mind Sovereign Devourer",
    level: "6",
    levelValue: 6.0,
    size: "Mediano",
    sizeEnglish: "Medium",
    hp: 98,
    hpMax: 98,
    speed: "6 casillas",
    armor: ArmorType.Heavy,
    challengeRating: "4",
    type: MonsterType.Leader,
    group: "Aberraciones",
    groupDescription: "Criaturas de pesadilla nacidas del vacío psiónico, capaces de consumir la mente y tomar el control de sus víctimas.",
    groupTrait: ABERRATIONS_GROUP_TRAIT,
    abilities: [
      {
        name: "Controlador Psiónico de Huestes",
        description: "Las aberraciones aliadas adyacentes al Soberano devorador obtienen un bono de +2 a su velocidad de movimiento y +1d4 de daño psíquico adicional en todos sus ataques."
      },
      {
        name: "Resistencia Psiónica Legendaria (1/día)",
        description: "Si el Soberano falla una tirada de salvación mental, puede elegir tener éxito automáticamente de forma psiónica canalizando el vacío."
      }
    ],
    attacks: [
      {
        name: "Ondas Cerebrales Devastadoras",
        description: "Una descarga de fuerza psíquica masiva en un cono de 5 casillas (Recarga 5-6). Causa 4d6 de daño psíquico y deja a los personajes aturdidos por un turno a menos que superen un chequeo mental de CD 13.",
        damageDice: "4d6"
      },
      {
        name: "Garras Desgarradoras de Mente",
        description: "Zarpazos imbuidos con energía devoradora de pensamientos que rasgan la mente.",
        damageDice: "2d8+4 psíquico"
      }
    ]
  }
];

export const ABERRATIONS_LOOT = [
  "Cerebro pulsante encerrado en un frasco de cristal lleno de un líquido nutritivo fosforescente",
  "Diadema metálica de sintonía psiónica que concede resistencia al daño psíquico",
  "Fragmento de caparazón brillante con reflejos violetas y formas geométricas imposibles",
  "Masa gelatinosa que gotea de un devorador y reacciona vivamente a las ondas de pensamiento humanas",
  "Amuleto de tercer ojo hecho de una piedra translúcida que vibra débilmente con frecuencias telepáticas",
  "Punzón de hueso misterioso que emite un zumbido apenas audible que enfoca el intelecto"
];

export const ABERRATIONS_SAMPLE_ENCOUNTERS = [
  {
    name: "La Invasión de las Larvas Psiónicas",
    monsters: [
      { id: "aberration-sovereign-devourer", count: 1 },
      { id: "aberration-intellect-devourer", count: 2 },
      { id: "aberration-brain-parasite-minion", count: 4 }
    ],
    description: "En un sótano húmedo debajo de la biblioteca gremial, el Soberano Devorador dirige una colonia de devoradores en un rito profano para asimilar por completo las mentes del consejo de eruditos."
  }
];

// ==========================================
// MASTER EXPORTS FOR DYNAMIC INTERACTIVE APP
// ==========================================

export const KOBOLDS_DATA_MASTER = KOBOLDS_DATA;

export const MONSTERS_DATA_MASTER: Monster[] = [
  ...KOBOLDS_DATA,
  ...GOBLINS_DATA,
  ...ESQUELETOS_DATA,
  ...ZOMBIS_DATA,
  ...ORCOS_DATA,
  ...CONSTRUCTOS_DATA,
  ...ECOS_DATA,
  ...RELIQUIAS_DATA,
  ...MONSTRUOSIDADES_DATA,
  ...OOZES_DATA,
  ...HILLS_AND_FIELDS_DATA,
  ...DRAGONS_DATA,
  ...SPIDERS_DATA,
  ...TROLLS_DATA,
  ...GIANTS_DATA,
  ...DEMONS_DATA,
  ...ABERRATIONS_DATA
];

export const ALL_SAMPLE_ENCOUNTERS: any[] = [
  ...KOBOLD_SAMPLE_ENCOUNTERS,
  ...GOBLIN_SAMPLE_ENCOUNTERS,
  ...UNDEAD_SAMPLE_ENCOUNTERS,
  ...ORC_SAMPLE_ENCOUNTERS,
  ...LIMBO_SAMPLE_ENCOUNTERS,
  ...HILLS_AND_FIELDS_SAMPLE_ENCOUNTERS,
  ...DRAGON_SAMPLE_ENCOUNTERS,
  ...SPIDERS_SAMPLE_ENCOUNTERS,
  ...TROLLS_SAMPLE_ENCOUNTERS,
  ...GIANTS_SAMPLE_ENCOUNTERS,
  ...DEMONS_SAMPLE_ENCOUNTERS,
  ...ABERRATIONS_SAMPLE_ENCOUNTERS
];

export const MASTER_LOOT_POOL = [
  ...KOBOLD_LOOT,
  ...GOBLIN_LOOT,
  ...ESQUELETO_LOOT,
  ...ZOMBI_LOOT,
  ...ORCO_LOOT,
  ...CONSTRUCTO_LOOT,
  ...ECO_LOOT,
  ...RELIQUIA_LOOT,
  ...MONSTRUOSIDADES_LOOT,
  ...OOZES_LOOT,
  ...HILLS_AND_FIELDS_LOOT,
  ...DRAGON_LOOT,
  ...SPIDERS_LOOT,
  ...TROLLS_LOOT,
  ...GIANTS_LOOT,
  ...DEMONS_LOOT,
  ...ABERRATIONS_LOOT
];
