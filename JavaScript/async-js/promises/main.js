axios.get('https://api.github.com/users/joaoscoelho')
  .then(function(response) {
    console.log(response.data.avatar_url)
  })
  .catch(function(error) {
    console.warn(error)
  })
