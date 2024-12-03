const morseCodeMap = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  " ": "/",
};

const reverseMorseCodeMap = {};

for (const key in morseCodeMap) {
  if (morseCodeMap.hasOwnProperty(key)) {
    reverseMorseCodeMap[morseCodeMap[key]] = key;
  }
}

function translateToMorse() {
  const inputText = document.getElementById("inputText").value.toUpperCase();

  let morseCode = "";
  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i];
    if (morseCodeMap[char]) {
      morseCode += morseCodeMap[char] + " ";
    }
  }

  document.getElementById("outputText").value = morseCode;
}

function translateToText() {
  const inputMorse = document.getElementById("inputText").value;
  const morseArray = inputMorse.split(" ");
  let translatedText = " ";

  for (let i = 0; i < morseArray.length; i++) {
    const code = morseArray[i];
    if (reverseMorseCodeMap[code]) {
      translatedText += reverseMorseCodeMap[code];
    } else if (code == "/") {
      translatedText += " ";
    }
  }
  document.getElementById("outputText").value = translatedText;
}
