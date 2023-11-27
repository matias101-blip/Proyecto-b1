//const Leer = require('prompt-sync')()
class Ejercicio1{
    multiplo(){
        let num = 0, mul = 0, r = 0
         // 0...0.758.......1*100=75.8=75
        // num= parseInt(Math.random()*10)
        // mul= parseInt(Math.random()*10)
        num = parseInt(document.getElementById("num").value)
        mul = parseInt(document.getElementById("multi").value)
        //console.log(num)
        //console.log(mul.value)
        r = num % mul
        if (r == 0) {
            console.log(num,"es multiplo de ",mul)
            document.getElementById("resp").innerHTML = `${num} es divisible para ${mul}`
        }
        else {
            document.getElementById("resp").innerHTML = `${num} no es divisible para ${mul}`
        } 
    }
    tablaMultiplicar(){
        let vi, vf, tabla, resp, contador;
        vi = 0; vf = 0; tabla = 0; resp = 0;
        // vi = parseInt(Math.random() * 10);
        // vf = parseInt(Math.random() * 100);
        // tabla = parseInt(Math.random() * 20);
        vi = parseInt(document.getElementById("desde").value)
        vf = parseInt(document.getElementById("hasta").value)
        tabla = parseInt(document.getElementById("tabla").value)
        contador = vi;
        document.getElementById("resp").innerHTML=`Tabla del ${tabla}`
        while (contador <= vf) {
            resp = contador * tabla;
            console.log(`${contador} * ${tabla} = ${resp}`)
            document.getElementById("resp").innerHTML += `<br>${contador} * ${tabla} = ${resp} `
            contador= contador+1
            
        }
    }
}

let ope = new Ejercicio1() //crea una variable igual que la clase
//ope.multiplo()
//ope.tablaMultiplicar()

