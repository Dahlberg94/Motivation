document.addEventListener("DOMContentLoaded", function() {
    const adviceElement = document.getElementById("advice");
    const middleDiv = document.querySelector(".middleDiv");
    
    function adjustTextSize() {
        let fontSize = 1.5;
        adviceElement.style.fontSize = `${fontSize}rem`;

        while (adviceElement.scrollHeight > middleDiv.clientHeight && fontSize > 1) {
            fontSize -= 0.1;
            adviceElement.style.fontSize = `${fontSize}rem`;
        }
    }

    adjustTextSize();
    window.addEventListener("resize", adjustTextSize);
});