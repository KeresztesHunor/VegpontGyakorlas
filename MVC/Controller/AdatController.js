import AdatModel from "../Model/AdatModel.js";
import DataService from "../Model/DataService.js";
import TablaView from "../View/TablaView.js";
import HibaView from "../View/HibaView.js";
import UrlapView from "../View/UrlapView.js";
import urlapLeiro from "../Model/urlapLeiro.js";

class AdatController
{
    #adatModel;
    #dataService;
    #urlapView;

    constructor()
    {
        this.#adatModel = new AdatModel();
        this.#dataService = new DataService();
        this.#urlapView = new UrlapView($("#urlap"), urlapLeiro);
        this.#dataService.getData("../../adat.json", this.#adatokMegjelenit, this.#hibaMegjelenit);
        $(window).on("validFormSubmitEvent", event => {
            console.log(event.detail);
        });
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