let NumEntrada = document.getElementById("NumEntrada");
let op = document.getElementById("op");
let NumAux = document.getElementById("NumAux");
let Resultado = document.getElementById("Resultado");

let Btn9 = document.getElementById("Btn9");
let Btn8 = document.getElementById("Btn8");
let Btn7 = document.getElementById("Btn7");
let Btn6 = document.getElementById("Btn6");
let Btn5 = document.getElementById("Btn5");
let Btn4 = document.getElementById("Btn4");
let Btn3 = document.getElementById("Btn3");
let Btn2 = document.getElementById("Btn2");
let Btn1 = document.getElementById("Btn1");
let Btn0 = document.getElementById("Btn0");

let BtnSoma = document.getElementById("BtnSoma");
let BtnMenos = document.getElementById("BtnMenos");
let BtnVezes = document.getElementById("BtnVezes");
let BtnDivisao = document.getElementById("BtnDivisao");
let BtnRaiz = document.getElementById("BtnRaiz");
let BtnQuadrado = document.getElementById("BtnQuadrado");
let BtnPotencia = document.getElementById("BtnPotencia");

let BtnPonto = document.getElementById("BtnPonto");
let BtnCE = document.getElementById("BtnCE");
let BtnResultado = document.getElementById("BtnResultado");

let historico = document.getElementById("historico");

function entrada(valor){
    if(NumEntrada.value!=="0"){
        NumEntrada.value = NumEntrada.value + valor;
    }else{
        NumEntrada.value = valor;
    }
    
    if(NumEntrada.value===""){
        NumEntrada.value = "0";
    }
}

function ponto(){
    if(NumEntrada.value.indexOf(".") === -1){
        NumEntrada.value += ".";
    }
}

function operacao(valor){
    if(op.value !== ""){
        op.value = valor;
    }else{
        op.value = valor;
        NumAux.value = NumEntrada.value;
        NumEntrada.value = "0";
    }
    
    if(op.value === "√x" || op.value === "x²"){
        NumEntrada.style.display = "none";
    }else{
        NumEntrada.style.display = "block";
    }
}

function igualdade(){
    if(op.value === "-"){
        historico.innerHTML += NumAux.value + " - " + NumEntrada.value;
        Resultado.value = NumAux.value - NumEntrada.value;
    }
    if(op.value === "+"){
        historico.innerHTML += NumAux.value + " + " + NumEntrada.value;
        Resultado.value = parseFloat(NumAux.value) + parseFloat(NumEntrada.value);
    }
    if(op.value === "X"){
        historico.innerHTML += NumAux.value + " X " + NumEntrada.value;
        Resultado.value = NumAux.value * NumEntrada.value;
    }
    if(op.value === "÷"){
        historico.innerHTML += NumAux.value + " ÷ " + NumEntrada.value;
        Resultado.value = NumAux.value / NumEntrada.value;
    }
    if(op.value === "√x"){
        historico.innerHTML += "√" + NumAux.value;
        Resultado.value = Math.sqrt(NumAux.value);
    }
    if(op.value === "x²"){
        historico.innerHTML += NumAux.value + "² ";
        Resultado.value = Math.pow(NumAux.value, 2);
    }
    if(op.value === "xʸ"){
        historico.innerHTML += NumAux.value + " ^ " + NumEntrada.value;
        Resultado.value = Math.pow(NumAux.value, NumEntrada.value);
    }
    
    NumEntrada.style.display = "block";
    
    op.value = "";
    NumAux.value = "0";
    NumEntrada.value = "0";
    historico.innerHTML += " = " + Resultado.value + "\n";
    
}

function apaga(){
    NumEntrada.value = "0";
    NumEntrada.style.display = "block";
    NumAux.value = "0";
    Resultado.value = "";
    op.value = "";
}

    Btn9.addEventListener("click", function(){entrada(this.value);});
    Btn8.addEventListener("click", function(){entrada(this.value);});
    Btn7.addEventListener("click", function(){entrada(this.value);});
    Btn6.addEventListener("click", function(){entrada(this.value);});
    Btn5.addEventListener("click", function(){entrada(this.value);});
    Btn4.addEventListener("click", function(){entrada(this.value);});
    Btn3.addEventListener("click", function(){entrada(this.value);});
    Btn2.addEventListener("click", function(){entrada(this.value);});
    Btn1.addEventListener("click", function(){entrada(this.value);});
    Btn0.addEventListener("click", function(){entrada(this.value);});
    
    BtnSoma.addEventListener("click", function(){operacao(this.value);});
    BtnMenos.addEventListener("click", function(){operacao(this.value);});
    BtnVezes.addEventListener("click", function(){operacao(this.value);});
    BtnDivisao.addEventListener("click", function(){operacao(this.value);});
    BtnRaiz.addEventListener("click", function(){operacao(this.value);});
    BtnQuadrado.addEventListener("click", function(){operacao(this.value);});
    BtnPotencia.addEventListener("click", function(){operacao(this.value);});
    
    BtnPonto.addEventListener("click", function(){ponto();});
    BtnCE.addEventListener("click", function(){apaga();});
    BtnResultado.addEventListener("click", function(){igualdade();});
