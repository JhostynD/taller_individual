import express from "express";
import animal from "./routers/User.js";
import registro from "./controller/taks.Controller.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/animal", animal); 
app.use("/registro", registro)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`http://127.0.0.1:${PORT}`);
    console.log(`http://[::]:${PORT}`);
});
