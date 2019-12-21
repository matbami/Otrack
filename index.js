



 var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  

  
  const name = document.getElementById('name').value
  
  const number = document.getElementById('number').value
  if(isNaN(number) == true) {
 alert("invalid weight")
  }
  // const piss = name.innerText
  else{
    modal.style.display = "block";
    const message = document.getElementById('message')
    message.innerHTML = `Dear ${name}, Your weight of ${number}kg is recorded successfully Thank you!`
    
  }
  
  // name =''
  // number = ''
  document.getElementById('name').value=''
    document.getElementById('number').value=''
}

//cancel button
span.onclick = function() {
  modal.style.display = "none";
   document.getElementById('name').value = ''
   document.getElementById('number').value= ''
 
}

//close modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}