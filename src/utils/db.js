import mongoose from "mongoose";


const connect = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://jalalbmnf:Gordor1903@cluster0.iaty7mg.mongodb.net/test?retryWrites=true&w=majority")
    }catch(err){
        throw new Error("Connection failed!")
    }
}

export default connect;