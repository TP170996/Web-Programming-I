const uuid = require('uuid');
const mongodbCollection = require('../config/mongodbCollection');
const albums = mongodbCollection.albums;
const bands=mongodbCollection.bands

module.exports = albumsController = {

    // return all albums in a specified albums
    getalbumsByBandsId: (bandsId) => {
        return bands().then((bandsCollection) => {
            return bandsCollection.findOne({ _id: bandsId })
                .then((bandsDetails) => {

                    if (!bandsDetails) {                                   // checking albums
                        return Promise.reject(`No band of id ${bandsId} found in records`);
                    } else if (bandsDetails.albums.length === 0) {       // checking albums
                        return Promise.reject(`No albums are in the band of id ${bandsId}`);
                    }

                    // adding desired attributes in each comment
                    let albums = bandDetails.albums;
                    let albumsView = [];
                    for (var loc = 0, n = albums.length; loc < n; loc++) {
                        albumsView[loc] = {
                            "_id": albums[loc]._id,
                            "title":albumtitle,
                            "bandId": bandsId,
                            "bandName": bandsDetails.bandName,
                            "songs": songs[loc].songs
                        }

                    return albumsView;
                    });
        });
    },

    // return comment of specific id
    getalbumsById: (id) => {
        return albums().then((albumsCollection) => {
            return albumsCollection.findOne({ "albums._id": id }, { _id: 1, title: 1, albums: 1 })
                .then((albumsItem) => {

                    if (!albumsItem) {                       // checking comment 
                        return Promise.reject(`No comment of id ${id} found in records.`);
                    }

                    // finding comment location in comment array
                    var loc = 0;
                    let albums = albumsItem.albums;
                    while (loc < albums.length) {
                        if (albums[loc]._id === id.toString()) {
                            break;
                        }

                        loc++;
                    }

                    // creating json variable
                    let commentView = {
                        "_id": id,
                        "albumsId": albumsItem._id,
                        "albumsTitle": albumsItem.title,
                        "poster": albums[loc].poster,
                        "comment": albums[loc].comment
                    };

                    return commentView;
                });
        });
    },


    // create a new albums with specified parameters
    createComment: (albumsId, newComment) => {
        return albums().then((albumsCollection) => {
            return albumsCollection.findOne({ _id: albumsId }).then((albumsItem) => {

                if (!albumsItem) {                              // checking albums
                    return Promise.reject(`No albums of id ${albumsId} found in records.`);
                }

                // new comment object
                let addComment = {
                    _id: uuid.v4(),
                };

                if (newComment.poster)
                    addComment['poster'] = newComment.poster;

                if (newComment.comment)
                    addComment['comment'] = newComment.comment;

                return albumsCollection.update({ _id: albumsId }, { $push: { albums: addComment } }).then(() => {
                    return addComment;
                });
            });
        });
    },


    // update a comment of specified albums
    updateComment: (albumsId, commentId, commentUpdates) => {
        return albums().then((albumsCollection) => {
            return albumsCollection.findOne({ _id: albumsId }).then((albumsItem) => {
                if (!albumsItem) {                           // checking albums id
                    return Promise.reject(`No albums of id ${albumsId} is found in records.`);
                }

                // updating albums attributes
                if (commentUpdates.poster) {
                    albumsCollection.update({ "albums._id": commentId }, { $set: { "albums.$.poster": commentUpdates.poster } });
                }

                if (commentUpdates.comment) {
                    albumsCollection.update({ "albums._id": commentId }, { $set: { "albums.$.comment": commentUpdates.comment } });
                }

                var updatedComment = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(albumsController.getCommentById(commentId));
                    }, 300);
                });

                return updatedComment;
            });
        });
    },


    // delete a comment of specified id
    deleteComment: (id) => {
        return albums().then((albumsCollection) => {
            return albumsCollection.update({ "albums._id": id }, { $pull: { albums: { _id: id } } }).then((deletedCommentInformation) => {
                if (deletedCommentInformation.deletedCount === 0) {
                    return res.status(500).json({ error: `Comment having id ${id} could not be deleted` });
                }
            });
        });
    }
};