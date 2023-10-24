export function tagTwo(tag, parameterek = {}, tartalom = [])
{
    let txt = "";
    tartalom.forEach(elem => txt += elem);
    return `${tagOne(tag, parameterek)}${txt}</${tag}>`;
}

export function tagLst(lista, callbackFuggveny)
{
    const LISTA = [];
    lista.forEach(elem => LISTA.push(callbackFuggveny(elem)));
    return LISTA;
}

export function tagDct(dict, callbackMetodus)
{
    let txt = "";
    for (const kulcs in dict)
    {
        txt += callbackMetodus(kulcs, dict[kulcs]);
    }
    return txt;
}

export function tagOne(tag, parameterek = {})
{
    return `<${tag}${tagDct(parameterek, (kulcs, ertek) => ` ${kulcs}="${ertek}"`)}>`;
}