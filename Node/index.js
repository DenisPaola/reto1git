<<<<<<< HEAD
=======
function suma(op1,op2=0,op3=1){

    let sum = op1 + op2 + op3
    console.log(sum);
    return sum
}
>>>>>>> rama2

function resta(op1,op2=0){

    let subs = op1 - op2
    console.log(subs);
    return subs   
}


function multiplicacion(op1,op2=0){

    let mult = op1*op2
    console.log(mult);
    return mult    
}

function division(op1,op2=2){

    let div = op1/op2
    console.log(div);
    return div   
}

function numeroalcuadrado(){
    let  numerocuadrado = Math.pow(4,2)
    console.log(numerocuadrado);
    return(numerocuadrado)
    }
    
   function cuadrado(numero){
    let cuadrado;
    cuadrado = numero * numero
    return cuadrado;
   }
   console.log(cuadrado(5));



//......................................................................................
<<<<<<< HEAD

=======
suma(4,);
>>>>>>> rama2
resta(12, );
multiplicacion(20, );
division(8, );
numeroalcuadrado();

<<<<<<< HEAD

=======
suma(4,2);
>>>>>>> rama2
resta(12,20);
multiplicacion(20,10);
division(8,2);
numeroalcuadrado();




module.exports ={suma,resta,multiplicacion,division,numeroalcuadrado}
