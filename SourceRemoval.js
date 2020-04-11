// TODO: 
// - Fix center alignment for object tag
// - Fix hints

// JS functions for the Source Removal Algorithm
var numVertices = 5;
var myTableId = "myTable";
var playerTableId = "playerTable";
var hintTableId = "hintTable";
var myPseudocodeTableId = "myPseudocodeTable";

var showHints = false;
var firstVisible = true;
var secVisible = true;
var thirdVisible = true;
var fourthVisible = true;
var fifthVisible = true;
var sixthVisible = true;
var seventhVisible = true;

function funNumVertices() {
    numVertices = parseInt(document.getElementById("numVertices").value, 10);
    // TODO: implement this function's functionality   
}
function nextStep() {
    
}
function chooseYes() {
        
}
function chooseNo() {
    
}

function removeFive(button) {
    var nodeID = button.id;
    var nodeValue = button.value;
    var list = document.getElementById("SortedList");
    var hints = document.getElementById("Hints");

    if(firstVisible == true){  // First is B
        var arrow1 = document.getElementById("Bup");
        var arrow2 = document.getElementById("Bright");
        if(nodeID == "firstNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            list.innerHTML = "Sorted List: " + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            firstVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    }
    
    if(firstVisible == false){  // Second is A
        var arrow1 = document.getElementById("Aright");
        var arrow2 = document.getElementById("Adown");
        if(nodeID == "secondNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            list.innerHTML = "Sorted List: B" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            secVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(secVisible == false){  // Third is C
        var arrow1 = document.getElementById("Dup");
        var arrow2 = document.getElementById("Dright");
        if(nodeID == "thirdNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            list.innerHTML = "Sorted List: BA" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            thirdVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(thirdVisible == false){  // Fourth is C
        var arrow1 = document.getElementById("Cdown");
        if(nodeID == "fourthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            list.innerHTML = "Sorted List: BAD" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            fourthVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(fourthVisible == false){  // Fifth is E
        if(nodeID == "fifthNode"){
            button.style.visibility = "hidden";
            list.innerHTML = "Sorted List: BADC" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            fifthVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 
}

function removeSix(button) {
    var nodeID = button.id;
    var nodeValue = button.value;
    var list = document.getElementById("SortedList");
    var hints = document.getElementById("Hints");

    if(firstVisible == true){  // First is A
        var arrow1 = document.getElementById("Aright1");
        var arrow2 = document.getElementById("Adown1");
        var arrow3 = document.getElementById("Adown2");
        if(nodeID == "firstNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            arrow3.style.visibility = "hidden";
            list.innerHTML = "Sorted List: " + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            firstVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    }
    
    if(firstVisible == false){  // Second is B
        var arrow1 = document.getElementById("Bright1");
        if(nodeID == "secondNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            list.innerHTML = "Sorted List: A" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            secVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(secVisible == false){  // Third is D
        var arrow1 = document.getElementById("Dup1");
        var arrow2 = document.getElementById("Dright1");
        if(nodeID == "thirdNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            list.innerHTML = "Sorted List: AB" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            thirdVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(thirdVisible == false){  // Fourth is C
        var arrow1 = document.getElementById("Cdown1");
        var arrow2 = document.getElementById("Cright1");
        if(nodeID == "fourthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            list.innerHTML = "Sorted List: ABD" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            fourthVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(fourthVisible == false){  // Fifth is E
        var arrow1 = document.getElementById("Edown1");
        if(nodeID == "fifthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            list.innerHTML = "Sorted List: ABDC" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            fifthVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(fifthVisible == false){  // Sixth is F
        if(nodeID == "sixthNode"){
            button.style.visibility = "hidden";
            list.innerHTML = "Sorted List: ABDCE" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            sixthVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 
}

function removeSeven(button) {
    var nodeID = button.id;
    var nodeValue = button.value;
    var list = document.getElementById("SortedList");
    var hints = document.getElementById("Hints");

    if(firstVisible == true){  // First is F
        var arrow1 = document.getElementById("Fright");
        var arrow2 = document.getElementById("Fleft");
        var arrow3 = document.getElementById("FUright");
        var arrow3 = document.getElementById("FUleft");
        if(nodeID == "firstNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            arrow3.style.visibility = "hidden";
            arrow4.style.visibility = "hidden";
            list.innerHTML = "Sorted List: " + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            firstVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    }
    
    if(firstVisible == false){  // Second is E
        var arrow1 = document.getElementById("Eup");
        if(nodeID == "secondNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            list.innerHTML = "Sorted List: F" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            secVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(secVisible == false){  // Third is A
        var arrow1 = document.getElementById("Aright2");
        if(nodeID == "thirdNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            list.innerHTML = "Sorted List: FE" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            thirdVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(thirdVisible == false){  // Fourth is B
        var arrow1 = document.getElementById("Bright2");
        if(nodeID == "fourthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            list.innerHTML = "Sorted List: FEA" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            fourthVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(fourthVisible == false){  // Fifth is C
        var arrow1 = document.getElementById("Cright2");
        if(nodeID == "fifthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            list.innerHTML = "Sorted List: FEAB" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            fifthVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 

    if(fifthVisible == false){  // Sixth is D
        var arrow1 = document.getElementById("Eright");
        if(nodeID == "sixthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            list.innerHTML = "Sorted List: FEABC" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            sixthVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    }

    if(sixthVisible == false){  // Seventh is G
        if(nodeID == "sixthNode"){
            button.style.visibility = "hidden";
            list.innerHTML = "Sorted List: FEABCE" + nodeValue;
            hints.innerHTML = "Correct! Node " + nodeValue + " was the one you were supposed to remove.";
            sixthVisible = false;
        }
        else{
            hints.innerHTML = "Incorrect. Node " + nodeValue + " was not the one you were supposed to remove.";
        }
    } 
}

function hint() {
    
}	

// Check option selected and show cooresponding graph
function yesnoCheck(that) {
    if (that.value == "5"){
        alert("loading 5 node graph");
        document.getElementById("5NodeGraph").style.display = "inherit";
        loadGraph5();
    } else {
        document.getElementById("5NodeGraph").style.display = "none";
    }
    if (that.value == "6") {
        alert("loading 6 node graph");
        document.getElementById("6NodeGraph").style.display = "block";
        loadGraph6();
    } else {
        document.getElementById("6NodeGraph").style.display = "none";
    }
    if (that.value == "7") {
        alert("loading 7 node graph");
        document.getElementById("7NodeGraph").style.display = "block";
        loadGraph7();
    } else {
        document.getElementById("7NodeGraph").style.display = "none";
    }
}

// Load the chosen graph in the correct location
function loadGraph5(){
    document.getElementById("5NodeGraph").innerHTML='<object type="text/html" data="fiveNode.html" width="1000" height="1000" align="center"></object>';
}

function loadGraph6(){
    document.getElementById("6NodeGraph").innerHTML='<object type="text/html" data="sixNode.html" width="1000" height="1000" align="center"></object>';
}

function loadGraph7(){
    document.getElementById("7NodeGraph").innerHTML='<object type="text/html" data="sevenNode.html" width="1000" height="10000" align="center"></object>';
}
