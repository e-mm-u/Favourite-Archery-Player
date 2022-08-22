// function to check how many childs an element has by it's id 
function coundChild(id){
    return document.getElementById(id).children.length;
}

// function to create an html element
function createList(name){
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

// here we will fetch all the buttons first by their class name 
const buttons = document.getElementsByClassName('btn');
const btnLen = buttons.length;


// for each button we need to add event 
for(let i = 0; i<btnLen; i++){

    // --------------event listener function ------------
    buttons[i].addEventListener('click', function(){

        const n = coundChild('top-five');//checking how many children are there
        const top5 = document.querySelector('#top-five');//fetching the top5 list element
        const name = buttons[i].parentElement.children[0].innerHTML;//fetching the player name
        
        const id = buttons[i].parentElement.children[2].id; //getting the id of selected button
        const element = document.getElementById(id);//getting the whole button elemwnt by it's id

        //-------------- button disabled functionality--------------------------
        // need to add class disabled for bootstrap button 
        // and bootstrap says to add area-disabled true for the buttons made by a tag 

        element.setAttribute("aria-disabled","true");
        element.classList.add("disabled");
        // console.log(name);


        // -----list can have at most 5 children, so chcking here before append any child----
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

