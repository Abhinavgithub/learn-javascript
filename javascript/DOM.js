const title = document.getElementById("title");
title.style.color = 'green'
title.innerHTML = 'Learning DOM'

const li = document.querySelectorAll("li.list-item");
console.log(li);
let total = 0;
li.forEach((key)=>{
    total = total + parseInt(key.innerHTML)
})

const node = "<div id='total'></div>";
const newDiv = document.createElement("div")
newDiv.textContent = `Total = ${total}`;
newDiv.style.backgroundColor = "grey"
newDiv.id = "total"
console.log(newDiv);
let container = document.getElementById("ul")
container.appendChild(newDiv);