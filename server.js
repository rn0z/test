const express = require("express")
const cors = require("cors");

const app = express();


app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({msg: "test test test!!!"})
})

var router = require("express").Router();
var control = require("./controller.js")

router.post("/", control.create);

router.get("/", control.findAll);

router.get("/published", control.findAllPublished);

router.get("/:id", control.findOne);

router.put("/:id", control.update);

router.delete("/:id", control.delete);

router.delete("/", control.deleteAll);

app.use("/api/", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

