const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT||3000;


// console.log(process.env.DB_USER) 
// console.log(process.env.DB_PASSWORD) 

//prrject name: Job portal Site
//Name; mern-job-portal
//user:job-admin
//pass:job-admin

//Daabase
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mern-job-portal.8rrtpe2.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
 
     // Creat Database
     const db=client.db("marnjobportal")
     const jobsCollection=db.collection("demojobs");



     
    // post a jobs 
    app.post("/post-job", async(req, res)=>{
      const body=req.body;
      body.createAt=new Date();
      // console.log(body);
      const result=await jobsCollection.insertOne(body);
      if(result.insertedId){
        return res.status(200).send(result)
      }
      else{
        return res.status(404).send({
          message: "Can not insert ! try again later ",
          status:false
          
        })
      }
    })

    // get all jobs
    app.get("/all-jobs", async(req, res)=>{
       const jobs=await jobsCollection.find({}).toArray()
        res.send(jobs);
    })
    //get single job using id
    app.get("/all-jobs/:id", async(req, res)=>{
       const id=req.params.id;
       const job= await jobsCollection.findOne({
        _id:new ObjectId(id)
       })
       res.send(job);
    })


    // get jobs by email
    app.get("/myjobs/:email", async(req, res)=>{
      const jobs=await jobsCollection.find({postedBy:req.params.email}).toArray();
      res.send(jobs);
      console.log(req.params.email);
    })

  //delete a jobs
 app.delete("/job/:id", async(req, res)=>{
    const id=req.params.id;
    const filter={_id: new ObjectId(id)}
    const result=await jobsCollection.deleteOne(filter);
    res.send(result);
 })

//Update Jobs
app.patch("/update-job/:id", async(req, res)=>{
  const id=req.params.id;
  const jobDate=req.body;
  const filter={_id:new ObjectId(id)};
  const options={ upsert :true };
  const updateDoc={
    $set:{
      ...jobDate
    },
  };
  const result= await jobsCollection.updateOne(filter, updateDoc, options);

})






    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


//medilware
app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello Devlopers !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})