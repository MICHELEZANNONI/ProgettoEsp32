/*function creaTabella() {
    const resultDiv = document.getElementById("result");
    const table = document.createElement("table");

    let count = 1;

    for (let i = 0; i < 5; i++) {
        const td = document.createElement("td");
        tr.textContent = "id";
       
     
       for (let j = 0; j < 5; j++) {
            const tr = document.createElement("tr");
            for(let n = 0; n < 5; n++){
                tr.append(n+1);       
            }
            td.appendChild(tr);
        }

        table.appendChild(td);
    }

    resultDiv.appendChild(table);
}

// Chiamata alla funzione per creare la tabella
creaTabella();

*/

// Creating and adding data to first row of the table
let tr = document.createElement('tr');
let id = document.createElement('th');
id.innerHTML = 'ID';
let heading_2 = document.createElement('th');
heading_2.innerHTML = 'Name';
let heading_3 = document.createElement('th');
heading_3.innerHTML = 'Company';

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = '1.';
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = 'James Clerk';
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = 'Netflix';

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = '2.';
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = 'Adam White';
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = 'Microsoft';

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);




