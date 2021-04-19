const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "Vasile",
      lastName: "Mosan",
      age: 20,
    },
    {
      firstName: "Ion",
      lastName: "Ciobanu",
      age: 15,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "MSV",
      teamPoints: 40,
      opponentPoints: 12,
    },
    {
      opponent: "ITV",
      teamPoints: 12,
      opponentPoints: 30,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  //add player method
  addPlayer(firstName, lastName, age) {
    const player = {
      name: firstName,
      last: lastName,
      playerAge: age,
    };
    this._players.push(player);
  },
  //add game method
  addGame(opponentName, teamPoints, opponentPoints) {
    const game = {
      opponent: opponentName,
      teamPts: teamPoints,
      opponentPts: opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log("Player array:");
for (let i = 0; i < team._players.length; i++) {
  console.log(team._players[i]);
}

team.addGame("Chisinau", 50, 28);
team.addGame("Orhei", 30, 28);
team.addGame("Riscani", 40, 30);

console.log("Game array:");
for (let i = 0; i < team._games.length; i++) {
  console.log(team._games[i]);
}
