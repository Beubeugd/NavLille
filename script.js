let test = document.querySelector("#oe");
test.onclick = azerty;
function azerty() {
    let ytreza = prompt("Entrez le mot de passe ");
    if (ytreza == "123456789") {
    	window.open("secret.html");
    } else {
    	test.classList.add("aqw");
    	test.innerText = `Mot de passe incorecte`;
    	window.setTimeout(pingu, 2000);
    }

    function pingu() {

    	test.classList.remove("aqw");
    	test.innerText = `Bienvenue sur notre site de téléchargement `;
    }
    }

let coco = document.querySelector("#coco");
coco.onclick = bye;
function bye() {
	window.open("index.html")
}