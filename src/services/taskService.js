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
function create(title) {
  const task = _getEmptyTask()
  task.title = title;
  return httpService.post(`task`, task);
}
function makeId(length = 5) {
  var txt = '';
  var possible = '0123456789abcdefgABCDEFG';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
function _getEmptyTask() {
  return {
    title: "",
    description: "",
    importance: 3,
    createdAt: new Date(),
    lastTriedAt: null,
    triesCount: 0,
    doneAt: null
  }
}