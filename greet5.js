let greeting = "Hello from greet 5";

let greet = () => {
    console.log(greeting);
}

let jump = () => {
    console.log("im jumping");
}

let run = () => {
    console.log("im running");
}

let suma = (n1, n2) => {
    console.log(n1+n2);
}

module.exports = {
    greet,
    jump,
    run,
    suma
}