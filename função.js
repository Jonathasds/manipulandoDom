    function calcular(){
        const n1 = Number(document.getElementById("num1").value); //pegando o valor do input num1
        const n2 =Number(document.getElementById("num2").value); // pegando o valor do input num2

        //const n1 = num1.value;
       // const n2 = num2.value;


        const operador = document.getElementById("operação").value; //pegando o valor do sinal
        const result = document.getElementById('result');  //pegando a tag "p" 

    //let operador = operação.value;
    
    if ( operador == "+"){ // dando 1° condição mediante a escolha do usuario
        let s = n1 + n2

        result.innerHTML = ` a soma de ${n1} + ${n2} é igual a ${s}! ` //2° condição
    //result.innerHTML é o comando pra imprimir o resultado na tag "p" no console.
    }else if ( operador == "-"){
        let s = n1 - n2
        result.innerHTML = `a subtração de ${n1} - ${n2} é igual a ${s}!` //3° condição
    
    }else if (operador == "/"){
        let s = n1 / n2
        result.innerHTML = `a divisão de ${n1} / ${n2} é igual a ${s}` // 4° condição
    
    }else {
        let s = n1 * n2
        result.innerHTML = ` a multiplicação de ${n1} X ${n2} é igual a ${s}`// na ultima não precisei da condição, se a escolhida pelo usuario não for nenhuma à cima, entrarar nessa.
    }

    

   }

 
