// calculadora
function calcular() {
    
    alert("que calculo quieres realizar");

    const sumar = (num1,num2)=>{
        return parseInt(num1)+parseInt(num2);
    }
    const restar = (num1,num2)=>{
        return parseInt(num1)-parseInt(num2);
    }
    const dividir = (num1,num2)=>{
        return parseInt(num1)/parseInt(num2);
    }
    const multiplicar = (num1,num2)=>{
        return parseInt(num1)*parseInt(num2);
    }
    let calculo = prompt("1-sumar 2-restar 3-dividir 4-multiplicar");

    if(calculo == 1){
        num1 = prompt("primer numero para sumar");
        num2 = prompt("segundo numero para sumar");
        res = sumar(num1,num2);
        alert(`tu resultado es ${res}`)
    }
    else if(calculo == 2){
        num1 = prompt("primer numero para restar");
        num2 = prompt("segundo numero para restar");
        res = restar(num1,num2);
        alert(`tu resultado es ${res}`)
    }
    else if(calculo == 3){
        num1 = prompt("primer numero para dividir");
        num2 = prompt("segundo numero para dividir");
        res = dividir(num1,num2);
        alert(`tu resultado es ${res}`)
    }
    else if(calculo == 4){
        num1 = prompt("primer numero para multiplicar");
        num2 = prompt("segundo numero para multiplicar");
        res = multiplicar(num1,num2);
        alert(`tu resultado es ${res}`)
    }
    else{
        alert("no se ah encontrado tu calculo")
    }
}
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()
calcular()