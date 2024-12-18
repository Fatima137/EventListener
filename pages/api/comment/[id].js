import { MongoClient } from "mongodb";

export default async function handler(req,res)
{
    if(req.method==="POST")
    {
        const {name, email, text} = req.body.commentObj;
        const newComment={
            name,
            email,
            text
        }
        const client=await MongoClient.connect("mongodb+srv://hira:123456.@cluster0.k927h.mongodb.net/commentsList?retryWrites=true&w=majority&appName=Cluster0")
        const db=client.db();
        const result = await db.collection("comm").insertOne(newComment)
        console.log(result)
        newComment.id=result.insertedId
        res.status(200).json({message:"added new comment",comment:newComment});
    }
    else {
        const client=await MongoClient.connect("mongodb+srv://hira:123456.@cluster0.k927h.mongodb.net/commentsList?retryWrites=true&w=majority&appName=Cluster0")
        const db=client.db();
        const result = await db.collection("comm").find().toArray();
       res.status(200).json({arr:result})
    }
}