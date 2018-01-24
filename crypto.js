
const cryptos = require("crypto-socket");

cryptos.start();

module.exports = (io) => {
   setTimeout(() => {
      let data = {};
      const exc = cryptos.Exchanges;

      setInterval(() => {
         data = {
            Bitstamp: exc.bitstamp.BTCUSD || '',
            gdax: exc.gdax.BTCUSD || '',
            BitMex: exc.bitmex.BTCUSD || '',
            Bittrex: exc.bittrex.BTCUSD || '',
            Bitfinex: exc.bitfinex.BTCUSD || ''
         };
         io.emit('Rate', data);
      }, 1000);
   }, 3000);
};