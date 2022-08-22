// function to clear a field 
function clearField(id){
    document.getElementById(id).value = '';
}

// function to get the value written in an input element as a floating number 
function value(id){
    const value = parseFloat(document.getElementById(id).value);

    if(isNaN(value)){
        alert('Enter a valid number');
        return 0;
    }
    
    return value;
}

// function to change inner text of an element 
function changeInnertext(id,replacewith){
    document.getElementById(id).innerText = replacewith;
}

// funtion to count child 
function coundChild(id){
    return document.getElementById(id).children.length;
}

document.getElementById('calculate').addEventListener('click',function(){

    const perPersonCost = value('perPlayerCost');
    // clearField('perPlayerCost');

    const n = coundChild('top-five');
    const totalPerPlayerCost = n * perPersonCost;
    changeInnertext('playerExpensetotal',totalPerPlayerCost);
    
    // document.getElementById('playerExpensetotal').innerText = totalPerPlayerCost;
})

document.getElementById('calculate-total').addEventListener('click', function(){

    // const totalPerPlayerCost = parseFloat(document.getElementById('playerExpensetotal').innerText);
    
    const perPersonCost = value('perPlayerCost');
    const n = coundChild('top-five');
    const totalPerPlayerCost = n * perPersonCost;

    const managerCost = value('manager');
    const coachCost = value('coach');

    const finalCost = totalPerPlayerCost + managerCost + coachCost;

    changeInnertext('final-cost',finalCost);

    // clearField('perPlayerCost');
    // clearField('manager');
    // clearField('coach');

})