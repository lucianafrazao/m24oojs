// Abstração:
function Coreography(style, song, singer) {
    this.style = style;
    this.song = song;
    this.singer = singer;
}

// Classe herdeira:
function Dancers(style, song, singer, couples) {
    // Chamando atributos da abstração:
    Coreography.call(this, style, song, singer);
    this.couples = couples;
}

// Herança
Dancers.prototype = Object.create(Coreography.prototype);
Dancers.prototype.constructor = Dancers;

function Presentation(style, song, singer, couples, date, theatre) {
    // Chamando atributos da abstração:
    Dancers.call(this, style, song, singer, couples);
    this.date = date;
    this.theatre = theatre;
}

// Herança
Presentation.prototype = Object.create(Dancers.prototype);
Presentation.prototype.constructor = Presentation;

// Classes
const samba = new Dancers("samba", "Casa de Noca", "Maria Rita", "5");
const bolero = new Dancers("bolero", "La barca", "Luis Miguel", "4");
const samba1 = new Presentation("samba", "Casa de Noca", "Maria Rita", "5", "17/12/24", "Teatro Barreto Júnior");

// Print
console.log(samba);
console.log(bolero);
console.log(samba1);
