const buttonAlert = document.getElementById("mybutton");

    buttonAlert.addEventListener("click", function () {
    alert("button clicked");
});

const changeColorBackground = document.getElementById("change-background-button");

    changeColorBackground.addEventListener("click", function () {
    changeClassBlueBackground();
});

const changeClassBlueBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};
