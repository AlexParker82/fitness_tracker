const router = require("express").Router();
const { Workout } = require("../models");
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

router.post("/api/workouts", (req, res) => {
    const workout = new Workout(req.body);
    workout.setTotalDuration();

    db.Workout.create( { exercises: workout }).then((data) => {
        res.json(data);
        console.log(data);
    }).catch((err) => {
        res.json(err);
    })

});

router.put("/api/workouts/:id", (req, res) => {
    const query = { _id: mongojs.ObjectId(req.params.id) };
    db.Workout.updateOne(query, { $set: { exercises: [req.body] }}
    ).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

module.exports = router;

