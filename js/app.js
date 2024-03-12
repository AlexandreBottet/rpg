const app = {
    player: {
        x: 0,
        y: 0,
        direction: 'right'
    },
    targetCell: {
        x: 5,
        y: 3
    },
    drawBoard: function() {
        const numOfRows = 4;
        const numOfCols = 6;

        const board = document.getElementById('board');

        for (let i = 0; i < numOfRows; i++) {
            const row = document.createElement('div');
            row.classList.add('row');

            for (let j = 0; j < numOfCols; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
        
                row.appendChild(cell);
            }

            board.appendChild(row);
        }

    }
}

app.drawBoard();