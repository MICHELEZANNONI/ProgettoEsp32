//zannoni, tasca, branchini, remedia
/*1)array misurazioni
2)conversione date/time
3)applicazione alla tabella */
const result = document.querySelector("#result");
//ARRAY MISURAZIONI

const misure = [

    {
        id: 1,
        valore: 20,
        aula: "MM1",
        giorno: "2024/07/04",
        ora: "11.00"
    },

    {
        id: 2,
        valore: 18,
        aula: "MM1",
        giorno: "2024/01/30",
        ora: "10.00"
    },

    {
        id: 3,
        valore: 19,
        aula: "MM1",
        giorno: "2024/01/30",
        ora: "10.30"
    },

    {
        id: 4,
        valore: 16,
        aula: "MM1",
        giorno: "2024/01/30",
        ora: "9.00"
    },

    {
        id: 5,
        valore: 17,
        aula: "MM1",
        giorno: "2024/01/30",
        ora: "8.40"
    },

    {
        id: 6,
        valore: 20.5,
        aula: "MM1",
        giorno: "2024/01/30",
        ora: "10.10"
    },

    {
        id: 7,
        valore: 17.5,
        aula: "MM1",
        giorno: "2024/01/30",
        ora: "13.00"
    },

    {
        id: 8,
        valore: 21,
        aula: "MM1",
        giorno: "2024/01/30",
        ora: "14.00"
    },

    {
        id: 9,
        valore: 18.5,
        aula: "MM1",
        giorno: "2024/01/30",
        ora: "11.45"
    },

    {
        id: 10,
        valore: 22,
        aula: "MM1",
        giorno: "2024-01-30T22:10",
        ora: "12.00"
    }
]
        
const misureConvertite = [
] 
function conversione(String) {
    return new Date(String);
}

//Prova temporanea l'array funziona e pure la data associata all'ora
let datetime = misure[0].giorno + "T" + misure[0].ora;

for(let i = 0; i < misure.length; i++) {
    misureConvertite[i] = misure[i];
    misureConvertite[i].giorno = conversione(misure[i].giorno);
}



let tabellacreata;
let c = 5;
let r = 10;

function creatabella(c, r) {
    let table = document.createElement("table");
    for (let i = 0; i < c; i++) {
        let tr = document.createElement("tr");      
        for (let j = 0; j < r; j++) {
            let td = document.createElement("td");    
            td.append(misure[i].id);
            
            td.append(misure[i].valore);
            td.append(misure[i].aula);
            td.append(misure[i].giorno);      
            td.append(misure[i].ora);
            
            tr.append(td);
            

        }
        table.append(tr);

    }
    result.append(table);
}
tabellacreata = creatabella(r, c);

var misurazioni=[]


//SERVER
function fetchElenco() {
    let url = "http://localhost:5000";
    fetch(url)
    .then(response => response.json())
    .then(data =>  {
        misure = data;
        // ShowTabella
        console.log(misure)
      });
  }
  
fetchElenco();
