//select all
//select from customer
db.customers.find();

//select with conditions
//select from cusstomer where name= john smith and age >21
db.customers.find({
    name: "john smith",
    age: {$gt: 21}
});

// insert
//insert into customers ( cus, name, age) 
// values(C001, john smith, 21)

db.customers.insertOne({
    cus_id: "C001",
    name: "john smith",
    age: 21
});

//update
// update customer set name = 'johnny smith' age= age + 2 where name = 'john smith' and age 21

db.customers.updateMany(
    {
        name:'john smith',
        age: 21
    },
    {
        $set: {name:"johnny smith"},
        $inc: {age : 2}
    }
)


//// delete all
//// delete from customer

db.customers.deleteMany({});

//delete all
//delete from customers where cust_id = C001

db.customers.deteleMany({
    cust_id : "C001"
});