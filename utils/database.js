// import mongoose from "mongoose";

// let isConnected = false;

// export const connectToDB = async () => {
//     mongoose.set('strictQuery',true);

//     if(isConnected){
//         console.log('mongoDB is already connected');
//         return;
        
//     }
//     try {
//         await mongoose.connected(process.env.MONGODB_URI,{
//             dbName:"share_prompt",
//             useNewUrlparser:true,
//             useUnifiedTopology:true,
//         })
//         isConnected = true;
//         console.log("mongoDB is connected");
//     } catch (error) {
//         console.log('nottttttt connected to mongodddddb');
//     }
// }





import mongoose from "mongoose";


let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('mongoDB is already connected');
        return;
    }

    try {
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("mongoDB is connected");
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
};

