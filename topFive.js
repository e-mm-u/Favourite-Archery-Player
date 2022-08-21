function coundChild(id){
    return document.getElementById(id).children.length;
}

function createList(name){
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

const buttons = document.getElementsByClassName('btn');
const btnLen = buttons.length;

for(let i = 0; i<btnLen; i++){
    buttons[i].addEventListener('click', function(){
        const n = coundChild('top-five');
        const top5 = document.querySelector('#top-five');
        const name = buttons[i].parentElement.children[0].innerHTML;
        // console.log(name);
        if(n<5){
            top5.appendChild(createList(name));
        }
        else{
            alert("You can put only 5 athletes in your list!");
        }
    })
}

// document.getElementById('1').addEventListener('click', function(){
//     const c = document.getElementById('1').parentElement.children[0].innerHTML;
//     console.log(c)
// })

