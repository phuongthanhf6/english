function speakWord(button) {
    // Tìm từ vựng liên kết với nút nhấn
    const itemDiv = button.closest(".item");
    const vocabElement = itemDiv.querySelector("#vocab");
    const word = vocabElement.textContent.trim();

    // Phát âm từ vựng
    const msg = new SpeechSynthesisUtterance(word);
    msg.lang = "en-US";
    msg.voice =
        speechSynthesis
            .getVoices()
            .find((voice) => voice.name.includes("Google US English")) || null;

    window.speechSynthesis.speak(msg);
    window.speechSynthesis.onvoiceschanged = function () {};
}

 

function speakPopup(button) {
    // Tìm phần tử 'vocab' nằm ngay trước nút bấm
    const vocabElement = button.previousElementSibling;
    const word = vocabElement.textContent.trim();

    // Phát âm từ vựng
    const msg = new SpeechSynthesisUtterance(word);
    msg.lang = "en-US";
    msg.voice =
        speechSynthesis
            .getVoices()
            .find((voice) => voice.name.includes("Google US English")) || null;

    window.speechSynthesis.speak(msg);
    window.speechSynthesis.onvoiceschanged = function () {};
}
