alert("SNAKE WATER GUN \n Let's get started !!")
alert(" Game Rules  \n You have to choose one of the three options \n 1. Snake = S \n 2. Water = W \n 3. Gun = G")
alert("1. Gun Overpowers the snake \n 2. Water Overpowers the Gun \n 3. Snake Overpowers the Water")

// 1st function
function playgame(){
function comchoices() {
  const choices = ["S", "W", "G"]
  let choiceindex = Math.floor(Math.random() * choices.length)
  return choices[choiceindex];
}

// 2nd function
function determinewinner(userchoice, comchoices) {
  if (userchoice == comchoices) {
    return "It's a tie!!";
  }
  if ((userchoice == "S" &&comchoices == "W") ||
    (userchoice == "W" && comchoices == "G") ||
    (userchoice == "G" && comchoices == "S")) {
    return "You win!!";
  }
  else {
    return "You lose!!"
  }
}
while (true) {
  const userchoice = prompt("Enter 'S' for snake, 'W' for water, 'G' for gun");
  if (userchoice === null) {
      alert("Game cancelled");
      break;
  }
  const one = userchoice.toUpperCase();
  if (one !== 'S' && one !== 'W' && one !== 'G') {
      alert("Invalid input. Please enter S, W, or G.")
     
    continue;
  }


const Achoice = comchoices();
  alert(`computer chose:${Achoice}`);

  const result = determinewinner(userchoice, Achoice);
  alert(result);
  const playagain = confirm("Do you want to play again?");
  if(!playagain)
    break;
}
}
playgame();
