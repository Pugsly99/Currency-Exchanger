import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './services/exchanger';


function newCurrency(exchanged, usd, selectedCurrency) {

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
          let outcome = usd * exchanged;
          $("#outcome").text(outcome);
          $("#outcome").append(" EUR");
        });
    } else if (selectedCurrency === "RUB"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.RUB;
          let outcome = usd * exchanged;
          $("#outcome").text(outcome);
          $("#outcome").append(" RUB");
        });
    } else if (selectedCurrency === "CAD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.CAD;
          let outcome = usd * exchanged;
          $("#outcome").text(outcome);
          $("#outcome").append(" CAD");
        });
    } else if (selectedCurrency === "AED"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.AED;
          let outcome = usd * exchanged;
          $("#outcome").text(outcome);
          $("#outcome").append(" AED");
        });
    } else if (selectedCurrency === "ARS"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.ARS;
          let outcome = usd * exchanged;
          $("#outcome").text(outcome);
          $("#outcome").append(" ARS");
        });
    } else if (selectedCurrency === "AUD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.AUD;
          let outcome = usd * exchanged;
          $("#outcome").text(outcome);
          $("#outcome").append(" AUD");
        });
    } else if (selectedCurrency === "BGN"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.BGN;
          let outcome = usd * exchanged;
          $("#outcome").text(outcome);
          $("#outcome").append(" BGN");
        });
    } else if (selectedCurrency === "BRL"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.BRL;
          let outcome = usd * exchanged;
          $("#outcome").text(outcome);
          $("#outcome").append(" BRL");
        });
    } else if (selectedCurrency === "BSD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.BSD;
          let outcome = usd * exchanged;
          $("#outcome").text(outcome);
          $("#outcome").append(" BSD");
        });
    } else if (selectedCurrency === "USD"){
      Exchanger.getValue()
        .then(function(exchangerResponse) {
          if (exchangerResponse instanceof Error) {
            throw Error(`Currency API error: ${exchangerResponse.message}`);
          }
          const exchanged = exchangerResponse.conversion_rates.USD;
          let outcome = usd * exchanged;
          $("#outcome").text(outcome);
          $("#outcome").append(" RUB");
        });
    } else {
      alert(`${selectedCurrency} is not a supported currency`);
    }
    
  });
});