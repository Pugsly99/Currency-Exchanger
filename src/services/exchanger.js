export default class Exchanger {
  static async getValue(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.GIPHY_API_KEY}/latest/${currency}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
    .catch(function(error) {
      return Error(error);
    })
  }
}