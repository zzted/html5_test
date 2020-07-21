var colors = generatecolors(6);

var squares = document.querySelectorAll(".square");

var pickedcolor = pickcolor();

var TarColor = document.querySelector("#tarColor");

var message = document.querySelector("#message");

var h1 = document.querySelector("h1")

var reset = document.querySelector("#reset");

var buttons = document.querySelectorAll(".difficulty");

var numofsquares = 6;

TarColor.textContent = pickedcolor;

for(let i = 0; i < buttons.length; ++i){
    buttons[i].addEventListener("click", function(){
        this.classList.add("selected");
        if(i === 0){
            numofsquares = 3;
            buttons[1].classList.remove("selected");
            colors = generatecolors(numofsquares);
            pickedcolor = pickcolor();
            TarColor.textContent = pickedcolor;
            for(let i = 0; i < squares.length; ++i){
                if(colors[i]){
                    squares[i].style.backgroundColor = colors[i];
                }
                else{
                    squares[i].style.display = "none";
                }
            }
        }
        else{
            numofsquares = 6;
            buttons[0].classList.remove("selected");
            colors = generatecolors(numofsquares);
            pickedcolor = pickcolor();
            TarColor.textContent = pickedcolor;
            for(let i = 0; i < squares.length; ++i){
                squares[i].style.backgroundColor = colors[i];
                squares[i].style.display = "block";
            }
        }
    });
}

reset.addEventListener("click", function(){
    colors = generatecolors(numofsquares);
    pickedcolor = pickcolor();
    TarColor.textContent = pickedcolor;
    for(let i = 0; i < squares.length; ++i){
        squares[i].style.backgroundColor = colors[i];
    }
    reset.textContent = "New Color";
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
})

for(let i = 0; i < colors.length; ++i){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        let clickedcolor = this.style.backgroundColor;
        if(clickedcolor === pickedcolor){
            changecolors(pickedcolor);
            h1.style.backgroundColor = pickedcolor;
            message.textContent = "Correct!";
            reset.textContent = "Play Again?"
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
}

function changecolors(color){
    for(let i = 0; i < colors.length; ++i){
        squares[i].style.backgroundColor = color;
    }
}

function pickcolor(){
    var randcolor = Math.floor(Math.random() * colors.length);
    return colors[randcolor];
}

function generatecolors(num){
    var ncolors = [];
    for(let i = 0; i < num; ++i){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let newrgb = "rgb(" + r + ", " + g + ", " + b + ")";
        console.log(newrgb);
        ncolors.push(newrgb);
    }
    return ncolors;
}