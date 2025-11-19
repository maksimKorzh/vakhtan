const OCCUPIED = 0
const WHITE = 1
const BLACK = 2
const MAN = 4
const KING = 8
const FREE = 16
const CHANGECOLOR = 3

// +4 Capture Up and Left
// +5 Capture Up and Right
// -4 Capture Down and Right
// -5 Capture Down and Left 

/*  0  0  0  0  0  
  6   6  6  6  0
    6  6  6  6 
  6  6  6  6  0
   16 16 16 16
  16 16 16 16 0 
    5  5  5  5
  5  5  5  5  0
    5  5  5  5  0
  0  0  0  0*/

board = [
  [6, 0, 6, 0, 0, 0, 5, 0],
  [0, 6, 0, 0, 0, 5, 0, 5],
  [6, 0, 6, 0, 0, 0, 5, 0],
  [0, 6, 0, 0, 0, 5, 0, 5],
  [6, 0, 6, 0, 0, 0, 5, 0],
  [0, 6, 0, 0, 0, 5, 0, 5],
  [6, 0, 6, 0, 0, 0, 5, 0],
  [0, 6, 0, 0, 0, 5, 0, 5],
]

b = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0
]

function printBoard() {
  let boardStr = '';
  let pieces = ['.', '', '', '', '', 'o', 'x', '', '', 'O', 'X'];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      boardStr += ' ' + pieces[board[7-c][r]];
    } boardStr += '\n';
  } console.log(boardStr);
}

function printb() {
  let boardStr = '';
  let pieces = ['#', '', '', '', '', 'o', 'x', '', '', 'O', 'X', '',  '', '', '', '', '.'];
  let row = 0;
  for (let sq = 0; sq < 46; sq++) {
    if (b[sq] == OCCUPIED) continue;
    if (row == 4) {
      boardStr += '\n';
      row = 0;
    } else {
      boardStr += ' ' + pieces[b[sq]];
      row++;
    }
  } console.log(boardStr);
}

function arr2brd() {
  for(let i = 0; i < 46; i++) b[i] = OCCUPIED;
  for(let i = 5; i <= 40; i++) b[i] = FREE;
  b[ 5]=board[0][0];b[ 6]=board[2][0];b[ 7]=board[4][0];b[ 8]=board[6][0];
  b[10]=board[1][1];b[11]=board[3][1];b[12]=board[5][1];b[13]=board[7][1];
  b[14]=board[0][2];b[15]=board[2][2];b[16]=board[4][2];b[17]=board[6][2];
  b[19]=board[1][3];b[20]=board[3][3];b[21]=board[5][3];b[22]=board[7][3];
  b[23]=board[0][4];b[24]=board[2][4];b[25]=board[4][4];b[26]=board[6][4];
  b[28]=board[1][5];b[29]=board[3][5];b[30]=board[5][5];b[31]=board[7][5];
  b[32]=board[0][6];b[33]=board[2][6];b[34]=board[4][6];b[35]=board[6][6];
  b[37]=board[1][7];b[38]=board[3][7];b[39]=board[5][7];b[40]=board[7][7];
  for(let i = 5; i <= 40; i++) if ( b[i] == 0 ) b[i] = FREE;
  for(let i = 9; i <= 36; i += 9) b[i] = OCCUPIED;
}

printBoard();
arr2brd();
printb()














