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
function removeFirst(button) {
    var nodeID = button.id;
    var nodeValue = button.value;
    var list = document.getElementById("SortedList");
    var hints = document.getElementById("Hints");

    if(firstVisible == true){
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
    
    if(firstVisible == false){
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

    if(secVisible == false){
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

    if(thirdVisible == false){
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

    if(fourthVisible == false){
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
    document.getElementById("5NodeGraph").innerHTML='<object type="text/html" data="fiveNode.html" ></object>';
}

function loadGraph6(){
    document.getElementById("6NodeGraph").innerHTML='<object type="text/html" data="sixNode.html" ></object>';
}

function loadGraph7(){
    document.getElementById("7NodeGraph").innerHTML='<object type="text/html" data="sevenNode.html" ></object>';
}
