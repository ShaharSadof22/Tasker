import httpService from './httpService';


export const taskService = {
  query,
  removeBoard,
  update,
  create,
  makeId
};



function query() {
  return httpService.get(`task`);
}



function update(task) {
  return httpService.put(`task`, task);
}
function removeBoard(boardId) {
  return httpService.delete(`board/${boardId}`);
}
function create(txt, imgUrl) {
  const board = _createBoard(txt, imgUrl)
  return httpService.post(`board`, board);
}
function _createBoard(txt, imgUrl) {
  return {
        "title": "Go to surf",
        "description": "Take the board and drive to the beach",
        "importance": 3,
        "createdAt": 23324234,
        "lastTriedAt": null,
        "triesCount": 0,
        "doneAt": null
    }
}

function makeId(length = 5) {
  var txt = '';
  var possible = '0123456789abcdefgABCDEFG';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}