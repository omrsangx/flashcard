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
   tänka: {past: {verb: "tänkte", sentence: "Jag tänkte på dig"}, present: {verb: "tänker", sentence: "Vad tänker du på?"}, future: {verb: "kommer att tänka", sentence: "Jag kommer att tänka på det"}},
   jobba: {past: {verb: "jobbade", sentence: "Jag jobbade sent igår"}, present: {verb: "jobbar", sentence: "Jobbar du idag?"}, future: {verb: "ska jobba", sentence: "Jag ska jobba imorgon"}},
   äta: {past: {verb: "åt", sentence: "Vi åt middag tillsammans"}, present: {verb: "äter", sentence: "Äter du kött?"}, future: {verb: "ska äta", sentence: "Jag ska äta lunch"}},
   dricka: {past: {verb: "drack", sentence: "Vi drack kaffe"}, present: {verb: "dricker", sentence: "Dricker du te?"}, future: {verb: "ska dricka", sentence: "Vi ska dricka vatten"}},
   sova: {past: {verb: "sov", sentence: "Jag sov länge igår"}, present: {verb: "sover", sentence: "Sover du gott?"}, future: {verb: "ska sova", sentence: "Vi ska sova tidigt"}},
   gilla: {past: {verb: "gillade", sentence: "Jag gillade filmen"}, present: {verb: "gillar", sentence: "Gillar du att resa?"}, future: {verb: "ska gilla", sentence: "Jag ska gilla det"}},
   gå: {past: {verb: "gick", sentence: "Vi gick en lång promenad"}, present: {verb: "går", sentence: "Går du till skolan?"}, future: {verb: "ska gå", sentence: "Jag ska gå till affären"}},
   köpa: {past: {verb: "köpte", sentence: "Jag köpte en ny tröja"}, present: {verb: "köper", sentence: "Köper du ofta kläder?"}, future: {verb: "ska köpa", sentence: "Vi ska köpa mat"}},
   hitta: {past: {verb: "hittade", sentence: "Jag hittade mina nycklar"}, present: {verb: "hittar", sentence: "Hittar du vägen?"}, future: {verb: "ska hitta", sentence: "Vi ska hitta en lösning"}},
   läsa: {past: {verb: "läste", sentence: "Jag läste en bok igår"}, present: {verb: "läser", sentence: "Läser du tidningen?"}, future: {verb: "ska läsa", sentence: "Vi ska läsa en artikel"}},
   veta: {past: {verb: "visste", sentence: "Jag visste inte det"}, present: {verb: "vet", sentence: "Vet du svaret?"}, future: {verb: "ska veta", sentence: "Jag ska veta det"}},
   stå: {past: {verb: "stod", sentence: "Vi stod i kön"}, present: {verb: "står", sentence: "Står du där länge?"}, future: {verb: "ska stå", sentence: "Jag ska stå vid ingången"}},
   simma: {past: {verb: "simmade", sentence: "Jag simmade i havet"}, present: {verb: "simmar", sentence: "Simmar du bra?"}, future: {verb: "ska simma", sentence: "Vi ska simma imorgon"}},
   springa: {past: {verb: "sprang", sentence: "Hon sprang snabbt"}, present: {verb: "springer", sentence: "Springer du ofta?"}, future: {verb: "ska springa", sentence: "Jag ska springa i parken"}},
   lyssna: {past: {verb: "lyssnade", sentence: "Jag lyssnade på musik"}, present: {verb: "lyssnar", sentence: "Lyssnar du på radio?"}, future: {verb: "ska lyssna", sentence: "Vi ska lyssna på föreläsningen"}},
   tala: {past: {verb: "talade", sentence: "Han talade om sina planer"}, present: {verb: "talar", sentence: "Talar du flera språk?"}, future: {verb: "ska tala", sentence: "Jag ska tala med chefen"}},
   dansa: {past: {verb: "dansade", sentence: "Vi dansade hela natten"}, present: {verb: "dansar", sentence: "Dansar du salsa?"}, future: {verb: "ska dansa", sentence: "Jag ska dansa på festen"}},
   älska: {past: {verb: "älskade", sentence: "Han älskade henne djupt"}, present: {verb: "älskar", sentence: "Älskar du choklad?"}, future: {verb: "ska älska", sentence: "Vi ska älska varje ögonblick"}},
   le: {past: {verb: "log", sentence: "Han log åt skämtet"}, present: {verb: "ler", sentence: "Ler du alltid?"}, future: {verb: "ska le", sentence: "Jag ska le för fotografen"}},
   resa: {past: {verb: "reste", sentence: "Vi reste till Paris"}, present: {verb: "reser", sentence: "Reser du mycket?"}, future: {verb: "ska resa", sentence: "Jag ska resa till Thailand"}},
   spela: {past: {verb: "spelade", sentence: "Jag spelade piano"}, present: {verb: "spelar", sentence: "Spelar du gitarr?"}, future: {verb: "ska spela", sentence: "Vi ska spela brädspel"}},
   skratta: {past: {verb: "skrattade", sentence: "Vi skrattade åt skämten"}, present: {verb: "skrattar", sentence: "Skrattar du högt?"}, future: {verb: "ska skratta", sentence: "Jag ska skratta åt filmen"}},
   byta: {past: {verb: "bytte", sentence: "Vi bytte kläder"}, present: {verb: "byter", sentence: "Byter du ofta åsikt?"}, future: {verb: "ska byta", sentence: "Jag ska byta bil"}},
   förstå: {past: {verb: "förstod", sentence: "Hon förstod problemet"}, present: {verb: "förstår", sentence: "Förstår du svenska?"}, future: {verb: "ska förstå", sentence: "Jag ska förstå instruktionerna"}},
   lära: {past: {verb: "lärde", sentence: "Jag lärde mig själv"}, present: {verb: "lär", sentence: "Lär du andra?"}, future: {verb: "ska lära", sentence: "Vi ska lära oss nya saker"}},
   vänta: {past: {verb: "väntade", sentence: "Vi väntade på bussen"}, present: {verb: "väntar", sentence: "Väntar du länge?"}, future: {verb: "ska vänta", sentence: "Jag ska vänta på dig"}},
   skapa: {past: {verb: "skapade", sentence: "Hon skapade konstverk"}, present: {verb: "skapar", sentence: "Skapar du mycket?"}, future: {verb: "ska skapa", sentence: "Vi ska skapa en ny produkt"}},
   hoppa: {past: {verb: "hoppade", sentence: "Jag hoppade över hindret"}, present: {verb: "hoppar", sentence: "Hoppar du högt?"}, future: {verb: "ska hoppa", sentence: "Jag ska hoppa rep"}},
   måla: {past: {verb: "målade", sentence: "Jag målade en tavla"}, present: {verb: "målar", sentence: "Målar du ofta?"}, future: {verb: "ska måla", sentence: "Vi ska måla om rummet"}},
   röra: {past: {verb: "rörde", sentence: "Han rörde vid saken"}, present: {verb: "rör", sentence: "Rör du maten?"}, future: {verb: "ska röra", sentence: "Jag ska röra inte"}},
   skjuta: {past: {verb: "sköt", sentence: "Han sköt målet"}, present: {verb: "skjuter", sentence: "Skjuter du bra?"}, future: {verb: "ska skjuta", sentence: "Vi ska skjuta pilbåge"}},
   skrika: {past: {verb: "skrek", sentence: "Hon skrek av rädsla"}, present: {verb: "skriker", sentence: "Skriker du högt?"}, future: {verb: "ska skrika", sentence: "Jag ska skrika av glädje"}},
   vandra: {past: {verb: "vandrade", sentence: "Vi vandrade i skogen"}, present: {verb: "vandrar", sentence: "Vandrar du i naturen?"}, future: {verb: "ska vandra", sentence: "Jag ska vandra i bergen"}},
   glömma: {past: {verb: "glömde", sentence: "Jag glömde nycklarna"}, present: {verb: "glömmer", sentence: "Glömmer du lätt?"}, future: {verb: "ska glömma", sentence: "Jag ska glömma det"}},
   fråga: {past: {verb: "frågade", sentence: "Jag frågade om hjälp"}, present: {verb: "frågar", sentence: "Frågar du ofta?"}, future: {verb: "ska fråga", sentence: "Jag ska fråga läraren"}},
   skicka: {past: {verb: "skickade", sentence: "Jag skickade ett brev"}, present: {verb: "skickar", sentence: "Skickar du e-post?"}, future: {verb: "ska skicka", sentence: "Vi ska skicka paket"}},
   hata: {past: {verb: "hatade", sentence: "Jag hatade den filmen"}, present: {verb: "hatar", sentence: "Hatar du att förlora?"}, future: {verb: "ska hata", sentence: "Jag ska hata det"}},
   lämna: {past: {verb: "lämnade", sentence: "Jag lämnade mitt bagage"}, present: {verb: "lämnar", sentence: "Lämnar du snart?"}, future: {verb: "ska lämna", sentence: "Vi ska lämna hotellet"}},
   försvinna: {past: {verb: "försvann", sentence: "Han försvann spårlöst"}, present: {verb: "försvinner", sentence: "Försvinner det ofta?"}, future: {verb: "ska försvinna", sentence: "Det ska försvinna snart"}},
   anlända: {past: {verb: "anlände", sentence: "Tåget anlände i tid"}, present: {verb: "anländer", sentence: "När anländer bussen?"}, future: {verb: "ska anlända", sentence: "De ska anlända imorgon"}},
   åka: {past: {verb: "åkte", sentence: "Jag åkte till stranden"}, present: {verb: "åker", sentence: "Åker du ofta kollektivt?"}, future: {verb: "ska åka", sentence: "Vi ska åka på semester"}},
   ångra: {past: {verb: "ångrade", sentence: "Hon ångrade sina beslut"}, present: {verb: "ångrar", sentence: "Ångrar du dig?"}, future: {verb: "ska ångra", sentence: "Du ska ångra det"}},
   skrämma: {past: {verb: "skrämde", sentence: "Hon skrämde barnen"}, present: {verb: "skrämmer", sentence: "Skrämmer det dig?"}, future: {verb: "ska skrämma", sentence: "Jag ska skrämma min syster"}},
   förändra: {past: {verb: "förändrade", sentence: "Det förändrade allt"}, present: {verb: "förändrar", sentence: "Förändrar du din strategi?"}, future: {verb: "ska förändra", sentence: "Vi ska förändra planerna"}},
   bryta: {past: {verb: "bröt", sentence: "Han bröt reglerna"}, present: {verb: "bryter", sentence: "Bryter du ofta löften?"}, future: {verb: "ska bryta", sentence: "Jag ska bryta tystnaden"}},
   blomma: {past: {verb: "blommade", sentence: "Trädgården blommade vackert"}, present: {verb: "blommar", sentence: "Blommar rosorna nu?"}, future: {verb: "ska blomma", sentence: "De ska blomma i vår"}},
   skriva: {past: {verb: "skrev", sentence: "Jag skrev en berättelse"}, present: {verb: "skriver", sentence: "Skriver du dagbok?"}, future: {verb: "ska skriva", sentence: "Vi ska skriva en rapport"}},
   bygga: {past: {verb: "byggde", sentence: "Vi byggde ett hus"}, present: {verb: "bygger", sentence: "Bygger du möbler?"}, future: {verb: "ska bygga", sentence: "De ska bygga en bro"}},
   må: {past: {verb: "mådde", sentence: "Hon mådde bra"}, present: {verb: "mår", sentence: "Mår du bra?"}, future: {verb: "ska må", sentence: "Jag ska må bättre"}},
   förneka: {past: {verb: "förnekade", sentence: "Han förnekade allt"}, present: {verb: "förnekar", sentence: "Förnekar du sanningen?"}, future: {verb: "ska förneka", sentence: "Vi ska förneka anklagelserna"}},
   promenera: {past: {verb: "promenerade", sentence: "Vi promenerade i parken"}, present: {verb: "promenerar", sentence: "Promenerar du varje dag?"}, future: {verb: "ska promenera", sentence: "Jag ska promenera längs stranden"}},
   sälja: {past: {verb: "sålde", sentence: "Han sålde sin bil"}, present: {verb: "säljer", sentence: "Säljer du begagnade saker?"}, future: {verb: "ska sälja", sentence: "De ska sälja sina möbler"}},
   skära: {past: {verb: "skar", sentence: "Jag skar brödet"}, present: {verb: "skär", sentence: "Skär du grönsaker?"}, future: {verb: "ska skära", sentence: "Jag ska skära frukt"}},
   sjunga: {past: {verb: "sjöng", sentence: "Hon sjöng vackert"}, present: {verb: "sjunger", sentence: "Sjunger du i kör?"}, future: {verb: "ska sjunga", sentence: "Vi ska sjunga en sång"}},
   stänga: {past: {verb: "stängde", sentence: "Han stängde dörren"}, present: {verb: "stänger", sentence: "Stänger du fönstret?"}, future: {verb: "ska stänga", sentence: "Jag ska stänga av ljudet"}},
   tvätta: {past: {verb: "tvättade", sentence: "Jag tvättade kläderna"}, present: {verb: "tvättar", sentence: "Tvättar du bilen?"}, future: {verb: "ska tvätta", sentence: "Vi ska tvätta bilen imorgon"}},
   upptäcka: {past: {verb: "upptäckte", sentence: "De upptäckte en ny planet"}, present: {verb: "upptäcker", sentence: "Upptäcker du något nytt?"}, future: {verb: "ska upptäcka", sentence: "Vi ska upptäcka nya platser"}},

   skriva: {past: {verb: "skrev", sentence: "Jag skrev en bok"}, present: {verb: "skriver", sentence: "Skriver du dagligen?"}, future: {verb: "ska skriva", sentence: "Vi ska skriva en artikel"}},
   lära: {past: {verb: "lärde", sentence: "Jag lärde mig ett nytt språk"}, present: {verb: "lär", sentence: "Lär du andra människor?"}, future: {verb: "ska lära", sentence: "Vi ska lära oss en dans"}},
   drömma: {past: {verb: "drömde", sentence: "Jag drömde om en resa"}, present: {verb: "drömmer", sentence: "Drömmer du ofta?"}, future: {verb: "ska drömma", sentence: "Vi ska drömma stort"}},
   vakna: {past: {verb: "vaknade", sentence: "Jag vaknade tidigt"}, present: {verb: "vaknar", sentence: "Vaknar du av ljud?"}, future: {verb: "ska vakna", sentence: "Jag ska vakna tidigare"}},
   sjunka: {past: {verb: "sjönk", sentence: "Solen sjönk bakom bergen"}, present: {verb: "sjunker", sentence: "Sjunker temperaturen?"}, future: {verb: "ska sjunka", sentence: "Temperaturen ska sjunka imorgon"}},
   njuta: {past: {verb: "njöt", sentence: "Vi njöt av solnedgången"}, present: {verb: "njuter", sentence: "Njuter du av naturen?"}, future: {verb: "ska njuta", sentence: "Vi ska njuta av semestern"}},
   sträcka: {past: {verb: "sträckte", sentence: "Jag sträckte på mig"}, present: {verb: "sträcker", sentence: "Sträcker du på benen?"}, future: {verb: "ska sträcka", sentence: "Jag ska sträcka ut armarna"}},
   överraska: {past: {verb: "överraskade", sentence: "Han överraskade mig med en present"}, present: {verb: "överraskar", sentence: "Överraskar du gärna?"}, future: {verb: "ska överraska", sentence: "Jag ska överraska min vän"}},
   klaga: {past: {verb: "klagade", sentence: "Han klagade på vädret"}, present: {verb: "klagar", sentence: "Klagar du ofta?"}, future: {verb: "ska klaga", sentence: "Jag ska klaga på servicen"}},
   smaka: {past: {verb: "smakade", sentence: "Maten smakade gott"}, present: {verb: "smakar", sentence: "Smakar det bra?"}, future: {verb: "ska smaka", sentence: "Vi ska smaka på nya rätter"}},
   oroa: {past: {verb: "oroade", sentence: "Jag oroade mig för framtiden"}, present: {verb: "oroar", sentence: "Oroar du dig ofta?"}, future: {verb: "ska oroa", sentence: "Jag ska oroa mig mindre"}},
   klättra: {past: {verb: "klättrade", sentence: "Vi klättrade uppför berget"}, present: {verb: "klättrar", sentence: "Klättrar du i träd?"}, future: {verb: "ska klättra", sentence: "Jag ska klättra på klipporna"}},
   imponera: {past: {verb: "imponerade", sentence: "Hon imponerade på alla"}, present: {verb: "imponerar", sentence: "Imponerar du lätt?"}, future: {verb: "ska imponera", sentence: "Vi ska imponera på juryn"}},
   förbereda: {past: {verb: "förberedde", sentence: "Jag förberedde mig inför mötet"}, present: {verb: "förbereder", sentence: "Förbereder du ofta?"}, future: {verb: "ska förbereda", sentence: "Jag ska förbereda en presentation"}},
   erbjuda: {past: {verb: " erbjöd", sentence: "Han erbjöd sin hjälp"}, present: {verb: "erbjuder", sentence: "Erbjuder du din assistans?"}, future: {verb: "ska erbjuda", sentence: "Vi ska erbjuda vårt stöd"}},
   förklara: {past: {verb: "förklarade", sentence: "Läraren förklarade uppgiften"}, present: {verb: "förklarar", sentence: "Förklarar du tydligt?"}, future: {verb: "ska förklara", sentence: "Jag ska förklara reglerna"}},
   bada: {past: {verb: "badade", sentence: "Vi badade i sjön"}, present: {verb: "badar", sentence: "Badar du i havet?"}, future: {verb: "ska bada", sentence: "Jag ska bada varje morgon"}},
   stryka: {past: {verb: "strök", sentence: "Jag strök min skjorta"}, present: {verb: "stryker", sentence: "Stryker du kläderna?"}, future: {verb: "ska stryka", sentence: "Jag ska stryka mina kläder"}},
   påminna: {past: {verb: "påminde", sentence: "Hon påminde mig om mötet"}, present: {verb: "påminner", sentence: "Påminner du folk om sina åtaganden?"}, future: {verb: "ska påminna", sentence: "Jag ska påminna dem om deadline"}},
   avsluta: {past: {verb: "avslutade", sentence: "Vi avslutade projektet"}, present: {verb: "avslutar", sentence: "Avslutar du alltid det du påbörjar?"}, future: {verb: "ska avsluta", sentence: "Jag ska avsluta mitt arbete"}},

   diskutera: {past: {verb: "diskuterade", sentence: "Vi diskuterade olika alternativ"}, present: {verb: "diskuterar", sentence: "Diskuterar du politik?"}, future: {verb: "ska diskutera", sentence: "Vi ska diskutera planerna"}},
   odla: {past: {verb: "odlade", sentence: "Vi odlade grönsaker i trädgården"}, present: {verb: "odlar", sentence: "Odlar du något själv?"}, future: {verb: "ska odla", sentence: "Jag ska odla blommor"}},
   försvinna: {past: {verb: "försvann", sentence: "Spåret försvann i skogen"}, present: {verb: "försvinner", sentence: "Försvinner du ibland?"}, future: {verb: "ska försvinna", sentence: "Det ska försvinna snart"}},
   observera: {past: {verb: "observerade", sentence: "Vi observerade fåglarna"}, present: {verb: "observerar", sentence: "Observerar du naturen ofta?"}, future: {verb: "ska observera", sentence: "Jag ska observera himlen"}},
   lyckas: {past: {verb: "lyckades", sentence: "Hon lyckades övervinna hindren"}, present: {verb: "lyckas", sentence: "Lyckas du med dina mål?"}, future: {verb: "ska lyckas", sentence: "Vi ska lyckas tillsammans"}},
   förstöra: {past: {verb: "förstörde", sentence: "Han förstörde målningen"}, present: {verb: "förstör", sentence: "Förstör du ofta saker?"}, future: {verb: "ska förstöra", sentence: "Jag ska förstöra bevisen"}},
   anpassa: {past: {verb: "anpassade", sentence: "Vi anpassade oss till förändringarna"}, present: {verb: "anpassar", sentence: "Anpassar du dig lätt?"}, future: {verb: "ska anpassa", sentence: "Jag ska anpassa mig efter situationen"}},
   överleva: {past: {verb: "överlevde", sentence: "De överlevde stormen"}, present: {verb: "överlever", sentence: "Överlever du i naturen?"}, future: {verb: "ska överleva", sentence: "Vi ska överleva svårigheterna"}},
   tävla: {past: {verb: "tävlade", sentence: "Vi tävlade i simning"}, present: {verb: "tävlar", sentence: "Tävlar du i idrott?"}, future: {verb: "ska tävla", sentence: "Jag ska tävla i maraton"}},
   må: {past: {verb: "mådde", sentence: "Jag mådde bra igår"}, present: {verb: "mår", sentence: "Mår du bra idag?"}, future: {verb: "ska må", sentence: "Jag ska må ännu bättre"}},
   flytta: {past: {verb: "flyttade", sentence: "Vi flyttade till en ny stad"}, present: {verb: "flyttar", sentence: "Flyttar du ofta?"}, future: {verb: "ska flytta", sentence: "Jag ska flytta till en större lägenhet"}},
   besöka: {past: {verb: "besökte", sentence: "Vi besökte museet"}, present: {verb: "besöker", sentence: "Besöker du platser med historia?"}, future: {verb: "ska besöka", sentence: "Jag ska besöka mina föräldrar"}},
   trivas: {past: {verb: "trivdes", sentence: "Hon trivdes på semestern"}, present: {verb: "trivs", sentence: "Trivs du på jobbet?"}, future: {verb: "ska trivas", sentence: "Jag ska trivas i det nya sammanhanget"}},
   räkna: {past: {verb: "räknade", sentence: "Jag räknade pengarna"}, present: {verb: "räknar", sentence: "Räknar du ofta i huvudet?"}, future: {verb: "ska räkna", sentence: "Vi ska räkna ut kostnaderna"}},
   stjäla: {past: {verb: "stal", sentence: "Han stal min cykel"}, present: {verb: "stjäl", sentence: "Stjäl du någonsin?"}, future: {verb: "ska stjäla", sentence: "Jag ska inte stjäla"}},
   förlåta: {past: {verb: "förlät", sentence: "Jag förlät honom för misstaget"}, present: {verb: "förlåter", sentence: "Förlåter du lätt?"}, future: {verb: "ska förlåta", sentence: "Jag ska förlåta och glömma"}},
   gunga: {past: {verb: "gungade", sentence: "Vi gungade på lekplatsen"}, present: {verb: "gungar", sentence: "Gungar du högt?"}, future: {verb: "ska gunga", sentence: "Jag ska gunga i trädgården"}},
   sudda: {past: {verb: "suddade", sentence: "Jag suddade ut felet"}, present: {verb: "suddar", sentence: "Suddar du mycket?"}, future: {verb: "ska sudda", sentence: "Jag ska sudda bort det"}},
   utveckla: {past: {verb: "utvecklade", sentence: "Vi utvecklade en ny produkt"}, present: {verb: "utvecklar", sentence: "Utvecklar du program?"}, future: {verb: "ska utveckla", sentence: "Jag ska utveckla mina färdigheter"}},
   möta: {past: {verb: "mötte", sentence: "Vi mötte varandra på tåget"}, present: {verb: "möter", sentence: "Möter du nya människor ofta?"}, future: {verb: "ska möta", sentence: "Jag ska möta min vän vid stationen"}},

   beundra: {past: {verb: "beundrade", sentence: "Jag beundrade konstverket"}, present: {verb: "beundrar", sentence: "Beundrar du andras talang?"}, future: {verb: "ska beundra", sentence: "Jag ska beundra skådespelaren"}},
   gråta: {past: {verb: "grät", sentence: "Hon grät av lycka"}, present: {verb: "gråter", sentence: "Gråter du lätt?"}, future: {verb: "ska gråta", sentence: "Jag ska gråta av glädje"}},
   glöda: {past: {verb: "glödde", sentence: "Kolerna glödde i elden"}, present: {verb: "glöder", sentence: "Glöder det fortfarande?"}, future: {verb: "ska glöda", sentence: "Det ska glöda intensivt"}},
   utforska: {past: {verb: "utforskade", sentence: "Vi utforskade okända områden"}, present: {verb: "utforskar", sentence: "Utforskar du gärna nya platser?"}, future: {verb: "ska utforska", sentence: "Jag ska utforska naturen"}},
   växla: {past: {verb: "växlade", sentence: "Jag växlade pengar på banken"}, present: {verb: "växlar", sentence: "Växlar du valuta ofta?"}, future: {verb: "ska växla", sentence: "Vi ska växla till euro"}},
   gilla: {past: {verb: "gillade", sentence: "Jag gillade filmen"}, present: {verb: "gillar", sentence: "Gillar du att läsa?"}, future: {verb: "ska gilla", sentence: "Jag ska gilla inlägget"}},
   snubbla: {past: {verb: "snubblade", sentence: "Han snubblade över trottoarkanten"}, present: {verb: "snubblar", sentence: "Snubblar du lätt?"}, future: {verb: "ska snubbla", sentence: "Jag ska inte snubbla igen"}},
   betrakta: {past: {verb: "betraktade", sentence: "Vi betraktade solnedgången"}, present: {verb: "betraktar", sentence: "Betraktar du stjärnorna?"}, future: {verb: "ska betrakta", sentence: "Vi ska betrakta konstverken"}},
   byta: {past: {verb: "bytte", sentence: "Vi bytte erfarenheter"}, present: {verb: "byter", sentence: "Byter du tankar med andra?"}, future: {verb: "ska byta", sentence: "Jag ska byta buss"}},
   klippa: {past: {verb: "klippte", sentence: "Hon klippte sitt hår kort"}, present: {verb: "klipper", sentence: "Klipper du själv ditt hår?"}, future: {verb: "ska klippa", sentence: "Jag ska klippa häcken"}},
   vila: {past: {verb: "vilade", sentence: "Jag vilade en stund efter jobbet"}, present: {verb: "vilar", sentence: "Vilar du mycket?"}, future: {verb: "ska vila", sentence: "Jag ska vila under semestern"}},
   sucka: {past: {verb: "suckade", sentence: "Hon suckade av tristess"}, present: {verb: "suckar", sentence: "Suckar du ibland?"}, future: {verb: "ska sucka", sentence: "Jag ska sucka över arbetsbördan"}},
   klara: {past: {verb: "klarade", sentence: "Jag klarade tentamen"}, present: {verb: "klarar", sentence: "Klarar du stress?"}, future: {verb: "ska klara", sentence: "Vi ska klara utmaningen"}},
   överrösta: {past: {verb: "överröstade", sentence: "Musiken överröstade konversationen"}, present: {verb: "överröstar", sentence: "Överröstar du lätt? "}, future: {verb: "ska överrösta", sentence: "Vi ska överrösta bullret"}},
   laga: {past: {verb: "lagade", sentence: "Jag lagade middag igår"}, present: {verb: "lagar", sentence: "Lagar du mat ofta?"}, future: {verb: "ska laga", sentence: "Vi ska laga en ny rätt"}},
   slappna: {past: {verb: "slappnade", sentence: "Jag slappnade av i badet"}, present: {verb: "slappnar", sentence: "Slappnar du av lätt?"}, future: {verb: "ska slappna", sentence: "Jag ska slappna av på semestern"}},
   luta: {past: {verb: "lutade", sentence: "Han lutade sig mot väggen"}, present: {verb: "lutar", sentence: "Lutar du din stol bakåt?"}, future: {verb: "ska luta", sentence: "Jag ska luta mig över balkongen"}},
   giva: {past: {verb: "gav", sentence: "Jag gav en present till min vän"}, present: {verb: "giver", sentence: "Giver du ofta presenter?"}, future: {verb: "ska giva", sentence: "Vi ska giva välgörenhet"}},
   vrida: {past: {verb: "vred", sentence: "Han vred om nyckeln i låset"}, present: {verb: "vrider", sentence: "Vrider du på kranen?"}, future: {verb: "ska vrida", sentence: "Jag ska vrida upp värmen"}},
   surfa: {past: {verb: "surfade", sentence: "Jag surfade på internet hela kvällen"}, present: {verb: "surfar", sentence: "Surfar du mycket?"}, future: {verb: "ska surfa", sentence: "Vi ska surfa på nya webbsidor"}},

   förlora: {past: {verb: "förlorade", sentence: "Vi förlorade matchen"}, present: {verb: "förlorar", sentence: "Förlorar du lätt?"}, future: {verb: "ska förlora", sentence: "Jag ska inte förlora nästa gång"}},
   dansa: {past: {verb: "dansade", sentence: "Vi dansade hela natten"}, present: {verb: "dansar", sentence: "Dansar du på fester?"}, future: {verb: "ska dansa", sentence: "Jag ska dansa på bröllopet"}},
   röra: {past: {verb: "rörde", sentence: "Han rörde vid konstverket"}, present: {verb: "rör", sentence: "Rör du maten när du lagar?"}, future: {verb: "ska röra", sentence: "Jag ska röra ingredienserna noggrant"}},
   hälsa: {past: {verb: "hälsade", sentence: "Jag hälsade på grannarna"}, present: {verb: "hälsar", sentence: "Hälsar du på alla du möter?"}, future: {verb: "ska hälsa", sentence: "Jag ska hälsa på släkten"}},
   klappa: {past: {verb: "klappade", sentence: "Vi klappade hunden"}, present: {verb: "klappar", sentence: "Klappar du djur?"}, future: {verb: "ska klappa", sentence: "Jag ska klappa barnet på huvudet"}},
   sova: {past: {verb: "sov", sentence: "Jag sov gott igår"}, present: {verb: "sover", sentence: "Sover du bra?"}, future: {verb: "ska sova", sentence: "Jag ska sova tidigt ikväll"}},
   förstå: {past: {verb: "förstod", sentence: "Jag förstod inte frågan"}, present: {verb: "förstår", sentence: "Förstår du matematik?"}, future: {verb: "ska förstå", sentence: "Jag ska förstå uppgiften bättre"}},
   fota: {past: {verb: "fotade", sentence: "Jag fotade vackra landskap"}, present: {verb: "fotar", sentence: "Fotar du ofta med din telefon?"}, future: {verb: "ska fota", sentence: "Vi ska fota solnedgången"}},
   bekräfta: {past: {verb: "bekräftade", sentence: "Han bekräftade sitt deltagande"}, present: {verb: "bekräftar", sentence: "Bekräftar du din närvaro?"}, future: {verb: "ska bekräfta", sentence: "Jag ska bekräfta reservationen"}},
   hänga: {past: {verb: "hängde", sentence: "Bilden hängde på väggen"}, present: {verb: "hänger", sentence: "Hänger du ofta med vänner?"}, future: {verb: "ska hänga", sentence: "Jag ska hänga upp gardinerna"}},
   föra: {past: {verb: "förde", sentence: "Han förde oss genom staden"}, present: {verb: "för", sentence: "För du ofta långa diskussioner?"}, future: {verb: "ska föra", sentence: "Jag ska föra gruppen till målet"}},
   fundera: {past: {verb: "funderade", sentence: "Jag funderade på livets mening"}, present: {verb: "funderar", sentence: "Funderar du på framtiden?"}, future: {verb: "ska fundera", sentence: "Vi ska fundera på möjligheterna"}},
   skaka: {past: {verb: "skakade", sentence: "Jordbävningen skakade huset"}, present: {verb: "skakar", sentence: "Skakar du hand innan möten?"}, future: {verb: "ska skaka", sentence: "Jag ska skaka om ingredienserna"}},
   vänta: {past: {verb: "väntade", sentence: "Vi väntade på bussen"}, present: {verb: "väntar", sentence: "Väntar du på någon?"}, future: {verb: "ska vänta", sentence: "Jag ska vänta vid stationen"}},
   brista: {past: {verb: "brast", sentence: "Hans hjärta brast av sorg"}, present: {verb: "brister", sentence: "Brister du lätt i gråt?"}, future: {verb: "ska brista", sentence: "Det ska inte brista i planerna"}},
   gräva: {past: {verb: "grävde", sentence: "Vi grävde ett hål i trädgården"}, present: {verb: "gräver", sentence: "Gräver du ofta i trädgården?"}, future: {verb: "ska gräva", sentence: "Jag ska gräva en grop"}},
   sörja: {past: {verb: "sörjde", sentence: "Vi sörjde förlusten"}, present: {verb: "sörjer", sentence: "Sörjer du länge?"}, future: {verb: "ska sörja", sentence: "Jag ska sörja min gamle vän"}},
   skapa: {past: {verb: "skapade", sentence: "Hon skapade konstverk"}, present: {verb: "skapar", sentence: "Skapar du konst?"}, future: {verb: "ska skapa", sentence: "Jag ska skapa en ny idé"}},
   öppna: {past: {verb: "öppnade", sentence: "Jag öppnade brevet"}, present: {verb: "öppnar", sentence: "Öppnar du dörren för främlingar?"}, future: {verb: "ska öppna", sentence: "Jag ska öppna presenten"}},
   betyda: {past: {verb: "betydde", sentence: "Ditt stöd betydde mycket"}, present: {verb: "betyder", sentence: "Betyder ord mycket för dig?"}, future: {verb: "ska betyda", sentence: "Det ska betyda en förändring"}}
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
