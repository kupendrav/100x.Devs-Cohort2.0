let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("#voices");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i))
};

document.querySelector('button').addEventListener('click', () => {
  speech.text = document.querySelector('textarea').value;
  window.speechSynthesis.speak(speech);
});



// download the voice generated 
document.querySelector('#download').addEventListener('click', () => {
  const blob = new Blob([speech.text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'voice.mp3';
  a.click();
  URL.revokeObjectURL(url);
});