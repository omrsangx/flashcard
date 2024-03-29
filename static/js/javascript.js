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
   "Klockan x ":"At (time)",
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
   "En":"One",
   "Att":"That",
   "PÅ":"On",
   "I":"In",
   "Har":"Has",
   "Kan":"Can",
   "HÄR":"Here",
   "FÖR":"For",
   "Om":"If",
   "Till":"To",
   "Ett":"One",
   "Med":"With",
   "Den":"The",
   "Vill":"Want",
   "Kommer":"Coming",
   "Av":"Off",
   "Och":"And",
   "Ska":"Shall",
   "Som":"As",
   "Måste":"Must",
   "Ha":"Ha",
   "Dig":"YOU",
   "Så":"SO",
   "Skulle":"WOULD",
   "Vi":"WE",
   "Bara":"JUST",
   "Gillar":"LIKES",
   "Sig":"SIG",
   "GÖRA":"DO",
   "VARA":"BE",
   "BEHÖVER":"NEED",
   "MITT":"MINE",
   "UPP":"UP",
   "DÄR":"THERE",
   "TYCKER":"THINKS",
   "GICK":"WENT",
   "VÄLDIGT":"VERY",
   "ÄLSKAR":"LOVE",
   "UT":"UT",
   "VET":"KNOW",
   "VAD":"WHAT",
   "GÅ":"GO",
   "MYCKET":"A LOT",
   "FRÅN":"FROM",
   "GÅR":"GOING",
   "SIN":"SIN",
   "SER":"SEEING",
   "BORDE":"SHOULD",
   "BLEV":"BECAME",
   "LIGGER":"LIES",
   "EFTER":"AFTER",
   "SÅG":"SAW",
   "HONOM":"HIM",
   "FINNS":"EXISTS",
   "HANS":"HIS",
   "GÖR":"DO",
   "GJORDE":"DID",
   "LITE":"A LITTLE",
   "ALDRIG":"NEVER",
   "TRODDE":"BELIEVED",
   "DITT":"YOURS",
   "TROR":"THINK",
   "ÖVER":"OVER",
   "VILJA":"WILL",
   "ELLER":"OR",
   "MÅNGA":"MANY",
   "ÅT":"ATE",
   "ER":"ER",
   "TVÅ":"TWO",
   "NÅGON":"SOMEONE",
   "HADE":"HAD",
   "KOM":"COME",
   "FICK":"GOT",
   "DE":"THE",
   "ÄN":"YET",
   "INGEN":"NONE",
   "OSS":"US",
   "BOR":"BOR",
   "MINA":"MINE",
   "NÅGOT":"SOMETHING",
   "FÅR":"SHEEP",
   "BRA":"GOOD",
   "IN":"IN",
   "KÄNNER":"FEELING",
   "HENNE":"HER",
   "BLIR":"BECOMING",
   "HJÄLPA":"HELP",
   "ALLA":"EVERYONE",
   "TALAR":"SPEAKING",
   "DETTA":"THIS",
   "FAKTISKT":"ACTUALLY",
   "VID":"VID",
   "MOT":"AGAINST",
   "KOMMA":"COME",
   "DINA":"YOURS",
   "INGA":"NONE",
   "SE":"SEE",
   "VARIT":"BEEN",
   "TOG":"TOOK",
   "NÅGRA":"SOME",
   "SA":"SA",
   "TA":"TA",
   "INGET":"NOTHING",
   "HELA":"WHOLE",
   "BLI":"BECOME",
   "SITT":"SIT",
   "FORTFARANDE":"STILL",
   "PRATA":"TALK",
   "HETER":"CALLED",
   "TAR":"TAR",
   "HÅLLER":"HOLDS",
   "MAN":"MAN",
   "ALLT":"EVERYTHING",
   "KUNDE":"COULD",
   "VARJE":"EVERY",
   "FÅ":"GET",
   "HENNES":"HER",
   "ALLTID":"ALWAYS",
   "UTAN":"WITHOUT",
   "VERKLIGEN":"REALLY",
   "FAR":"FATHER",
   "ÄTER":"EATING",
   "MER":"MORE",
   "KÖPTE":"BOUGHT",
   "TALA":"SPEAK",
   "SINA":"SINA",
   "HUR":"HOW",
   "PRECIS":"EXACTLY",
   "FÖRSTÅR":"UNDERSTANDS",
   "VERKAR":"SEEMS",
   "UNDER":"UNDER",
   "ÅKA":"RIDE",
   "ENGELSKA":"ENGLISH",
   "SPELAR":"PLAYING",
   "TILLBAKA":"BACK",
   "KLOCKAN":"THE CLOCK",
   "GAMMAL":"OLD",
   "TID":"TIME",
   "DEM":"THEM",
   "LÅNG":"LONG",
   "HATAR":"HATE",
   "SPELA":"PLAY",
   "TRE":"THREE",
   "HITTADE":"FOUND",
   "KÖPA":"BUY",
   "OFTA":"OFTEN",
   "SNÄLL":"KIND",
   "NÄSTA":"NEXT",
   "RÄDD":"SCARED",
   "RIKTIGT":"REALLY",
   "NER":"DOWN",
   "SKREV":"WROTE",
   "EMOT":"AGAINST",
   "NÄSTAN":"ALMOST",
   "ÅKTE":"WENT",
   "LÄNGE":"LONG",
   "VILLE":"WANTED",
   "INGENTING":"NOTHING",
   "GE":"GE",
   "BOKEN":"THE BOOK",
   "BROR":"BROTHER",
   "UR":"YOUR",
   "SETT":"SEEN",
   "BÖRJAR":"BEGINS",
   "BORT":"AWAY",
   "BOK":"BOOK",
   "PRATAR":"TALKING",
   "HÄNDE":"HAPPENED",
   "HÖRDE":"HEARD",
   "KLARAR":"CAN HANDLE",
   "HELT":"TOTALLY",
   "NÄR":"WHEN",
   "STÅR":"STANDING",
   "NYA":"NEW",
   "ANDRA":"OTHERS",
   "FEL":"WRONG",
   "KÄNDE":"FELT",
   "HÄMTA":"DOWNLOAD",
   "JUST":"JUST",
   "FRÅGA":"QUESTION",
   "GJORT":"DONE",
   "VISADE":"SHOWED",
   "MEN":"BUT",
   "VEM":"WHO",
   "EGEN":"OWN",
   "GILLADE":"LIKED",
   "FÖRSÖKTE":"TRIED",
   "Vann":"Won"
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

let random600 = {
   "playing":"leker",
  "she":"hon",
  "jumping":"hoppar",
  "not":"inte",
  "the woman":"kvinnan",
  "its":"sin",
  "he":"han",
  "the girl":"flickan",
  "shows":"visar",
  "Book":"bok",
  "the":"de",
  "and":"och",
  "stands":"står",
  "yours":"dina",
  "I":"jag",
  "working":"arbetar",
  "the boy":"pojken",
  "animal":"djur",
  "the birds":"fåglarna",
  "crying":"gråter",
  "flying":"flyger",
  "finds":"hittar",
  "laughing":"skrattar",
  "the cat":"katten",
  "sitting":"sitter",
  "theirs":"sina",
  "washes":"tvättar",
  "the children":"barnen",
  "one":"en",
  "to":"till",
  "bread":"bröd",
  "have":"har",
  "is":"är",
  "eight":"åtta",
  "seven":"sju",
  "now":"nu",
  "exists":"finns",
  "ten":"tio",
  "two":"två",
  "or":"eller",
  "sleeping":"sover",
  "less":"mindre",
  "eats":"äter",
  "in":"i",
  "the":"det",
  "nine":"nio",
  "six":"sex",
  "approximately":"ungefär",
  "more":"fler",
  "five":"fem",
  "you":"du",
  "What":"vad",
  "four":"fyra",
  "for":"för",
  "three":"tre",
  "his":"hans",
  "children":"barn",
  "her":"hennes",
  "elephants":"elefanter",
  "takes":"tar",
  "far":"långt",
  "love":"älskar",
  "writes":"skriver",
  "apples":"äpplen",
  "me":"mig",
  "fruit":"frukt",
  "selling":"säljer",
  "sings":"sjunger",
  "before":"innan",
  "to":"att",
  "while":"medan",
  "them":"dem",
  "we":"vi",
  "Moose":"älg",
  "runs":"springer",
  "without":"utan",
  "vegetarian":"vegetarian",
  "him":"honom",
  "since":"eftersom",
  "is raining":"regnar",
  "because":"därför",
  "uses":"använder",
  "newspaper":"tidning",
  "chicken":"kyckling",
  "laws":"lagar",
  "her":"henne",
  "goes":"går",
  "food":"mat",
  "talking":"pratar",
  "reading":"läser",
  "listening":"lyssnar",
  "the man":"mannen",
  "as":"som",
  "preferably":"helst",
  "think":"tycker",
  "Swedish":"svenska",
  "comes":"kommer",
  "tea":"te",
  "when":"när",
  "goes":"åker",
  "know":"vet",
  "wants":"vill",
  "speaking":"talar",
  "English":"engelska",
  "pork":"fläskkött",
  "but":"men",
  "coffee":"kaffe",
  "fish":"fisk",
  "drinks":"dricker",
  "my":"min",
  "if":"om",
  "if":"om",
  "meat":"kött",
  "sandwich":"smörgås",
  "boys":"pojkar",
  "milk":"mjölk",
  "girls":"flickor",
  "one":"ett",
  "men":"män",
  "breakfast":"frukost",
  "strawberry":"jordgubbe",
  "egg":"ägg",
  "cheese":"ost",
  "soup":"soppa",
  "orange":"apelsin",
  "pepper":"peppar",
  "lemon":"citron",
  "wine":"vin",
  "pasta":"pasta",
  "salt":"salt",
  "lunch":"lunch",
  "menu":"meny",
  "tomato":"tomat",
  "apple":"äpple",
  "MAN":"man",
  "water":"vatten",
  "woman":"kvinna",
  "girl":"flicka",
  "boy":"pojke",
  "of restaurants":"restaurangernas",
  "books":"böcker",
  "ours":"våra",
  "rice":"ris",
  "the horse":"hästen",
  "Cat":"katt",
  "the bird":"fågeln",
  "the dog":"hunden",
  "horse":"häst",
  "bird":"fågel",
  "dog":"hund",
  "very":"mycket",
  "then":"då",
  "good":"god",
  "No":"nej",
  "excuse":"ursäkta",
  "Hello":"hallå",
  "morning":"morgon",
  "Hello":"hej",
  "thanks":"tack",
  "night":"natt",
  "so":"så",
  "You are welcome":"varsågod",
  "yes":"ja",
  "you":"ni",
  "you":"dig",
  "the child":"barnet",
  "your":"er",
  "U.S":"oss",
  "the":"det",
  "the":"den",
  "beer":"öl",
  "ice cream":"glass",
  "meal":"måltid",
  "women":"kvinnor",
  "chooses":"väljer",
  "pays":"betalar",
  "the horses":"hästarna",
  "hear":"hör",
  "draws":"ritar",
  "the sandwich":"smörgåsen",
  "the fish":"fisken",
  "the water":"vattnet",
  "the salt":"saltet",
  "the ice cream":"glassen",
  "the egg":"ägget",
  "turtle":"sköldpadda",
  "the duck":"ankan",
  "animal":"djur",
  "Elephant":"elefant",
  "juice":"juice",
  "sugar":"socker",
  "the apple":"äpplet",
  "beef":"nötkött",
  "oil":"olja",
  "please":"snälla",
  "the spider":"spindeln",
  "bear":"björn",
  "the crab":"krabban",
  "the elephant":"elefanten",
  "spider":"spindel",
  "the turtle":"sköldpaddan",
  "crab":"krabba",
  "the lunch":"lunchen",
  "the beef":"nötköttet",
  "the pasta":"pastan",
  "the rice":"riset",
  "The food":"maten",
  "the breakfast":"frukosten",
  "the cheese":"osten",
  "the lemon":"citronen",
  "sixteen":"sexton",
  "small":"liten",
  "old":"gammal",
  "little":"lille",
  "the train":"tåget",
  "car":"bil",
  "cars":"bilar",
  "suitcase":"resväska",
  "the car":"bilen",
  "train":"tåg",
  "bike":"cykel",
  "bicycles":"cyklar",
  "which":"vilket",
  "slowly":"långsamt",
  "where":"var",
  "to":"till",
  "only":"bara",
  "whose":"vems",
  "of":"av",
  "buys":"köper",
  "completely":"helt",
  "travels":"reser",
  "ours":"vårt",
  "pink":"rosa",
  "black":"svart",
  "mine":"mina",
  "on":"på",
  "orange":"orange",
  "one":"sig",
  "children":"barn",
  "several":"flera",
  "on":"på",
  "mail":"brev",
  "supports":"stöttar",
  "my":"mitt",
  "many":"många",
  "your":"din",
  "South":"söder",
  "American":"amerikansk",
  "Norwegian":"norska",
  "English":"engelsk",
  "the Norwegians":"norrmännen",
  "tourist":"turist",
  "Finnish Swedish":"finlandssvensk",
  "Norwegian":"norsk",
  "Finnish Swedish":"finlandssvenska",
  "tourists":"turister",
  "out":"ut",
  "looks":"ser",
  "Good":"bra",
  "here":"här",
  "with":"med",
  "is located":"ligger",
  "why":"varför",
  "understand":"förstår",
  "if":"om",
  "the chicken":"kycklingen",
  "the sugar":"sockret",
  "the soup":"soppan",
  "the wine":"vinet",
  "the meat":"köttet",
  "the fruit":"frukten",
  "the tea":"teet",
  "the coffee":"kaffet",
  "the newspaper":"tidningen",
  "against":"mot",
  "make":"gör",
  "who":"vem",
  "where":"vart",
  "which":"vilka",
  "how":"hur",
  "swimming":"simmar",
  "the animal":"djuret",
  "Crown Princess":"kronprinsessa",
  "boys":"killar",
  "couple":"par",
  "the guy":"killen",
  "boy":"kille",
  "still":"ändå",
  "duck":"anka",
  "the bear":"björnen",
  "the elk":"älgen",
  "have":"ha",
  "the oil":"oljan",
  "the strawberry":"jordgubben",
  "the pepper":"pepparn",
  "the tomato":"tomaten",
  "the pork":"fläskköttet",
  "purple":"lila",
  "No":"ingen",
  "White":"vita",
  "palace":"palats",
  "where":"där",
  "away":"borta",
  "old":"gammalt",
  "lives":"bor",
  "no":"inga",
  "outside":"utanför",
  "close":"nära",
  "which":"vilken",
  "answers":"svarar",
  "yes":"jo",
  "asks":"frågar",
  "at":"vid",
  "by":"genom",
  "for":"för",
  "Open":"öppna",
  "when":"när",
  "nothing":"inget",
  "sandwiches":"smörgåsar",
  "cooks":"kockar",
  "the elephants":"elefanterna",
  "The apples":"äpplena",
  "the newspapers":"tidningarna",
  "the women":"kvinnorna",
  "the men":"männen",
  "the dogs":"hundarna",
  "the cats":"katterna",
  "birds":"fåglar",
  "late":"sent",
  "either":"heller",
  "even":"ens",
  "soon":"snart",
  "rarely":"sällan",
  "possibly":"möjligtvis",
  "the ducks":"ankorna",
  "the key":"nyckeln",
  "the fabric":"tyget",
  "key":"nyckel",
  "behind":"bakom",
  "German":"tyska",
  "trips":"resor",
  "German":"tysk",
  "the bicycle":"cykeln",
  "map":"karta",
  "the adventure":"äventyret",
  "vacation":"semester",
  "European":"europeiskt",
  "trip":"resa",
  "adventure":"äventyr",
  "Scandinavia":"skandinavien",
  "over":"över",
  "era":"era",
  "the bus":"bussen",
  "guide":"guide",
  "the aircraft":"flygplanet",
  "Chinese":"kinesiska",
  "aircraft":"flygplan",
  "Swedish":"svensk",
  "Swedish":"svenskt",
  "backpack":"ryggsäck",
  "the Dane":"dansken",
  "danish":"dansk",
  "Chinese":"kinesiskt",
  "Danish":"danska",
  "usually":"vanligtvis",
  "need":"behöver",
  "stop":"hållplats",
  "vehicle":"fordon",
  "planet":"planet",
  "motorbike":"motorcykel",
  "the subway":"tunnelbanan",
  "abroad":"utomlands",
  "around":"runt",
  "swings":"svänger",
  "cultures":"kulturer",
  "the king":"kungen",
  "the prince":"prinsen",
  "conference":"konferens",
  "prince":"prins",
  "Lady":"dam",
  "relationship":"förhållande",
  "culture":"kultur",
  "adult":"vuxen",
  "the village":"byn",
  "the conference":"konferensen",
  "the lady":"damen",
  "your":"ert",
  "also":"också",
  "White":"vit",
  "blue":"blåa",
  "yellow":"gula",
  "plates":"tallrikarna",
  "the museum":"museet",
  "the avenue":"allén",
  "museum":"museum",
  "than":"än",
  "Often":"ofta",
  "daughters'":"döttrars",
  "sons":"söner",
  "committee":"kommitté",
  "princess":"prinsessa",
  "the victim":"offret",
  "the box":"lådan",
  "gives":"ger",
  "final":"slut",
  "your":"ditt",
  "White":"vitt",
  "cats":"katter",
  "black":"svarta",
  "umbrellas":"paraplyer",
  "the wardrobe":"garderoben",
  "the cloth":"duken",
  "phone":"telefon",
  "floor":"våning",
  "cloth":"duk",
  "wardrobe":"garderob",
  "the umbrella":"paraplyet",
  "umbrella":"paraply",
  "wallet":"plånbok",
  "the sheet":"lakanet",
  "razor":"rakhyvel",
  "the bowls":"skålarna",
  "pool":"pool",
  "toy":"leksak",
  "the strings":"snören",
  "always":"alltid",
  "old":"gamla",
  "room":"rum",
  "from":"från",
  "watching":"tittar",
  "perhaps":"kanske",
  "bag":"väska",
  "the engine":"motorn",
  "the bag":"väskan",
  "engine":"motor",
  "the novel":"romanen",
  "novel":"roman",
  "paper":"papper",
  "powder":"pulver",
  "bags":"väskor",
  "without":"utan",
  "pockets":"fickor",
  "buttons":"knappar",
  "button":"knapp",
  "sweaters":"tröjor",
  "the pans":"kastrullerna",
  "saucepan":"kastrull",
  "the comb":"kammen",
  "the wall":"väggen",
  "quilt":"täcke",
  "the wheels":"hjulen",
  "the ceiling":"taket",
  "wish":"önskar",
  "screen":"skärmen",
  "the curtain":"gardinen",
  "screen":"skärm",
  "machine":"maskin",
  "more":"mer",
  "very":"väldigt",
  "factories":"fabriker",
  "the place":"platsen",
  "farms":"bondgårdar",
  "farmhouse":"bondgård",
  "business":"affär",
  "market":"marknad",
  "place":"plats",
  "along":"längs",
  "small":"små",
  "small":"litet",
  "small":"lilla",
  "sorry":"ledsen",
  "good-looking":"snygga",
  "wrong":"fel",
  "valley":"dal",
  "front":"framsida",
  "west coast":"västkust",
  "the front side":"framsidan",
  "the valley":"dalen",
  "the cities":"städerna",
  "North":"norra",
  "west coast":"västkusten",
  "tower":"torn",
  "the tower":"tornet",
  "cities":"städer",
  "north":"norr",
  "avenue":"allé",
  "the avenues":"alléerna",
  "the region":"regionen",
  "countries":"länder",
  "bar":"bar",
  "address":"adress",
  "region":"region",
  "the castle":"slottet",
  "the regions":"regionerna",
  "the ground":"marken",
  "bars":"barer",
  "sauna":"bastu",
  "the bars":"barerna",
  "sauna":"bastun",
  "center":"centrum",
  "West":"väster",
  "airports":"flygplatser",
  "the department":"avdelningen",
  "toilets":"toaletter",
  "the toilet":"toaletten",
  "office":"kontor",
  "the square":"torget",
  "airport":"flygplats",
  "square":"torg",
  "section":"avdelning",
  "lakes":"sjöar",
  "the palace":"palatset",
  "area":"område",
  "property":"egendom",
  "the amusement park":"nöjesfältet",
  "coasts":"kuster",
  "parks":"parker",
  "at":"hos",
  "trusts":"litar",
  "finally":"äntligen",
  "both":"både",
  "together":"tillsammans",
  "away":"bort",
  "just":"precis",
  "here":"hit",
  "think":"tror",
  "at least":"åtminstone",
  "still":"fortfarande",
  "Never":"aldrig",
  "quite":"ganska",
  "clearly":"tydligt",
  "already":"redan",
  "neither":"varken",
  "definitely":"definitivt",
  "absolutely":"absolut",
  "sometimes":"ibland",
  "particularly":"särskilt",
  "almost":"nästan",
  "trying":"försöker",
  "enough":"tillräckligt",
  "belike":"troligtvis",
  "again":"igen",
  "studying":"studerar",
  "later":"senare",
  "really":"verkligen",
  "necessarily":"nödvändigtvis",
  "actually":"egentligen",
  "there":"dit",
  "actually":"faktiskt",
  "morning":"morgon",
  "invites":"bjuder",
  "is enough":"räcker",
  "have time to":"hinner",
  "presents":"presenterar",
  "kisses":"kysser",
  "his":"sitt",
  "passes":"passerar",
  "feel":"känner",
  "follows":"följer",
  "after":"efter",
  "ends":"slutar",
  "stops":"stannar",
  "in front":"framför",
  "helps":"hjälper",
  "seems":"verkar",
  "says":"säger",
  "looking":"letar",
  "learn":"lär",
  "famous":"berömda",
  "famous":"berömd",
  "uncle":"farbror",
  "aunts":"fasters",
  "uncle's":"farbrors",
  "aunt":"faster",
  "the family":"familjen",
  "fire-fighter":"brandman",
  "worker":"arbetare",
  "the engineer":"ingenjören",
  "the doctor":"läkaren",
  "horses":"hästar",
  "Author":"författare",
  "Wednesdays":"onsdagar",
  "their":"deras",
  "Thursday":"torsdag",
  "plates":"tallrikar",
  "turtles":"sköldpaddor",
  "ducks":"ankor",
  "holding":"håller",
  "between":"mellan",
  "beside":"bredvid",
  "Forward":"framåt",
  "before":"före",
  "according to":"enligt",
  "its":"dess",
  "your":"er",
  "dogs":"hundar",
  "our":"vår",
  "red":"röda"
}

let verbTensesObj = {
   vara: {past: {verb: "var", sentence: "Jag var inte där"}, present: {verb: "är", sentence: "Är du hemma?"}, future: {verb: "kommer att vara", sentence: "Jag kommer att vara där"}},
   ha: {past: {verb: "hade", sentence: "Jag hade inte tid"}, present: {verb: "har", sentence: "Har du pengar?"}, future: {verb: "kommer att ha", sentence: "Jag kommer att ha det"}},
   göra: {past: {verb: "gjorde", sentence: "Han gjorde sitt bästa"}, present: {verb: "gör", sentence: "Vad gör du nu?"}, future: {verb: "kommer att göra", sentence: "Vi kommer att göra det"}},
   säga: {past: {verb: "sa", sentence: "Hon sa inget"}, present: {verb: "säger", sentence: "Vem säger sanningen?"}, future: {verb: "kommer att säga", sentence: "Han kommer att säga det"}},
   vilja: {past: {verb: "ville", sentence: "Jag ville inte gå"}, present: {verb: "vill", sentence: "Vill du ha kaffe?"}, future: {verb: "kommer att vilja", sentence: "Hon kommer att vilja det"}},
   kunna: {past: {verb: "kunde", sentence: "Jag kunde inte förstå"}, present: {verb: "kan", sentence: "Kan du hjälpa mig?"}, future: {verb: "kommer att kunna", sentence: "Vi kommer att kunna lösa det"}},
   få: {past: {verb: "fick", sentence: "Hon fick ett brev"}, present: {verb: "får", sentence: "Får jag komma in?"}, future: {verb: "kommer att få", sentence: "Vi kommer att få svar"}},
   se: {past: {verb: "såg", sentence: "Jag såg dig igår"}, present: {verb: "ser", sentence: "Ser du mig?"}, future: {verb: "kommer att se", sentence: "Vi kommer att se vad som händer"}},
   komma: {past: {verb: "kom", sentence: "Han kom sent"}, present: {verb: "kommer", sentence: "När kommer du?"}, future: {verb: "kommer att komma", sentence: "De kommer att komma tidigt"}},
   ta: {past: {verb: "tog", sentence: "Jag tog bussen"}, present: {verb: "tar", sentence: "Tar du med dig lunch?"}, future: {verb: "kommer att ta", sentence: "Vi kommer att ta bilen"}},
   ge: {past: {verb: "gav", sentence: "Han gav mig en present"}, present: {verb: "ger", sentence: "Ger du mig din penna?"}, future: {verb: "kommer att ge", sentence: "De kommer att ge oss besked"}},
  }

// Global variable 
var vocabularyObject = phrases; 
var sourceWord = Object.keys(vocabularyObject);
var translateTo = Object.values(vocabularyObject);
var total = sourceWord.length-1
var count = 0;
var touchWordToChange = 1;
var metaThemeColor = document.querySelector("meta[name=theme-color]");
var pronounceWord = sourceWord[0];
var pronounceTenseSentence = "null";

// Global variables for the id tag used in index.html
var clickToTranslateWordId = "clickToTranslateWordId";
var verbSentencesId = "verbSentencesId";
var verbPastId= "verbPastId";
var verbPresentId = "verbPresentId";
var verbFutureId = "verbFutureId";
var verbTenseSentenceId = "verbTenseSentenceId"

// Global variables to access the verbTensesObj's objects
var tensePast = "past";
var tensePresent = "present";
var tenseFuture = "future";
var tenseVerb = "verb";
var tenseSentence = "sentence"

// Display first sourceWord' value when webpage loads:
window.onload = function() {
   document.getElementById(clickToTranslateWordId).innerHTML = sourceWord[0]; 
}

// Function to pick a random color from a predefined range of colors
function listRandomColor() {
   let colorListLength = colorList.length - 1; // from 0 to colorList.length - 1
   const valueRand = Math.floor(Math.random() * colorListLength ) + 1
   return colorList[valueRand];
}

function show(shown, hidden) {
   document.getElementById(shown).style.display='block';
   document.getElementById(hidden).style.display='none';
   return false;
}

function vocabularyFunction(vocabulary) {
   let idValue = vocabulary;
   sourceWord = Object.keys(idValue);
   translateTo = Object.values(idValue);
   clickToTranslateWordId = 'clickToTranslateWordId'
   show('vocabulariesPageId','verbTensesPageId');
   document.getElementById(clickToTranslateWordId).innerHTML = sourceWord[0]; 
   total = sourceWord.length-1;
   count = 0;
   let documentColor = listRandomColor();
   document.body.style.backgroundColor = documentColor;
   metaThemeColor.setAttribute("content", documentColor);
   pronounceWord = sourceWord[0]
   closeNav();
}

function verbTenseFunction(vocabulary) {
   let idValue = vocabulary;
   sourceWord = Object.keys(idValue);
   translateTo = Object.values(idValue);
   clickToTranslateWordId = 'valueVerbTensesId';
   show('verbTensesPageId','vocabulariesPageId');
   document.getElementById(clickToTranslateWordId).innerHTML = sourceWord[0]; 
   total = sourceWord.length-1;
   count = 0;
   let documentColor = "#FFA33C";
   document.body.style.backgroundColor = documentColor;
   metaThemeColor.setAttribute("content", documentColor);
   pronounceWord = sourceWord[0]
   closeNav();
}

// function to translate word to English if the button is pressed and then back to source language if the word is pressed again
// console.log("Before function clickToTranslateWord is called", touchWordToChange);
function clickToTranslateWord() {
   //console.log("clickToTranslateWord() function called", touchWordToChange)
   // sourceWord
   if (touchWordToChange < 1){
      // console.log(count);
      document.getElementById(clickToTranslateWordId).innerHTML = sourceWord[count];
      touchWordToChange = 1
      // console.log("End of if statement - touchWordToChange value:", touchWordToChange)
   }
   else {
      // translateTo
      document.getElementById(clickToTranslateWordId).innerHTML = translateTo[count];
      touchWordToChange = 0
      // console.log("End of else statement - touchWordToChange value:", touchWordToChange)
   }
}

function expandVerbTense() {
   if ( touchWordToChange < 1 ) {
      document.getElementById(clickToTranslateWordId).innerHTML = sourceWord[count];
      document.getElementById(verbSentencesId).style.display='none';
      document.getElementById(verbTenseSentenceId).innerHTML = ""
      resetFaddingVerbTense();
      touchWordToChange = 1
   }
   else {
      document.getElementById(verbPastId).innerHTML = translateTo[count][tensePast][tenseVerb];
      document.getElementById(verbPresentId).innerHTML = translateTo[count][tensePresent][tenseVerb];
      document.getElementById(verbFutureId).innerHTML = translateTo[count][tenseFuture][tenseVerb];
      document.getElementById(verbSentencesId).style.display='block';
      touchWordToChange = 0
   }
}

// Fading unselected verb tenses
function fadingVerbTense() {
   // Reset opacity for all tenses
   var tenses = document.querySelectorAll('.verb-tense-div-span-class span');
   tenses.forEach(function(tense) {
      tense.classList.add('fading-out-class');
   });
   
   // Remove the fading of the class from the selected verb tense
   event.target.classList.remove('fading-out-class');
   document.getElementById('valueVerbTensesId').classList.remove('fading-out-class');
} 

// Reseting fading when verb tenses are not selected
function resetFaddingVerbTense() {
   var tenses = document.querySelectorAll('.verb-tense-div-span-class span');
   tenses.forEach(function(tense) {
     tense.classList.remove('fading-out-class');
   });   
}

function pastTenseSentence() {
   // console.log("Past tense sentence function")
   document.getElementById(verbTenseSentenceId).innerHTML = translateTo[count][tensePast][tenseSentence];
   pronounceTenseSentence = translateTo[count][tensePast][tenseSentence];
   fadingVerbTense()
}

function presentTenseSentence() {
   // console.log("Present tense sentence function")
   document.getElementById(verbTenseSentenceId).innerHTML = translateTo[count][tensePresent][tenseSentence];
   pronounceTenseSentence = translateTo[count][tensePresent][tenseSentence];
   fadingVerbTense()
}

function futureTenseSentence() {
   // console.log("Future tense sentence function")
   document.getElementById(verbTenseSentenceId).innerHTML = translateTo[count][tenseFuture][tenseSentence];
   pronounceTenseSentence = translateTo[count][tenseFuture][tenseSentence];
   fadingVerbTense()
}

// Using the Web Speech API to pronounce the word that is being displaying
function clickToSpeakWord(speakWord) {
   // console.log(speakWord)
   var synthesis = window.speechSynthesis;
   if ('speechSynthesis' in window) {
     var synthesis = window.speechSynthesis;
   } else {
     console.log('Text-to-speech not supported.');
   }
   
   if ('speechSynthesis' in window) {
     var synthesis = window.speechSynthesis;
   
     // Setting Swedish as the language
     var voice = synthesis.getVoices().filter(function (voice) { 
       return voice.lang === 'sv-SE';
     })[0];
   
     // Create an utterance object
     var utterance = new SpeechSynthesisUtterance(speakWord);
   
     // Set utterance properties
     utterance.voice = voice;
     utterance.pitch = 1.5;
     utterance.rate = .65;
     utterance.volume = 0.8;
   
     // Speak the utterance
     synthesis.speak(utterance);
    
   } else {
     console.log('Text-to-speech not supported.');
   }
}

// The Prev and Next functions function as a carousel from the initial value of the sourceWord to the last value of sourceWord
// prev function
function Prev() {
  // getCount()
   touchWordToChange = 1;
   document.getElementById(verbSentencesId).style.display='none';
   document.getElementById(verbTenseSentenceId).innerHTML = ""
   resetFaddingVerbTense();

   // console.log("Prev function - touchWordToChange value:", touchWordToChange)
   count--
   if (count < 0 ) {
      count++
   }
   else{
      document.getElementById(clickToTranslateWordId).innerHTML = sourceWord[count];
      pronounceWord = sourceWord[count];
      // console.log("Prev function",pronounceWord);      
   }
   // console.log("Prev function - count value after the if and else statement:",count);
   // console.log("Total is", count)
}
      
// next function
function Next() {
   //getCount()
   touchWordToChange = 1;
   document.getElementById(verbSentencesId).style.display='none';
   document.getElementById(verbTenseSentenceId).innerHTML = "";
   resetFaddingVerbTense();

   // console.log("Next function - touchWordToChange value:", touchWordToChange)
   count++
   if (count > total) {
      count = total;
   } 
   else {
      document.getElementById(clickToTranslateWordId).innerHTML = sourceWord[count];
      pronounceWord = sourceWord[count];
      // console.log("Next function",pronounceWord);
   }
   // console.log("Next function - count value after the if and else statement:",count);
   // console.log("Total is", count)
}

function openNav() {
   // When this function is call, the following will be reset
   document.getElementById("myNav").style.height = "100%";
   document.getElementById(verbSentencesId).style.display='none';
   document.getElementById(verbTenseSentenceId).innerHTML = "";
}
 
 function closeNav() {
   // When this function is call, the following will be reset
   document.getElementById("myNav").style.height = "0%";
   document.getElementById(verbSentencesId).style.display='none';
   document.getElementById(verbTenseSentenceId).innerHTML = "";
}
