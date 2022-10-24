const container = document.getElementById('container');

let colsNum = 16;
let rowsNum = 16;

let grid = document.createElement('div');
grid.className = "grid";

for (let c = 0; c < colsNum; c++) {
    let cols = document.createElement('div');
    cols.className = "column"

    for (let r = 0; r < rowsNum; r++) {
        let rows = document.createElement('div');
        rows.className = "row"
        cols.appendChild(rows);
    }

    grid.appendChild(cols);
}

container.appendChild(grid);