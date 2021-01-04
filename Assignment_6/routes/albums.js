const express = require('express');
const router = express.Router();
const data = require('../data');
const albumsData = data.albums;


// route for getting all albums

router.get("/", (req, res) => {
    albumsData.getAllAlbums().then((albumsList) => {
        //  checking for null value
        if (albumsList.length === 0) {
            return "No Albums found in the record";
        }

        res.json(albumsList);
    }, (err) => {
        res.status(404).json({ error: err });
    });
});


// route for getting albums by id
router.get("/:id", (req, res) => {
    albumsData.getAlbumsById(req.params.id).then((albumsItem) => {
        res.json(albumsItem);
    }).catch((err) => {
        res.status(404).json({ error: err });
    });
});


// route for posting albums
router.post("/", (req, res) => {
    let newAlbums = req.body;

    if (!newAlbums) {
        res.status(400).json({ error: "No data provide for new albums." });
        return;
    }

    if (!newAlbums.title) {
        res.status(400).json({ error: "No title of albums provided." });
        return;
    }

    if (!newAlbums.ingredients) {
        res.status(400).json({ error: "No ingredients of albums provided." });
        return;
    }

    if (!newAlbums.steps) {
        res.status(400).json({ error: "No ingredients of steps provided." });
        return;
    }

    if (!newAlbums.comments) {
        newAlbums.comments = [];
    }

    // creating new Albums
    albumsData.createAlbums(newAlbums.title, newAlbums.ingredients, newAlbums.steps, newAlbums.comments)
        .then((newAlbumsItem) => {

            // validating Albums id
            if (!newAlbumsItem) {
                return `Something went wrong`;
            }

            // created message
            console.log("New Albums is added!");
            res.json(newAlbumsItem);

        }, (err) => {
            res.status(500).json({ error: err });
        });
});


// route for putting Albums
router.put("/:id", (req, res) => {
    let AlbumsUpdates = req.body;

    // checking for empty json
    if (Object.keys(AlbumsUpdates).length === 0) {
        res.status(400).json({ error: "Nothing to update" });
        return;
    }

    albumsData.getAlbumsById(req.params.id).then(() => {
        albumsData.updateAlbums(req.params.id, AlbumsUpdates).then((AlbumsUpdated) => {
            res.json(AlbumsUpdated);
        }, (err) => {
            res.status(500).json({ error: err });
        });
    }).catch((err) => {
        res.status(404).json({ error: err });
    });
});


// route for deleting Albums
router.delete("/:id", (req, res) => {
    albumsData.getAlbumsById(req.params.id).then(() => {
        albumsData.deleteAlbums(req.params.id).then(() => {
            res.status(200).send(`Albums of id ${req.params.id} has been deleted`);
        }, (err) => {
            res.status(500).json({ error: err });
        });
    }).catch((err) => {
        res.status(404).json({ error: err });
    });
});

module.exports = router;