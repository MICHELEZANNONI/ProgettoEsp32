function tabella(conv){
    let lunghezza = conv.length;

    let table = document.createElement("table");
    let tr_titoli = document.createElement("tr");

    for(let j = 0; j < lunghezza; j++){
        let tr = docment.createElement("tr");

        for(let i = 0; i < 1; i++){
            for(let k = 0; k < 5; k++){
                let td = document.createElement("td");

                switch(k){
                    case 0:
                        td.append(conv(j).id);
                        break;
                    
                    case 1:
                        td.append(conv(j).aula);
                        break;

                    case 2:
                        td.append(conv(j).data);
                        break;
                    
                    case 2:
                        td.append(conv(j).ora);
                        break;
                    
                    case 2:
                        td.append(conv(j).temperatura);
                        break;
                    
                }
                tr.append(td);
            }
        }
        table.append(tr);
    }
    return table;
}
const myBody = document.querySelector("body");
