const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function removePunctuation(text) {
  let punctuation = /[\/.,?!:;_\-() ]/g;
  let newText = text.replace(punctuation, "");
  return newText;
}

function checkerPalindrome() {
  const phrase = input.value;
  const reversePhrase = phrase.split("").reverse().join("");

  if (phrase === "") {
    alert("Please input a value");
    return;
  }
  
  if (removePunctuation(phrase).toLowerCase() === removePunctuation(reversePhrase).toLowerCase()) {
    result.textContent = `${phrase} is a palindrome`;
  } else {
    result.textContent = `${phrase} is not a palindrome`;
  }
}

checkButton.addEventListener("click", checkerPalindrome);

