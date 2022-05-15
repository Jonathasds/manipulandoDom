    function somar() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const result = document.getElementById("result");
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    const mais = n1 +n2   
    
    result.innerHTML = `A soma entre ${n1} + ${n2} é igual a ${mais}`
}

 
