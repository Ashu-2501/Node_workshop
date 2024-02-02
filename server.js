// const add = function(a,b,callback){  
//     var result = a+b
//     console.log(result);
//     callback();

// }
// add (2,5,()=> console.log("bskfhjb"));

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username)

// fs.appendFile('greeting.txt', 'Hi '+ user.username + '!\n', ()=> {
//     console.log('file is created');
// });
// var _ = require('lodash');

// const notes = require('./notes.js');
// console.log('Server');

// console.log(notes.age);
// notes.addnumber(2,4);

// var data = ["person", "person", 1,2,1,2,'name', 'age','2'];

// var filter = _.uniq(data);
// console.log(filter);


// // Json to string and vice versa

// const jsonString = '{"name": "John", "age":30,"city": "BBS"}' ;
// const jsonobject = JSON.parse(jsonString);
// console.log(jsonobject);

// const convstring = JSON.stringify(jsonobject);
// console.log(convstring);

const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/Person');

const MenuItem = require('./Models/MenuItem');

const bodyParser = require('body-parser');
 app.use(bodyParser.json()); //stores body section of the http requests in req.body part of the body parser


app.get('/', function (req, res) {
  res.send('Hello There')
})

app.get('/movies', function (req, res) {
    res.send('Hello There welcome to my movie collection')
  })

  app.get('/games', (req, res)=> {
    var genre = {
        name: 'action',
        duration: '16hrs',
        size: '40gb'
    }
    res.send(genre)
  })


app.listen(3000,()=>{
    console.log('localhost is active')
}) 

// app.post('/person', (req,res)=>{
//   const data = req.body //assuming the request body contains the person data
  
//   // To create a new person document using Mongoose model 

//   const newPerson = new Person(data);
//   // Doing the below steps can be hectic so we pass the 'data' which stores the request body 
//   //as parameter to the new Person
//   // newPerson.name = data.name;
//   // newPerson.age = data.age;
//   // newPerson.work = data.work;
//   // newPerson.mobile = data.mobile;
//   // newPerson.email = data.email;
//   // newPerson.salary = data.salary;
//   // newPerson.address = data.address;


//   //save the details to data base


//   //the method of saving the data using callback is depreciated and 
//   //nowadays we use 'async' and 'await' funtions 

//   newPerson.save((error, savedperson) => {
//     if(error){
//       console.log('ERROR saving data', error);
//       res.status(500).json({error: 'Internal server'})
//     }
//     else{
//       console.log('Data saved successfully');
//       res.status(200),json(savedperson)
//     }
//   });



// })

// async and await method


//GET method to get all the person data



//Import the router files

const Personroutes = require('./Routes/personroutes');
app.use('/person', Personroutes);


const Menuroutes = require('./Routes/menuroutes');
app.use('/menu', Menuroutes);






 









































