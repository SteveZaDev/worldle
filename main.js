// pick up video at 23:40
let protoWordsArray = [
  { 
    cat: "Actors",
    sel: false,
    items: ["EMIL JANNINGS", "WARNER BAXTER", "GEORGE ARLISS", "LIONEL BARRYMORE", "WALLACE BEERY", "FREDERIC MARCH", "CHARLES LAUGHTON", "CLARK GABLE", "VICTOR MCLAGLEN", "PAUL MUNI", "SPENCER TRACY", "ROBERT DONAT", "JAMES STEWART", "GARY COOPER", "JAMES CAGNEY", "PAUL LUKAS", "BING CROSBY", "RAY MILLAND", "RONALD COLEMAN", "LAURENCE OLIVIER", "BRODERICK CRAWFORD"]
    },
  { 
    cat: "Actresses",
    sel: false,
    items: ["JANET GAYNOR", "MARY PICKFORD", "NORMA SHEARER", "MARIE DRESSLER", "HELEN HAYES", "KATHARINE HEPBURN", "CLAUDETTE COLBERT", "BETTE DAVIS", "LUISE RAINER", "VIVIEN LEIGH", "GINGER ROGERS", "JOAN FONTAINE", "GREER GARSON", "JENNIFER JONES", "INGRID BERGMAN", "JOAN CRAWFORD", "OLIVIA DE HAVILLAND", "LORETTA YOUND", "JANE WYMAN", "JUDY HOLLIDAY"]
    },
    {
    cat: "Beatles Songs",
    sel: false,
    items: ["I SAW HER STANDING THERE", "MISERY", "LOVE ME DO", "PS I LOVE YOU", "DO YOU WANT TO KNOW A SECRET", "A TASTE OF HONEY", "TWIST AND SHOUT", "I WANT TO HOLD YOUR HAND", "I SAW HER STANDING THERE", "THIS BOY", "IT WONT BE LONG", "ALL IVE GOT TO DO", "ALL MY LOVING", "DONT BOTHER ME", "LITTLE CHILD", "TIL THERE WAS YOU", "HOLD ME TIGHT", "I WANNA BE YOUR MAN", "NOT A SECOND TIME", "THANK YOU GIRL", "YOU REALLY GOT A HOLD ON ME", "MONEY", "YOU CANT DO THAT", "LONG TALL SALLY", "I CALL YOUR NAME", "PLEASE MR POSTMAN", "ILL GET YOU", "SHE LOVES YOU", "A HARD DAYS NIGHT", "TELL ME WHY", "ILL CRY INSTEAD", "I SHOULD HAVE KNOWN BETTER", "AND I LOVE HER", "IF I FELL", "CANT BUY ME LOVE", "THINGS WE SAID TODAY", "ANY TIME AT ALL", "MATCHBOX", "IM HAPPY JUST TO DANCE WITH YOU", "IF I FELL"]
    },  
    { 
      cat: "Countries",
      sel: false,
      items: ["AFGHANISTAN", "ALBANIA", "ALGERIA", "ANDORRA", "ANGOLA", "ARGENTINA", "ARMENIA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN"]
    }, 
    { 
      cat: "Geo Features",
      sel: false,
      items: ["AMAZON", "NILE"],
      blurb: ["2nd longest in the world", "At over 4,000 miles, the longest river in the world"  ]
      },  
      { 
        cat: "Movies",
        sel: false,
        items: ["WINGS", "CAVALCADE", "CIMMARON", "GRAND HOTEL"]
        },
      
  { 
    cat: "Presidents",
    sel: true,
    items: ["GEORGE WASHINGTON", "JOHN ADAMS", "THOMAS JEFFERSON", "JAMES MADISON", "JAMES MONROE", "JOHN QUINCY ADAMS", "ANDREW JACKSON", "MARTIN VAN BUREN", "WILLIAM HENRY HARRISON", "JOHN TYLER", "JAMES K POLK", 
    "ZACHARY TAYLOR", "MILLARD FILLMORE", "FRANKLIN PIERCE", "JAMES BUCHANAN", "ABRAHAM LINCOLN", "ANDREW JOHNSON", "ULYSSES S GRANT", "RUTHERFORD B HAYES", "JAMES GARFIELD", "CHESTER A ARTHUR", "GROVER CLEVELAND", "BENJAMIN HARRISON", "WILLIAM MCKINLEY", "THEODORE ROOSEVELT", "WILLIAM HOWARD TAFT"]
  },
  { 
    cat: "States",
    sel: false,
    items: ["ALABAMA", "ALASKA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT", "DELAWARE", "FLORIDA", "GEORGIA"]
  },
  { 
    cat: "State Capitals",
    sel: false,
    items: ["MONTGOMERY", "JUNEAU", "PHOENIX", "LITTLE ROCK", "SACRAMENTO", "DENVER", "HARTFORD", "DOVER", "TALLAHASSEE", "ATLANTA"]
    },
  { 
    cat: "U.S. Cities",
    sel: false,
    items: ["MOBILE", "ANCHORAGE", "SCOTTSDALE", "LOS ANGELES", "SAN DIEGO", "SAN FRANCISCO", "SAN JOSE", "BOULDER", "ASPEN", "VAIL", "DURANGO", "BETHLEHEM", "NEW LONDON", "NEW HAVEN", "WILMINGTON", "MIAMI", "TAMPA BAY", "ORLANDO", "AUGUSTA"]
    },    
  { 
  
    cat: "World Capitals",
    sel: false,
    items: ["KABUL", "TIRANA", "ALGIERS", "ANDORRA LA VELLA", "LUANDA", "BUENOS AIRES", "YEREVAN", "CANBERRA", "VIENNA", "BAKU"]
  },  
  { 
    cat: "World Cities",
    sel: false,
    items: ["MELBOURNE", "SYDNEY", "ADELAIDE", "INNSBRUCK", "SALZBURG"]
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
  "https://cdn.pixabay.com/photo/2023/01/22/12/17/flower-7736238__340.jpg"
]

const backgroundImagesLandscape=[
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1600",
  "https://cdn.pixabay.com/photo/2021/01/09/20/23/road-5903402__340.jpg",
  "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1600"
]




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
  false, false, false, false, false, false, true, false, false, false, false, false
];

document.addEventListener("DOMContentLoaded", () => {
    initHelpModal();
    initStatsModal();
    initCategoriesModal();
    initCog();
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

    function initLocalStorage() {
      const storedCurrentWordIndex = window.localStorage.getItem('currentWordIndex')
      if (!storedCurrentWordIndex){
        window.localStorage.setItem('currentWordIndex', currentWordIndex)
      } else {
        currentWordIndex = Number(storedCurrentWordIndex) 
      }
    }

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
  playButtonEl.style.display = "none";  
//


  messageContainerEl.innerText = ""
  wordsArray = []
  for (i=0; i<protoWordsArray.length; i++){
    if (protoWordsArray[i].sel){
       wordsArray.push(protoWordsArray[i])
    }
  }
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
    console.log("guessed word = " + guessedWord + "  wordle = " + wordle)
    let guessedWordUpper = guessedWord.toUpperCase();
    if (guessedWordUpper === wordle){
      messageContainerEl.innerText = "Congratulations!"
   //   messageContainerEl.innerText = "Congratulations!" + "\n" +  wordsArray[randomArray].blurb[randomWordle]
      const audio = new Audio ("./auds/success.mp3");
      audio.play()
 
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
      handleSubmitWord();
      return;
    }

    if (letter === "Delete" ){
      console.log("available space = " + availableSpace)
      handleDelete();
      return;
    }



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
    helpEl = document.getElementById("help-modal")
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


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on stats button")
    updateStatsModal();
    modal.style.display = "block";
    helpEl = document.getElementById("stats-modal")
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

function initCog() {
  // Get the button that requests a letter
  const btn = document.getElementById("reveal-letter");

  
  // When the user clicks on the button, call reveal letter function
  btn.addEventListener("click", function () {
    console.log("just clicked on cog button")
    if (gameInProgress){
  //  revealLetter();
//    updateGuessedLetters(wordle[availableSpace]);
    }
  });

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

