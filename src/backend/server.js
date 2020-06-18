const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

///////////////////////// integrer cors et express
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
///////////////////////// integrer la base de donnees on cloud (MLAB)
 mongoose.connect("mongodb://yasser123:yasser123123@ds033489.mlab.com:33489/yasser-igl",
          { useNewUrlParser: true,useUnifiedTopology: true }, function(error){
                     if(error){
                                 console.log(error);             
                     }else{
                                 console.log("connected to database");
                     }}
                        );

  ///////////////////////////////////////importer les Routes 
const teacherRouter = require('./routes/teacher');
const studentRouter = require('./routes/student');
const studentRouter = require('./routes/compte');
const studentRouter = require('./routes/cas_epi');
const studentRouter = require('./routes/cas_cat');

  ///////////////////////////////////////lestning to routers 

app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);
app.use('/compte', compteRouter);
app.use('/cas_epi', cas_epiRouter);
app.use('/cas_cat', cas_catRouter);

  /////////////////////////////////////// lancer le serveur principale

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
