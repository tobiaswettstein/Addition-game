var number1;
var number2;

var image1;
image1 = "<img src='happy-cat.jpg'>"
image2 = "<img src='grumpy-cat.jpg'>"


number1 = Math.floor((Math.random() * 5) + 1);
number2 = Math.floor((Math.random() * 10) + 1);

document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

var answer = number1 + number2;

var checkAnswer = document.querySelector('input[type=text]');
var value = checkAnswer.value;
var btn = document.querySelector('input[type=button][value=check]');

btn.onclick = function () {
    value = checkAnswer.value;

    if (value == answer) {

        document.getElementById('para5').innerHTML="JA !!!!!! <br>" + answer + " !!!!!! <br> " + image1

    } else {

        document.getElementById('para5').innerHTML="Nein !!!!!! <br> " + answer + " ist richtig ! <br>" + image2
    }
    
    document.querySelector('input[type=text]').value = "";
    document.getElementById('number1').innerHTML = "";
    document.getElementById('number2').innerHTML = "";
    number1 = Math.floor((Math.random() * 5) + 1);
    number2 = Math.floor((Math.random() * 10) + 1);
    document.getElementById("number1").innerHTML = number1;
    document.getElementById("number2").innerHTML = number2;
    
    answer = number1 + number2
    
    };





    // function clicker(){
    //     document.getElementById('para5').innerHTML="**********";   
    //     }

    // function myFunction() {
    //     var myWindow = window.open("", "MsgWindow", "width=200, height=100");
    //     myWindow.document.write("<img src='img.jpg'> This is 'MsgWindow'. I am 200px wide and 100px tall!");
    // }

