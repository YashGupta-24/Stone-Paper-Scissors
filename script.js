let choice = document.querySelectorAll('.circle');
let computerChoice = "";
let humanChoice = "";
let humanCount = 0;
let computerCount = 0;
let answer = true;
let message = document.querySelector(".message");

choice.forEach((select) => {
    select.addEventListener("click", () => {
        humanChoice = select.getAttribute("id");
        let gameNumber = Math.floor(Math.random() * 3);
        if (gameNumber == 0)
            computerChoice = "stone";
        else if (gameNumber == 1)
            computerChoice = "paper";
        else
            computerChoice = "scissors";
        compare(computerChoice);
    });
});

const compare = (computerChoice) => {
    if (computerChoice == "stone") {
        if (humanChoice == "stone")
            display = "It was a Draw";
        else if (humanChoice == "paper") {
            display = "You Won! Paper beats rock";
            humanCount++;
            answer = true;
        }
        else {
            answer = false;
            display = "You Lost. Stone beats scissors"
            computerCount++;
        }
    }
    else if (computerChoice == "paper") {
        if (humanChoice == "paper")
            display = "It was a Draw";
        else if (humanChoice == "scissors") {
            display = "You Won! Scissors beats paper";
            humanCount++;
            answer = true;
        }
        else {
            display = "You Lost. Paper beats stone"
            computerCount++;
            answer = false;
        }
    }
    else {
        if (humanChoice == "scissors")
            display = "It was a Draw";
        else if (humanChoice == "stone") {
            display = "You Won! Stone beats Scissors";
            humanCount++;
            answer = true;
        }
        else {
            display = "You Lost. Scissors beats paper"
            computerCount++;
            answer = false;
        }
    }
    message.innerText = display;
    document.querySelector("#human").innerText = humanCount;
    document.querySelector("#computer").innerText = computerCount;
    if (answer == true) {
        message.classList.remove("messageLost")
        message.classList.add("messageWin");
    }
    else {
        message.classList.remove("messageWin")
        message.classList.add("messageLost");
    }

    if (display == "It was a Draw") {
        message.classList.remove("messageWin", "messageLost")
    }
}