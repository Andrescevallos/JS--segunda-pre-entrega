

class cliente{
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

}

class funcos{
    constructor (personaje, costo){
        this.personaje = personaje;
        this.costo = costo;

    }
}

class compra{
    constructor(cliente, funco, fecha){
        this.cliente = cliente;
        this.funco = funco;
        this.fecha = fecha || new Date();
        this.total = total;
        this.descuento = descuento;
    }
}



const wolverine = new funcos ("wolverine", 3000);
const harryPotter = new funcos ("harry potter", 1500);
const vegeta = new funcos ("vegeta", 2200);
const stich = new funcos ("stich", 1750);
const grogu = new funcos ("grogu", 1300);
const goku = new funcos ("goku", 2100);
const legolas = new funcos ("legolas", 2100);
const capitanAmerica = new funcos ("capitan america", 1900);
const gandalf = new funcos ("gandalf", 2000);
const messi = new funcos ("messi", 5000);
const laraCroft = new funcos ("lara croft", 1300);
const voldemort = new funcos ("voldemort", 1400);
const gruu = new funcos ("gruu", 1000);

let hoy = new Date()  
let arrayFuncos = [wolverine, harryPotter, vegeta, stich, grogu, legolas, goku, capitanAmerica, gandalf, messi, laraCroft, voldemort, gruu]
let carrito = []




//FUNCIONES

function home(){
    alert ("Bienvenidos, vamos a comprar unos muñes")
    let menu = parseInt(prompt("Queres: \n1) Ver los funcos \n 2) Buscar  \n 3) Comprar para vos o hacer un regalito?? \n 4) Sugerenias  \n 5) Estoy viendo nomas, no seas pesado"))
    return menu
}

function ver(){
    let verTodos = arrayFuncos.forEach( funcos => console.log(funcos))
    let filtrar = prompt("filtrar por precio o nombre?")
    switch(filtrar){
        case "precio" : 
            arrayFuncos.sort((a,b) => b.costo - a.costo)
            console.log(arrayFuncos)
            break;   

        case "nombre" :
            arrayFuncos.sort((a,b) =>{
            if(a.personaje > b.personaje){
                return 1
            }
            if(a.personaje < b.personaje){
                return -1
            }
            return 0
            })
            console.log(arrayFuncos)
            break;

        default:
            console.log(arrayFuncos)
            break

    }
    let vender = prompt("Queres comprar alguno?\n si \n no")
        if (vender == "si"){
            comprarYa()
        }
        else{
            verNomas()
        }

    
}

function buscar(){
    let buscado = prompt("Cual estas buscando?")
    let funcoBuscado = arrayFuncos.find(funcos => funcos.personaje === buscado)
    console.log(funcoBuscado)
}

function comprarYa (){
    let buscado = prompt("Cual estas buscando? Ingrese listo cuando haya finalizado la compra")
    while ( buscado != "listo"){
        let funcoBuscado = arrayFuncos.find(funcos => funcos.personaje === buscado)
        carrito.push(funcoBuscado)
        buscado = prompt("Cual estas buscando? Ingrese listo cuando haya finalizado la compra")   
    }
    console.log(carrito)
    let ArrayValorTotal = carrito.reduce((acum, funcos) => acum + funcos.costo, 0)
    console.log("El valor total de la compra es " + ArrayValorTotal)
}

function Sugerenias(){
    alert("Si no encontraste el que buscabas, decinos cual es, asi lo buscamos y nos ponemos en contacto con vos")
    let nombre = prompt("Indicanos tu nombre porfa");
    let mail = prompt("Por favor, ingrese su mail")
    let faltante = prompt("Cual es el funco que no encontraste??")
    alert("Hola " + nombre + " el funco de " + faltante + " lo solicitaste hoy " + hoy.toLocaleDateString() + ". En los proximos 5 dias te responderemos para informarte novedades" )
    let resultado = sumarDias(hoy, 1)
    alert(("El dia " + resultado.toLocaleDateString() + " tendremos ese funco para usted"))
}

function sumarDias (fecha, n = 1){
    return new Date(fecha.setDate(fecha.getDate() + (n * 7)))
}
 
function verNomas (){
    alert("Te esperamos cuando quieras beibi")
}



let programa = home()

switch(programa){
    case 1:
        ver();
        break;
    case 2:
        buscar();
        break;
    case 3:
        comprarYa();
        break;
    case 4:
        Sugerenias();
        break;
    case 5:
        verNomas();
        break;
    default:
        alert ("Ingrese una opcion valida");
        break
}


