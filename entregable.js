console.log('Entregable 1');

//Ciclo for ↓↓
let palabra = ''

for (let i =0; i<3; i=i+1){
    palabra = prompt(`¡Tienes ${3-i} intentos para adivinar la palabra y obtener un 5% de descuento en tu compra!: S _ _ _ _ E `)
    .toUpperCase(palabra);
    if (i<=2 && palabra=='SUERTE'){
        alert('¡CORRECTO! Has ganado un 5% de descuento en tu próxima compra con el código COMPRA5%')
        break;
    }
    else if (i == 2){
        alert('¡Has perdido! La palabra ganadora es SUERTE');
        break;
    }  
}

let descuento = prompt('Ingrese su código de descuento. Si no tiene, presione ENTER.')
let precio = parseInt(prompt('Indique el precio del producto que desea comprar:'));



// Funciones ↓↓
/*const doce = x => x*1.15;
const seis = x => x*1.1;
const docecuotas = x => x*1.15/12;
const seiscuotas = x => x*1.1/6;*/

const intereses = (a,b) => a*b;

// Condicionales ↓↓
if (precio >= 7500 & descuento != 'COMPRA5%'){
    let interesseis = intereses(precio,1.1);
    let cuotasseis = interesseis/6;
    let interesdoce = intereses(precio,1.15);
    let cuotasdoce = interesdoce/12;
    alert(`
    El precio del producto es elegible para 6 y 12 cuotas con intereses. 
    
    6 cuotas de $${cuotasseis}.  Precio final: ${interesseis}.
    
    6 cuotas de $${cuotasdoce}.  Precio final: ${interesdoce}.`)
}   
    else if (precio >= 7500 & descuento == 'COMPRA5%'){
        let interesseis = intereses(precio,1.1)*0.95;
    let cuotasseis = interesseis/6;
    let interesdoce = intereses(precio,1.15)*0.95;
    let cuotasdoce = interesdoce/12;
        alert(`
        El precio del producto es elegible para 6 y 12 cuotas con intereses. 
        
        6 cuotas de $${cuotasseis}.  Precio final  con dto.: ${interesseis}.
        
        6 cuotas de $${cuotasdoce}.  Precio final  con dto.: ${interesdoce}.`)
    }
        else if (precio < 7500 & descuento == 'COMPRA5%'){
            alert(`Su compra no califica para financiamiento en cuotas. El precio final con el descuento es $${precio*0.95}`)
        }
            else{
                alert('Su compra no califica para financiamiento en cuotas.')
            }




