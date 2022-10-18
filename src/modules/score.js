/* disable-default-export */

export const scores = [
  {
    name: 'James',
    score: 200,
  },
  {
    name: 'Alex',
    score: 100,
  },
  {
    name: 'Chukwuma',
    score: 150,
  },
  {
    name: 'Tanusri',
    score: 120,
  },
  {
    name: 'william',
    score: 65,
  },
  {
    name: 'kevin',
    score: 90,
  },
  {
    name: 'daniel',
    score: 33,
  },
];

export const displayScore = () => {
  const table = document.querySelector('.table');
  const tbody = document.createElement('tbody');
  scores.forEach((score, index) => {
    tbody.innerHTML += `
    <tr class="table-row">
    <td class="${index + 1}">${score.name}: ${score.score}</td>
    </tr>`;
    table.append(tbody);
  });
};
