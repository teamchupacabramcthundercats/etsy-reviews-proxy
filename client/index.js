import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';

const path = (window.location.pathname).slice(9);

axios.get('/api/reviews')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  })