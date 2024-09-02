// import { Schema,model,models } from "mongoose";
// import Email from "next-auth/providers/email";

// const UserSchema = new Schema({
//     email:{
//         type:String,
//         required:[true,'email already exists'],
//         unique:[true,'email is required'],
//     },
//     username:{
//         type:String,
//         required:[true,'username is required'],
//         match:[/^[a-zA-Z0-9_]+$/,'username is invalid'],
//     },
//     image:{
//         type:String,
        
//     },
//     }
// );

// const User = models.User || model('User',UserSchema);
// export default User;




import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    match: [/^[a-zA-Z0-9_]+$/, 'Username is invalid'],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
export default User;
