let mainElement = document.querySelector("main#main");
mainElement.remove();

let newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent = "nobody is the champion"; 

document.body.append(newHeader);
