function isPalindrome(word) {
  const wordArray = word.split("");
  const backwards = wordArray.reverse();
  //console.log(backwards)
  const rejoined = backwards.join("")
  //console.log(word)
  //console.log(rejoined)
  if (word == rejoined) {
    return true
  } else {
    return false
  }
}

/* 
  function called isPalidrome takes a word as a parameter
    if the word passed as an argument is palindrome
      return true
    else
      return false
*/

/*
  line 1 defines function with word parameter
  line 2 splits word into an array called wordArray
  line 3 reverses order of wordArray called backwards
  line 4 is a test
  line 5 rejoins backwards into a single word called rejoined
  line 6 is a test
  line 7 is a test
  line 8 is an if statement comparing word to rejoined
  line 9 returns true
  line 10 is an else statement
  line 11 returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
