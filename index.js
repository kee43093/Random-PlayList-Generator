import axios from "axios";



const button = document.getElementsByClassName('button')

button.onclick = function() {
    const options = {
        method: 'GET',
        url: 'https://genius.p.rapidapi.com/artists/16775/songs',
        headers: {
          'x-rapidapi-host': 'genius.p.rapidapi.com',
          'x-rapidapi-key': 'fa589783b6msh743193034e58c1cp17878bjsn140f133d513d'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

// const options = {
//   method: 'GET',
//   url: 'https://genius.p.rapidapi.com/artists/16775/songs',
//   headers: {
//     'x-rapidapi-host': 'genius.p.rapidapi.com',
//     'x-rapidapi-key': 'fa589783b6msh743193034e58c1cp17878bjsn140f133d513d'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });