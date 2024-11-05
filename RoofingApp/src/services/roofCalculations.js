const squaresMultiplier = 0.0162502
const costPerSquareInstalled = 253
const mainArea = 1836
const garage = 504
const markup = .2717
const lcadSqFt = mainArea + garage
console.log(lcadSqFt + " square feet is the approximate area covered by your roof.");


function squaresEstimated(mainArea, garage) {
  return Math.ceil(lcadSqFt * squaresMultiplier);
}
console.log(squaresEstimated(mainArea, garage) + " is approximately how many squares we'll pay a crew to install this new roo.f");



function costEstimated() {
  return squaresEstimated(mainArea, garage)*costPerSquareInstalled;
}
console.log(squaresEstimated(mainArea, garage)*costPerSquareInstalled + " is approximately how much it'll cost us for labor & material necessary to install this new roof.");



function priceEstimated(markup) {
  return Math.round(costEstimated(mainArea, garage) / (1-markup));
}
console.log (priceEstimated(markup) + " is the price presented to the customer/homeowner.");

function commissionEstimatedGG() {
  console.log( (priceEstimated(markup) - costEstimated()) *0.45 + " is approximately how much commission the salesman would receive from Good Guys.");
  return  (priceEstimated(markup) - costEstimated()) *0.45 ;
}
commissionEstimatedGG();