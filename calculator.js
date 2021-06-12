var s= prompt("Please enter your name")     
alert("Welcome "+s)
function clr(){
    document.getElementById("res").value=" "
}
function solve(){
  let x = document.getElementById("res").value
  let y = eval(x)
  document.getElementById("res").value= y

}
function disp(val){
document.getElementById("res").value += val
}