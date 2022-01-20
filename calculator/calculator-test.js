
describe('CalculatorMonthlyPayment', () => {
  



it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 25654,
    years: 3,
    rate: 2.7
  }

  expect(calculateMonthlyPayment(values)).toEqual('742.66');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 78500,
    years: 5,
    rate: 4.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('1452.79');
});


it('Should return a NaN if the rate is 0' , () => {
  const values = {
    rate:0
  }
  expect(calculateMonthlyPayment(values.rate)).toEqual('NaN');
})



});