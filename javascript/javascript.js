document.addEventListener("DOMContentLoaded", () => {
    const welcomeText = "Luminous Pursuit";
    const welcomeDiv = document.getElementById("welcome");

    for (let i of welcomeText) {
        const span = document.createElement("span");
        span.classList.add("char");
        span.textContent = i;
        welcomeDiv.appendChild(span);
    }

    const chars = document.querySelectorAll(".char");
    const delay = 70;
    const totalDisplayTime = chars.length * delay;
    const sections = document.querySelectorAll(".screen");

    chars.forEach((char, index) => {
        setTimeout(() => char.style.opacity = "1", index * delay);
    });

    setTimeout(() => {
        chars.forEach((char, index) => {
            setTimeout(() => char.style.opacity = "0", index * (delay - 10));
        });

        setTimeout(() => {
            for (let i of sections) {
                setTimeout(() => {
                    i.style.opacity = "1";
                }, 300);
            }
        }, totalDisplayTime * 1.5);

    }, totalDisplayTime * 1.2);

    let currentScene = 0;
    let isFlag = false;
    window.addEventListener("wheel", (event) => {
        if (currentScene < 0 || currentScene >= sections.length || isFlag) {
            return;
        }

        isFlag = true;
        const direction = Math.sign(event.deltaY);
        if (direction > 0) {
            if (currentScene < sections.length - 1) {
                currentScene++;
            }
        } else {
            if (currentScene > 0) {
                currentScene--;
            }
        }

        sections[currentScene].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        setTimeout(() => {
            isFlag = false;
        }, 200);
    });
});