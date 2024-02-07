const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passowrd1El = document.getElementById("passowrd1")
let passowrd2El = document.getElementById("passowrd2")

function generate() {
    let pass1 = []
    let pass2 = []
    for (let i = 0; i < 15; i++) {
        pass1 = pass1 + characters[Math.floor(Math.random() * characters.length)]
        pass2 = pass2 + characters[Math.floor(Math.random() * characters.length)]
    }
    console.log(pass1)
    passowrd1El.textContent =  pass1
    console.log(pass2)
    passowrd2El.textContent =  pass2
}