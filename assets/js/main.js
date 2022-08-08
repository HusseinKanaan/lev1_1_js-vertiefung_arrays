let adresse = ['Angelnstr.13',
    '22419',
    'Hamburg',
    'Hamburg'
];

let besteFreunde = [
    'Engin',
    'Mudi',
    'Joel'
];

let person = ['Hussein',
    'Kanaan',
    'Hussein',
    '27',
    'Tischtennis',
    'Braunschweig',
    'Supercode'
]

/* console.log(`${adresse}
    ${besteFreunde}
    ${person}
`); */

// Aufgabe #'Füge die Arrays adresse und bestefreunde zum Array person hinzu.'#
person.push(adresse, besteFreunde)
console.log(person)

// Aufgabe Gib das Array person in der Konsole aus und versuche auch die jeweiligen Arrays aus der Array person in der Konsole auszugeben.
console.log(person)

console.log(adresse.length, besteFreunde.length, person.length)