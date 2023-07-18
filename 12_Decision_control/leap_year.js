let year = +prompt('Enter a year to check whether laep year or not');
if(year % 100 == 0){
   if(year % 400 == 0){
      console.log('Leap Year')
   }else{
    console.log('Not leap year')
   }
}else{
    if(year % 4 == 0){
        console.log('Leap Year');
    }else{
        console.log('Not leap year')
    }
}