var maxProfit = function (prices) {
  var mini = prices[0];
  var maxprofit = 0;
  for (i = 1; i < prices.length; i++) {
    var profit = prices[i] - mini;
    maxprofit = Math.max(profit, maxprofit);
    mini = Math.min(mini, prices[i]);
  }
  return maxprofit;
};
