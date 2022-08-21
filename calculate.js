function clearField(id){
    document.getElementById(id).value = '';
}

function value(id){
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

function changeInnertext(id,replacewith){
    document.getElementById(id).innerText = replacewith;
}

document.getElementById('calculate').addEventListener('click',function(){

    const perPersonCost = value('perPlayerCost');

    // clearField('perPlayerCost');

    const totalPerPlayerCost = 5 * perPersonCost;
    changeInnertext('playerExpensetotal',totalPerPlayerCost);
    
    // document.getElementById('playerExpensetotal').innerText = totalPerPlayerCost;
})

document.getElementById('calculate-total').addEventListener('click', function(){
    // const totalPerPlayerCost = parseFloat(document.getElementById('playerExpensetotal').innerText);
    const totalPerPersonCost = 5 * value('perPlayerCost');

    const managerCost = value('manager');

    const coachCost = value('coach');


    const finalCost = totalPerPersonCost + managerCost + coachCost;

    changeInnertext('final-cost',finalCost);

    clearField('perPlayerCost');
    clearField('manager');
    clearField('coach');

})