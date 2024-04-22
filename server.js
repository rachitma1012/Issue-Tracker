// all connection
import express from 'express';
import path from 'path'
import Controller from './src/controller/tracker.controller.js';
import ejslayout from 'express-ejs-layouts';
import { connectdb } from './src/config/databaseconnection.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(path.resolve(),'src','views'));
app.use(express.static('src/views'));
app.use(ejslayout);
// all the routes
const trackcontroller = new Controller();
// route for getting the first page
app.get('/',trackcontroller.getfirst);
// route for geeting the form to create the project
app.get('/createproject',trackcontroller.getcreate);
// route for displaying the project data tha are created 
app.post('/',trackcontroller.getdata);
// route for geeting the all project that are created 
app.get('/collection',trackcontroller.collection);
// route for getting the form for creating the issue of specific project
app.get('/createissue',trackcontroller.createIssue);
// route for showing the collection page again if the issue is raised
app.post('/collection',trackcontroller.raisedissue)
// route for geeting the filter issue form
app.get('/filter',trackcontroller.filter);
// route for getting the filter result
app.post('/specificfilter',trackcontroller.filterresult)

app.listen(process.env.PORT,()=>{
    console.log('Server is up and running on port 8000!');
    // for database connection
    connectdb()
})