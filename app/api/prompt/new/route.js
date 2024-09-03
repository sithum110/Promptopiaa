import { connectToDB } from "@utils/database";
import Prompt from "@model/prompt";
export const POST = async (req, res) => {
    const {userId, prompt, tag}=await ewq.json();

    try{
        await connectToDB();

    }
    catch(error){

    }
}