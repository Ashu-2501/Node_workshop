const express = require('express'); 
const router = express.Router();

const MenuItem = require('./../Models/MenuItem');


router.post('/', async (req,res) => {
    try{
      const data = req.body  //recieving data
  
      const newMenu = new MenuItem(data); //creating a new data model
  
      const response = await newMenu.save(); //saving the data 
      console.log('Data saved');
      res.status(200).json(response);
  
    }catch(err){
      console.log(err);  //logging error in case of faliure
      res.status(500).json({error: 'Internal Server Error'});
    }
  
  });
  
router.get('/',async (req,res)=>{
    try{
      const data=  await MenuItem.find()
      console.log('Data fetched');
      res.status(200).json(data);
  
    }catch(err){
      console.log(err);  //logging error in case of faliure
      res.status(500).json({error: 'Internal Server Error'});
    }
  });


router.get('/:taste', async (req,res) =>{
    try{
        const taste = req.params.taste;
        if(taste == 'Sour'|| taste == 'Sweet'|| taste == 'Spicy'){
            const data = await MenuItem.find({taste: taste});
            console.log('Data Fetched');
            res.status(200).json(data);
        }else{
            console.log('Invalid Request');
            res.status(404);
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Invalid Request'});
    }
});  


module.exports = router;