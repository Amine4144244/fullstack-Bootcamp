document.addEventListener('DOMContentLoaded', () => {
    // Game state variables
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = '';
    let playerSymbol = '';
    let computerSymbol = '';
    let gameActive = false;
    let gameMode = 'easy'; // 'easy' or 'hard'
    
    // DOM elements
    const cells = document.querySelectorAll('.cell');
    const messageEl = document.getElementById('message');
    const btnX = document.getElementById('btnX');
    const btnO = document.getElementById('btnO');
    const btnEasy = document.getElementById('btnEasy');
    const btnHard = document.getElementById('btnHard');
    const btnRestart = document.getElementById('btnRestart');
    
    // Winning combinations
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [6, 4, 2]              // diagonals
    ];
    
    // Event listeners
    btnX.addEventListener('click', () => startGame('X'));
    btnO.addEventListener('click', () => startGame('O'));
    btnEasy.addEventListener('click', () => gameMode = 'easy');
    btnHard.addEventListener('click', () => gameMode = 'hard');
    btnRestart.addEventListener('click', resetGame);
    
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
    
    // Start the game
    function startGame(symbol) {
        playerSymbol = symbol;
        computerSymbol = symbol === 'X' ? 'O' : 'X';
        currentPlayer = 'X'; // X always goes first
        gameActive = true;
        
        // Hide symbol selection buttons
        btnX.classList.add('hidden');
        btnO.classList.add('hidden');
        
        // Show game board
        document.querySelector('.game-container').classList.remove('hidden');
        
        // If computer goes first
        if (currentPlayer === computerSymbol) {
            setTimeout(computerMove, 500);
        }
    }
    
    // Handle cell click
    function handleCellClick(e) {
        const index = parseInt(e.target.getAttribute('data-index'));
        
        // Check if move is valid
        if (board[index] !== '' || !gameActive || currentPlayer !== playerSymbol) {
            return;
        }
        
        // Make player move
        makeMove(index, playerSymbol);
        
        // Check for win or tie
        if (checkWin(playerSymbol)) {
            endGame(`${playerSymbol} (You) Win!`);
            return;
        } else if (isBoardFull()) {
            endGame("Tie Game!");
            return;
        }
        
        // Switch to computer's turn
        currentPlayer = computerSymbol;
        setTimeout(computerMove, 500);
    }
    
    // Computer makes a move
    function computerMove() {
        if (!gameActive || currentPlayer !== computerSymbol) return;
        
        let move;
        
        if (gameMode === 'hard') {
            // Try to win first
            move = findWinningMove(computerSymbol);
            
            // If no winning move, try to block player
            if (move === -1) {
                move = findWinningMove(playerSymbol);
            }
            
            // If no blocking move, choose center
            if (move === -1 && board[4] === '') {
                move = 4;
            }
            
            // If center taken, choose random
            if (move === -1) {
                const emptyCells = board.reduce((acc, cell, index) => {
                    if (cell === '') acc.push(index);
                    return acc;
                }, []);
                move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            }
        } else {
            // Easy mode - random move
            const emptyCells = board.reduce((acc, cell, index) => {
                if (cell === '') acc.push(index);
                return acc;
            }, []);
            move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        }
        
        makeMove(move, computerSymbol);
        
        // Check for win or tie
        if (checkWin(computerSymbol)) {
            endGame(`${computerSymbol} (Computer) Wins!`);
        } else if (isBoardFull()) {
            endGame("Tie Game!");
        } else {
            currentPlayer = playerSymbol;
        }
    }
    
    // Find a winning move for the specified symbol
    function findWinningMove(symbol) {
        for (const combo of winCombos) {
            const [a, b, c] = combo;
            
            // Check if two in a row with one empty
            if (board[a] === symbol && board[b] === symbol && board[c] === '') {
                return c;
            }
            if (board[a] === symbol && board[c] === symbol && board[b] === '') {
                return b;
            }
            if (board[b] === symbol && board[c] === symbol && board[a] === '') {
                return a;
            }
        }
        return -1;
    }
    
    // Make a move on the board
    function makeMove(index, symbol) {
        board[index] = symbol;
        cells[index].textContent = symbol;
    }
    
    // Check if the specified symbol has won
    function checkWin(symbol) {
        return winCombos.some(combo => {
            return combo.every(index => {
                return board[index] === symbol;
            });
        });
    }
    
    // Check if the board is full
    function isBoardFull() {
        return board.every(cell => cell !== '');
    }
    
    // End the game
    function endGame(msg) {
        messageEl.textContent = msg;
        gameActive = false;
        btnRestart.classList.remove('hidden');
    }
    
    // Reset the game
    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(cell => {
            cell.textContent = '';
        });
        messageEl.textContent = '';
        gameActive = false;
        btnRestart.classList.add('hidden');
        btnX.classList.remove('hidden');
        btnO.classList.remove('hidden');
    }
});