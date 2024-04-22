// connection 
import mongoose from 'mongoose';
// issueschema for creating the issue in the project
const issueSchema = new mongoose.Schema({
    
    issuefaced:{type:String,required:true},
    description:{type:String,required:true},
    issueauthor:{type:String,required:true},
    label:{type:String,required:true},
    projectId:{type:mongoose.Schema.Types.ObjectId}
})

const issueModel = mongoose.model('Issue',issueSchema);
export {issueModel}
