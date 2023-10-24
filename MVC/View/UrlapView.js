import { tagOne, tagTwo } from "../../htmlUtils.js";

class UrlapView
{
    constructor(szuloElem, leiro)
    {
        szuloElem.append(
            tagTwo("form", {}, (() => {
                const TARTALOM_LISTA = [];
                for (const KULCS in leiro)
                {
                    const ERTEK = leiro[KULCS];
                    TARTALOM_LISTA.push(
                        tagTwo("div", { class: "form-group" }, [
                            tagTwo("label", { for: KULCS }, [ERTEK.megj]),
                            tagOne("input", { type: ERTEK.type, name: KULCS, placeholder: ERTEK.placeholder, value: "", title: ERTEK.title, class: "form-control" })
                        ])
                    );
                }
                TARTALOM_LISTA.push(tagOne("input", { type: "submit", value: "OK", class: "btn btn-primary" }));
                return TARTALOM_LISTA;
            })()
        ));
        szuloElem.children("form").children(".form-group").children("input").toArray().forEach(mezo => {
            const MEZO_ELEM = $(mezo);
            const INPUT_MEZO_LEIRO = leiro[MEZO_ELEM.attr("name")];
            switch (MEZO_ELEM.attr("type"))
            {
                case "text":
                    MEZO_ELEM.attr("pattern", INPUT_MEZO_LEIRO.pattern);
                    break;
                case "number":
                    MEZO_ELEM.attr("min", INPUT_MEZO_LEIRO.pattern.min);
                    MEZO_ELEM.attr("max", INPUT_MEZO_LEIRO.pattern.max);
                    break;
            }
            MEZO_ELEM.prop("required", true);
        });
    }
}

export default UrlapView;