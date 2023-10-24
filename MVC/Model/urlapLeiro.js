const urlapLeiro = {
    nev: {
        megj: "Név",
        type: "text",
        placeholder: "Név",
        pattern: "[A-Z][a-z]{2,15}",
        title: "1 nagybetűvel kezdődik, legalább 3 karakter, legfeljebb 15"
    },
    szul: {
        megj: "Születési év",
        type: "number",
        placeholder: "2023",
        pattern: {
            min: 1900,
            max: 2023
        },
        title: "[1900-2023]"
    }
};

export default urlapLeiro;