var btn = document.getElementById('donate')
var btn2 = document.getElementById('volunteer')
var vol = document.getElementsByClassName('.vol')
var putWords = document.getElementById('text')

vol.addEventListener('click', show)
btn.addEventListener('click', load)

function show() {
  var text = "We have received your details, Thank you..."
  putWords.innerText = text
}

function load() {
  alert("We are working with the best team to integrate the payment section to this website for you \n We are sorry for any incovenience")
}