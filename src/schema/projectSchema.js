// connection
import mongoose from 'mongoose';
// projectSchema
const projectSchema = new mongoose.Schema({
    
    projectName:{type:String,required:true},
    description:{type:String,required:true},
    authorname:{type:String,required:true},
    issueraised:{type:Array}
    
  
})

const projectModel = mongoose.model('Project',projectSchema);
export {projectModel}