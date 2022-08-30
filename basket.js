let home = document.getElementById("home")
let guest = document.getElementById("guest")
let score = 0;
let scoreg = 0;



function plusOneH() { 
    
    score += 1;
    home.textContent = score;
    
}

function plusTwoH() { 
    
    score += 2;
    home.textContent = score;
    
}

function plusThreeH() { 
    
    score += 3;
    home.textContent = score;
    
}


function plusOneG() { 
    
    scoreg += 1;
    guest.textContent = scoreg;
    
}

function plusTwoG() { 
    
    scoreg += 2;
    guest.textContent = scoreg;
    
}

function plusThreeG() { 
    
    scoreg += 3;
    guest.textContent = scoreg;
    
};
     

function newGame() {
    score = 0;
    scoreg = 0;
    home.textContent = score; 
    guest.textContent = scoreg;
}


let h = document.getElementById("leadh")

let l = document.getElementById("leadg")



