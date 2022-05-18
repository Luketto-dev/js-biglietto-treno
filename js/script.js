let infoPassenger = document.getElementById("info-passenger")
const eta = prompt("quanti anni hai ?");
const numeroKilometri = prompt("Quanti kilometri vuoi percorrere?");
const prezzoKilometro = 0.21;

let costoBiglietto = (prezzoKilometro * numeroKilometri).toFixed(2);


if (eta < 18) {
    const sconto20 = (costoBiglietto * 20) / 100;
    costoBiglietto = (costoBiglietto - sconto20).toFixed(2);
    console.log("prezzo per minori di 18: " + costoBiglietto);
}else if (eta > 65) {
    const sconto40 = (costoBiglietto * 40) / 100;
    costoBiglietto = (costoBiglietto - sconto40).toFixed(2);
    console.log("prezzo per maggiori di 65: " + costoBiglietto);
}

infoPassenger.innerHTML =   `<ul>
                                <li>età : ${eta}</li>
                                <li>kilometri : ${numeroKilometri}</li>
                                <li>prezzo biglietto : ${costoBiglietto}</li>
                            </ul>`