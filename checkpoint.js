var color = 0;
heart = document.getElementsByClassName("like-btn");
function colorSwipe() {
  if (color == 0) {
    heart.style.backgroundColor = "";
    color = 1;
  } else {
    heart.style.backgroundColor = "red";
    color = 0;
  }
}
