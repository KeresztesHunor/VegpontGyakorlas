import { listaKiir, parosTag } from "../../htmlUtils.js";
import TablaSor from "./TablaSor.js";

class Tabla
{
    constructor(szuloElem, adatLista, tablaFejlecNevek)
    {
        szuloElem.append(
            parosTag("table", { class: "table table-bordered" }, [
                parosTag("thead", {}, [
                    parosTag("tr", {}, listaKiir(tablaFejlecNevek, fejlecNev => parosTag("th", {}, [fejlecNev])))
                ]),
                parosTag("tbody")
            ])
        );
        const SOR_SZULO_ELEM = szuloElem.children("table").children("tbody");
        adatLista.forEach(adat => {
            new TablaSor(SOR_SZULO_ELEM, adat);
        });
    }
}

export default Tabla;