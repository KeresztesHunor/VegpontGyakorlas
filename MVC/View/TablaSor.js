import { dictionaryKiir, parosTag } from "../../htmlUtils.js";

class TablaSor
{
    constructor(szuloElem, adatObjektum)
    {
        szuloElem.append(
            parosTag("tr", {}, [
                dictionaryKiir(adatObjektum, (kulcs, ertek) => parosTag("td", {}, [ertek]))
            ])
        );
    }
}

export default TablaSor;