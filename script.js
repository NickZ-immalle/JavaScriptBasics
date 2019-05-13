function mijnfunctie(){
    document.write("Dit is een documenten written message")
    alert("Dit is een alert !")
    return "Dit is een functie genaamd mijnfunctie !"
  }

function vermenigvuldiging(){
  var a = Math.floor((Math.random() * 10));
  var b = Math.floor((Math.random() * 10));
  alert("Dit is de vermenigvuldiging van 2 random getallen. In dit geval van " + a + " en " + b + " = " + a * b)
}

//variabelen
getallen= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = ["a","b","c","d","e","f","g","h","i","j"];
namen = ["aaaa","bb","ccc","dddd","eeeeeee","f","gg","hhhhhhh","iiii","jjj"];
let mensen = [
  {
    naam: 'Jos',
    leeftijd: 20
  },
  {
    naam: 'Jos',
    leeftijd: 15
  },
  {
    naam: 'Jos',
    leeftijd: 76
  },
  {
    naam: 'Jos',
    leeftijd: 74
  },
  {
    naam: 'Jos',
    leeftijd: 8
  }
]

//reduce functies
function som(){
  var somvan = getallen.reduce((acc, cur) => acc+ cur)
  console.log(somvan)
}

function aozdbzdf(){
  var mkjvmk = namen.reduce((acc, cur) => acc+ cur)
  console.log(mkjvmk)
}

function old(){
  const oldpeople = mensen.reduce((acc, cur) => acc.leeftijd + cur.leeftijd)
  console.log(oldpeople)
}

//filter functies
function filterthosenumbas(){
  gefilterdenumbas = getallen.filter(getal => getal > 5)
  console.log(gedilterdenumbas)
}

function filterthosenames(){
  var filterednames = namen.filter(naam => naam > 3)
  console.log(filterednames)
}

function filterthosepeople(){
  const mensekes = mensen.filter(mens => mens.leeftijd > 3)
  console.log(mensekes)
}

//map functies
function randomcijfers(){
  var dubbelGetallen = getallen.map(item => item * 2);
  console.log(dubbelGetallen);
  }

function hoofdletters(){
  var groteLetters = letters.map(item => item.toUpperCase);
  console.log(groteLetters);
  }

function halfleeftijd(){
  const menskes = mensen.map(jongemens => jongemens.leeftijd / 2);
  console.log(menskes);
  }



