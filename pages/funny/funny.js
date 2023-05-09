const app = getApp();
Page({
  data: {
    board: [],
    selected: [],
    score: 0,
    gameOver: false,
  },
  reStart: function () {
    this.setData({
      selected: [],
      score: 0,
      gameOver: false,
    });
    this.initGame();
  },
  initGame() {
    let board = [];
    for (let i = 0; i < 25; i++) {
      let row = Math.floor(i / 5);
      let col = i % 5;
      let value = Math.floor(Math.random() * 10) + 1;
      board.push({ row: row, col: col, value: value, index: i });
    }
    // let index1 = Math.floor(Math.random() * 25);
    // let index2 = Math.floor(Math.random() * 25);
    // while (index2 === index1 || board[index1].value !== board[index2].value) {
    //   index2 = Math.floor(Math.random() * 25);
    // }
    // let temp = board[index1].value;
    // board[index1].value = board[index2].value;
    // board[index2].value = temp;

    this.setData({ board: board });
  },
  onLoad: function () {
    this.initGame();
  },

  tapCell: function (event) {
    if (this.data.gameOver) {
      return;
    }
    let row = event.currentTarget.dataset.row;
    let col = event.currentTarget.dataset.col;
    let value = event.currentTarget.dataset.value;
    let index = event.currentTarget.dataset.index;
    if (this.data.selected.length === 0) {
      this.setData({
        selected: [{ row: row, col: col, value: value, index: index }],
      });
      return;
    }
    let last = this.data.selected[0];
    if (last.row === row && last.col === col) {
      return;
    }
    if (last.value !== value) {
      this.setData({ selected: [] });
      return;
    }
    if (this.canConnect(last, { row: row, col: col })) {
      let board = this.data.board;
      board[last.row * 5 + last.col].value = 0;
      board[row * 5 + col].value = 0;
      this.setData({
        board: board,
        selected: [],
        score: this.data.score + 10,
      });
      // if (this.isGameOver()) {
      //   this.setData({ gameOver: true });
      //   wx.showModal({
      //     title: "游戏结束",
      //     content: "您的得分为 " + this.data.score,
      //     showCancel: false,
      //   });
      // }
    } else {
      this.setData({
        // selected: [{ row: row, col: col, value: value, index: index }],
        selected: [],
      });
    }
  },

  canConnect: function (cell1, cell2) {
    if (cell1.row === cell2.row && Math.abs(cell1.col - cell2.col) === 1) {
      return true;
    }
    if (cell1.col === cell2.col && Math.abs(cell1.row - cell2.row) === 1) {
      return true;
    }
    if (this.canConnectHorizontally(cell1, cell2)) {
      return true;
    }
    if (this.canConnectVertically(cell1, cell2)) {
      return true;
    }
    if (this.canConnectWithOneCorner(cell1, cell2)) {
      return true;
    }
    if (this.canConnectWithTwoCorners(cell1, cell2, this.data.board)) {
      return true;
    }
    return false;
  },

  canConnectHorizontally: function (cell1, cell2) {
    if (cell1.row !== cell2.row) {
      return false;
    }
    if (cell1.col > cell2.col) {
      let temp = cell1;
      cell1 = cell2;
      cell2 = temp;
    }
    for (let i = cell1.col + 1; i < cell2.col; i++) {
      if (this.data.board[cell1.row * 5 + i].value !== 0) {
        return false;
      }
    }
    return true;
  },

  canConnectVertically: function (cell1, cell2) {
    if (cell1.col !== cell2.col) {
      return false;
    }
    if (cell1.row > cell2.row) {
      let temp = cell1;
      cell1 = cell2;
      cell2 = temp;
    }
    for (let i = cell1.row + 1; i < cell2.row; i++) {
      if (this.data.board[i * 5 + cell1.col].value !== 0) {
        return false;
      }
    }
    return true;
  },

  canConnectWithOneCorner: function (cell1, cell2) {
    let row1 = cell1.row;
    let col1 = cell1.col;
    let row2 = cell2.row;
    let col2 = cell2.col;
    if (
      this.data.board[row1 * 5 + col2].value === 0 &&
      ((this.canConnectVertically(cell1, { row: row1, col: col2 }) &&
        this.canConnectHorizontally({ row: row1, col: col2 }, cell2)) ||
        (this.canConnectVertically({ row: row1, col: col2 }, cell2) &&
          this.canConnectHorizontally(cell1, { row: row1, col: col2 })))
    ) {
      return true;
    }
    if (
      this.data.board[row2 * 5 + col1].value === 0 &&
      ((this.canConnectVertically({ row: row2, col: col1 }, cell1) &&
        this.canConnectHorizontally(cell2, { row: row2, col: col1 })) ||
        (this.canConnectHorizontally({ row: row2, col: col1 }, cell1) &&
          this.canConnectVertically(cell2, { row: row2, col: col1 })))
    ) {
      return true;
    }
    return false;
  },
  canConnectWithTwoCorners: function (cell1, cell2, board) {
    const array = board;
    const x1 = cell1.col;
    const y1 = cell1.row;
    const x2 = cell2.col;
    const y2 = cell2.row;
    if (x1 === x2 && y1 === y2) {
      return false;
    }
    const max_x = 5;
    const max_y = 5;
    for (let i = 0; i < max_x; i++) {
      for (let j = 0; j < max_y; j++) {
        if (i !== x1 && i !== x2 && j !== y1 && j !== y2) {
          continue;
        }
        if ((i === x1 && j === y1) || (i === x2 && j === y2)) {
          continue;
        }
        if (board[i * 5 + j] === 0) {
          continue;
        }
        if (
          this.canConnectWithOneCorner(
            { col: x1, row: y1 },
            { col: i, row: j }
          ) &&
          (this.canConnectHorizontally(
            { col: i, row: j },
            { col: x2, row: y2 }
          ) ||
            this.canConnectVertically({ col: i, row: j }, { col: x2, row: y2 }))
        ) {
          return true;
        }
        if (
          (this.canConnectHorizontally(
            { col: x1, row: y1 },
            { col: i, row: j }
          ) ||
            this.canConnectVertically(
              { col: x1, row: y1 },
              { col: i, row: j }
            )) &&
          this.canConnectWithOneCorner({ col: i, row: j }, { col: x2, row: y2 })
        ) {
          return true;
        }
      }
    }
  },

  canConnectWithTwoCorners1: function (cell1, cell2, board) {
    if (cell1.row === cell2.row || cell1.col === cell2.col) {
      return false;
    }

    // 查找第一个空格子
    let row1 = cell1.row;
    let col1 = cell2.col;
    while (board[row1 * 5 + col1].value !== 0) {
      col1 = (col1 + 1) % 5;
      if (col1 === cell1.col) {
        return false;
      }
    }

    // 查找第二个空格子
    let row2 = cell2.row;
    let col2 = cell1.col;
    while (board[row2 * 5 + col2].value !== 0) {
      row2 = (row2 + 1) % 5;
      if (row2 === cell1.row) {
        return false;
      }
    }

    // 判断第一个空格子与第一个格子之间是否存在水平或垂直的连通路径
    if (
      this.canConnectHorizontally(cell1, { row: row1, col: col1 }, board) ||
      this.canConnectVertically(cell1, { row: row1, col: col1 }, board)
    ) {
      // 判断第二个空格子与第二个格子之间是否存在水平或垂直的连通路径
      if (
        this.canConnectHorizontally(cell2, { row: row2, col: col2 }, board) ||
        this.canConnectVertically(cell2, { row: row2, col: col2 }, board)
      ) {
        // 判断第一个空格子与第二个空格子之间是否存在水平或垂直的连通路径
        if (
          this.canConnectHorizontally(
            { row: row1, col: col1 },
            { row: row2, col: col2 },
            board
          ) ||
          this.canConnectVertically(
            { row: row1, col: col1 },
            { row: row2, col: col2 },
            board
          )
        ) {
          return true;
        }
      }
    }
    return false;
  },

  isGameOver: function () {
    for (let i = 0; i < 25; i++) {
      if (this.data.board[i].value !== 0) {
        for (let j = i + 1; j < 25; j++) {
          if (
            this.data.board[j].value !== 0 &&
            this.canConnect(this.data.board[i], this.data.board[j])
          ) {
            return false;
          }
        }
      }
    }
    return true;
  },
});
