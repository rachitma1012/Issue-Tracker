// connection with the model
import IssueTrackerModel from '../Model/projectModel.js';
//  variable for getting the project id 
let pid
export default class Controller{
  // function for rendering the index.html with the created project
   async  getfirst(req,res){
     const collection = await IssueTrackerModel.getAll();
    
     return res.render("index",{collection:collection});
    
    }
    // function just rendering create project page
    getcreate(req,res){
    return res.render("createproject");
    }
    // function for displaying the all project with collection 
   async collection(req,res){
    const collection = await IssueTrackerModel.getAll();
        return res.render('collectionProject',{collection:collection});
    }
    // function for rendering the createissue page
    createIssue(req,res){
        // console.log(req.query);
        pid = req.query.id;
        return res.render('createissue');
    }
    // function for rendering the collection page with the data
   async getdata(req,res){
        IssueTrackerModel.savedata(req.body);
        const collection = await IssueTrackerModel.getAll();
        return res.render('index',{collection:collection});
    }

    // function for rendering the collection page with the raised issue 
   async raisedissue(req,res){
        IssueTrackerModel.issueraised(pid,req.body);
        const collection = await IssueTrackerModel.getAll();
        return res.render('index',{collection:collection});
        
    }
   // function for displaying the filter page
    filter(req,res){
        res.render('filter');
    }
   
    // function for rendering the filterresultpage with data
   async filterresult(req,res){
      const issuecollection = await IssueTrackerModel.filterResult(req.body);
       return res.render("filterresult",{issuecollection:issuecollection});
        
    }
    
}