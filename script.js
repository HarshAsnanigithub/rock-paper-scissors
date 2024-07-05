let choices = document.querySelectorAll(".choice");
let message = document.querySelector(".message");
let userscore = document.querySelector(".userscore");
let compscore = document.querySelector(".compscore");
let yourchoice = document.querySelector(".yc");
let cmpchoice = document.querySelector(".cc");
const randchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};
const game = (userchoice) => {
    const compchoice = randchoice();
    console.log("comp:", compchoice);
    if (userchoice === compchoice) {
        // draw case
        message.innerText = "It's draw!!";
        message.style.backgroundColor = "#483C32";
    }
    else {
        if (userchoice === "rock") {
            if (compchoice === "paper") {
                // comp wins
                message.innerText = "Computer Wins.";
                compscore.innerText++;
                message.style.backgroundColor = "#FD5E53";
            }
            else {
                // user wins
                message.innerText = "You Win.";
                userscore.innerText++;
                message.style.backgroundColor = "#77DD77";
            }
        }
        else if (userchoice === "paper") {
            if (compchoice === "scissors") {
                // comp wins
                message.innerText = "Computer Wins.";
                compscore.innerText++;
                message.style.backgroundColor = "#FD5E53";
            }
            else {
                // user wins
                message.innerText = "You Win.";
                userscore.innerText++;
                message.style.backgroundColor = "#77DD77";
            }
        }
        else {
            if (compchoice === "rock") {
                // comp wins
                message.innerText = "Computer Wins.";
                compscore.innerText++;
                message.style.backgroundColor = "#FD5E53";
            }
            else {
                // user wins
                message.innerText = "You Win.";
                userscore.innerText++;
                message.style.backgroundColor = "#77DD77";
            }
        }
    }
    yourchoice.innerText = `Your choice : ${userchoice}`;
    cmpchoice.innerText = `Computer choice : ${compchoice}`;
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("user:", userchoice);
        game(userchoice);
    });
});
