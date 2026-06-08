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
  ...RELIQUIAS_DATA
];

export const ALL_SAMPLE_ENCOUNTERS: any[] = [
  ...KOBOLD_SAMPLE_ENCOUNTERS,
  ...GOBLIN_SAMPLE_ENCOUNTERS,
  ...UNDEAD_SAMPLE_ENCOUNTERS,
  ...ORC_SAMPLE_ENCOUNTERS,
  ...LIMBO_SAMPLE_ENCOUNTERS
];

export const MASTER_LOOT_POOL = [
  ...KOBOLD_LOOT,
  ...GOBLIN_LOOT,
  ...ESQUELETO_LOOT,
  ...ZOMBI_LOOT,
  ...ORCO_LOOT,
  ...CONSTRUCTO_LOOT,
  ...ECO_LOOT,
  ...RELIQUIA_LOOT
];
