// constant
const INDEX = 0;

// Only number input allowed 
var inputNumberOnly = document.getElementsByClassName("input-number-only");

for(let i = 0; i < inputNumberOnly.length; i++){
    inputNumberOnly[i].addEventListener("keypress", function(evt){
        if(evt.which < 48 || evt.which > 57)
            evt.preventDefault();
    });

    inputNumberOnly[i].addEventListener("paste", function(evt){
        var text = (evt.clipboardData).getData('text'); 
        evt.preventDefault();

        var final_text = "";

        for(j = 0; j< text.length; j++){
            var ascii = text.charAt(j).charCodeAt(INDEX);

            if(!(ascii < 48 || ascii > 57)){
                final_text += text[j].toString();
            }
        }

        this.value += final_text.toString();
    });
}

// Only alphabeth upper and lower case and space are allowed
var inputAlphaOnly = document.getElementsByClassName("input-alphabeth-only");

for(let i = 0; i < inputAlphaOnly.length; i++){
    inputAlphaOnly[i].addEventListener("keypress", function(evt){
        if((evt.which < 65 || evt.which > 90) && (evt.which < 97 || evt.which > 122) && evt.which != 32)
            evt.preventDefault();
    });

    inputAlphaOnly[i].addEventListener("paste", function(evt){
        var text = (evt.clipboardData).getData('text'); 
        evt.preventDefault();

        var final_text = "";

        for(j = 0; j< text.length; j++){
            var ascii = text.charAt(j).charCodeAt(INDEX);

            if(!((ascii < 65 || ascii > 90) && (ascii < 97 || ascii > 122) && ascii != 32)){
                final_text += text[j].toString();
            }
        }

        this.value += final_text.toString();
    });
}

// Only Alphanumeric upper and lower case and space are allowed
var inputAlnumOnly = document.getElementsByClassName("input-alnum-only");

for(let i = 0; i < inputAlnumOnly.length; i++){
    inputAlnumOnly[i].addEventListener("keypress", function(evt){
        if((evt.which < 48 || evt.which > 57) && (evt.which < 65 || evt.which > 90) && (evt.which < 97 || evt.which > 122) && evt.which != 32)
            evt.preventDefault();
    });

    inputAlnumOnly[i].addEventListener("paste", function(evt){
        var text = (evt.clipboardData).getData('text'); 
        evt.preventDefault();

        var final_text = "";

        for(j = 0; j< text.length; j++){
            var ascii = text.charAt(j).charCodeAt(INDEX);

            if(!((ascii < 48 || ascii > 57) && (ascii < 65 || ascii > 90) && (ascii < 97 || ascii > 122) && ascii != 32)){
                final_text += text[j].toString();
            }
        }

        this.value += final_text.toString();
    });
}

// Only lower case alphabeth are allowed
var inputLowerOnly = document.getElementsByClassName("input-lower-only");

for(let i = 0; i < inputLowerOnly.length; i++){
    inputLowerOnly[i].addEventListener("keypress", function(evt){
        if(evt.which < 97 || evt.which > 122)
            evt.preventDefault();
    });

    inputLowerOnly[i].addEventListener("paste", function(evt){
        var text = (evt.clipboardData).getData('text'); 
        evt.preventDefault();

        var final_text = "";

        for(j = 0; j< text.length; j++){
            var ascii = text.charAt(j).charCodeAt(INDEX);

            if(!(ascii < 97 || ascii > 122)){
                final_text += text[j].toString();
            }
        }

        this.value += final_text.toString();
    });
}

// Only upper case alphabeth are allowed
var inputUpperOnly = document.getElementsByClassName("input-upper-only");

for(let i = 0; i < inputUpperOnly.length; i++){
    inputUpperOnly[i].addEventListener("keypress", function(evt){
        if(evt.which < 65 || evt.which > 90)
            evt.preventDefault();
    });

    inputUpperOnly[i].addEventListener("paste", function(evt){
        var text = (evt.clipboardData).getData('text'); 
        evt.preventDefault();

        var final_text = "";

        for(j = 0; j< text.length; j++){
            var ascii = text.charAt(j).charCodeAt(INDEX);

            if(!(ascii < 65 || ascii > 90)){
                final_text += text[j].toString();
            }
        }

        this.value += final_text.toString();
    });
}

// The form can't pre space
var cantPreSpace = document.getElementsByClassName("cant-pre-space");

for(let i = 0; i < cantPreSpace.length; i++){
    cantPreSpace[i].addEventListener("keypress", function(evt){
        if(this.value == " "){
            this.value = "";
            return;
        }

        if(this.value.charAt(0) == " "){
            idx = 0;
            x = this.value;

            for(j = 0; j< this.value.length; j++){
                if(this.value.charAt(j) != " "){
                    idx = idx + 1; break;
                }
            }

            this.value = this.value.substr(idx, this.value.length);
        }
    });
}

// The form can't space
var cantSpace = document.getElementsByClassName("cant-space");

for(let i = 0; i < cantSpace.length; i++){
    cantSpace[i].addEventListener("keypress", function(evt){
        if(evt.which == 32)
            evt.preventDefault();

        this.value = this.value.replace(" ", "");
    });
}

// The form has clock format => 00 01 02 10 20 59
var inputClock = document.getElementsByClassName("input-clock");

for(let i = 0; i < inputClock.length; i++){
    inputClock[i].addEventListener("focus", function(e){
        inputHour[i].value = 0;
        this.select();
    });

    inputClock[i].addEventListener("keypress", function(e){
        if(inputClock[i].value == 0 && e.which == 48) e.preventDefault();
    });

    inputClock[i].addEventListener("change", function(){
        newString = "";

        if(inputClock[i].length != 1 && inputClock[i].value != "0"){
            pivot = false;
            for(let j = 0; j< inputClock[i].value.length; j++){
                if(inputClock[i].value.charAt(j) != "0") pivot = true;

                if(pivot) newString += inputClock[i].value.charAt(j);
            }
        }

        inputClock[i].value = newString;

        if(inputClock[i].value < 10){
            inputClock[i].value = "0" + inputClock[i].value;
        }
    });
}

// The form is hour input
var inputHour = document.getElementsByClassName("input-hour");

for(let i = 0; i < inputHour.length; i++){
    inputHour[i].addEventListener("keypress", function(evt){
        if(inputHour[i].value > 23) inputHour[i].value = 23;
        if(inputHour[i].value < 0) inputHour[i].value = 0;
    });
}

// The form is minute input
var inputMinute = document.getElementsByClassName("input-minute");

for(let i = 0; i < inputMinute.length; i++){
    inputMinute[i].addEventListener("keypress", function(evt){
        if(inputMinute[i].value > 59) inputMinute[i].value = 59;
        if(inputMinute[i].value < 0) inputMinute[i].value = 0;
    });
}