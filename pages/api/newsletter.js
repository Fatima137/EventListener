import { MongoClient } from "mongodb";

async function handler(req,res){
    if(req.method==='POST')
    {
        const email=req.body.email;
        console.log(email)

        const client=await MongoClient.connect("mongodb+srv://hira:123456.@cluster0.k927h.mongodb.net/newsletter?retryWrites=true&w=majority&appName=Cluster0")
        const db=client.db();
        await db.collection("emails").insertOne({userEmail:email})

        res.status(201).json({message:'Signed Up!'})
    }
}

export default handler;