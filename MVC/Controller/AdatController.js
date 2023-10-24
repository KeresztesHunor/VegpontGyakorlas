import AdatModel from "../Model/AdatModel.js";
import DataService from "../Model/DataService.js";
import TablaView from "../View/TablaView.js";
import HibaView from "../View/HibaView.js";
import UrlapView from "../View/UrlapView.js";
import urlapLeiro from "../Model/urlapLeiro.js";

class AdatController
{
    constructor()
    {
        const ADAT_MODEL = new AdatModel();
        const DATA_SERVICE = new DataService();
        const URLAP_VIEW = new UrlapView($("#urlap"), urlapLeiro);
        DATA_SERVICE.getData("../../adat.json", this.#adatokMegjelenit, this.#hibaMegjelenit);
    }

    #adatokMegjelenit(adatLista)
    {
        const ADAT_VIEW = new TablaView($("#lista"), adatLista, [urlapLeiro.nev.megj, urlapLeiro.szul.megj]);
    }

    #hibaMegjelenit(error)
    {
        const HIBA_VIEW = new HibaView($("#lista"), error);
    }
}

export default AdatController;