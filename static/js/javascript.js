// JavaScript   - WPA Flash Card

// When the window load execute the following to start the WPA service work
window.onload = () => {
   'use strict';
   if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
      navigator.serviceWorker.register('./service-worker.js');
      });
  }
 }

 var colorList = [
   "#b3ffb3",
   "#ff6347",
   "#3cb371",
   "#ee82ee",
   "#ffa500",
   "#e8a9a9",
   "#3d516e",
   "#fd5068",
   "#4CAF50",
   "#fd5068",
   "#7547a3",
   "#9370b7",
   "#b299cc",
   "#209cee",
   "#FF6347",
   "#b0ebb5",
   "#00ffea"
];

let phrases = {
   "Hej!":"Hello!",
   "Välkommen!":"Welcome!",
   "Snälla":"Please ",
   "Ja":"Yes",
   "Förlåt":"Sorry",
   "Ursäkta":"Excuse me",
   "Tack!":"Thank you!",
   "Tack så mycket!":"Thanks a lot!"
};

let personalPronouns = {
   "Jag":"I",
   "Du":"You",
   "Hon":"She",
   "Han":"He",
   "Den":"It",
   "Det":"It",
   "Man":"One",
   "Vi":"We",
   "Ni":"You",
   "De":"They"
};

let objectPronouns = {
   "Mig / Mej":"Me",
   "Dig / Dej":"You (Singular)",
   "Henne":"Her",
   "Honom":"Him",
   "Den / Det":"It",
   "Oss":"Us",
   "Er":"You (Plural)",
   "Dem / Dom":"Them"
};

let possessivePronouns = {
   "Min / Mitt / Mina":"My",
   "Din / Ditt / Dina":"Your (Singular)",
   "UR":"YOUR",
   "Hennes":"Her",
   "Hans":"His",
   "Dess":"Its",
   "Vår / Vårt / Våra":"Our",
   "Er/Ert/Era":"Your (Plural)",
   "Deras":"Their"
};

let favorite = {
   "Handla om":"About",
   "De":"The",
   "För":"For",
   "För":"Too",
   "Från":"From",
   "Till":"To",
   "I":"In",
   "På":"On",
   "Nära":"Near",
   "Nära":"Close by",
   "Långt":"Far",
   "Fjärran":"Afar",
   "Där":"There",
   "Det finns":"There is/are",
   "Det var":"There was/were",
   "Detta":"This",
   "Det/den här":"This",
   "Dessa":"These",
   "De där":"Those",
   "Den där":"That",
};

let adverbs = {
   "Mycket":"Very",
   "För":"Too (as in “too much”)",
   "Också":"Also",
   "Bara":"Only",
   "Nu":"Now",
   "Här":"Here",
   "Kanske":"Maybe",
   "I dag / idag":"Today (also as a noun)",
   "I går / igår":"Yesterday",
   "I morgon / imorgon":"Tomorrow",
   "Nästan":"Almost",
   "Fortfarande":"Still",
   "Redan":"Already",
   "Till och med / även":"Even"
};

let basicVerbs = {
   "Använder":"Use",
   "Är":"Be",
   "Arbetar":"Work",
   "Äter":"Eat",
   "Behöver":"Need",
   "Bestämmer":"Decide",
   "Börjar":"Start",
   "Bör":"Should",
   "Får":"Get",
   "Försöker":"Try",
   "Förstår":"Understand",
   "Frågar":"Ask",
   "Går":"Go",
   "Ger":"Give",
   "Gör":"Do / Make",
   "Har":"Have",
   "Hittar":"Find",
   "Det finns":"There is",
   "Kan":"Can",
   "Känner":"Feel",
   "Köper":"Buy",
   "Lärkänna":"Meet",
   "Lärsig":"Learn",
   "Möter":"Meet",
   "Orsakar":"Cause",
   "Pratar":"Talking",
   "Säger":"Say",
   "Ser":"See",
   "Skapar":"Create",
   "Skriver":"Write",
   "Sover":"Sleep",
   "Talar":"Speak",
   "Tänker":"Think",
   "Tar":"Take",
   "Tycker om":"Like",
   "Vet":"Know",
   "Vill":"Want"
};

let conjunctions = {
   "Att / Som / Det / Det där / Så":"That",
   "Och":"And",
   "Eller":"Or",
   "Men":"But",
   "Fast / Fastän":"Though",
   "För / Eftersom":"Because",
   "Alltså":"Therefore",
   "Om":"If"
};

let prepositions = {
   "Före / Innan ":"Before (also as a conjunction)",
   "Efter":"After (also as a conjunction)",
   "Av":"Of",
   "Från":"From",
   "Till":"To",
   "I":"In",
   "Vid":"At (place)",
   "Med":"With",
   "Om":"About",
   "Som":"Like (meaning “similar to”)",
   "För ":"For (warning this one has several meanings that you need to take care of)"
};

let questions = {
   "Vem":"Who",
   "Vad":"What",
   "Var":"Where",
   "När":"When",
   "Vilken":"Which",
   "Varför":"Why",
   "Hur":"How",
   "Hur mycket":"How much",
   "Hur många":"How many"
};

let basisWords = {
   "Inte":"Not",
   "Att":"That",
   "På":"On",
   "I":"In",
   "För":"For",
   "Om":"If",
   "Till":"To",
   "Med":"With",
   "Den":"The",
   "Av":"Off",
   "Och":"And",
   "Som":"As",
   "Så":"So",
   "Bara":"Just",
   "Ut":"Out",
   "Upp":"Up",
   "Där":"There",
   "Väldigt":"Very",
   "Mycket":"A lot",
   "Från":"From",
   "Efter":"After",
   "Finns":"Exist",
   "Lite":"A little",
   "Över":"Over",
   "Eller":"Or",
   "Många":"Many",
   "Någon":"Someone",
   "De":"The",
   "Än":"Yet",
   "Ingen":"None",
   "Något":"Something",
   "Bra":"Good",
   "In":"Into",
   "Alla":"Everyone",
   "Detta":"This",
   "Vid":"at",
   "Mot":"Against",
   "Inga":"None",
   "Några":"Some",
   "Inget":"Nothing",
   "Hela":"Whole",
   "Fortfarande":"Still",
   "Håller":"Holds",
   "Man":"Man",
   "Allt":"Everything",
   "Varje":"Every",
   "Utan":"Without",
   "Verkligen":"Really",
   "Mer":"More",
   "Precis":"Exactly",
   "Under":"Under",
   "Engelska":"English",
   "Tillbaka":"Back",
   "Klockan":"The Clock",
   "Gammal":"Old",
   "Tid":"Time",
   "Lång":"Long",
   "Snäll":"Kind",
   "Nästa":"Next",
   "Rädd":"Scared",
   "Riktigt":"Really",
   "Ner":"Down",
   "Nästan":"Almost",
   "Länge":"Long",
   "Ingenting":"Nothing",
   "Bort":"Away",
   "Bok":"Book",
   "Helt":"Totally",
   "Står":"Standing",
   "Nya":"New",
   "Andra":"Others",
   "Fel":"Wrong",
   "Kände":"Felt",
   "Just":"Just",
   "Fråga":"Question",
   "Egen":"Own"
};

let sentences = {
   "Var är du?": "Where are you?",
   "Inte här!": "Not here!",
   "Var är jag?":"Where am I?",
   "Jag kan inte.":"I can't.",
   "Jag är här.":"I'll be here.",
   "Jag är här.":"We're right here.",
   "Var är ni?":"Where are you?",
   "Var är han?":"Where is he?",
   "Jag kan inte göra det här.":"I can't do this.",
   "Den är min.":"That is mine.",
   "Jag vill inte ha det här.":"I don't want this.",
   "Jag gillar det inte.":"I don't like that.",
   "Jag med.":"Me too.",
   "Det vet du inte.":"You don't know that.",
   "Jag vill inte ha den här.":"I don't want this.",
   "Du tycker inte om mig.":"You don't like me.",
   "Jag tycker inte om det.":"I don't like that.",
   "Tycker du inte om mig?":"Don't you like me?",
   "Är det vad du vill?":"Is this what you want?",
   "Jag kommer.":"I'm coming.",
   "Du kan gå om du vill.":"If you want, you can go.",
   "Vad är det här för?":"What is this for?",
   "Det är mitt.":"That is mine.",
   "Jag har dig.":"I've got you.",
   "Vad är det här till?":"What is this for?",
   "Det kommer inte att gå.":"It won't work.",
   "Tycker du om det?":"Like it?",
   "Jag kommer att vara här.":"I'll be here.",
   "Jag vill inte ha dig här.":"I don't want you here.",
   "Det kan vi inte göra.":"We can't do that.",
   "Vi kan inte göra det.":"We can't do it.",
   "Vi kan inte göra det.":"We cannot do that.",
   "Det kan vi inte göra.":"We cannot do that.",
   "Det är där jag kommer att vara.":"That's where I'll be.",
   "Jag måste inte vara här.":"I don't have to be here.",
   "Var det du som gjorde det här?":"Did you do this?",
   "Vad är den här till?":"What's this for?",
   "Vad har du på dig?":"What are you wearing?",
   "Det är för mycket att göra.":"There are too many things to do!",
   "Det är upp till dig.":"It is up to you.",
   "Det är upp till dig.":"It's up to you.",
};

var vocabularyObject = phrases; 
var sourceWord = Object.keys(vocabularyObject);
var translateTo = Object.values(vocabularyObject);
var total = sourceWord.length-1
var count = 0;
var touchWordToChange = 1;

var metaThemeColor = document.querySelector("meta[name=theme-color]");

// Display first sourceWord' value when webpage loads:
window.onload = function() {
   document.getElementById('value').innerHTML = sourceWord[0]; 
}

// Function to pick a random color from a predefined range of colors
function listRandomColor(){
   let colorListLength = colorList.length - 1; // from 0 to colorList.length - 1
   const valueRand = Math.floor(Math.random() * colorListLength ) + 1
   return colorList[valueRand];
}

function vocabularyFunction(vocabulary) {
   let idValue = vocabulary;
   // console.log("vacabulary Inside the function", idValue);
   sourceWord = Object.keys(idValue);
   translateTo = Object.values(idValue);
   document.getElementById('value').innerHTML = sourceWord[0]; 
   total = sourceWord.length-1;
   count = 0;
   //document.body.querySelector("div.main").style.backgroundColor = listRandomColor();
   let documentColor = listRandomColor();
   document.body.style.backgroundColor = documentColor;
   metaThemeColor.setAttribute("content", documentColor);
   closeNav();
}

/*
function listRandomColor(){
   let totalRandomCount = sourceWord.length - 1; 
   const randomNumber = Math.floor(Math.random() * totalRandomCount ) + 1;
   return randomNumber;
}

function getCount(){
   count = listRandomColor();
   return count;
}
*/

// function to translate word to english if the button is pressed and then back to source if the word is pressed again
// console.log("Before function clickToTranslateWord is called", touchWordToChange);
function clickToTranslateWord(){
   //console.log("clickToTranslateWord() function called", touchWordToChange)
   // sourceWord
   if (touchWordToChange < 1){
      console.log(count);
      document.getElementById('value').innerHTML = sourceWord[count];
      touchWordToChange = 1
      // console.log("End of if statement - touchWordToChange value:", touchWordToChange)
   }
   else {
      // translateTo
      document.getElementById('value').innerHTML = translateTo[count];
      touchWordToChange = 0
      // console.log("End of else statement - touchWordToChange value:", touchWordToChange)
   }
}

// The Prev and Next functions function as a carousel from the initial value of the sourceWord to the last value of sourceWord
// prev function
function Prev(){
  // getCount()
   touchWordToChange = 1;
   // console.log("Prev function - touchWordToChange value:", touchWordToChange)
   count--
   if (count < 0 ) {
      count++
   }
   else{
      document.getElementById('value').innerHTML = sourceWord[count];
   }
   // console.log("Prev function - count value after the if and else statement:",count);
   console.log("total is", count)
}
      
//var count = 0;
// next function
function Next(){
   //getCount()
   touchWordToChange = 1;
   // console.log("Next function - touchWordToChange value:", touchWordToChange)
   count++
   if (count > total) {
      count = total;
   } 
   else {
      document.getElementById('value').innerHTML = sourceWord[count];
   }
   // console.log("Next function - count value after the if and else statement:",count);
   console.log("total is", count)
}



function openNav() {
   document.getElementById("myNav").style.height = "100%";
 }
 
 function closeNav() {
   document.getElementById("myNav").style.height = "0%";
 }
