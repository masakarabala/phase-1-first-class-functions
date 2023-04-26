
  
  /*function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }
  function Monday() {
    runFiveMiles();
    liftWeights();
  }

  function Monday() {
    exerciseRoutine(liftWeights);
  }
  //calback function
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
  });*/
  //or using arrow function
  //exerciseRoutine(() => console.log("Stretch! Work that core!"));
 /* console.log("hi")
  function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise);
    return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
      };
    }
    const afterExercise = morningRoutine(liftWeights);
    afterExercise();

    //homework
    function receivesAFunction(callback){
        console.log("Hi there")
    }
    receivesAFunction(callback);

    function callback() {
        console.log("Pump iron");
      }*/
      function receivesAFunction(callbackfunction) {
        gretting();
        callbackfunction();
      }
      receivesAFunction(function () {
        console.log("!!!!!!!!!!!!!!!!!");
      });
      //or arrow function
      //receivesAFunction(() => console.log("!!!!!!"));
      function gretting() {
        console.log("Hi every one");
      }
      //The returnsANamedFunction function should:take no arguments,return a named function
      function returnsANamedFunction() {
        const namedFunction = () => console.log("Hi !!!");
        return namedFunction;
      
      }
     //The returnsAnAnonymousFunction function should:take no argumentsreturn an anonymous function
     function returnsAnAnonymousFunction() {
        
        return   () => console.log("Hi !!!");;
      
      }
      
   
     
      

 
 