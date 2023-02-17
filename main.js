// pick up video at 23:40
let protoWordsArray = [
  { 
    cat: "Actors",
    sel: false,
    items: ["EMIL JANNINGS", "WARNER BAXTER", "GEORGE ARLISS", "LIONEL BARRYMORE", "WALLACE BEERY", "FREDERIC MARCH", "CHARLES LAUGHTON", "CLARK GABLE", "VICTOR MCLAGLEN", "PAUL MUNI", "SPENCER TRACY", "ROBERT DONAT", "JAMES STEWART", "GARY COOPER", "JAMES CAGNEY", "PAUL LUKAS", "BING CROSBY", "RAY MILLAND", "RONALD COLEMAN", "LAURENCE OLIVIER", "BRODERICK CRAWFORD", "JOSE FERRER", "HUMPHREY BOGART", "GARY COOPER", "WILLIAM HOLDEN", "MARLON BRANDO", "ERNEST BORGNINE", "YUL BRYNNER", "ALEC GUINNESS", "DAVID NIVEN", "CHARLTON HESTON", "BURT LANCASTER", "MAXIMILLIAN SCHELL", "GREGORY PECK", "SIDNEY POITIER", "REX HARRISON", "LEE MARVIN", "PAUL SCOFIELD", "ROD STEIGER", "CLIFF ROBERTSON", "JOHN WAYNE", "GEORGE C SCOTT", "GENE HACKMAN", "JACK LEMMON", "ART CARNEY", "JACK NICHOLSON", "PETER FINCH", "RICHARD DREYFUSS", "JON VOIGHT", "DUSTIN HOFFMAN", "ROBERT DE NERO", "HENRY FONDA", "BEN KINGSLEY", "ROBERT DUVALL", "F MURRAY ABRAHAM", "WILLIAM HURT", "PAUL NEWMAN", "MICHAEL DOUGLAS", "DANIEL DAY LEWIS", "JEREMY IRONS", "ANTHONY HOPKINS", "AL PACINO", "TOM HANKS", "NICOLAS CAGE", "GEOFFREY RUSH", "ROBERTO BENIGNI", "KEVIN SPACEY"]
    },
  { 
    cat: "Actresses",
    sel: false,
    items: ["JANET GAYNOR", "MARY PICKFORD", "NORMA SHEARER", "MARIE DRESSLER", "HELEN HAYES", "KATHARINE HEPBURN", "CLAUDETTE COLBERT", "BETTE DAVIS", "LUISE RAINER", "VIVIEN LEIGH", "GINGER ROGERS", "JOAN FONTAINE", "GREER GARSON", "JENNIFER JONES", "INGRID BERGMAN", "JOAN CRAWFORD", "OLIVIA DE HAVILLAND", "LORETTA YOUNG", "JANE WYMAN", "JUDY HOLLIDAY", "SHIRLEY BOOTH", "AUDREY HEPBURN", "GRACE KELLY", "ANNA MAGNANI", "JOANNE WOODWARD", "SUSAN HAYWARD", "SIMONE SIGNORET", "ELIZABETH TAYLOR", "SOPHIA LOREN", "ANNE BANCROFT", "PATRICIA NEAL", "JULIE ANDREWS", "JULIE CHRISTIE", "BARBRA STREISAND", "MAGGIE SMITH", "GLENDA JACKSON", "JANE FONDA", "LIZA MINNELLI", "ELLEN BURSTYN", "LOUISE FLETCHER", "FAYE DUNAWAY", "DIANE KEATON", "SALLY FIELD", "SISSY SPACEK", "MERYL STREEP", "SHIRLEY MACLAINE", "GERALDINE PAGE", "MARLEE MATLIN", "CHER", "JODIE FOSTER", "JESSICA TANDY", "KATHY BATES", "EMMA THOMPSON", "HOLLY HUNTER", "JESSICA LANGE", "SUSAN SARANDON", "FRANCES MCDORMAND", "HELEN HUNT", "GWYNETH PALTROW", "HILARY SWANK"]
    },
    {
    cat: "Beatles Songs",
    sel: false,
    items: ["I SAW HER STANDING THERE", "MISERY", "LOVE ME DO", "PS I LOVE YOU", "DO YOU WANT TO KNOW A SECRET", "A TASTE OF HONEY", "TWIST AND SHOUT", "I WANT TO HOLD YOUR HAND", "I SAW HER STANDING THERE", "THIS BOY", "IT WONT BE LONG", "ALL IVE GOT TO DO", "ALL MY LOVING", "DONT BOTHER ME", "LITTLE CHILD", "TIL THERE WAS YOU", "HOLD ME TIGHT", "I WANNA BE YOUR MAN", "NOT A SECOND TIME", "THANK YOU GIRL", "YOU REALLY GOT A HOLD ON ME", "MONEY", "YOU CANT DO THAT", "LONG TALL SALLY", "I CALL YOUR NAME", "PLEASE MR POSTMAN", "ILL GET YOU", "SHE LOVES YOU", "A HARD DAYS NIGHT", "TELL ME WHY", "ILL CRY INSTEAD", "I SHOULD HAVE KNOWN BETTER", "AND I LOVE HER", "IF I FELL", "CANT BUY ME LOVE", "THINGS WE SAID TODAY", "ANY TIME AT ALL", "MATCHBOX", "SLOW DOWN", "TELL ME WHY", "NO REPLY", "IM A LOSER", "BABYS IN BLACK", "ROCK AND ROLL MUSIC", "ILL FOLLOW THE SUN", "MR MOONLIGHT", "HONEY DONT", "ILL BE BACK", "SHES A WOMAN", "I FEEL FINE", "PLEASE PLEASE ME", "EIGHT DAYS A WEEK", "WORDS OF LOVE", "YES IT IS", "DIZZY MISS LIZZY", "HELP", "I NEED YOU", "ANOTHER GIRL", "TICKET TO RIDE", "YOURE GOING TO LOSE THAT GIRL", "IVE JUST SEEN A FACE", "NORWEGIAN WOOD", "THINK FOR YOURSELF", "MICHELLE", "GIRL", "IN MY LIFE", "WAIT", "DRIVE MY CAR", "NOWHERE MAN", "YESTERDAY", "ACT NATURALLY", "WE CAN WORK IT OUT", "DAY TRIPPER", "ELEANOR RIGBY", "YELLOW SUBMARINE", "GOOD DAY SUNSHINE", "SHES LEAVING HOME", "WHEN IM SIXTY FOUR", "LOVELY RITA", "A DAY IN THE LIFE", "MAGICAL MYSTERY TOUR", "THE FOOL ON THE HILL", "BLUE JAY WAY", "I AM THE WALRUS", "HELLO GOODBYE", "STRAWBERRY FIELDS FOREVER", "PENNY LANE", "BABY YOURE A RICH MAN", "ALL YOU NEED IS LOVE", "BACK IN THE USSR", "OB LA DI OB LA DA", "BLACKBIRD", "ROCKY RACCOON", "DONT PASS ME BY", "JULIA", "YELLOW SUBMARINE", "ALL TOGETHER NOW", "COME TOGETHER", "SOMETHING", "HERE COMES THE SUN", "REVOLUTION", "HEY JUDE", "ACROSS THE UNIVERSE", "LET IT BE"]
    },  
    { 
      cat: "Countries",
      sel: false,
      items: ["AFGHANISTAN", "ALBANIA", "ALGERIA", "ANDORRA", "ANGOLA", "ARGENTINA", "ARMENIA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN", "BAHAMAS", "BAHRAIN", "BANGLADESH", "BARBADOS", "BELARUS", "BELGIUM", "BELIZE", "BENIN", "BHUTAN", "BOLIVIA", "BOSNIA AND HERZEGOVINA", "BOTSWANA", "BRAZIL", "BRUNEI", "BULGARIA", "BURKINA FASO", "BURUNDI", "CAMBODIA", "CAMEROON", "CANADA", "CENTRAL AFRICAN REPUBLIC", "CHAD", "CHILE", "CHINA", "COLUMBIA", "CONGO REPUBLIC OF THE", "COSTA RICA", "COTE DIVOIRE", "CROATIA", "CUBA", "CYPRUS", "CZECH REPUBLIC", "DENMARK", "DJIBOUTI", "DOMINICA", "DOMINICAN REPUBLIC", "ECUADOR", "EGYPT", "EL SALVADOR", "EQUATORIAL GUINEA", "ERITREA", "ESTONIA", "ETHIOPIA", "FIJI", "FINLAND", "FRANCE", "GABON", "GAMBIA", "GEORGIA", "GERMANY", "GHANA", "GREECE", "GRENADA", "GUATEMALA", "GUYANA", "HAITI", "HONDURAS", "HUNGARY", "ICELAND", "INDONESIA", "INDIA", "IRAN", "IRAQ", "IRELAND", "ISRAEL", "ITALY", "JAMAICA", "JAPAN", "JORDAN","KAZAKHSTAN", "KENYA", "KOSOVO", "KUWAIT", "KYRGYZSTAN", "LAOS", "LATVIA", "LEBANON", "LESOTHO", "LIBERIA", "LIBYA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MADAGASCAR", "MALAWI", "MALAYSIA", "MALDIVES", "MALI", "MALTA", "MARSHALL ISLANDS", "MAURITANIA", "MAURITIUS", "MEXICO", "MICRONESIA", "MOLDOVA", "MONACO", "MONTENEGRO", "MOROCCO", "MOZAMBIQUE", "MYANMAR"] 
    }, 
    { 
    cat: "Geo Features",
    sel: false,
    items: ["THE AMAZON", "THE NILE", "THE HUDSON", "THE SAHARA", "MT EVEREST", "THE GREAT SALT LAKE", "HIGH POINT", "THE ATLANTIC OCEAN", "THE PACIFIC OCEAN", "THE INDIAN OCEAN", "NORTH AMERICA", "EUROPE", "ASIA", "SOUTH AMERICA", "AFRICA", "MT WASHINGTON", "THE GOBI DESERT", "PIKES PEAK", "CRATER LAKE", "MT SAINT HELENS", "MT FUJI", "MT KILIMANJARO", "MT KENYA", "ACONGAGUA", "AMAZON RAIN FOREST"],
    blurb: ["2nd longest in the world", "At over 4,000 miles, the longest river in the world"  ]
    },  
    { 
    cat: "Movies",
    sel: false,
    items: ["WINGS", "THE BROADWAY MELODY", "CIMMARON", "GRAND HOTEL",  "CAVALCADE", "IT HAPPENED ONE NIGHT", "MUTINY ON THE BOUNTY", "THE GREAT ZIEGFELD", "THE LIFE OF EMILE ZOLA", "GONE WITH THE WIND", "REBECCA", "HOW GREEN WAS VALLEY", "MRS MINIVER", "CASABLANCA", "GOING MY WAY", "THE LOST WEEKEND", "GENTLEMANS AGREEMENT", "HAMLET", "ALL THE KINGS MEN", "ALL ABOUT EVE", "AN AMERICAN IN PARIS", "THE GREATEST SHOW ON EARTH", "FROM HERE TO ETERNITY", "ON THE WATERFRONT", "MARTY", "THE BRIDGE ON THE RIVER KWAI", "GIGI", "BEN HUR", "THE APARTMENT", "WEST SIDE STORY", "LAWRENCE OF ARABIA", "TOM JONES", "MY FAIR LADY", "THE SOUND OF MUSIC", "A MAN FOR ALL SEASONS", "IN THE HEAT OF THE NIGHT", "OLIVER", "MIDNIGHT COWBOY", "PATTON", "THE FRENCH CONNECTION", "THE GODFATHER", "THE STING", "THE GODFATHER PART II", "ROCKY", "ANNIE HALL", "THE DEER HUNTER", "KRAMER VS KRAMER", "ORDINARY PEOPLE", "CHARIOTS OF FIRE", "GANDHI", "TERMS OF ENDEARMENT", "AMADEUS", "OUT OF AFRICA", "PLATOON", "THE LAST EMPEROR", "RAIN MAN", "DRIVING MISS DAISY", "DANCES WITH WOLVES", "THE SILENCE OF THE LAMBS", "UNFORGIVEN", "SCHINDLERS LIST", "FORREST GUMP", "BRAVEHEART", "THE ENGLISH PATIENT", "TITANIC", "SHAKESPEARE IN LOVE"]
    },
  { 
    cat: "Presidents",
    sel: true,
    items: ["GEORGE WASHINGTON", "JOHN ADAMS", "THOMAS JEFFERSON", "JAMES MADISON", "JAMES MONROE", "JOHN QUINCY ADAMS", "ANDREW JACKSON", "MARTIN VAN BUREN", "WILLIAM HENRY HARRISON", "JOHN TYLER", "JAMES K POLK", 
    "ZACHARY TAYLOR", "MILLARD FILLMORE", "FRANKLIN PIERCE", "JAMES BUCHANAN", "ABRAHAM LINCOLN", "ANDREW JOHNSON", "ULYSSES S GRANT", "RUTHERFORD B HAYES", "JAMES GARFIELD", "CHESTER A ARTHUR", "GROVER CLEVELAND", "BENJAMIN HARRISON", "WILLIAM MCKINLEY", "THEODORE ROOSEVELT", "WILLIAM HOWARD TAFT", "WOODROW WILSON", "WARREN G HARDING", "CALVIN COOLIDGE", "HERBERT HOOVER", "FRANKLIN D ROOSEVELT", "HARRY TRUMAN", "DWIGHT EISENHOWER", "JOHN F KENNEDY", "LYNDON JOHNSON", "RICHARD NIXON", "GERALD FORD", "JIMMY CARTER", "RONALD REAGAN", "GEORGE H W BUSH", "BILL CLINTON", "GEORGE W BUSH", "BARACK OBAMA", "DONALD TRUMP", "JOE BIDEN"]
  },
  { 
    cat: "States",
    sel: false,
    items: ["ALABAMA", "ALASKA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT", "DELAWARE", "FLORIDA", "GEORGIA", "HAWAII", "IDAHO", "ILLINOIS", "INDIANA", "IOWA", "KANSAS", "KENTUCKY", "LOUISIANA", "MAINE", "MARYLAND", "MASSACHUSETTS", "MICHIGAN", "MINNESOTA", "MISSISSIPPI", "MISSOURI", "MONTANA", "NEBRASKA", "NEVADA", "NEW HAMPSHIRE", "NEW JERSEY", "NEW MEXICO", "NEW YORK", "NORTH CAROLINA", "NORTH DAKOTA", "OHIO", "OKLAHOMA", "OREGON", "PENNSYLVANIA", "RHODE ISLAND", "SOUTH CAROLINA", "SOUTH DAKOTA", "TENNESSEE", "TEXAS", "UTAH", "VERMONT", "VIRGINIA", "WASHINGTON", "WEST VIRGINIA", "WISCONSIN", "WYOMING"]
  },
  { 
    cat: "State Capitals",
    sel: false,
    items: ["MONTGOMERY", "JUNEAU", "PHOENIX", "LITTLE ROCK", "SACRAMENTO", "DENVER", "HARTFORD", "DOVER", "TALLAHASSEE", "ATLANTA", "HONOLULU", "BOISE", "SPRINGFIELD", "INDIANAPOLIS", "DES MOINES", "TOPEKA", "FRANKFORT", "BATON ROUGE", "AUGUSTA", "ANNAPOLIS", "BOSTON", "LANSING", "ST PAUL", "JACKSON", "JEFFERSON CITY", "HELENA", "LINCOLN", "CARSON CITY", "CONCORD", "TRENTON", "SANTA FE", "ALBANY", "RALEIGH", "BISMARK", "COLUMBUS", "OKLAHOMA CITY", "SALEM", "HARRISBURG", "PROVIDENCE", "COLUMBIA", "PIERRE", "NASHVILLE", "AUSTIN", "SALT LAKE CITY", "MONTPELIER", "RICHMOND", "OLYMPIA", "CHARLESTON", "MADISON", "CHEYENNE"]
    },
  { 
    cat: "U.S. Cities",
    sel: false,
    items: ["MOBILE", "ANCHORAGE", "SCOTTSDALE", "LOS ANGELES", "SAN DIEGO", "SAN FRANCISCO", "SAN JOSE", "BOULDER", "ASPEN", "VAIL", "DURANGO", "BETHLEHEM", "NEW LONDON", "NEW HAVEN", "WILMINGTON", "MIAMI", "TAMPA BAY", "ORLANDO", "AUGUSTA", "HILO", "CHICAGO", "PEORIA", "GARY", "LEXINGTON", "NEW ORLEANS", "BANGOR", "PORTLAND", "KENNEBUNKPORT", "BALTIMORE", "SPRINGFIELD", "ANN ARBOR", "MINNEAPOLIS", "BILOXI", "KANSAS CITY", "ST LOUIS", "RENO", "LAS VEGAS", "MANCHESTER", "MORRISTOWN", "PARAMUS", "ALBUQUERQUE", "NEW YORK CITY", "SYRACUSE", "CHARLOTTE", "COLUMBUS", "CINCINNATI", "CLEVELAND", "PITTSBURGH", "PHILADELPHIA", "NEWPORT", "CHARLESTON", "NASHVILLE", "MEMPHIS", "HOUSTON", "DALLAS", "EL PASO", "PROVO", "ALEXANDRIA", "ROANOKE", "SEATTLE", "TACOMA", "WHEELING", "GREEN BAY", "MILWAUKEE", "JACKSON HOLE"]
    },    
  { 
  
    cat: "World Capitals",
    sel: false,
    items: ["KABUL", "TIRANA", "ALGIERS", "ANDORRA LA VELLA", "LUANDA", "BUENOS AIRES", "YEREVAN", "CANBERRA", "VIENNA", "BAKU", "NASSAU", "DHAKA", "MINSK", "BRUSSELS", "LA PAZ", "SARAJEVO", "BRASILIA", "SOFIA", "PHNOM PENH", "OTTAWA", "SANTIAGO", "BEIJING", "BOGOTA", "KINSHASA", "BRAZZAVILLE", "SAN JOSE", "ZAGREB", "HAVANA", "NICOSIA", "PRAGUE", "COPENHAGEN", "SANTO DOMINGO", "QUITO", "CAIRO", "SAN SALVADOR", "TALLINN", "ADDIS ABABA","HELSINKI", "PARIS", "TBILISI", "BERLIN", "ATHENS", "GUATEMALA CITY", "PORT AU PRINCE", "BUDAPEST", "REYKJAVIK", "NEW DELHI", "JAKARTA", "TEHRAN", "BAGHAD", "DUBLIN", "JERUSALEM", "ROME", "KINGSTON", "TOKYO", "AMMAN", "NAIROBI", "PRISTINA", "KUWAIT CITY", "VIENTIANE", "RIGA", "BEIRUT", "MONROVIA", "TRIPOLI", "VADUZ", "VILNIUS", "LUXEMBOURG", "KUALA LUMPUR", "MEXICO CITY", "ULAANBAATAR", "RABAT"]
  },  
  { 
    cat: "World Cities",
    sel: false,
    items: ["RIO DE JANEIRO", "MELBOURNE", "SYDNEY", "ADELAIDE", "PERTH", "INNSBRUCK", "SALZBURG", "GHENT", "BRUGES", "SAO PAOLO", "MONTREAL", "QUEBEC", "TORONTO", "CALGARY", "WINNIPEG", "VANCOUVER", "SHANGHAI", "ALEXANDRIA", "MARSEILLES", "MUNICH", "POTSDAM", "DUSSELDORF", "HAMBURG", "FRANKFURT", "MUMBAI", "CALCUTTA", "TEL AVIV", "BETHLEHEM", "FLORENCE", "MILAN", "VENICE", "YOKOHAMA", "KYOTO", "ACAPULCO"]
    }, 
    { 
      cat: "Testing",
      sel: false,
      items: ["AMAZON", "NILE", "DO YOU WANT TO KNOW A SECRET"],
      }

  /*,
  , 
  ,
  , 
  */
]

const backgroundImagesPortrait=[
  "https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg",
  "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://cdn.pixabay.com/photo/2023/01/22/12/17/flower-7736238__340.jpg"
]

const backgroundImagesLandscape=[
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1600",
  "https://cdn.pixabay.com/photo/2021/01/09/20/23/road-5903402__340.jpg",
  "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=1600"
]

let helpText = "In this version of WORDLE, instead of solving for a 5 letter word, you will be trying to figure out an item belonging to a particular category. The answer can be anywhere from 4 to 20+ characters and can include spaces. The default category is U.S. Presidents, but that can be changed. Click on the 2nd icon from the right and all available categories will be displayed along with the number of items in that category. The active ones will be in black, the inactive in grey. Click to toggle each category. As in the original WORDLE, stats are provided, click on the bar-graph icon for a summary, then i, for info, for more details. TIPS - As far as difficulty goes, here a few differences from the original and some suggestions. First off, for any response over 10 characters, you will get 8 guesses. The game does not check for valid words, names, or places, so gibberish is allowed. In fact, it may be your best strategy. Long solutions will likely be multi-word solutions, and you may want to find those word breaks by entering all spaces for your first guess. Green spaces will indicate the word breaks. If you select multiple categories, things will be very difficult for you. But, you can give it a try and then if flummoxed, click on the mag glass icon to display what the random category chosen by the game is. Warning - a known bug, if you enter letters via the keyboard, enter all letters in lower case, the game will convert to upper on its own."




let fullScreen = false;
let wordsArray=[]
let keyboardClicks = false;

let playButtonEl = ""
const containerEl = document.getElementById('container')
let currentWordIndex = 0;
let guessedWordCount = 0;
let guessedWords = [[]]
let availableSpace = 1; 
let numofLetters = 5
let numofGuesses = 6
let wordle = ""
let gameInProgress = false;
let randomArray = 0;
let randomWordle = 0;
let revealLetterNum = 0;
const messageContainerEl = document.getElementById('message-container')

let categoryPreferences = [
  false, false, false, false, false, false, true, false, false, false, false, false, false
];

let resultsArray = []
let resultObj = {
  date: 0,
  wordle: "",
  guesses: 0
}

document.addEventListener("DOMContentLoaded", () => {

  initHelpModal();
    initStatsModal();
    initCategoriesModal();
    
    //initCog();
  //  initAudio();
    // Select background image based on portrait or landscape mode
    if (window.innerHeight > window.innerWidth){
      let randomImg = Math.floor(Math.random()*backgroundImagesPortrait.length)
      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + backgroundImagesPortrait[randomImg] + ")";
    } else {  
      let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")";
    }
    
    playButtonEl = document.getElementById("start")
    randCatEl = document.getElementById("randcat")

    playButtonEl.addEventListener("click", ({ target }) => {
       letsPlay()
     })

     randCatEl.addEventListener("click", ({ target }) => {
       console.log("clicked on category display");
       if (wordsArray){
       messageContainerEl.innerText = wordsArray[randomArray].cat;
       }
    })
    });

    /*
    function initLocalStorage() {
      const storedCurrentWordIndex = window.localStorage.getItem('currentWordIndex')
      if (!storedCurrentWordIndex){
        window.localStorage.setItem('currentWordIndex', currentWordIndex)
      } else {
        currentWordIndex = Number(storedCurrentWordIndex) 
      }
    }*/

function letsPlay() {
  // Clear the classes of the keyboard that were set in any previous Wordle
   initClasses();

 

// INIT
wordsArray=[]

currentWordIndex = 0;
guessedWordCount = 0;
revealLetterNum = 0;
guessedWords = [[]]
availableSpace = 1; 
numofLetters = 5
numofGuesses = 6
wordle = ""
gameInProgress = true;

// END OF INIT
  
//


  messageContainerEl.innerText = ""
  wordsArray = []
  for (i=0; i<protoWordsArray.length; i++){
    if (protoWordsArray[i].sel){
       wordsArray.push(protoWordsArray[i])
    }
  }
  console.log("Checking wordsArray which is equal to " + wordsArray)
  if (wordsArray.length === 0){
    messageContainerEl.innerText = "Please select at least 1 category";
    return;
  }

  playButtonEl.style.display = "none";
  messageContainerEl.innerText = ""
  randomArray = wordsArray[Math.floor(Math.random()*wordsArray.length)];
  randomArray = Math.floor(Math.random()*wordsArray.length);
  randomWordle = Math.floor(Math.random()*(wordsArray[randomArray].items).length);
  console.log("randomArray = " + randomArray) 
  console.log("randomWordle = " + randomWordle) 
 // console.log(wordsArray[randomArray] + "length of array = " + wordsArray[randomArray].length)
  numofLetters = (wordsArray[randomArray].items[randomWordle]).length;
//  console.log(wordsArray[randomArray][randomWordle] + " has " + numofLetters + " letters in it")
  wordle = wordsArray[randomArray].items[randomWordle];
  console.log("wordle = " + wordle +  " num of letters = " + numofLetters)
 // let guessedWordCount = 0;
  numofGuesses = 6;
  if (numofLetters > 10){
    numofGuesses = 8;
  }

  function initClasses(){
  /*  let keys = document.getElementsByClassName('correct-letter-in-place');
    if (keys){
    keys.forEach(key => {
      key.classList.remove("correct-letter-in-place")  
    });
    }
*/
    const allElements = document.querySelectorAll('*');
    
allElements.forEach((element) => {
  element.classList.remove('correct-letter-in-place');
  element.classList.remove('correct-letter');
  element.classList.remove('incorrect-letter');
});



  }
 
  createSquares();
  // Check to see if keyboard click event listener has already been set via the first game of the session  
  if (!keyboardClicks){
    console.log("about to call addKeyboard")
    addKeyboardClicks();
    document.addEventListener('keydown', function(event) {
      console.log ("key pressed was " + event.key)
      handleKeystroke(event.key)
      });
  }

  guessedWords = [[]]
  availableSpace = 1; 

  const keys = document.querySelectorAll('.keyboard-row button')


  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1]
  }

  function updateGuessedLetters(letter){
    console.log("updateGuessedLetter letter = " + letter)
    const currentWordArr = getCurrentWordArr()
    console.log('current array = ' + currentWordArr)
    console.log("numofLetters = " + numofLetters )
    if (currentWordArr && currentWordArr.length < numofLetters){
      currentWordArr.push(letter)
      const availableSpaceEl = document.getElementById(availableSpace)
      availableSpace++;
      availableSpaceEl.textContent = letter;
    }
  }

  function getIndicesOfLetter(letter, arr){
    const indices = [];
    let idx = arr.indexOf(letter);
    while (idx != -1){
      indices.push(idx);
      idx = arr.indexOf(letter, idx+1);
    }
    return indices;
  } // END OF getIndicesOfLetter

  function getTileClass(letter, index, currentWordArr) {
    const isCorrectLetter = wordle
      .toUpperCase()
      .includes(letter.toUpperCase());
      if (!isCorrectLetter){
        return "incorrect-letter";
      }

      const letterInThatPosition = wordle.charAt(index);
      const isCorrectPosition = letter.toLowerCase() === letterInThatPosition.toLowerCase();
      if (isCorrectPosition){
        return "correct-letter-in-place";
      }

  
       const isGuessedMoreThanOnce =
       currentWordArr.filter((l) => l === letter).length > 1;

       if (!isGuessedMoreThanOnce) {
        return "correct-letter";
      }

      const existsMoreThanOnce = wordle.split("").filter((l) => l === letter).length > 1;

    // is guessed more than once and exists more than once
    if (existsMoreThanOnce) {
      return "correct-letter";
    }

    const hasBeenGuessedAlready = currentWordArr.indexOf(letter) < index;

    const indices = getIndicesOfLetter(letter, wordle.split(""));
    const otherIndices = indices.filter((i) => i !== index);
    const isGuessedCorrectlyLater = otherIndices.some(
      (i) => i > index && currentWordArr[i] === letter
    );

    if (!hasBeenGuessedAlready && !isGuessedCorrectlyLater) {
      return "correct-letter";
    }

    return "incorrect-letter";


} // END OF getTileClass


  function handleSubmitWord(){
    const currentWordArr = getCurrentWordArr();
    const guessedWord = currentWordArr.join("");
    if (guessedWord.length !== numofLetters){
      messageContainerEl.innerText = (`You entered ${currentWordArr.length} characters which is less than the ${numofLetters} needed`);
      return;Yo
    }
    window.navigator.vibrate(450);
    //flipTile();


    let checkWordle = wordle;
    const guess = [];
  
    currentWordArr.forEach(tile => {
      console.log("pushing letter onto guess array - letter = " + tile)
      guess.push({letter: tile, color: 'dontknow'});
    })

    console.log("");
    console.log("");
    console.log("About to loop thru to look for Greys")
    guess.forEach(guess => {
      if (!checkWordle.includes(guess.letter.toUpperCase())){
        guess.color = 'incorrect-letter'
        console.log ("set grey overlay")
        }
    })





    console.log("About to loop thru to look for Greens")
    guess.forEach((guess, index) => {
      console.log("guess letter = " + guess.letter + "   wordle letter = " + wordle[index])
      if (guess.letter == wordle[index].toLowerCase()){
        guess.color = 'correct-letter-in-place'
   //     console.log("guess letter2 = " + guess.letter + "   wordle letter = " + wordle[index])
        console.log ("set green overlay")
        checkWordle = checkWordle.replaceAll(guess.letter.toUpperCase(), '')
        console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
        console.log (" ")
      }
    })

    console.log("");
    console.log("");
    console.log("About to loop thru to look for Yellows")
    guess.forEach(guess => {
      console.log("guess letter = " + guess.letter);
      if (checkWordle.includes(guess.letter.toUpperCase())){
        guess.color = 'correct-letter'
        console.log ("set yellow overlay")
        checkWordle = checkWordle.replaceAll(guess.letter.toUpperCase(), '')
        console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
        console.log (" ")
      }
    })




  
    let result = guessedWord.toUpperCase();

    const firstLetterId = guessedWordCount * numofLetters + 1;
    let interval = 2500 / numofLetters;


    currentWordArr.forEach((tile, index) => {
    
      setTimeout(() => {
    //    tile.classList.add("animate__flipInX")
    //    tile.classList.add(guess[index].color)
        const letterId = firstLetterId + index;
        const letterEl = document.getElementById(letterId);
     //   if (letter === " "){
     //     letter = "space"
     //   }
     //  let keyboardLetter = letter.toLowerCase();
     //  const keyboardLetterEl = document.querySelector("[data-key=" + keyboardLetter + "]");
 

     //   console.log("keyboard letter = " + keyboardLetterEl)
        letterEl.classList.add(guess[index].color)
        letterEl.classList.add("animate__flipInX")
    //    addColorToKey(guess[index].letter, guess[index].color)
        if (tile === " "){
          tile = "space"
        }

    const keyboardEl = document.querySelector(`[data-key=${tile}]`);
    console.log ("keyboardEl = " + keyboardEl + " tile = " + tile);
    keyboardEl.classList.add(guess[index].color);

      }, interval * index)
  
    })

    guessedWordCount += 1;
    let date = new  Date();
//    resultObj.date = date.toString()
    resultObj.date = new Date();
    console.log("New date = " + resultObj.date)
    console.log("New date is of type " + typeof(resultObj.date))
    resultObj.wordle = wordle;
    console.log("guessed word = " + guessedWord + "  wordle = " + wordle)
    let guessedWordUpper = guessedWord.toUpperCase();
    if (guessedWordUpper === wordle){
      messageContainerEl.innerText = "Congratulations!"
      const audio = new Audio ("./auds/success.mp3");
      audio.play()


      resultObj.guesses = guessedWordCount;
      let resultsArrayTemp = JSON.parse(window.localStorage.getItem('results'));
      if (resultsArrayTemp){
          resultsArray = JSON.parse(window.localStorage.getItem('results'));
          console.log("New date right before push = " + resultObj.date)
          resultsArray.push(resultObj);
          console.log("Array after push = " + resultsArray);
          console.log ("item date just added = " + resultsArray[resultsArray.length-1].date);
          window.localStorage.setItem('results', JSON.stringify(resultsArray));
      } else {
        resultsArray[0] = resultObj;
        window.localStorage.setItem('results', JSON.stringify(resultsArray));
      }

      setTimeout(function(){
        playButtonEl.innerText = "Play Again?";
        playButtonEl.style.display = "block";
    }, 4500);
      const totalWins = window.localStorage.getItem("totalWins") || 0;
      window.localStorage.setItem("totalWins", Number(totalWins) + 1);

      const currentStreak = window.localStorage.getItem("currentStreak") || 0;
      window.localStorage.setItem("currentStreak", Number(currentStreak) + 1);
      updateTotalGames();
    //  removeKeyboardListeners();
     return;
      
    }

    if (guessedWords.length ===  numofGuesses && guessedWord !== wordle) {
      resultObj.guesses = 10;
      let resultsArrayTemp = JSON.parse(window.localStorage.getItem('results'));
      if (resultsArrayTemp){
          resultsArray = JSON.parse(window.localStorage.getItem('results'));
          resultsArray.push(resultObj);
          window.localStorage.setItem('results', JSON.stringify(resultsArray));
      } else {
        resultsArray[0] = resultObj;
        window.localStorage.setItem('results', JSON.stringify(resultsArray));
      }

      messageContainerEl.innerText = (`Sorry, no more guesses. The wordle is ${wordle}`)
      window.localStorage.setItem("currentStreak", 0);
      const audio = new Audio ("./auds/negative.mp3");
      audio.play()
      updateTotalGames();     setTimeout(function(){
        playButtonEl.innerText = "Play Again?";
        playButtonEl.style.display = "block";
    }, 4500);




    //  removeKeyboardListeners();
      return;
    } 

    const audio = new Audio ("./auds/ascending.mp3");
    audio.play()
    guess.forEach(guess => {
      console.log("letter = " + guess.letter + " color = " + guess.color)
    }
    )




    guessedWords.push([]);
    console.log("Guessedwords length = " + guessedWords.length)


   /* 
    currentWordArr.forEach((letter, index) => {
      setTimeout(() => {
        const tileClass = getTileClass(letter, index, currentWordArr);
        if (tileClass){
          const letterId = firstLetterId + index;
          console.log("letter = " + letter);
          const letterEl = document.getElementById(letterId);
       //   if (letter === " "){
       //     letter = "space"
       //   }
       //  let keyboardLetter = letter.toLowerCase();
       //  const keyboardLetterEl = document.querySelector("[data-key=" + keyboardLetter + "]");
      //   console.log("keyboard letter = " + keyboardLetterEl)
          letterEl.classList.add("animate__flipInX")
          console.log ("class should have been set to flip")
          letterEl.classList.add(tileClass)
      //  letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
    //    letterEl.style.backgroundColor = tileColor;
    //    letterEl.style.borderColor = tileColor;
    //    keyboardLetterEl.style.backgroundColor = tileColor;
          const keyboardEl = document.querySelector(`[data-key=${letter}]`);
          console.log ("keyboardEl = " + keyboardEl);
          keyboardEl.classList.add(tileClass);
        }
      }, interval * index);  // END OF setTimeout
    });  // END OF forEach letter in the current word

    guessedWordCount += 1;
    console.log("guessed word = " + guessedWord + "  wordle = " + wordle)
    let guessedWordUpper = guessedWord.toUpperCase();
    if (guessedWordUpper === wordle){
      messageContainerEl.innerText = "Congratulations!"
    }

    if (guessedWords.length ===  numofGuesses && guessedWord !== wordle) {
      window.alert(`Sorry, no more guesses. The wordle is ${wordle}`)
    } 


    guessedWords.push([]);
    console.log("Guessedwords length = " + guessedWords.length)*/
  } // END OF handleSubmitWord

  function updateTotalGames(){
    const totalGames = window.localStorage.getItem("totalGames") || 0;
    window.localStorage.setItem("totalGames", Number(totalGames) + 1);
    gameInProgress = false;
  }


  function createSquares(){
    let screenWidth = window.innerWidth;
    if (screenWidth > 700){
      screenWidth = 700;
    }
    let screenHeight = window.innerHeight;
    
    const gameBoard = document.getElementById("board")


    // Clear out any elements of class "square"
    let squares = document.getElementsByClassName('square');
    while (squares[0]){
      squares[0].parentNode.removeChild(squares[0]);
    }

    for (let i = 0; i < (numofLetters*numofGuesses); i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", i + 1);
      gameBoard.appendChild(square)
    }  

    //  FROM HERE TO END OF FUNCTION ADDED BECAUSE NUMBER OF LETTERS IN WORDLE CAN VARY
    const board = document.getElementById("board")
    const square = document.querySelectorAll(".square")
    console.log(square)
    square.forEach(square => {
      square.style.width = (screenWidth / (numofLetters + 4) + 'px');
      square.style.height = ((screenHeight / 15) + 'px');
      square.style.height = (screenWidth / (numofLetters + 4) + 'px');
      square.style.fontSize = (screenWidth / (numofLetters + 4) + 'px');
      if (screenWidth > screenHeight){
        square.style.height = ((screenHeight / 15) + 'px');
        square.style.fontSize = ((screenHeight / 15) + 'px');

      }
    });
    board.style.gridTemplateColumns = 'repeat(' + numofLetters + ', 1fr)'
  
  } // END OF createSquares

  function handleDelete(){
    const currentWordArr = getCurrentWordArr()
    console.log(currentWordArr)
    if (currentWordArr.length === 0){
      console.log("blank array")
      return;
    }
    currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr

    const lastLetterEl = document.getElementById(availableSpace - 1)

    lastLetterEl.innerHTML = ""   
    availableSpace--; 

  } // END OF handleDelete


  function removeKeyboardListeners(){
    console.log("entered remove listeners")
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
      console.log("keyboard count = " + i)
      keys[i].removeEventListener("click")
    }
   }

  function addKeyboardClicks(){    
      keyboardClicks = true;
      const keys = document.querySelectorAll(".keyboard-row button");
      for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", ({ target }) => {
          if (!gameInProgress){
            return;
          }
      
          messageContainerEl.innerText = ""

          let key = target.getAttribute("data-key");
          target.blur() 
  
 
          if (key === "enter") {
            const audio = new Audio ("./auds/hard-keypress.wav");
            audio.play()
            handleSubmitWord();
            return;
          }
  
          if (key === "del") {
            const audio = new Audio ("./auds/hard-keypress.wav");
            audio.play()
            handleDelete();
            return;
          }

          if (key === "space") {
            const audio = new Audio ("./auds/keypress2.wav");
            audio.play()
            key = " "
          }
          const audio = new Audio ("./auds/keypress2.wav");
          audio.play()
          updateGuessedLetters(key);
        });
      }
    } // END OF Ians addKeyboardClicks 






/*   MAY WANT TO ADD SOME OF THIS INTO ABOVE FUNCTION

      var audio = new Audio("./keypress.wav");
      audio.play();
      //let containerEl = document.getElementById('container')
      //containerEl.requestFullscreen();
      if (letter === "enter" ){
        handleSubmitWord();
        return;
      }

      if (letter === "del" ){
        console.log("available space = " + availableSpace)
        handleDeleteLetter();
        return;
      }

      if (letter === 'space'){
        letter = ' ';
      }
      console.log('clicked letter = ' + letter )
      updateGuessedWords(letter);
    }  // END OF addKeyboardClicks 
*/


  function handleKeystroke(letter){
    if (!gameInProgress){
      return;
    }

    console.log ("key in handleKeystroke function - "  + letter)
    messageContainerEl.innerText = "";
    let containerEl = document.getElementById('container')
  //  containerEl.requestFullscreen();

  if (letter === "Enter" || letter === "Delete"){
    console.log ("key in handleKeystroke function2 - "  + letter)
  } else {
      let alpha = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
      let result = alpha.includes(letter);
      if (!result){
        return;
      }
    }
    if (letter === "Enter" ){
      console.log ("about to submitword")
      handleSubmitWord();
      return;
    }

    if (letter === "Delete" ){
      console.log("available space = " + availableSpace)
      handleDelete();
      return;
    }


    console.log("dont want to reach here")
    updateGuessedLetters(letter);

  }

}

// THIS LOGIC IS TAKEN FROM ANIA KUBOWS WORDLE CLONE - ITS COLOR LOGIC WORKS CORRECTLY 
const flipTile = () => {
  // pick up at 
  const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;

  let checkWordle = wordle;
  const guess = [];

  rowTiles.forEach(tile => {
    guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
  })

  guess.forEach((guess, index) => {
    if (guess.letter == wordle[index]){
      guess.color = 'green-overlay'
      checkWordle = checkWordle.replace(guess.letter, '')
    }
  })

  guess.forEach(guess => {
    if (checkWordle.includes(guess.letter)){
      guess.color = 'yellow-overlay'
      checkWordle = checkWordle.replace(guess.letter, '')
    }
  })

  rowTiles.forEach((tile, index) => {
    
    setTimeout(() => {
      tile.classList.add('flip')
      tile.classList.add(guess[index].color)
      addColorToKey(guess[index].letter, guess[index].color)
    }, 500 * index)

  })
}


function initHelpModal() {
  const modal = document.getElementById("help-modal");
 // modal.textContent = "Explanation of this version of WORDLE"
  // Get the button that opens the modal
  const btn = document.getElementById("help");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-help");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on help button")
    modal.style.display = "block";
    helpEl = document.querySelector(".modal-body")
    helpEl.innerText = helpText + "\n" + "\n"
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function updateStatsModal(){
  const currentStreak = window.localStorage.getItem("currentStreak");
  const totalWins = window.localStorage.getItem("totalWins");
  const totalGames = window.localStorage.getItem("totalGames");
  const audio = new Audio ("./auds/stats.mp3");
  audio.play()

  document.getElementById('total-played').textContent = totalGames;
  document.getElementById('total-wins').textContent = totalWins;
  document.getElementById('current-streak').textContent = currentStreak;

  const winPct = Math.round((totalWins / totalGames) * 100) || 0
  document.getElementById('win-pct').textContent = winPct;

}

function initStatsModal() {
  const modal = document.getElementById("stats-modal");
  // Get the button that opens the stats modal
  const btn = document.getElementById("stats");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-stats");
  const delEl = document.getElementById("delete-stats");
  const delBodyEl = document.getElementById("delete-body");
  const delModal = document.getElementById("delete-modal");
  const closeDel = document.getElementById("close-delete");
  const yesEl = document.getElementById("yes");
  const noEl = document.getElementById("no");

  // Get the element that shows results
  const resultsEl = document.querySelector(".results")
  const resultsButton = document.getElementById("stats-info");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on stats button classlist = " + btn.classList)
    updateStatsModal();
    modal.style.display = "block";
    helpEl = document.getElementById("stats-modal")
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    resultsEl.style.display = "none";
  });


    // When the user clicks on delete stats <span> (x), display confirmation box
    delEl.addEventListener("click", function () {
      delModal.style.display = "block";
    });


      // When the user clicks on <span> (x), close the delete modal
    closeDel.addEventListener("click", function () {
      delModal.style.display = "none";
    });

      // When the user clicks on Yes, clear history via localstorage clear the results tray and close delete modal
      yesEl.addEventListener("click", function () {
        localStorage.removeItem("results")
        localStorage.removeItem("currentStreak")
        localStorage.removeItem("totalWins")
        localStorage.removeItem("totalGames")
        const resultsTrayEl = document.getElementById("results-tray");
        resultsTrayEl.innerHTML = ""
        delModal.style.display = "none";
      });

      // When the user clicks on No, close delete modal
      noEl.addEventListener("click", function () {
        delModal.style.display = "none";
      });
      

  

    // When the user clicks on stats info (i) show results
    resultsButton.addEventListener("click", function () {
      console.log("just clicked on results button")
      resultsEl.style.display = "block";
      buildResults();
    });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      resultsEl.style.display = "none";
    }
  });
}

function buildResults(){
  console.log("entered build results")
  const resultsTrayEl = document.getElementById("results-tray")
  // LOOP THRU RESULTS IN REVERSE ORDER

  let resultItemEl = document.createElement('div')
//      resultItemEl.innerText = "here are where results will go"
//  resultsTrayEl.appendChild(resultItemEl)

  let resultsArrayTemp = JSON.parse(window.localStorage.getItem('results'));
  if (resultsArrayTemp){
      resultsArray = JSON.parse(window.localStorage.getItem('results'));
      console.log("resultsArray =  " + resultsArray);
      console.log("results array date = " + resultsArray[resultsArray.length-1].date)
      date = new Date(resultsArray[resultsArray.length-1].date);
      const year = date.getFullYear();
      const hours = date.getHours();
      console.log("after getfullyear function year = " + year + " hours = " + hours)
      resultsTrayEl.innerHTML = ""
      let resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Date"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Wordle"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Att"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)

      for (i=resultsArray.length - 1; i>-1; i--){
        let resultItemEl = document.createElement('div')
        console.log ("date is of type " + typeof(resultsArray[i].date))
        //const year = dateyy.getFullYear();
        let date = new Date(resultsArray[i].date);
        let year = date.getFullYear();
        console.log(" year is type " + typeof(year))
        let yy = year.toString().slice(2);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        console.log("day = " + day)
        let hours = date.getHours();
        resultItemEl.innerText = month + "/" + day + "/" + yy
        resultsTrayEl.appendChild(resultItemEl)
        resultItemEl = document.createElement('div')
        resultItemEl.innerText = resultsArray[i].wordle
        resultsTrayEl.appendChild(resultItemEl)
        resultItemEl = document.createElement('div')
        resultItemEl.innerText = resultsArray[i].guesses
        if (resultsArray[i].guesses === 10){
          resultItemEl.innerText = "Loss"  
        }
        resultsTrayEl.appendChild(resultItemEl)
      }
  }

}

function updateCategoriesModal(){
 /* const currentStreak = window.localStorage.getItem("currentStreak");
  const totalWins = window.localStorage.getItem("totalWins");
  const totalGames = window.localStorage.getItem("totalGames");

  document.getElementById('total-played').textContent = totalGames;
  document.getElementById('total-wins').textContent = totalWins;
  document.getElementById('current-streak').textContent = currentStreak;

  const winPct = Math.round((totalWins / totalGames) * 100) || 0
  document.getElementById('win-pct').textContent = winPct;
*/

let categories = document.querySelectorAll(".category")
for (i=0; i<categories.length; i++){
  if (protoWordsArray[i].sel){
    categories[i].style.color = "black";
    categories[i].style.fontWeight = "bold";

  } else {
     categories[i].style.color = "grey";
     categories[i].style.fontWeight = "normal";

  }

}

}


function initCategoriesModal() {
  // Look for category preferences in localstorage
  // if found apply those values to the protoarray
  console.log("add category local storage get logic")
  let categoryPreferencesTemp = JSON.parse(window.localStorage.getItem('categoryPreferences'));

  if (categoryPreferencesTemp) {
    categoryPreferences = JSON.parse(window.localStorage.getItem('categoryPreferences'))
    console.log("prefernces = " + categoryPreferences)
    for (i=0; i<protoWordsArray.length; i++){
      protoWordsArray[i].sel = categoryPreferences[i]
    }
}
  const modal = document.getElementById("categories-modal");
  // Get the button that opens the categories modal
  const btn = document.getElementById("categories");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-categories");


  const categoriesContainerEl = document.getElementById("categories-body")

  for (i=0; i<protoWordsArray.length; i++){
    let category = document.createElement("div");
    category.innerText = `${protoWordsArray[i].cat} ${protoWordsArray[i].items.length}`;
    category.classList.add("category")
    category.id = i;
    categoriesContainerEl.appendChild(category);
    category.addEventListener("click", ({ target }) => {
       // window.alert(category.innerText + category.id)
        protoWordsArray[category.id].sel = !(protoWordsArray[category.id].sel)
        if (protoWordsArray[category.id].sel){
          const audio = new Audio ("./auds/shortgood.mp3");
          audio.play()
        } 
        else {
          const audio = new Audio ("./auds/pop39222.mp3");
          audio.play()     
        }

        updateCategoriesModal()
      });
  }

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on categories button")
    updateCategoriesModal();
    const audio = new Audio ("./auds/shortgood.mp3");
    audio.play()
    modal.style.display = "block";
    helpEl = document.getElementById("categories-modal")
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    preserveCategories();

  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function preserveCategories(){
  console.log("add category local storage update logic in preserve function")
    for (i=0; i<protoWordsArray.length; i++){
      console.log(protoWordsArray[i].sel)
      console.log(categoryPreferences[i])
      categoryPreferences[i] = protoWordsArray[i].sel
    }
    window.localStorage.setItem('categoryPreferences', JSON.stringify(categoryPreferences));
}





function revealLetter(){
  console.log ("entered reveal letter function")
 // const currentWordArr = getCurrentWordArr()

  const numberOfGuessedWords = guessedWords.length;
  currentWordArr = guessedWords[numberOfGuessedWords - 1]
  let letter = wordle[revealLetterNum]
  console.log('current array = ' + currentWordArr)
  console.log("numofLetters = " + numofLetters )
    currentWordArr[revealLetterNum] = letter;
    //const availableSpaceEl = document.getElementById(revealLetterNum)
  //  availableSpaceEl.textContent = letter;
    const availableSpaceEl = document.getElementById(revealLetterNum+1)
    availableSpaceEl.textContent = letter;
    revealLetterNum++

}

