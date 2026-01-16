fetch("test.txt")
  .then((res) => res.text())
  .then((text) => {
    var wordCount = 1;
    var wordArray = [];
    for (i = 0; i < wordCount; i++) {
    wordArray[i] = text;
    }
   })
  .catch((e) => console.error(e));
