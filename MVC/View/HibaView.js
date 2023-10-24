class HibaView
{
    constructor(szuloElem, error)
    {
        szuloElem.html(error.message);
    }
}

export default HibaView;