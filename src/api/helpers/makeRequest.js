const mainUrl = 'https://api.thevirustracker.com/free-api?';

const makeRequest = (url, options = {}, baseUrl = mainUrl) => fetch(baseUrl + url, options)
  .then((response) => {
    if (response.status !== 200) {
      return response.text().then((text) => {
        throw new Error(text);
      });
    }
    return response.json();
  });

export default makeRequest;
