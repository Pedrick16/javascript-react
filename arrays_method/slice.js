//slice method
const months = ["jan" ,"march", "april", "june"]
console.log(months.slice(1)) //nag start sya sa index na iseset mo and pag ganyan ang magiging out
// nya is [ 'march', 'april', 'june' ]

console.log(months.slice(1, 3)) //nag start sya sa index 1 which is march and kung lalagyan ko sya ng end point
// h=gusto ko hanggang april lang sya then kukunin ko yung index ni june which is three. output ['march', 'april' ]

//same rin sa negative numbers
console.log(months.slice(1))