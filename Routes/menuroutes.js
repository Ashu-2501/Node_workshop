const express = require('express'); 
const router = express.Router();

const MenuItem = require('./../Models/MenuItem');
const { updateMany } = require('../models/Person');


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

router.put('/:id',  async (req,res) =>{
  try{
    const menuitemid = req.params.id;
    const updatedData = req.body;

    const response = await MenuItem.findByIdAndUpdate(menuitemid,updatedData,{
      new: true,
      runValidators: true
    });

    if (!response){
      return res.status(404).json({error: 'Person not found'});

    }

    console.log('Data updated');
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

router.delete('/:id',async (req,res) =>{
  try{
    const id = req.params.id;

    const response = await MenuItem.findByIdAndDelete(id);

    if(!response){
      return res.status(404).json({error: 'Menu Item not found'});
    }

    console.log('Data Deleted');
    res.status(200).json({message: 'Data deleted Successfully'});

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});

  }
})
module.exports = router;