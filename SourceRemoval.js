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

function removeFive(button) {
    var nodeID = button.id;
    var nodeValue = button.value;
    var list = document.getElementById("SortedList");

    if(firstVisible == true){  // First is B
        var arrow1 = document.getElementById("Bup");
        var arrow2 = document.getElementById("Bright");
        if(nodeID == "firstNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            if(nodeValue == 'B'){
                list.innerHTML = "Sorted List: " + nodeValue;
                firstVisible = false;
            }
        } 
    }
    
    if(firstVisible == false){  // Second is A
        var arrow1 = document.getElementById("Aright");
        var arrow2 = document.getElementById("Adown");
        if(nodeID == "secondNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            if(nodeValue == 'A'){
                list.innerHTML = "Sorted List: B" + nodeValue;
                secVisible = false;
            }
        } 
    } 

    if(secVisible == false){  // Third is C
        var arrow1 = document.getElementById("Dup");
        var arrow2 = document.getElementById("Dright");
        if(nodeID == "thirdNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            if(nodeValue == 'D'){
                list.innerHTML = "Sorted List: BA" + nodeValue;
                thirdVisible = false;
            }
        }
    } 

    if(thirdVisible == false){  // Fourth is C
        var arrow1 = document.getElementById("Cdown");
        if(nodeID == "fourthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            if(nodeValue == 'C'){
                list.innerHTML = "Sorted List: BAD" + nodeValue;
                fourthVisible = false;
            }
        }
        
    } 

    if(fourthVisible == false){  // Fifth is E
        if(nodeID == "fifthNode"){
            button.style.visibility = "hidden";
            if(nodeValue == 'E'){
                list.innerHTML = "Sorted List: BADC" + nodeValue;
                fifthVisible = false;
            }
        }
    } 
}

function removeSix(button) {
    var nodeID = button.id;
    var nodeValue = button.value;
    var list = document.getElementById("SortedList");

    if(firstVisible == true){  // First is A
        var arrow1 = document.getElementById("Aright1");
        var arrow2 = document.getElementById("Adown1");
        var arrow3 = document.getElementById("Adown2");
        if(nodeID == "firstNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            arrow3.style.visibility = "hidden";
            if(nodeValue == 'A'){
                list.innerHTML = "Sorted List: " + nodeValue;
                firstVisible = false;
            }
            
        }
    }
    
    if(firstVisible == false){  // Second is B
        var arrow1 = document.getElementById("Bright1");
        if(nodeID == "secondNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            if(nodeValue == 'B'){
                list.innerHTML = "Sorted List: A" + nodeValue;
                secVisible = false;
            } 
        }
    } 

    if(secVisible == false){  // Third is D
        var arrow1 = document.getElementById("Dup1");
        var arrow2 = document.getElementById("Dright1");
        if(nodeID == "thirdNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            if(nodeValue == 'D'){
                list.innerHTML = "Sorted List: AB" + nodeValue;
                thirdVisible = false;
            }
        }
    } 

    if(thirdVisible == false){  // Fourth is C
        var arrow1 = document.getElementById("Cdown1");
        var arrow2 = document.getElementById("Cright1");
        if(nodeID == "fourthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            if(nodeValue == 'C'){
                list.innerHTML = "Sorted List: ABD" + nodeValue;
                fourthVisible = false;
            }
            
        }
    } 

    if(fourthVisible == false){  // Fifth is E
        var arrow1 = document.getElementById("Edown1");
        if(nodeID == "fifthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            if(nodeValue == 'E'){
                list.innerHTML = "Sorted List: ABDC" + nodeValue;
                fifthVisible = false;
            }
        }
    } 

    if(fifthVisible == false){  // Sixth is F
        if(nodeID == "sixthNode"){
            button.style.visibility = "hidden";
            if(nodeValue == 'F'){
                list.innerHTML = "Sorted List: ABDCE" + nodeValue;
                sixthVisible = false;
            }
        }
    } 
}

function removeSeven(button) {
    var nodeID = button.id;
    var nodeValue = button.value;
    var list = document.getElementById("SortedList");

    if(firstVisible == true){  // First is F
        var arrow1 = document.getElementById("Fright");
        var arrow2 = document.getElementById("Fleft");
        var arrow3 = document.getElementById("FUright");
        var arrow4 = document.getElementById("FUleft");
        if(nodeID == "firstNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            arrow3.style.visibility = "hidden";
            arrow4.style.visibility = "hidden";
            if(nodeValue == 'F'){
                list.innerHTML = "Sorted List: " + nodeValue;
                firstVisible = false;
            }
        }
    }
    
    if(firstVisible == false){  // Second is E
        var arrow1 = document.getElementById("Eup");
        if(nodeID == "secondNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            if(nodeValue == 'E'){
                list.innerHTML = "Sorted List: F" + nodeValue;
                secVisible = false;
            }
        }
    } 

    if(secVisible == false){  // Third is A
        var arrow1 = document.getElementById("Aright2");
        if(nodeID == "thirdNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            if(nodeValue == 'A'){
                list.innerHTML = "Sorted List: FE" + nodeValue;
                thirdVisible = false;
            }
        }
    } 

    if(thirdVisible == false){  // Fourth is B
        var arrow1 = document.getElementById("Bright2");
        if(nodeID == "fourthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            if(nodeValue == 'B'){
                list.innerHTML = "Sorted List: FEA" + nodeValue;
                fourthVisible = false;
            }
        }
    } 

    if(fourthVisible == false){  // Fifth is C
        var arrow1 = document.getElementById("Cright2");
        if(nodeID == "fifthNode"){
            button.style.visibility = "hidden";
            arrow1.style.visibility = "hidden";
            if(nodeValue == 'C'){
                list.innerHTML = "Sorted List: FEAB" + nodeValue;
                fifthVisible = false;
            }
        }
    } 

    if(fifthVisible == false){  // Sixth is D
        var arrow2 = document.getElementById("Ddown");
        if(nodeID == "sixthNode"){
            button.style.visibility = "hidden";
            arrow2.style.visibility = "hidden";
            if(nodeValue == 'D'){
                list.innerHTML = "Sorted List: FEABC" + nodeValue;
                sixthVisible = false;
            }
        }
    }

    if(sixthVisible == false){  // Seventh is G
        if(nodeID == "seventhNode"){
            button.style.visibility = "hidden";
            if(nodeValue == 'G'){
                list.innerHTML = "Sorted List: FEABCD" + nodeValue;
                seventhVisible = false;
            }
        }
    } 
}

async function hint5(){
    var list = document.getElementById("SortedList");
    var hints = document.getElementById("Hints");
    list.innerHTML = "Sorted List: BADCE"

    if(fourthVisible == false){  // Fifth is E
        var button = document.getElementById("fifthNode");
        var nodeValue = 'E';
        button.style.visibility = "hidden";
        fifthVisible = false;
    } 
    if(thirdVisible == false){  // Fourth is C
        var button = document.getElementById("fourthNode");
        var arrow1 = document.getElementById("Cdown");
        var nodeValue = 'C';
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        fourthVisible = false;
        
    } 
    if(secVisible == false){  // Third is D
        var button = document.getElementById("thirdNode");
        var arrow1 = document.getElementById("Dup");
        var arrow2 = document.getElementById("Dright");
        var nodeValue = 'D';
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        arrow2.style.visibility = "hidden";
        thirdVisible = false;
        
    } 
    if(firstVisible == false){  // Second is A
        var button = document.getElementById("secondNode");
        var arrow1 = document.getElementById("Aright");
        var arrow2 = document.getElementById("Adown");
        var nodeValue = 'A';
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        arrow2.style.visibility = "hidden";
        secVisible = false;
        
    } 
    if(firstVisible == true){  // First is B
        var button = document.getElementById("firstNode");
        var arrow1 = document.getElementById("Bup");
        var arrow2 = document.getElementById("Bright");
        var nodeValue = 'B';
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        arrow2.style.visibility = "hidden";
        firstVisible = false;
    }
}

function hint6() {
    var list = document.getElementById("SortedList");
    list.innerHTML = "Sorted List: ABDCEF";

    if(fifthVisible == false){  // Sixth is F
        var nodeValue = 'F';
        var button = document.getElementById("sixthNode");
        button.style.visibility = "hidden";
        sixthVisible = false;
    } 
    if(fourthVisible == false){  // Fifth is E
        var nodeValue = 'E';
        var arrow1 = document.getElementById("Edown1");
        var button = document.getElementById("fifthNode");
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        fifthVisible = false;
    } 
    if(thirdVisible == false){  // Fourth is C
        var nodeValue = 'C';
        var arrow1 = document.getElementById("Cdown1");
        var arrow2 = document.getElementById("Cright1");
        var button = document.getElementById("fourthNode");
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        arrow2.style.visibility = "hidden";
        fourthVisible = false;
    } 
    if(secVisible == false){  // Third is D
        var nodeValue = 'D';
        var arrow1 = document.getElementById("Dup1");
        var arrow2 = document.getElementById("Dright1");
        var button = document.getElementById("thirdNode");
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        arrow2.style.visibility = "hidden";
        thirdVisible = false;
    } 
    if(firstVisible == false){  // Second is B
        var nodeValue = 'B';
        var button = document.getElementById("secondNode");
        var arrow1 = document.getElementById("Bright1");
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        secVisible = false;
    } 
    if(firstVisible == true){  // First is A
        var nodeValue = 'A';
        var arrow1 = document.getElementById("Aright1");
        var arrow2 = document.getElementById("Adown1");
        var arrow3 = document.getElementById("Adown2");
        var button = document.getElementById("firstNode");
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        arrow2.style.visibility = "hidden";
        arrow3.style.visibility = "hidden";
        firstVisible = false;
    } 
}

function hint7() {
    var list = document.getElementById("SortedList");
    list.innerHTML = "Sorted List: FEABCDG";

    if(sixthVisible == false){  // Seventh is G
        var nodeValue = 'G';
        var button = document.getElementById("seventhNode");
        button.style.visibility = "hidden";
        seventhVisible = false;
    } 
    if(fifthVisible == false){  // Sixth is D
        var nodeValue = 'D';
        var button = document.getElementById("sixthNode");
        var arrow2 = document.getElementById("Ddown");
        button.style.visibility = "hidden";
        arrow2.style.visibility = "hidden";
        sixthVisible = false;
    }
    if(fourthVisible == false){  // Fifth is C
        var nodeValue = 'C';
        var button = document.getElementById("fifthNode");
        var arrow1 = document.getElementById("Cright2");
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        fifthVisible = false;
    }
    if(thirdVisible == false){  // Fourth is B
        var nodeValue = 'B';
        var button = document.getElementById("fourthNode");
        var arrow1 = document.getElementById("Bright2");
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        fourthVisible = false;
    }
    if(secVisible == false){  // Third is A
        var nodeValue = 'A';
        var arrow1 = document.getElementById("Aright2");
        var button = document.getElementById("thirdNode");
        button.style.visibility = "hidden";
        arrow1.style.visibility = "hidden";
        thirdVisible = false;
    }
    if(firstVisible == true){  // First is F
        var nodeValue = 'F';
        var arrow1 = document.getElementById("Fright");
        var arrow2 = document.getElementById("Fleft");
        var arrow3 = document.getElementById("FUright");
        var arrow4 = document.getElementById("FUleft");
        var button = document.getElementById("firstNode");
        arrow1.style.visibility = "hidden";
        arrow2.style.visibility = "hidden";
        arrow3.style.visibility = "hidden";
        arrow4.style.visibility = "hidden";
        button.style.visibility = "hidden";
        firstVisible = false;
    }else if(firstVisible == false){  // Second is E
        var nodeValue = 'E';
        var button = document.getElementById("secondNode");
        var arrow1 = document.getElementById("Eup");
        arrow1.style.visibility = "hidden";
        button.style.visibility = "hidden";
        secVisible = false;
    } 
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
    document.getElementById("5NodeGraph").innerHTML='<object type="text/html" data="fiveNode.html" width="1000" height="1000"></object>';
}

function loadGraph6(){
    document.getElementById("6NodeGraph").innerHTML='<object type="text/html" data="sixNode.html" width="1000" height="1000"></object>';
}

function loadGraph7(){
    document.getElementById("7NodeGraph").innerHTML='<object type="text/html" data="sevenNode.html" width="1000" height="10000"></object>';
}