export default class CurrencyConverter {
  constructor(currencyConversions) {
    this.currencyConversions = currencyConversions;
    this.currencySymbols = {
      usd: '$',
      rupee: '₹',
      yuan: '元',
    };
  }

  convert(amount, fromCurrency, toCurrency) {
    return this.currencySymbols[toCurrency] +
      amount * this.currencyConversions[fromCurrency][toCurrency];
  }
}
