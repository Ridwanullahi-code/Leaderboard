export default class Post {
  static post = async (data = {}) => {
    const apiKey = '0Z92XESxHIscbuYy2R5g';
    const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    const url = `${baseURL}games/${apiKey}/scores/`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const status = await response.json();
    return status.result;
  };
}
