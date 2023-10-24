import { listaKiir, paratlanTag, parosTag } from "../../htmlUtils.js";

class UrlapView
{
    constructor(szuloElem, leiro)
    {
        szuloElem.append(parosTag("form", {}, (() => {
            const TARTALOM_LISTA = [];
            for (const KULCS in leiro)
            {
                const ERTEK = leiro[KULCS];
                TARTALOM_LISTA.push(parosTag("div", { class: "form-group" }, [
                    parosTag("label", { for: KULCS }, [ERTEK.megj]),
                    paratlanTag("input", { type: ERTEK.type, name: KULCS, placeholder: ERTEK.placeholder, value: ERTEK.value, class: "form-control" })
                ]));
            }
            TARTALOM_LISTA.push(paratlanTag("input", { type: "submit", value: "OK", class: "btn btn-primary" }));
            return TARTALOM_LISTA;
        })()));
    }
}

export default UrlapView;