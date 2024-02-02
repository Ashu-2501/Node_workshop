const express = require('express'); 
const router = express.Router();

const Person = require('./../models/Person');
// Define routes for /person


// Handle GET /person
router.get('/',async (req,res)=>{
    try{
      const data=  await Person.find()
      console.log('Data fetched');
      res.status(200).json(data);
  
    }catch(err){
      console.log(err);  //logging error in case of faliure
      res.status(500).json({error: 'Internal Server Error'});
    }
  });

// Handle POST /person
router.post('/', async (req,res) => {
    try{
      const data = req.body  //recieving data
  
      const newPerson = new Person(data); //creating a new data model
  
      const response = await newPerson.save(); //saving the data 
      console.log('Data saved');
      res.status(200).json(response);
  
    }catch(err){
      console.log(err);  //logging error in case of faliure
      res.status(500).json({error: 'Internal Server Error'});
    }
  
});

router.get('/:worktype', async(req,res)=>{
    try{
        const workType = req.params.worktype;
        if(workType == "chef" || workType== "manager" || workType == "waiter"){
  
        const response = await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
        }
        else{
          res.status(404).json({error: 'Invalid request'});
        }
    }catch(err){
        console.log(err);  //logging error in case of faliure
        res.status(500).json({error: 'Internal Server Error'});
  
    }
  });

router.put('/:id', async (req,res)=>{
    try{
        const personid = req.params.id;
        const updatedData = req.body;
        
        const response = await Person.findByIdAndUpdate(personid, updatedData,{
            new: true,
            runValidators: true
        });
        if(!response){
            return res.status(404).json({error: 'Person not Found'});
        }
        console.log('Data Updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});  


router.delete('/:id', async (req,res)=> {
    try{
        const personid = req.params.id;

        const response = await Person.findByIdAndDelete(personid);

        if(!response){
            return res.status(404).json({error: 'Person not Found'});
        }
        console.log('Data Deleted');
        res.status(200).json({message: 'Person deleted successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});
  
  
  
module.exports = router;