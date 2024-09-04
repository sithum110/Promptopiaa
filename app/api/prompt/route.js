import { connectToDB } from "@utils/database";
import Prompt from "@model/prompt";
import { GET } from "../auth/[...nextauth]/route";

export const GET =async (Request) => {
    try{
        await connectToDB();

        const prompts = await Prompt.find({}).populate ('creator');

        return new Response(JSON.stringify(prompts),{
            status:200
        })

    }
    catch (error){
        return new Response("failed to fetch prompts",{
            status:400})

    }
}