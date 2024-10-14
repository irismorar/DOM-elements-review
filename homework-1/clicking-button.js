const A_square = document.getElementById("squareA")
const B_square = document.getElementById("squareB")
const C_square = document.getElementById("squareC")

document.body.addEventListener("click", function(event){
  if (event.target === A_square) {
    alert("You've clicked on A")
  }

  if (event.target === B_square) {
    alert("You've clicked on B")
  }

  if (event.target === C_square) {
    alert("you've clicked on C")
  }
})