'use strict';

module.exports = (NODE) => {
  const sentimentInvestor = require('sentiment-investor').Sentiment;

  const sentimentInvestorOut = NODE.getOutputByName('sentiment-investor');

  sentimentInvestorOut.on('trigger', async () => sentimentInvestor);

  NODE.on('init', async () => {
    sentimentInvestor.sentiment.key = NODE.data.key;
    sentimentInvestor.sentiment.token = NODE.data.token;
  });
};
