function verifyStudent(){

let id =
document.getElementById("identifier").value;

let result =
document.getElementById("result");

if(id.trim()===""){

result.innerHTML=
"<h3>❌ Please enter Email or ID</h3>";

return;
}

result.innerHTML=`

<div style="
margin-top:20px;
padding:25px;
border-radius:20px;
background:rgba(255,255,255,.1);
">

<h2>✅ Certificate Verified</h2>

<p><b>Name:</b> Mitha BM</p>

<p><b>Domain:</b> Web Development</p>

<p><b>College:</b> Presidency University</p>

<p><b>Duration:</b> 1 Month</p>

<p><b>Status:</b> Completed</p>

</div>

`;

}