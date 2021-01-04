const express = require('express');
const router = express.Router();
const data = require('../data');
const bandsData = data.bands;


// routes checking
router.get("/", (req, res) => {
    res.status(200).send("This is the Root Page of bands");
});

router.get("/albums", (req, res) => {
    res.sendStatus(501);
});

// route for getting all bands of specified albums id
router.get("/albums/:albumsId", (req, res) => {
    bandsData.getBandsByAlbumsId(req.params.albumsId).then((bandsList) => {
        res.json(bandsList);
    }, (err) => {
        res.status(404).json({ error: err });
    });
});


// route for getting bands with specified bands id
router.get("/:bandsId", (req, res) => {
    bandsData.getbandsById(req.params.bandsId).then((bandsItem) => {
        res.json(bandsItem);
    }, (err) => {
        res.status(404).json({ error: err });
    });
});


// route for posting bands of specified albums
router.post("/:albumsId", (req, res) => {
    let newBands = req.body;

    if (Object.keys(newBands).length === 0) {     // checking bands variable for values
        res.status(400).json({ error: "No bands provided" });
        return;
    } else if (!newBands.poster) {                // checking bands poster attribute
        res.status(400).json({ error: "No bands poster provided" });
        return;
    } else if (!newBands.Bands) {               // checking bands bands attribute
        res.status(400).json({ error: "No bands body provided" });
        return;
    }

    bandsData.createBands(req.params.albumsId, newBands).then((newBands) => {
        res.json(newBands);
    }, (err) => {
        res.status(404).json({ error: err });
    });
})


// route for putting specified bands of specific albums
router.put("/:albumsId/:bandsId", (req, res) => {
    let bandsUpdates = req.body;

    if (Object.keys(bandsUpdates).length === 0) {     // checking bands updates values
        res.status(400).json({ error: "No bands updates provided" });
        return;
    }

    bandsData.getBandsById(req.params.bandsId).then(() => {
        return bandsData.updateBands(req.params.albumsId, req.params.bandsId, bandsUpdates).then((updatedBands) => {
            console.log("bands Updated!");
            res.json(updatedBands);
        }, (err) => {
            res.status(404).json({ error: err });
        });
    }, (err) => {
        res.status(404).json({ error: err });
    });
});


// // route for deleting specified bands
router.delete("/:id", (req, res) => {
    bandsData.getBandsById(req.params.id).then(() => {
        return bandsData.deleteBands(req.params.id).then(() => {
            res.status(200).send(`bands of id ${req.params.id} has been deleted`);
        }, (err) => {
            res.status(500).json({ error: err });
        });
    }, (err) => {
        res.status(404).json({ error: err });
    });
});

module.exports = router;