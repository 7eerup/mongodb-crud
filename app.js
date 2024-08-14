const { MongoClient } = require('mongodb');
const uri = `mongodb://localhost:27017`
const client = new MongoClient(uri);

async function run (){
    const database = client.db('firstDB')
    const users = database.collection('users')
    
    // 데이터 1개 생성 Create
    // const userData = await users.insertOne({name:'7eerup', age:20})
    // console.log("result", userData);

    
    // 데이터 여러개 생성
// const userList = [{name: 'kcb', age:30}, {name:'kkk', age:25}]
// const userListResult = await users.insertMany(userList)
//     console.log("result", userListResult)

// 데이터 찾기 Read
// const findUser = await users.find({}).toArray()
// console.log('result', findUser)

// 데이터 업데이트 Update
// const updateUser = await users.updateOne(
//     {name:'kkk'},
//     {$set: {age:10}}
//     )
//     console.log("updated", updateUser)

// 데이터 삭제 Delete
const deleteUsers = await users.deleteMany({age:{$gt:20}})
console.log("deleted", deleteUsers)
}
run()