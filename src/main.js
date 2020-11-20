import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './services/exchanger';





$(document).ready(function() {
  $('#exchangeUsd').click(function() {
    let usd = $('#exchange').val();
    usd;
    let selectedCurrency = $('#exchangedTo').val();
    
    Exchanger.getValue(selectedCurrency)
      .then(function(exchangerResponse) {
        if (exchangerResponse instanceof Error) {
          throw Error(`Currency API error: ${exchangerResponse.message}`);
        }
        const exchanged = exchangerResponse.conversion_rates.EUR;
        console.log(exchanged);
      });
  });
});