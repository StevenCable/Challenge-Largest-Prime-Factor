var primeNumber = 0;
  function isPrime(num){
    for(var i =2; i<=num/2; i++){
      if( num % i ===0){
        return false;
      }
    }
    return true;
  }


exports.largestPrimeFactor = function(n){
  
for (var i = 2, len=n; i < len; i++) {
  if (n%i === 0 && isPrime(i)) {
    primeNumber = i;
  }
}
  return primeNumber;
};