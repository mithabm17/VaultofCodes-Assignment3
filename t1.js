const btn =
document.getElementById("themeBtn");

btn.onclick = () => {


if(document.body.classList.contains("dark")){

btn.innerHTML="☀️";

}else{

btn.innerHTML="🌙";

}

};