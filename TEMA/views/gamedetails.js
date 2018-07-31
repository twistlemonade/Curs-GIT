window.addEventListener('load', function() {
  var containerEl = document.getElementById('game-details')
  var game = new Game()
  var gameId = getUrlParameter('gameId')
  game.id = gameId

  game.getGameDetails().then(function() {
    displayGameDetails(game)
  })

  function displayGameDetails(gameDetails) {
    var titleEl = document.createElement('h1')
    titleEl.innerHTML = gameDetails.title
    containerEl.appendChild(titleEl)
    var bodyEl = document.createElement('p')
    bodyEl.innerHTML = gameDetails.description
    bodyEl.innerHTML = gameDetails.releaseDate
    bodyEl.innerHTML = gameDetails.genre
    containerEl.appendChild(bodyEl)
  }

  function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

})
