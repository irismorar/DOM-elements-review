const A_square = document.querySelector("button.A")
const B_square = document.querySelector("button.B")
const C_square = document.querySelector("button.C")

function handleClick(event){
  if (event.target === A_square) {
    alert("You've clicked on A")
  }

  if (event.target === B_square) {
    alert("You've clicked on B")
  }

  if (event.target === C_square) {
    alert("you've clicked on C")
  }
}

document.body.addEventListener("click", handleClick)
