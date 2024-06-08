function createCard(title,cName,views,monthsOld,duration,thumbnail){
let viewStr;
if(views<1000)
    viewStr=views;
else if(views>1000000)
    viewStr=views/1000000 + "M";
else
    viewStr=views/1000 + "K";

const html = `<div class="card">
<div class="image">
    <img src=${thumbnail}>
    <div class="capsule">${duration}</div>
</div>
<div class="text">
    <h1>${title}</h1>
    <p>${cName} . ${viewStr} views . ${monthsOld} month ago</p>
</div>
</div>`
document.querySelector(".wrapper").innerHTML=document.querySelector(".wrapper").innerHTML + html;

}

createCard("Introduction to My Channel","Jinx",154,6,"45:12","https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
