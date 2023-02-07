// pick up video at 23:40
const wordsArray = [
  ["GEORGE WASHINGTON", "JOHN ADAMS", "THOMAS JEFFERSON", "JAMES MADISON", "JAMES MONROE"],
  ["ALABAMA", "ALASKA", "ARKANSAS", "CALIFORNIA"], 
  ["MONTGOMERY", "JUNEAU", "LITTLE ROCK", "SACRAMENTO"],
  ["CLARK GABLE", "MYRNA LOY", "CHARLES LAUGHTON"], 
  ["WINGS", "CAVALCADE", "YOU CANT TAKE IT WIT"]
]

document.addEventListener("DOMContentLoaded", () => {
  let messageContainerEl = document.getElementById('message-container')
  let numofLetters = 5
  let numofGuesses = 6
  
  let randomArray = wordsArray[Math.floor(Math.random()*wordsArray.length)];
  randomArray = Math.floor(Math.random()*wordsArray.length);
  randomWordle = Math.floor(Math.random()*wordsArray[randomArray].length);
  console.log("randomArray = " + randomArray) 
  console.log(wordsArray[randomArray] + "length of array = " + wordsArray[randomArray].length)
  numofLetters = wordsArray[randomArray][randomWordle].length;
  console.log(wordsArray[randomArray][randomWordle] + " has " + numofLetters + " letters in it")
  let wordle = wordsArray[randomArray][randomWordle];
  let guessedWordCount = 0;
  numofGuesses = 6;
  if (numofLetters > 10){
    numofGuesses = 8;
  }

  createSquares();

  let guessedWords = [[]]
  let availableSpace = 1; 

  const keys = document.querySelectorAll('.keyboard-row button')



  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1]
  }

  function updateGuessedWords(letter){
    const currentWordArr = getCurrentWordArr()
    console.log('current array = ' + currentWordArr)
    if (getCurrentWordArr && currentWordArr.length < numofLetters){
      currentWordArr.push(letter)
      const availableSpaceEl = document.getElementById(String(availableSpace))
      availableSpace++;
      availableSpaceEl.textContent = letter;
    }
  }

  function getTileColor(letter, index){
    let letterUpper = letter.toUpperCase();
    const isCorrectLetter = wordle.includes(letterUpper);
    console.log("wordle is = " + wordle + " letter = "+ letterUpper)
    if (!isCorrectLetter){
      return "rgb(58, 58,60)";
    }

    const letterInThatPosition = wordle.charAt(index);
    const isCorrectPosition = (letterUpper === letterInThatPosition);
    
    if (isCorrectPosition){
      return "rgb(83, 141, 78)";
    }
    
    return "rgb(181, 159, 59)";
  }

  function handleSubmitWord(){
    const currentWordArr = getCurrentWordArr();
    if (currentWordArr.length !== numofLetters){
      messageContainerEl.innerText = (`current length = ${currentWordArr.length} which is less than ${numofLetters} letters.`);
      return;
    }

    const currentWord = currentWordArr.join("");
    let result = currentWord.toUpperCase();

    const firstLetterId = guessedWordCount * numofLetters + 1;
    const interval = 500;
    currentWordArr.forEach((letter, index) => {
      setTimeout(() => {
        const tileColor = getTileColor(letter, index);

        const letterId = firstLetterId + index;
        const letterEl = document.getElementById(letterId);
        letterEl.classList.add("animate__flipInX")
      //  letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
        letterEl.style.backgroundColor = tileColor;
        letterEl.style.borderColor = tileColor;
      }, interval * index)
    })

    guessedWordCount += 1;

    if (result === wordle){
      messageContainerEl.innerText = "Congratulations!"
    }

    if (guessedWords.length ===  numofGuesses) {
      window.alert(`Sorry, no more guesses. The wordle is ${wordle}`)
    } 


    guessedWords.push([]);
    console.log("Guessedwords length = " + guessedWords.length)
  }

  function createSquares(){
    let screenWidth = window.innerWidth;
    if (screenWidth > 700){
      screenWidth = 700;
    }
    let screenHeight = window.innerHeight;
    
    const gameBoard = document.getElementById("board")

    for (let index = 0; index < (numofLetters*numofGuesses); index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", index + 1);
      gameBoard.appendChild(square)
    }  

    const board = document.getElementById("board")
    const square = document.querySelectorAll(".square")
    console.log(square)
    square.forEach(square => {
      square.style.width = (screenWidth / (numofLetters + 3) + 'px');
      square.style.height = ((screenHeight / 15) + 'px');
      square.style.height = (screenWidth / (numofLetters + 3) + 'px');
    });
    board.style.gridTemplateColumns = 'repeat(' + numofLetters + ', 1fr)'
  }

  function handleDeleteLetter(){
    const currentWordArr = getCurrentWordArr()
    console.log(currentWordArr)
    if (currentWordArr.length === 0){
      console.log("blank array")
      return;
    }
    const removedLetter = currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr

    const lastLetterEl = document.getElementById(String(availableSpace - 1))

    lastLetterEl.textContent = "" 
    availableSpace--; 

  }

  for (let i = 0; i < keys.length; i++){
    keys[i].onclick = ({target}) => {
      const letter = target.getAttribute("data-key")
      console.log(letter);
      messageContainerEl.innerText = ""

      if (letter === "enter" ){
        handleSubmitWord();
        return;
      }

      if (letter === "del" ){
        console.log("available space = " + availableSpace)
        handleDeleteLetter();
        return;
      }

      updateGuessedWords(letter);
    }
  }

})