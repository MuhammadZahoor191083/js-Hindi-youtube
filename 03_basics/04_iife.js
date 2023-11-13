//  Immediately Invoked Fnction Expressions (IIFE)


(function chai() {

    // named iife
    console.log(`DB CONNECTED`);
})();


( () =>  {
   
    console.log(`Db COnNEcted TWo ${name}`);
} ) ('zahoor')
