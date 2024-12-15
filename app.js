
document.addEventListener("DOMContentLoaded", function() {
    const adviceH2 = document.getElementById("advice");
    const adviceNrH2 = document.getElementById("adviceNr");
    const quoteButton = document.getElementById("quoteButton");
    const adviceElement = document.getElementById("advice");
    const middleDiv = document.querySelector(".middleDiv");

async function fetchAdvice() {
    try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const advice = data.slip.advice;
    const adviceId = data.slip.id;
    adviceH2.textContent = `"${advice}"`;
    adviceNrH2.textContent = `ADVICE #${adviceId}`;
    adjustTextSize();
    } catch (error) {
    console.error("Error Getching advice", error);
    adviceH2.textcontent = "could not fetch advice";
    }

} 

function adjustTextSize() {
    let fontSize = 1.5;  // Initial font size in rem
    adviceElement.style.fontSize = `${fontSize}rem`;

    while (adviceElement.scrollHeight > middleDiv.clientHeight && fontSize > 1) {
        fontSize -= 0.1;
        adviceElement.style.fontSize = `${fontSize}rem`;
    }
}

fetchAdvice();

quoteButton.addEventListener("click", fetchAdvice);



adjustTextSize();
window.addEventListener("resize", adjustTextSize);

})