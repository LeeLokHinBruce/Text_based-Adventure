let msg1 = document.getElementById('no_of_guesses')
let msg2 = document.getElementById('guessed_range')

// random a number
let answer = Math.floor(Math.random() * 100) + 1

let no_of_guesses = 0
let min_guessed_num = 1
let max_guessed_num = 100

let guess_btn = document.getElementById('btn')

const guessNum = () => {
    let user_guess = parseInt(document.getElementById('guess').value)  // convert the string to number
    // rejected if the input value is not a number
    if (isNaN(user_guess)) {
        alert("Not allow empty or a string as guess number. You should enter a number before click the guess button.")
    }

    // rejected if the input value is out of the guessing range
    if (user_guess <= min_guessed_num || user_guess >= max_guessed_num) {
        alert(`Please enter a number between ${min_guessed_num} and ${max_guessed_num}.`)
    }
    else {
        no_of_guesses += 1

        if (user_guess < answer) {  // lower than 
            msg1.textContent = "No. of Guess: " + no_of_guesses
            min_guessed_num = user_guess
            msg2.textContent = `Please guess the number between ${min_guessed_num} - ${max_guessed_num}`
        } else if (user_guess > answer) {  // higher than
            msg1.textContent = "No. of Guess: " + no_of_guesses
            max_guessed_num = user_guess
            msg2.textContent = `Please guess the number between ${min_guessed_num} - ${max_guessed_num}`
        } else if (user_guess === answer) {  // win the game
            msg1.textContent = "The number was " + answer
            msg2.textContent = `You guessed it in ${no_of_guesses} guesses. Congratulation! Emmm... I have no reward to give you sorry bro`
            guess_btn.disabled = true
            guess_btn.textContent = "YOU WIN!"
            setTimeout(replayOption, 2000)
        }
    }

    document.getElementById('guess').value = ''
}

const play = () => {
    if (no_of_guesses < 10) {
        guessNum()
    } else {
        msg1.textContent = "The number was " + answer
        msg2.textContent = "You trash, go to sleep bro"
        guess_btn.disabled = true
        guess_btn.textContent = "YOU LOSE!"
        setTimeout(replayOption, 3000)
    }
}

const replayOption = () => {
    if (confirm("Do you want to play again?")) {
        alert("There you go!")
        window.location.reload()  // Reload
    } else {
        alert("Trash game, bye!")
        window.close()  // Close
    }
}