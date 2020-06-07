//using array functions

const words = ["Mukesh","present",'future',"Tuesday"];

const result = words.filter(word => word.length >6);
console.log(result);


// using normal functions

const wordings = ["Mukesh","present",'future',"Tuesday"];

function manipulate(wordings)
{
  const result =[]
    for(let i=0;i<wordings.length;i++)
    { 
      if( wordings[i].length > 6 )
      {
        
        result.push(wordings[i])
      }
    }
    return result
}
console.log(manipulate(wordings));