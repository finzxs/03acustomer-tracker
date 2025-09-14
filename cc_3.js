// Creating Customer Records with endless arrays

const customers = [
    {name:"Christopher", email:"chris.kelly@micro.soft", purchases: ["hot dogs", "soda", "chips"]},
    {name:"Amanda", email:"amanda.jones@web.mail", purchases: ["coffee", "bagel", "donut"]},
    {name:"Jonsey", email:"jonsey.bright@domain.com", purchases: ["salad", "water", "fruit"]},
];

// Adding a new customer

customers.push({name:"Johnny", email:"johnnyclover#regalaxy.com", purchases: ["tea", "muffin", "cookie"]});
customer[0].shift();

//Updating Customer Info

customers[2].email = "jonsey.dark@domain.com";
customers[1].purchases.push("knuckle sandwich");

//Display Customer Info
customers.forEach(customer => {
    console.log('Name: ' + customer.name);
    console.log('Email: ' + customer.email);
    console.log('Total Purchases: ' + customer.purchases.length);
});