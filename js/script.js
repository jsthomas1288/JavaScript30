window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const words = document.querySelector(".words");
const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  const word = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = word;
  words.append(p);

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    if (word.includes("open LinkedIn") || word.includes("Open LinkedIn")) {
      p = document.createElement("p");
      p.innerText = "Opening LinkedIn...";
      words.append(p);
      window.open("https://www.linkedin.com/feed");
    }
  }
  //   console.log(e);
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
