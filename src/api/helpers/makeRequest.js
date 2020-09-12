const mainUrl = 'https://whispering-bastion-66552.herokuapp.com/api/';

const makeRequest2 = (url, options = {}, baseUrl = mainUrl) =>
    fetch(baseUrl + url, options).then((response) => {
        if (response.status !== 200) {
            return response.text().then((text) => {
                throw new Error(text);
            });
        }

        return response.json();
    });

export default makeRequest2;