// WRITE YOUR CODE BELOW
const customerDrink = {
    name: 'Venti Hot Cafe Latte',
    sugars: 0,
    isReady: true,
};
console.log(customerDrink);

if (customerDrink.isReady){
    console.log(`Ready for pick up: ${customerDrink.name} with ${customerDrink.sugars} sugar!`)
}else {
    console.log(`Still in the order queue: ${customerDrink}`)
}