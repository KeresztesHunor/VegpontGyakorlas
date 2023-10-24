import { tagLst, tagTwo } from "../../htmlUtils.js";
import TablaSor from "./TablaSor.js";

class Tabla
{
    constructor(szuloElem, adatLista, tablaFejlecNevek)
    {
        szuloElem.append(
            tagTwo("table", { class: "table table-bordered" }, [
                tagTwo("thead", {}, [
                    tagTwo("tr", {}, tagLst(tablaFejlecNevek, fejlecNev => tagTwo("th", {}, [fejlecNev])))
                ]),
                tagTwo("tbody")
            ])
        );
        const SOR_SZULO_ELEM = szuloElem.children("table").children("tbody");
        adatLista.forEach(adat => {
            new TablaSor(SOR_SZULO_ELEM, adat);
        });
    }
}

export default Tabla;