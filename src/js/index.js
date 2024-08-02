const shareBtn = document.getElementById("share-btn");
const innerShareBtn = document.getElementById("inner-share-btn");

const shareSegment = document.querySelector(".share-segment");
const profile = document.querySelector(".profile");
const card = document.querySelector(".card");

shareBtn.addEventListener("click", () => {

    if (window.innerWidth < 800) {
        toggleMobileStates();
    } else if (window.innerWidth < 1024 && window.innerWidth < window.innerHeight) {
        toggleMobileStates();
    } else {
        toggleDesktopStates();
        setCoordsRelativeToBtn();
    }
});

innerShareBtn.addEventListener("click", () => {
    toggleMobileStates();
});

window.addEventListener("resize", () => {

    if (!Array(shareSegment.classList).includes("hidden")) {
        shareSegment.classList.add("hidden");
        profile.classList.remove("hidden");
        card.classList.remove("extended");
    }
});

function toggleMobileStates() {
    profile.classList.toggle("hidden");
    shareSegment.classList.toggle("hidden");
    card.classList.toggle("extended");
}

function toggleDesktopStates() {
    shareSegment.classList.toggle("hidden");
}

function setCoordsRelativeToBtn() {
    let btnCoords = shareBtn.getBoundingClientRect();
    let segmentCoords = shareSegment.getBoundingClientRect();

    shareSegment.style.left = btnCoords.left + btnCoords.width / 2 - segmentCoords.width / 2 + "px";
    shareSegment.style.top = btnCoords.top + window.scrollY - segmentCoords.height - 28 + "px";
}