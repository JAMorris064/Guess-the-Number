const game = {
    title: "Guess the Number!",
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    // getGuess: prompt(`Enter a guess between [smallestNum] and [biggestNum]`),
    play: function () {
      this.secretNum =
        Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) 
        this.smallestNum
    parseInt(getGuess)},
    // let getGuess = ""
    
    while(getGuess) {
        // getGuess: prompt(`Enter a guess between [smallestNum] and [biggestNum]`)
        if (getGuess === secretNum){
            alert("Congrats! You guessed the number in prevGuesses[idx] guesses!")
            console.log(prevGuesses.join(', '))
    } else if (getGuess < secretNum) {
            alert("Your guess is too low.")
            console.log(prevGuesses.join(', '))
            alert("Previous Guesses: prevGuesses[idx]")
    } else if (getGuess > secretNum){
            alert("Your guess is too low.")
            console.log(prevGuesses.join(', '))
            alert("PreviousGuesses[idx]")

    }
    }
  }


