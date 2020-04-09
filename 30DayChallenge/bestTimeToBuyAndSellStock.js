const maxProfit = prices => {
    if (!prices) return 0;
    let i = 0, valley = prices[0], peak = prices[0], maxProfit = 0;
    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i] >= prices[i+1]) {
            i++;
        }
        valley = prices[i];
        while (i < prices.length - 1 && prices[i] <= prices[i+1]) {
            i++;
        }
        peak = prices[i];
        maxProfit += peak - valley;
    }
    return maxProfit;
};
