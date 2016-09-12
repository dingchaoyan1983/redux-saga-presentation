import 'whatwg-fetch';
const {fetch} = window;

export default {
  get(url, data) {
    return new Promise(function(resolve, reject) {
      fetch(url).then(function(resp) {
        const {status, statusText, ok} = resp;
        if (ok) {
          resp.json().then(function(json) {
            resolve(json);
          });
        } else {
          reject(statusText);
        }
      });
    })
  }
}
