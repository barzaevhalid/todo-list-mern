import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import fileUpload from 'express-fileupload'
import routes from "./routes/index.js";
const PORT = 5000;
const DB_URL = "mongodb+srv://xalid:xalid97@todoscluster.tiezzgm.mongodb.net/?retryWrites=true&w=majority"
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static("static"))
app.use(fileUpload({}))
app.use(routes)

const startApp = async () => {
    try {
      await  mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log("Server started on PORT " + PORT)
        })
    }catch (e) {
        console.log(e)
    }
}
startApp()
