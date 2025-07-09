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


LoadProducts =(Products)=> {

    fetchProducts(Products).then((resolve)=>{
        })
    .catch(()=>{
        console.log("")
    })
}