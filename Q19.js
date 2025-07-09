// Write a program to find the total sales from an array of Order objects in an ecommerce system.

const Orders = [
{
    product:"pen",
    sales:700
},
{
    product:"pencil",
    sales:500
},
{
    product:"eraser",
    sales:1000
}

]
function totalSales(Orders){ 
    return Orders.reduce((sum,order)=>{
        return sum+=order.sales;
    },0);
}

totalamt = totalSales(Orders);
console.log(totalamt);