//home score function
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function incOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function incTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function incThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

//guest score function
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function incOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function incTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function incThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

//reset the game function 
function resetGame() {
    homeScore = 0
    guestScore = 0 
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}