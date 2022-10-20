import { array } from './add.js';
import { displayScore } from './score.js';

export default class Refresh {
  static refreshBtn = () => {
    const btn = document.querySelector('.refresh-btn');
    btn.addEventListener('click', () => {
      displayScore(array.pop());
    });
  };
}
