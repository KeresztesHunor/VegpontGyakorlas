import { tagDct, tagTwo } from "../../htmlUtils.js";

class TablaSor
{
    constructor(szuloElem, adatObjektum)
    {
        szuloElem.append(
            tagTwo("tr", {}, [
                tagDct(adatObjektum, (kulcs, ertek) => tagTwo("td", {}, [ertek]))
            ])
        );
    }
}

export default TablaSor;