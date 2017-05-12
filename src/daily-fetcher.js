import Fetcher from "./fetcher";
import Game from "./game";
import Promise from "bluebird";

export default class DailyFetcher extends Fetcher {
  constructor(date) {
    super(DailyFetcher.buildUrl(date));
  }

  allGames() {
    return new Promise((resolve, reject) => {
      this.fetch("miniscoreboard.json").then(response => {
        let games = [];

        for (const game of response.data.data.games.game) {
          games.push(new Game(game));
        }

        resolve(games);
      }).catch(error => {
        console.log("Couldn't fetch scoreboard from gameday: ", error);
        reject(error);
      });
    });
  }

  static buildUrl(date) {
    if (!(date instanceof Date)) {
      date = new Date();
    }
    const year = date.getFullYear();
    let month = date.getMonth() + 1,
        day = date.getDay();

    if (month.toString().length === 1) {
      month = `0${month}`;
    }

    if (day.toString().length === 1) {
      day = `0${day}`;
    }

    return `components/game/mlb/year_${year}/month_${month}/day_${day}/`;
  }
}