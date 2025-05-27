//Lista urządzeń
document.getElementById('devicesList').innerHTML = `
    <div class="devices">
<h2>Aktualnie dostępne urządzenia:</h2>
<ul>
    <li><a href="rn8pro.html">Redmi Note 8 Pro (begonia)</a></li>
    <li><a href="klte.html">Samsung S5 (klte)</a></li>
    <li><a href="rn10pro(sweet).html">Redmi Note 10 Pro (Sweet)</a></li>
</ul>
</div>`

//Navigation bar
document.getElementById('navbarid').innerHTML = `
<div class="topnav" id="myTopnav">
            <a href="index.html">Strona główna</a>
            <a href="tutorials.html">Instrukcje</a>
            <a href="projects.html">Projekty</a>
            <a href="informacje.html">Informacje</a>
            <a href="changelog.html">Ostatnie zmiany</a>
            <a href="kontakt.html">Kontakt</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()"><img src="menu.png" width="30px"</a>
    </div>

`

//Stopka
document.getElementById('footerid').innerHTML = `
<div class="footer">
    <p>Copyright: d4gnk</p>
    <p>Strona powstała w celach edukacyjnych.</p>
</div>
`
//Responsywny navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}