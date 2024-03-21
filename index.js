let lugares = ['Omán','Israel','O. Atlántico', 'Caribe','Panamá', 'México', 'EEUU', 'Canadá', 'Groenlandia', 'Islandia', 'Reino Unido', 'Francia', 'España', 'Portugal', 'Marruecos', 'Argelia', 'Túnez', 'Libia', 'Egipto', 'Arabia Saudí', 'Yemen', 'Omán']
let combustible = 50;
function calcularDestino(distanciaTotal, combustible) {
    const indiceDestino = Math.round((combustible / 100) * (lugares.length - 1));
    if (distanciaTotal < 0) {
        return lugares[lugares.length - 1];
    } else if (distanciaTotal >= distanciaTotal[lugares.length - 1]){
        return lugares[0];
    } else{
        return lugares[indiceDestino];
    }
}
const distanciaTotal = 10000;

const destino = calcularDestino(distanciaTotal, combustible);
console.log("El cohete sobrevuela los siguientes países:");
for (let i = 0; i < lugares.length; i++) {
    console.log(lugares[i]);
}
console.log("El cohete caerá en: " + destino);