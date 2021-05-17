'use strict';

module.exports = (NODE) => {
  const sentimentInvestorsIn = NODE.getInputByName('sentiment-investors');

  const recordOut = NODE.getOutputByName('record');

  recordOut.on('trigger', async (conn, state) => {
    const sentimentInvestors = await sentimentInvestorsIn.getValues(state);

    return (await Promise.all(sentimentInvestors.map((sentimentInvestor) => (
      sentimentInvestor.sort(16, 'AHI')
    )))).flat();
  });
};
