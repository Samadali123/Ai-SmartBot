const OpenAI = require("openai");
const express = require('express');
const logger = require("morgan")
require("dotenv").config();

// Express server configuration
const app = express();
const port = process.env.PORT || 3000;

// json for read body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// expose static files public
app.use(express.static("public"));


// logging requests info
app.use(logger("tiny"))


// make a connection with OpenAI
const openai = new OpenAI({
    apiKey : process.env.OPENAI_API_KEY
});
// const openai = new OpenAI();


const prompt = "You are a Coach. Please respond to the user's questions in a supportive and guiding manner.";
app.post("/chat/Api", async(req, res)=>{
    try {
        const {input} = req.body;
        if( ! input) return res.status(404).send({message : "Please provide a prompt.."})
            
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content:prompt},
                {
                    role: "user",
                    content: input,
                },
            ],
        });
        
        console.log(completion.choices[0].message);
        res.json({message : completion.choices[0].message})
    } catch (error) {
         console.error(error)
    }
})




app.listen(port, ()=>{
      console.info(`Server started at ${port} successfully`);
})
