import axios from axios;

axios.get('https://docs.thecatapi.com/')
  .then(response => { console.log(response) })