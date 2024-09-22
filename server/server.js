const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors({origin: "*"}))

app.get("/hello/:id", function(req, res){
    console.log(`Handled by server ${process.env.SERVER_ID}`);
    res.json({
        success: true,
        mesage: "Hey, "+ req.params.id + "!" + " Are you something?"
    })
})

app.listen(9090, () => console.log("Server is running on port 9090"))