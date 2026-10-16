
// Find the button and the paragraph
const factButton = document.getElementById("fact-button");
const parisFact = document.getElementById("paris-fact");

// Run this function when the button is clicked
factButton.addEventListener("click", function () {

    const isHidden = parisFact.hidden;

    if (isHidden) {
        parisFact.hidden = false;
        factButton.textContent = "Hide Paris Fact";
        factButton.setAttribute("aria-expanded", "true");
    } else {
        parisFact.hidden = true;
        factButton.textContent = "Show Paris Fact";
        factButton.setAttribute("aria-expanded", "false");
    }

});
