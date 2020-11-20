import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './services/exchanger';


function newCurrency(exchanged, usd, selectedCurrency) {
  let outcome = usd * exchanged;
  $("#outcome").text(outcome);
  $("#outcome").append(` ${selectedCurrency}`);
}


$(document).ready(function() {
  $('#exchangeUsd').click(function() {
    const usd = $('#exchange').val();
    let selectedCurrency = $('#exchangedTo').val();
    if (selectedCurrency === "EUR"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.EUR;
          newCurrency(exchanged, usd, selectedCurrency);
        });
    } else if (selectedCurrency === "RUB"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.RUB;
          newCurrency(exchanged, usd, selectedCurrency);
        });
    } else if (selectedCurrency === "CAD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.CAD;
          newCurrency(exchanged, usd, selectedCurrency);
        });
    } else if (selectedCurrency === "AED"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.AED;
          newCurrency(exchanged, usd, selectedCurrency);
        });
    } else if (selectedCurrency === "ARS"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.ARS;
          newCurrency(exchanged, usd, selectedCurrency);
        });
    } else if (selectedCurrency === "AUD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.AUD;
          newCurrency(exchanged, usd, selectedCurrency);
        });
    } else if (selectedCurrency === "BGN"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.BGN;
          newCurrency(exchanged, usd, selectedCurrency);
        });
    } else if (selectedCurrency === "BRL"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.BRL;
          newCurrency(exchanged, usd, selectedCurrency);
        });
    } else if (selectedCurrency === "BSD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.BSD;
          newCurrency(exchanged, usd, selectedCurrency);
        });
    } else if (selectedCurrency === "USD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.USD;
          newCurrency(exchanged, usd, selectedCurrency);
        });
    } else {
      alert(`${selectedCurrency} is not a supported currency`);
    }
    
  });
});