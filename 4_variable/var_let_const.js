  // using var
  console.log('Var');
  // 1- Value can be changed
  var a = 90;
  console.log(a);
  a = 900;
  console.log(a);

  // 2- can be redeclare
  var a1 = 50;
  console.log(a1);
  var a1 = 'Good';
  console.log(a1);

  // 3- have function and global scope
  var aq1 = 4560;
  function msg(){
      console.log(aq1)
      var aq = 140;
      var g = 20;
  }
  msg();
  console.log(aq);

  // using let
  console.log('let');
  //1-  Value can be changed
  let b = 10;
  console.log(b);
  b = 100;
  console.log(b);

  //2-  can't be redeclare
  let b1 = 60;
  console.log(b1);
  let b1 = 'hi';
  console.log(b1);

  // 3 - block scope

  let a = 10;
  function msg(){
      console.log(a);
      let b = 20;
      if(5 == 5){
          console.log(b);
          let c = 90;
      }
      console.log(c)
  }
  msg();

  // using const
  console.log('Const');
  //1- value can't be changed but property can be cahnged
  const arr1 = [10,20];
  console.log(arr1); 
  arr1.push(30);
  console.log(arr1);

  //2- can't be redeclare
  const arr2 = [45,52];
  console.log(arr2);
  const arr2 = ['hi','good'];

  // 3- block scope 
  const a = 10;
  function msg(){
      console.log(a);
      const b = 20;
      if(5 == 5){
          console.log(b);
          const c = 90;
      }
      console.log(c)
  }
  msg();
