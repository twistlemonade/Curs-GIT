window.addEventListener('load', function(){
  var containerEl = document.getElementById('games-list')
  var gamesModel = new Games()
  gamesModel.getAll().then(function(response) {
    displayAllGames(response)
  })

  function displayAllGames(gamesData) {
    for (var i = 0; i < gamesData.length; i++) {
      var game = new Game(gamesData[i])
      displayGame(game)
    }
  }

  function displayGame(game) {
    var liEl = document.createElement('li')
    var titleEl = document.createElement('h1')
    titleEl.innerHTML = game.title
    titleEl.addEventListener('click', function(){
      window.location = 'http://html-twistlemonade.codeanyapp.com/TEMA/templates/game.html?gameId=' + game.id
    })

  var bodyEl = document.createElement('p')
  bodyEl.innerHTML = game.description
  liEl.appendChild(titleEl)
  liEl.appendChild(bodyEl)
  containerEl.appendChild(liEl)
  }
})
