import { saludo } from "./saludo";

const esperado = "Hola, Ana";
const obtenido = saludo("Ana");

if (obtenido !== esperado) {
  console.error(`FALLO: esperaba "${esperado}", obtuve "${obtenido}"`);
  process.exit(1);
}
console.log("OK: saludo funciona");