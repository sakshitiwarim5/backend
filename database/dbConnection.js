import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "resturant"
    })
    .then( () =>{
        console.log("Connected to database successfull!");
    }).catch( err =>{
        console.log(`some error occured while connecting to database! ${err}`);
    });

}
