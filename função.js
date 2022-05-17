    function calcular(){
        const n1 = Number(document.getElementById("num1").value);
        const n2 =Number(document.getElementById("num2").value);

        //const n1 = num1.value;
       // const n2 = num2.value;


        let operador = document.getElementById("operação").value;
        const result = document.getElementById('result');

    //let operador = operação.value;
    
    if ( operador == "+"){
        var s = n1 + n2

        result.innerHTML = ` a soma de ${n1} + ${n2} é igual a ${s}! `
    
    }else if ( operador == "-"){
        var s = n1 - n2
        result.innerHTML = `a subtração de ${n1} - ${n2} é igual a ${s}!`
    
    }else if (operador == "/"){
        var s = n1 / n2
        result.innerHTML = `a divisão de ${n1} / ${n2} é igual a ${s}`
    
    }else {
        var s = n1 * n2
        result.innerHTML = ` a multiplicação de ${n1} X ${n2} é igual a ${s}`
    }

    

   }

 
