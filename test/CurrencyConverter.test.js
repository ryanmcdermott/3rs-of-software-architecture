import CurrencyConverter from '../src/3-refactorable/good/lib/CurrencyConverter';

it('should convert currencies', () => {
  const currencyConversions = {
    usd: {
      rupee: 66.78,
      yuan: 6.87,
      usd: 1,
    },
  };

  const currencyConverter = new CurrencyConverter(currencyConversions);

  expect(currencyConverter.convert(5, 'usd', 'rupee')).toEqual('₹333.9');
  expect(currencyConverter.convert(5, 'usd', 'yuan')).toEqual('元34.35');
  expect(currencyConverter.convert(5, 'usd', 'usd')).toEqual('$5');
});
