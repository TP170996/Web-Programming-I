const uuid = require('uuid');
const mongodbCollection = require('../config/mongodbCollection');
const bands = mongodbCollection.bands;

module.exports = bandsControllers = {

    // return all the bands in the bandsCollection
    getAllBands: () => {
        return bands().then((bandsCollection) => {
            return bandsCollection.find({}, { _id: 1, bandName: 1 }).toArray();
        });
    },

    // return band of specific id
    getbandsById: (id) => {
        return bands().then((bandsCollection) => {
            return bandsCollection.findOne({ _id: id })
                .then((bandsItem) => {

                    if (!bandsItem) {               // checking bands id
                        return Promise.reject(`No band of id ${id} is found in records.`);
                    }

                    return bandsItem;
                });
        });
    },

    // create a new band with specified parameters
    createBands: (bandName, bandMembers,yearFormed,genres,recordLabels,albums) => {
        return bands().then((bandsCollection) => {

            // new band object
            let newBands = {
                _id: uuid.v4(),
                bandName: bandName,
                bandMembers:bandMembers,
                yearFormed:yearFormed,
                genres:genres,
                recordLabels:recordLabels,
                albums:albums
            };

            return bandsCollection.insertOne(newBands)
                .then((newBandsInformation) => {
                    return newBandsInformation.insertedId;
                })
                .then((newBandsId) => {
                    return bandsControllers.getBandsById(newBandsId);
                });
        });
    },

    // update a band with supplied parameters
    updateBands: (id, bandsUpdates) => {
        return bands().then((bandsCollection) => {

            let bandsChanges = {};                    // new empty object

            if (bandsUpdates.bandName) {                  // checking and updating bandName
                bandsChanges['bandName'] = bandsUpdates.bandName;
            }

            if (bandsUpdates.bandMembers) {            // checking and updating bandMembers
                bandsChanges['bandMembers'] = bandsUpdates.bandMembers;
            }

            if (bandsUpdates.yearFormed) {                  // checking and updating yearFormed
                bandsChanges['yearFormed'] = bandsUpdates.yearFormed;
            }

            if (bandsUpdates.genres) {               // checking and updating genres
                bandsChanges['genres'] = bandsUpdates.genres;
            }

            if (bandsUpdates.recordLabels) {               // checking and updating recorLabels
                bandsChanges['recordLabels'] = bandsUpdates.recordLabels;
            }

            if (bandsUpdates.albums) {               // checking and updating albums
                bandsChanges['albums'] = bandsUpdates.albums;
            }

            return bandsCollection.updateOne({ _id: id }, { $set: bandsChanges })
                .then(() => {
                    return bandsControllers.getBandsById(id);
                });
        });
    },

    // delete a band of specified id
    deleteBands: (id) => {
        return bands().then((bandsCollection) => {
            return bandsCollection.removeOne({ _id: id })
                .then((deletedBandsInformation) => {
                    if (deletedBandsInformation.deletedCount === 0) {               // validating delete
                        return Promise.reject(`No bands deleted having id ${id}`);
                    }
                });
        });
    }
};