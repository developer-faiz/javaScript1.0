  //  Number Datatype
  console.log("Number Datatype");
  console.log('------------------------')
  let a = 10;
  console.log(a, typeof(a));
  let b = 10.23;
  console.log(b, typeof(b));

  // Boolean Datatype
  console.log("Boolean Datatype");
  console.log('------------------------')
  let t = true;
  console.log(t, typeof(t));
  let f = false;
  console.log(f, typeof(f));

  // String Datatype
  console.log("String Datatype");
  console.log('------------------------')
  let str = 'Faizan';
  console.log(str, typeof(str));
  let str1 = "Ahmad";
  console.log(str1, typeof(str1));
  let str2 = "true";
  console.log(str2, typeof(str2))


  // bigInt Datatype
  console.log("bigInt Datatype");
  console.log('------------------------')
  let big = 10245n;
  console.log(big, typeof(big))

  // Undefined Datatype
  console.log('------------------------')
  console.log("Undefined Datatype");
  let un;
  console.log(un, typeof(un));

  // Undefined is falsy value
  if(undefined){
      console.log('I am undefined');
  }else{
      console.log("I am not undefined");
  }

  // JSON does not support undefined datatype
  let user = {
     fname : 'Faizan',
     lname : 'Ahmad',
     DOB : undefined,
     Id : null
  }
  console.log(JSON.stringify(user));

  // null Datatype
  console.log("null Datatype");
  console.log('------------------------')
  let n = null;
  console.log(n, typeof(null));

  // null is falsy value
  if(null){
      console.log('I am null');
  }else{
      console.log("I am not null");
  }

  // JSON support null datatype
  let user1 = {
     fname : 'Faizan',
     lname : 'Ahmad',
     DOB : undefined,
     Id : null
  }
  console.log(JSON.stringify(user1))


  // symbol Datatype
  console.log('Symbol Datatype');
  console.log('------------------------')
  let stuInfo = {}
  stuInfo['fname'] = "Faizan";
  stuInfo['lname'] = 'Ahmad';
  stuInfo[Symbol('id')] = 1952;

  for(let all in stuInfo){
      console.log(all)
  }

