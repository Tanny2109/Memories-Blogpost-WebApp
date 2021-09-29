import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes); //adding prefix /posts to go to postRoutes

// const dbURL = 'mongodb+srv://tanmaysutar:hansipansi21@cluster0.6zida.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.get('/', (req,res) => {
    res.send('Hello! To Tanmay\'s memories blog API');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.dbURL, { 
    useNewUrlParser:true, 
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`) ))
.catch((err) => console.log(err.message) );

//mongoose.set('useFindAndModify', false);