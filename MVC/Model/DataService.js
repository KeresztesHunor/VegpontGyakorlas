class DataService
{
    constructor()
    {
        
    }

    getData(vegpont, callbackFuggveny, hibaCallback)
    {
        axios
            .get(vegpont)
            .then(response => {
                callbackFuggveny(response.data.nevek);
            })
            .catch(hibaCallback);
    }
}

export default DataService;