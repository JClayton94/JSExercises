// alert("Hello World!");

// let x = "Dog";

// alert(x);
// console.log(x);
// document.write(x);


// document.write("\n" + square(5));

// console.log(sum(1,2,3));

//console.log(person.name + " " + person.age + " " + person.occupation);

let person = {

    name:"",
    age:0,
    occupation:""
};


function square(a) {

    return a*a;

};

function sum(a, b, c){

    return a + b + c;

};

function makePerson(){

    person.name = document.getElementById("name").value;
    person.age = document.getElementById("age").value;
    person.occupation = document.getElementById("occupation").value;

    document.getElementById("textArea").innerHTML = person.name + "<br>" + person.age + "<br>" + person.occupation;

};

function displayName(){
    let name = " He said 'My name is Elliott' ";

    document.getElementById("textArea").innerHTML += "<br>" + name.toUpperCase();

}
function loopNums(){

    let a = document.getElementById("number").value

    for(i=0; i<=a; i++){

        document.getElementById("textArea").innerHTML += "<br>" + i;

    }

}

function fizzBuzz(iterations, a, b){

    document.getElementById("textArea").innerHTML = "";

    for(i=0; i<=iterations; i++){

        if(i%3 == 0 && i%5 == 0){
            document.getElementById("textArea").innerHTML += "<br>" + a + " " + b;
        }
        else if(i % 3 == 0){
            document.getElementById("textArea").innerHTML += "<br>" + a;
        } 
        else if(i % 5 == 0) {
            document.getElementById("textArea").innerHTML += "<br>" + b;
        } else {
            document.getElementById("textArea").innerHTML += "<br>" + i;
        }
    
    }

}

function iteration4(input){
    
    document.getElementById("textArea").innerHTML = "";

    let num = input;
    let i = 0;
    while(num > 1){
        if(num%3==0){
            document.getElementById("textArea").innerHTML += "Input divided by 3 <br>";
            num = num/3;
        } else {
            document.getElementById("textArea").innerHTML += "Input increased by 1 <br>";
            num += 1;
        }
         i++;
    }
    document.getElementById("textArea").innerHTML += "Total number of iterations: " + i;
}