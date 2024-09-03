import mongoose, { Schema } from "mongoose";

const PromptSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',

    },
    prompt:{
        type:String,
        required:[true,'prompt is required'],
    },
    tag:{
        type:String,
        required:[ true,'Tag is required.'],
    }
})

const Prompt = models.Prompt ||  model('prompt',PromptSchema);

export default Prompt;