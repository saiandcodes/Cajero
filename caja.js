class Billete{
    constructor(v,c){
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero(){
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of cajas){
        if(dinero > 0){
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad){
                papeles = bi.cantidad
            }
            else{
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero -= (bi.valor * papeles);
        }
    }
    if (dinero > 0){
        resultado.innerHTML = "¿Y el dinero? <br /> Me lo mecatie en cositas :(";
    }
    else{
        for(var e of entregado){
            if(e.cantidad > 0){
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }
    console.log(entregado);
}

var cajas = [];
var entregado = [];
cajas.push(new Billete(100, 5));
cajas.push(new Billete(50, 10));
cajas.push(new Billete(20, 30));
cajas.push(new Billete(10, 10));
cajas.push(new Billete(5, 5));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);