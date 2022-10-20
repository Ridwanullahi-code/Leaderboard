import '../css/index.css';
import { display } from './modules/score.js';
import Refresh from './modules/interaction.js';
import { clickBtn } from './modules/add.js';

Refresh.refreshBtn();
clickBtn();

// Display all todo list when page loaded
document.addEventListener('DOMContentLoaded', display());
