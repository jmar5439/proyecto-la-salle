const url = "http://catfact.ninja/fact";
const div = document.querySelector("#cats-facts");


async function loadFact(){
    const resp = await fetch(url);
    const json = await resp.json();
    return json.fact;
}


function paintFact(fact){
    const article = document.createElement("article");
    article.innerText = fact;
    div.appendChild(article);
}

async function showFact(){
    const fact = await loadFact();
    paintFact(fact);
}

async function cleanupOne(){
    div.removeChild(div.firstChild);
}

setInterval(showFact,5000);

setTimeout(()=> setInterval(cleanupOne,5000),10000);