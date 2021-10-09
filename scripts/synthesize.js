const synthesize = (t) => {
    const utter = new window.SpeechSynthesisUtterance(t);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter)
}