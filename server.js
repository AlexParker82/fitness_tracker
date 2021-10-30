const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://alex_parker82:saltydog82@cluster0.pvutq.mongodb.net/workout?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.use(require("./routes/api"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});