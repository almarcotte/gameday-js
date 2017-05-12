import axios from "axios";
import Promise from "bluebird";

export default class Fetcher {
  constructor(path) {
    this.path = path;
    this.host = "http://gd2.mlb.com/"
  }

  fetch(file) {
    const url = `${this.host}${this.path}${file}`;

    return new Promise((resolve, reject) => {
      axios.get(url).then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  }
}
