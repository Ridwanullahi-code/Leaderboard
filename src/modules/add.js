import Post from './postScore.js';

export const array = [];
export const createObj = (user, score) => {
  const obj = { user: user.value, score: score.value };
  return obj;
};

export const clickBtn = () => {
  const addBtn = document.querySelector('.submit-btn');
  addBtn.addEventListener('click', () => {
    const name = document.querySelector('.name');
    const score = document.querySelector('.score');
    const obj = createObj(name, score);
    array.push(obj);
    Post.post(obj);
    name.value = '';
    score.value = '';
  });
};
