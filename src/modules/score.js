export const getScore = async (callback = null) => {
  const apiKey = '0Z92XESxHIscbuYy2R5g';
  const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${baseURL}games/${apiKey}/scores/`;
  const response = await fetch(url);
  const data = await response.json();
  const scores = data.result;
  const sortScores = scores.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  sortScores.forEach((score) => {
    callback(score);
  });
  return sortScores;
};

export const displayScore = (score) => {
  const scores = document.querySelector('.result');
  scores.innerHTML += `<p>${score.user}: ${score.score}</p>`;
};

export const display = () => {
  getScore(displayScore);
};
