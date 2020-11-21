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

function checkCurrency(selectedCurrency, usd) {
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
}

function showRates() {
  Exchanger.getValue()
    .then(function(exchangerResponse) {
      if (exchangerResponse instanceof Error) {
        throw Error(`Currency API error: ${exchangerResponse.message}`);
      }
      const money1 = exchangerResponse.conversion_rates.RUB;
      $("#money1").text(` RUB= ${money1}`);
      const money2 = exchangerResponse.conversion_rates.EUR;
      $("#money2").text(` EUR= ${money2}`);
      const money3 = exchangerResponse.conversion_rates.CAD;
      $("#money3").text(` CAD= ${money3}`);
      const money4 = exchangerResponse.conversion_rates.AED;
      $("#money4").text(` AED= ${money4}`);
      const money5 = exchangerResponse.conversion_rates.ARS;
      $("#money5").text(` ARS= ${money5}`);
      const money6 = exchangerResponse.conversion_rates.AUD;
      $("#money6").text(` AUD= ${money6}`);
      const money7 = exchangerResponse.conversion_rates.BGN;
      $("#money7").text(` BGN= ${money7}`);
      const money8 = exchangerResponse.conversion_rates.BRL;
      $("#money8").text(` BRL= ${money8}`);
      const money9 = exchangerResponse.conversion_rates.BSD;
      $("#money9").text(` BSD= ${money9}`);
      const money10 = exchangerResponse.conversion_rates.USD;
      $("#money10").text(` USD= ${money10}`);
    });
}

$(document).ready(function() {
  showRates();
  $('#exchangeUsd').click(function() {
    const usd = $('#exchange').val();
    let selectedCurrency = $('#exchangedTo').val();
    checkCurrency(selectedCurrency, usd);
  });
});