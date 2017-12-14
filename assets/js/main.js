

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(elementID) {
    document.getElementById(elementID).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.droppro')) {
    var proDropdown = document.getElementById("proDropdown");
      if (proDropdown.classList.contains('show')) {
        proDropdown.classList.remove('show');
      }
  }
  if (!e.target.matches('.dropncaa')) {
    var ncaaDropdown = document.getElementById("ncaaDropdown");
      if (ncaaDropdown.classList.contains('show')) {
        ncaaDropdown.classList.remove('show');
      }
  }
  if (!e.target.matches('.dropmlb')) {
    var mlbDropdown = document.getElementById("mlbDropdown");
      if (mlbDropdown.classList.contains('show')) {
        mlbDropdown.classList.remove('show');
      }
  }
}


