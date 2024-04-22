// all connection
import { issueModel } from "../schema/issueSchema.js";
import { projectModel } from "../schema/projectSchema.js";



export default class IssueTrackerModel{
 // function for saving the projectdata to the database
    static async savedata(data){
    const saveddata = projectModel(data);
       await saveddata.save();
       
    }
   // function for getting the all project that are created from the database
    static async getAll(){
        const alldata = await projectModel.find();
          return alldata;
        }
     // function for saving the data of the raised issue
       static async issueraised(id,data){

          const newissue = new issueModel({
            issuefaced:data.issuefaced,
            description:data.description,
            issueauthor:data.issueauthor,
            label:data.issue,
            projectId:id
          })
         await newissue.save()

      const just = await projectModel.findById(id);
        const obj = {
          issuefaced:data.issuefaced,
          description:data.description,
          issueauthor:data.issueauthor,
          label:data.issue
        }
        just.issueraised.push(obj);
      just.save();
        
       }

       // function for geeting the filter result from the database
       static async filterResult(data){
        const {issueone,issuetwo,authorfilter,titleanddesc} = data;
        
         const combines = await issueModel.find(
         { $or:[
          {label:issueone},
          {label:issuetwo},
          {issueauthor:authorfilter},
          {description:titleanddesc},
          {issuefaced:titleanddesc}
          ]
        }
        )
        return combines;
       
     }

}
 