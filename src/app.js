import DailyFetcher from "./daily-fetcher";

const today = new DailyFetcher(new Date());

today.allGames().then(games => {
  for (const game of games) {
    console.log(`${game.id}: ${game.score}`);
  }
}).catch(error => {
  console.log(error);
});
