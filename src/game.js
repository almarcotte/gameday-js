export default class Game {
  constructor(data) {
    this.data = data;
  }

  get score() {
    return `Home: ${this.data.home_team_runs}, Away: ${this.data.away_team_runs}`;
  }

  homeTeam(full = false) {
    return full ? `${this.data.home_team_name}` : `${this.data.home_team_abbr}`;
  }

  away(full = false) {
    return full ? `${this.data.away_team_name}` : `${this.data.away_team_abbr}`;
  }

  get dataDir() {
    return this.data.game_data_directory;
  }

  get id() {
    const regex = /(gid_.+)$/g;
    const matches = regex.exec(this.dataDir);

    return matches === null ? matches : matches[0];
  }
}