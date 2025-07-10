// Demonstrate an example for Promise. a. Demonstrate an example of Async and await. b. Then catch


//a 

function fetchProducts(Products){
    return new Promise((resolve,reject)=>{
        if(Products){
            resolve("Products fetched");
        }
        else {
            reject("Products not found");
        }
    })
}

async function FetchP(products){
    try {
        const a = await fetchProducts(products);
        console.log("Data fetched with async await: ",a);
    }
    catch(e){
        console.log("Asyncx await error",e);
    }
   

}

//b
LoadProducts =(Products)=> {

    fetchProducts(Products).then((result)=>{
        console.log("Then result:",result);
        })
    .catch((e)=>{
        console.log("Then error:",e);
    })
}



FetchP(true);
FetchP(false);

LoadProducts(true);
LoadProducts(false);