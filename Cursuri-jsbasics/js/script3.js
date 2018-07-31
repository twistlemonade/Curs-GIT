// $(document).ready (
//   function() {
//      console.log('DOM IS READY')
//   }
// )

$(domLoaded)

function domLoaded() {
  console.log('DOM IS LOADED')
    
  var getWeatherData = function () {
    $.ajax({
      url: 'http://api.tvmaze.com/search/shows?q=girls',
      method: 'GET',
      success: function(data) {
        console.log('TV SHOWS', data)
      }
  })
  }
  
  $('#invoke-ajax-test-call').on('click', function() {
    getWeatherData()
  })
  
}