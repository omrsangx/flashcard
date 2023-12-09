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
   "leker":"playing",
   "hon":"she",
   "hoppar":"jumping",
   "inte":"not",
   "kvinnan":"the woman",
   "sin":"its",
   "han":"he",
   "flickan":"the girl",
   "visar":"shows",
   "bok":"Book",
   "de":"the",
   "och":"and",
   "står":"stands",
   "dina":"yours",
   "jag":"I",
   "arbetar":"working",
   "pojken":"the boy",
   "djur":"animal",
   "fåglarna":"the birds",
   "gråter":"crying",
   "flyger":"flying",
   "hittar":"finds",
   "skrattar":"laughing",
   "katten":"the cat",
   "sitter":"sitting",
   "sina":"theirs",
   "tvättar":"washes",
   "barnen":"the children",
   "en":"one",
   "till":"to",
   "bröd":"bread",
   "har":"have",
   "är":"is",
   "åtta":"eight",
   "sju":"seven",
   "nu":"now",
   "finns":"exists",
   "tio":"ten",
   "två":"two",
   "eller":"or",
   "sover":"sleeping",
   "mindre":"less",
   "äter":"eats",
   "i":"in",
   "det":"the",
   "nio":"nine",
   "sex":"six",
   "ungefär":"approximately",
   "fler":"more",
   "fem":"five",
   "du":"you",
   "vad":"What",
   "fyra":"four",
   "för":"for",
   "tre":"three",
   "hans":"his",
   "barn":"children",
   "hennes":"her",
   "elefanter":"elephants",
   "tar":"takes",
   "långt":"far",
   "älskar":"love",
   "skriver":"writes",
   "äpplen":"apples",
   "mig":"me",
   "frukt":"fruit",
   "säljer":"selling",
   "sjunger":"sings",
   "innan":"before",
   "att":"to",
   "medan":"while",
   "dem":"them",
   "vi":"we",
   "älg":"Moose",
   "springer":"runs",
   "utan":"without",
   "vegetarian":"vegetarian",
   "honom":"him",
   "eftersom":"since",
   "regnar":"is raining",
   "därför":"because",
   "använder":"uses",
   "tidning":"newspaper",
   "kyckling":"chicken",
   "lagar":"laws",
   "henne":"her",
   "går":"goes",
   "mat":"food",
   "pratar":"talking",
   "läser":"reading",
   "lyssnar":"listening",
   "mannen":"the man",
   "som":"as",
   "helst":"preferably",
   "tycker":"think",
   "svenska":"Swedish",
   "kommer":"comes",
   "te":"tea",
   "när":"when",
   "åker":"goes",
   "vet":"know",
   "vill":"wants",
   "talar":"speaking",
   "engelska":"English",
   "fläskkött":"pork",
   "men":"but",
   "kaffe":"coffee",
   "fisk":"fish",
   "dricker":"drinks",
   "min":"my",
   "om":"if",
   "om":"if",
   "kött":"meat",
   "smörgås":"sandwich",
   "pojkar":"boys",
   "mjölk":"milk",
   "flickor":"girls",
   "ett":"one",
   "män":"men",
   "frukost":"breakfast",
   "jordgubbe":"strawberry",
   "ägg":"egg",
   "ost":"cheese",
   "soppa":"soup",
   "apelsin":"orange",
   "peppar":"pepper",
   "citron":"lemon",
   "vin":"wine",
   "pasta":"pasta",
   "salt":"salt",
   "lunch":"lunch",
   "meny":"menu",
   "tomat":"tomato",
   "äpple":"apple",
   "man":"MAN",
   "vatten":"water",
   "kvinna":"woman",
   "flicka":"girl",
   "pojke":"boy",
   "restaurangernas":"of restaurants",
   "böcker":"books",
   "våra":"ours",
   "ris":"rice",
   "hästen":"the horse",
   "katt":"Cat",
   "fågeln":"the bird",
   "hunden":"the dog",
   "häst":"horse",
   "fågel":"bird",
   "hund":"dog",
   "mycket":"very",
   "då":"then",
   "god":"good",
   "nej":"No",
   "ursäkta":"excuse",
   "hallå":"Hello",
   "morgon":"morning",
   "hej":"Hello",
   "tack":"thanks",
   "natt":"night",
   "så":"so",
   "varsågod":"You are welcome",
   "ja":"yes",
   "ni":"you",
   "dig":"you",
   "barnet":"the child",
   "er":"your",
   "oss":"U.S",
   "det":"the",
   "den":"the",
   "öl":"beer",
   "glass":"ice cream",
   "måltid":"meal",
   "kvinnor":"women",
   "väljer":"chooses",
   "betalar":"pays",
   "hästarna":"the horses",
   "hör":"hear",
   "ritar":"draws",
   "smörgåsen":"the sandwich",
   "fisken":"the fish",
   "vattnet":"the water",
   "saltet":"the salt",
   "glassen":"the ice cream",
   "ägget":"the egg",
   "sköldpadda":"turtle",
   "ankan":"the duck",
   "djur":"animal",
   "elefant":"Elephant",
   "juice":"juice",
   "socker":"sugar",
   "äpplet":"the apple",
   "nötkött":"beef",
   "olja":"oil",
   "snälla":"please",
   "spindeln":"the spider",
   "björn":"bear",
   "krabban":"the crab",
   "elefanten":"the elephant",
   "spindel":"spider",
   "sköldpaddan":"the turtle",
   "krabba":"crab",
   "lunchen":"the lunch",
   "nötköttet":"the beef",
   "pastan":"the pasta",
   "riset":"the rice",
   "maten":"The food",
   "frukosten":"the breakfast",
   "osten":"the cheese",
   "citronen":"the lemon",
   "sexton":"sixteen",
   "liten":"small",
   "gammal":"old",
   "lille":"little",
   "tåget":"the train",
   "bil":"car",
   "bilar":"cars",
   "resväska":"suitcase",
   "bilen":"the car",
   "tåg":"train",
   "cykel":"bike",
   "cyklar":"bicycles",
   "vilket":"which",
   "långsamt":"slowly",
   "var":"where",
   "till":"to",
   "bara":"only",
   "vems":"whose",
   "av":"of",
   "köper":"buys",
   "helt":"completely",
   "reser":"travels",
   "vårt":"ours",
   "rosa":"pink",
   "svart":"black",
   "mina":"mine",
   "på":"on",
   "orange":"orange",
   "sig":"one",
   "barn":"children",
   "flera":"several",
   "på":"on",
   "brev":"mail",
   "stöttar":"supports",
   "mitt":"my",
   "många":"many",
   "din":"your",
   "söder":"South",
   "amerikansk":"American",
   "norska":"Norwegian",
   "engelsk":"English",
   "norrmännen":"the Norwegians",
   "turist":"tourist",
   "finlandssvensk":"Finnish Swedish",
   "norsk":"Norwegian",
   "finlandssvenska":"Finnish Swedish",
   "turister":"tourists",
   "ut":"out",
   "ser":"looks",
   "bra":"Good",
   "här":"here",
   "med":"with",
   "ligger":"is located",
   "varför":"why",
   "förstår":"understand",
   "om":"if",
   "kycklingen":"the chicken",
   "sockret":"the sugar",
   "soppan":"the soup",
   "vinet":"the wine",
   "köttet":"the meat",
   "frukten":"the fruit",
   "teet":"the tea",
   "kaffet":"the coffee",
   "tidningen":"the newspaper",
   "mot":"against",
   "gör":"make",
   "vem":"who",
   "vart":"where",
   "vilka":"which",
   "hur":"how",
   "simmar":"swimming",
   "djuret":"the animal",
   "kronprinsessa":"Crown Princess",
   "killar":"boys",
   "par":"couple",
   "killen":"the guy",
   "kille":"boy",
   "ändå":"still",
   "anka":"duck",
   "björnen":"the bear",
   "älgen":"the elk",
   "ha":"have",
   "oljan":"the oil",
   "jordgubben":"the strawberry",
   "pepparn":"the pepper",
   "tomaten":"the tomato",
   "fläskköttet":"the pork",
   "lila":"purple",
   "ingen":"No",
   "vita":"White",
   "palats":"palace",
   "där":"where",
   "borta":"away",
   "gammalt":"old",
   "bor":"lives",
   "inga":"no",
   "utanför":"outside",
   "nära":"close",
   "vilken":"which",
   "svarar":"answers",
   "jo":"yes",
   "frågar":"asks",
   "vid":"at",
   "genom":"by",
   "för":"for",
   "öppna":"Open",
   "när":"when",
   "inget":"nothing",
   "smörgåsar":"sandwiches",
   "kockar":"cooks",
   "elefanterna":"the elephants",
   "äpplena":"The apples",
   "tidningarna":"the newspapers",
   "kvinnorna":"the women",
   "männen":"the men",
   "hundarna":"the dogs",
   "katterna":"the cats",
   "fåglar":"birds",
   "sent":"late",
   "heller":"either",
   "ens":"even",
   "snart":"soon",
   "sällan":"rarely",
   "möjligtvis":"possibly",
   "ankorna":"the ducks",
   "nyckeln":"the key",
   "tyget":"the fabric",
   "nyckel":"key",
   "bakom":"behind",
   "tyska":"German",
   "resor":"trips",
   "tysk":"German",
   "cykeln":"the bicycle",
   "karta":"map",
   "äventyret":"the adventure",
   "semester":"vacation",
   "europeiskt":"European",
   "resa":"trip",
   "äventyr":"adventure",
   "skandinavien":"Scandinavia",
   "över":"over",
   "era":"era",
   "bussen":"the bus",
   "guide":"guide",
   "flygplanet":"the aircraft",
   "kinesiska":"Chinese",
   "flygplan":"aircraft",
   "svensk":"Swedish",
   "svenskt":"Swedish",
   "ryggsäck":"backpack",
   "dansken":"the Dane",
   "dansk":"danish",
   "kinesiskt":"Chinese",
   "danska":"Danish",
   "vanligtvis":"usually",
   "behöver":"need",
   "hållplats":"stop",
   "fordon":"vehicle",
   "planet":"planet",
   "motorcykel":"motorbike",
   "tunnelbanan":"the subway",
   "utomlands":"abroad",
   "runt":"around",
   "svänger":"swings",
   "kulturer":"cultures",
   "kungen":"the king",
   "prinsen":"the prince",
   "konferens":"conference",
   "prins":"prince",
   "dam":"Lady",
   "förhållande":"relationship",
   "kultur":"culture",
   "vuxen":"adult",
   "byn":"the village",
   "konferensen":"the conference",
   "damen":"the lady",
   "ert":"your",
   "också":"also",
   "vit":"White",
   "blåa":"blue",
   "gula":"yellow",
   "tallrikarna":"plates",
   "museet":"the museum",
   "allén":"the avenue",
   "museum":"museum",
   "än":"than",
   "ofta":"Often",
   "döttrars":"daughters'",
   "söner":"sons",
   "kommitté":"committee",
   "prinsessa":"princess",
   "offret":"the victim",
   "lådan":"the box",
   "ger":"gives",
   "slut":"final",
   "ditt":"your",
   "vitt":"White",
   "katter":"cats",
   "svarta":"black",
   "paraplyer":"umbrellas",
   "garderoben":"the wardrobe",
   "duken":"the cloth",
   "telefon":"phone",
   "våning":"floor",
   "duk":"cloth",
   "garderob":"wardrobe",
   "paraplyet":"the umbrella",
   "paraply":"umbrella",
   "plånbok":"wallet",
   "lakanet":"the sheet",
   "rakhyvel":"razor",
   "skålarna":"the bowls",
   "pool":"pool",
   "leksak":"toy",
   "snören":"the strings",
   "alltid":"always",
   "gamla":"old",
   "rum":"room",
   "från":"from",
   "tittar":"watching",
   "kanske":"perhaps",
   "väska":"bag",
   "motorn":"the engine",
   "väskan":"the bag",
   "motor":"engine",
   "romanen":"the novel",
   "roman":"novel",
   "papper":"paper",
   "pulver":"powder",
   "väskor":"bags",
   "utan":"without",
   "fickor":"pockets",
   "knappar":"buttons",
   "knapp":"button",
   "tröjor":"sweaters",
   "kastrullerna":"the pans",
   "kastrull":"saucepan",
   "kammen":"the comb",
   "väggen":"the wall",
   "täcke":"quilt",
   "hjulen":"the wheels",
   "taket":"the ceiling",
   "önskar":"wish",
   "skärmen":"screen",
   "gardinen":"the curtain",
   "skärm":"screen",
   "maskin":"machine",
   "mer":"more",
   "väldigt":"very",
   "fabriker":"factories",
   "platsen":"the place",
   "bondgårdar":"farms",
   "bondgård":"farmhouse",
   "affär":"business",
   "marknad":"market",
   "plats":"place",
   "längs":"along",
   "små":"small",
   "litet":"small",
   "lilla":"small",
   "ledsen":"sorry",
   "snygga":"good-looking",
   "fel":"wrong",
   "dal":"valley",
   "framsida":"front",
   "västkust":"west coast",
   "framsidan":"the front side",
   "dalen":"the valley",
   "städerna":"the cities",
   "norra":"North",
   "västkusten":"west coast",
   "torn":"tower",
   "tornet":"the tower",
   "städer":"cities",
   "norr":"north",
   "allé":"avenue",
   "alléerna":"the avenues",
   "regionen":"the region",
   "länder":"countries",
   "bar":"bar",
   "adress":"address",
   "region":"region",
   "slottet":"the castle",
   "regionerna":"the regions",
   "marken":"the ground",
   "barer":"bars",
   "bastu":"sauna",
   "barerna":"the bars",
   "bastun":"sauna",
   "centrum":"center",
   "väster":"West",
   "flygplatser":"airports",
   "avdelningen":"the department",
   "toaletter":"toilets",
   "toaletten":"the toilet",
   "kontor":"office",
   "torget":"the square",
   "flygplats":"airport",
   "torg":"square",
   "avdelning":"section",
   "sjöar":"lakes",
   "palatset":"the palace",
   "område":"area",
   "egendom":"property",
   "nöjesfältet":"the amusement park",
   "kuster":"coasts",
   "parker":"parks",
   "hos":"at",
   "litar":"trusts",
   "äntligen":"finally",
   "både":"both",
   "tillsammans":"together",
   "bort":"away",
   "precis":"just",
   "hit":"here",
   "tror":"think",
   "åtminstone":"at least",
   "fortfarande":"still",
   "aldrig":"Never",
   "ganska":"quite",
   "tydligt":"clearly",
   "redan":"already",
   "varken":"neither",
   "definitivt":"definitely",
   "absolut":"absolutely",
   "ibland":"sometimes",
   "särskilt":"particularly",
   "nästan":"almost",
   "försöker":"trying",
   "tillräckligt":"enough",
   "troligtvis":"belike",
   "igen":"again",
   "studerar":"studying",
   "senare":"later",
   "verkligen":"really",
   "nödvändigtvis":"necessarily",
   "egentligen":"actually",
   "dit":"there",
   "faktiskt":"actually",
   "morgon":"morning",
   "bjuder":"invites",
   "räcker":"is enough",
   "hinner":"have time to",
   "presenterar":"presents",
   "kysser":"kisses",
   "sitt":"his",
   "passerar":"passes",
   "känner":"feel",
   "följer":"follows",
   "efter":"after",
   "slutar":"ends",
   "stannar":"stops",
   "framför":"in front",
   "hjälper":"helps",
   "verkar":"seems",
   "säger":"says",
   "letar":"looking",
   "lär":"learn",
   "berömda":"famous",
   "berömd":"famous",
   "farbror":"uncle",
   "fasters":"aunts",
   "farbrors":"uncle's",
   "faster":"aunt",
   "familjen":"the family",
   "brandman":"fire-fighter",
   "arbetare":"worker",
   "ingenjören":"the engineer",
   "läkaren":"the doctor",
   "hästar":"horses",
   "författare":"Author",
   "onsdagar":"Wednesdays",
   "deras":"their",
   "torsdag":"Thursday",
   "tallrikar":"plates",
   "sköldpaddor":"turtles",
   "ankor":"ducks",
   "håller":"holding",
   "mellan":"between",
   "bredvid":"beside",
   "framåt":"Forward",
   "före":"before",
   "enligt":"according to",
   "dess":"its",
   "er":"your",
   "hundar":"dogs",
   "vår":"our",
   "röda":"red"
}

var vocabularyObject = phrases; 
var sourceWord = Object.keys(vocabularyObject);
var translateTo = Object.values(vocabularyObject);
var total = sourceWord.length-1
var count = 0;
var touchWordToChange = 1;
var metaThemeColor = document.querySelector("meta[name=theme-color]");
var pronounceWord = sourceWord[0]

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
   // console.log("Inside the vocabulary function", idValue);
   sourceWord = Object.keys(idValue);
   translateTo = Object.values(idValue);
   document.getElementById('value').innerHTML = sourceWord[0]; 
   total = sourceWord.length-1;
   count = 0;
   let documentColor = listRandomColor();
   document.body.style.backgroundColor = documentColor;
   metaThemeColor.setAttribute("content", documentColor);
   pronounceWord = sourceWord[0]
   closeNav();
}


// function to translate word to English if the button is pressed and then back to source if the word is pressed again
// console.log("Before function clickToTranslateWord is called", touchWordToChange);
function clickToTranslateWord(){
   //console.log("clickToTranslateWord() function called", touchWordToChange)
   // sourceWord
   if (touchWordToChange < 1){
      // console.log(count);
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

// Using the Web Speech API to pronounce the word that is being displaying
function clickToSpeakWord(speakWord) {
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
     utterance.rate = .70;
     utterance.volume = 0.8;
   
     // Speak the utterance
     synthesis.speak(utterance);
    
   } else {
     console.log('Text-to-speech not supported.');
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
      pronounceWord = sourceWord[count];
      // console.log("Prev function",pronounceWord);      
   }
   // console.log("Prev function - count value after the if and else statement:",count);
   // console.log("Total is", count)
}
      
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
      pronounceWord = sourceWord[count];
      // console.log("Next function",pronounceWord);
   }
   // console.log("Next function - count value after the if and else statement:",count);
   // console.log("Total is", count)
}

function openNav() {
   document.getElementById("myNav").style.height = "100%";
 }
 
 function closeNav() {
   document.getElementById("myNav").style.height = "0%";
 }
