console.log("Promises in JS");
// Promise: deliver best work
// resolve (then)- able to deliver
// reject (catch)- not able to deliver
// pending- still assessing

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function: Promise has been resolved.");
        resolve();
      } else {
        console.log("Function: Promise NOT resolved.");
        reject('Promise Wasn\'t fulfilled'+error);
      }
    }, 2000);
  });
}

func1().then(function(){
    console.log('Resolve function triggered.');
}).catch(function(){
    console.log('Reject function triggered.');
})

