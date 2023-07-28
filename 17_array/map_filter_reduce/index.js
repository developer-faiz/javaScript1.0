// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
const arr1 = arr.filter((currElement, index, array) =>{
    return currElement > 40;
});
console.log(arr);
console.log(arr1);

// forEach is not return undefined
const arr3 = arr.forEach( (currElement) =>{
    return currElement + 5;
} );
console.log(arr3);
// map
console.log('----------------------')
console.log(arr)
const arr4 = arr.map( (currElement) =>{
    return currElement * 2;
} ).filter( (currElement) =>{
    return currElement > 16;
} ).reduce((acc, currElement) =>{
     return acc = currElement + acc;
},0);
console.log(arr4);


const companies = [
    {name:'Google', category:'Product Based', start:'1981', end:2004},
    {name:'Netfilix', category:'Product Based', start:'2000', end:2050},
    {name:'Amazon', category:'Product Based', start:'1985', end:2060},
    {name:'Tcs', category:'Services Based', start:'1980', end:2050},
    {name:'Apple', category:'Product Based', start:'2004', end:2080}
];
console.log(companies)
const arrcCompa = companies.filter( (currCom)=>{
    if(currCom.category === 'Services Based'){
        return currCom.category;
    }
} );
console.log(arrcCompa);

const Books = [
    {title:'Book one', genre:'Fiction', publish: 1981, edition: 2004, price: 599},
    {title:'Book two', genre:'Non-Fiction', publish: 1999, edition: 2009, price: 499},
    {title:'Book three', genre:'History', publish: 1989, edition: 2007, price: 199},
    {title:'Book four', genre:'Non-Fiction', publish: 1992, edition: 2010, price: 99},
    {title:'Book five', genre:'History', publish: 1990, edition: 2009, price: 1999},
];
console.log(Books);

const userBooks = Books.filter( (fBooks) =>{
    return fBooks.genre === 'History';
} );
console.log(userBooks);

const publishBooks = Books.filter( (pBooks)=>{
    return pBooks.publish > 1989 && pBooks.genre === 'History';
} )
console.log(publishBooks);

const getTitleEdition = Books.filter( (titleGenreBooks) =>{
    return titleGenreBooks.genre === 'History';
} ).map( (titleGenreBooks) =>{
    return titleGenreBooks.title + " ---> " + titleGenreBooks.genre 
} )


// .reduce((acc, titleGenreBooks)=> {
//      return  acc + titleGenreBooks.price;
// },0)
console.log(getTitleEdition)