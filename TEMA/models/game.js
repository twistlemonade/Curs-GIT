function Game(options) {
  options = options || {}
  this.id = options.id
  this.title = options.title
  this.releaseDate = options.releaseDate
  this.genre = options.genre
  this.publisher = options.publisher
  this.imageUrl = options.imageUrl
  this.description = options.description
}

Game.prototype.getGameDetails = function () {
  var that = this
  return $.get('https://games-world.herokuapp.com/games/'+this.id)
    .then(function(response) {
      that.title = response.title
      this.releaseDate = response.releaseDate
      this.genre = response.genre
      this.publisher = response.publisher
      this.imageUrl = response.imageUrl
      this.description = response.description
      console.log('this', this)
      console.log('that', that)

      return 'ceva'
    })
}
