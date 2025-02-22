function checkAnswers() {
    let q1 = document.getElementById("q1").value.toLowerCase();
    let q2 = document.getElementById("q2").value.toLowerCase();
    let q3 = document.getElementById("q3").value.toLowerCase();

    if (q1.includes("travel") && q2.includes("spending time") && q3.includes("gundamma")) {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";
        triggerBlast();
        startConfetti();
        playMusic();
    } else {
        alert("Oops! Try again. Think about our best memories!");
    }
}

function triggerBlast() {
    let blast = document.createElement("div");
    blast.classList.add("blast");
    document.body.appendChild(blast);

    setTimeout(() => {
        blast.remove();
    }, 1000);
}

function startConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random fall speed
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function getRandomColor() {
    let colors = ["#ff0", "#f00", "#0f0", "#00f", "#ff4500", "#ff1493"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function playMusic() {
    let music = document.getElementById("partyMusic");
    music.play().catch(error => console.error("Audio error:", error));
}

{
    function showSurpriseImage() {
        let img = document.createElement("img");
        img.src = "images/gundamma1.jpg";  // Replace with your image file
        img.alt = "Surprise!";
        img.width = 300;
        document.getElementById("result").appendChild(img);
    }
    
}