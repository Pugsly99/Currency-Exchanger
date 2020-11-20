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
    if (selectedCurrency === "EUR"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.EUR;
          console.log(exchanged);
        });
    }  else if (selectedCurrency === "RUB"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.RUB;
          console.log(exchanged);
        });
    } else if (selectedCurrency === "CAD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.CAD;
          console.log(exchanged);
        });
    } else if (selectedCurrency === "AED"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.AED;
          console.log(exchanged);
        });
    } else if (selectedCurrency === "ARS"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.ARS;
          console.log(exchanged);
        });
    }  else if (selectedCurrency === "AUD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.AUD;
          console.log(exchanged);
        });
    } else if (selectedCurrency === "BGN"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.BGN;
          console.log(exchanged);
        });
    } else if (selectedCurrency === "BRL"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.BRL;
          console.log(exchanged);
        });
    } else if (selectedCurrency === "BSD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.BSD;
          console.log(exchanged);
        });
    }
    
  });
});