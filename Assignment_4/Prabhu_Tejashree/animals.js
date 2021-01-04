const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals;

module.exports = {
  // This is a fun new syntax that was brought forth in ES6, where we can define
  // methods on an object with this shorthand!
  async get(id) {
    
    if (!id) throw "You must provide an id to search for";

    const animalCollection = await animals();
    const anim = await animalCollection.findOne({ "_id": id });
    if (anim === null) throw "No dog with that id";

    return anim;
   
  },

  async getAll() {
    const animalCollection = await animals();

    const animal = await animalCollection.find({}).toArray();

    return animal;
  },

  async create(name, animalType) {
    if (!name) throw "You must provide a name for your dog";

    if (!animalType)
      throw "You must provide an array of breeds";

    if (animalType.length === 0) throw "You must provide at least one breed.";
    const animalCollection = await animals();

    let newanimal = {
      name: name,
      animalType: animalType
    };

    const insertInfo = await animalCollection.insertOne(newanimal);
    if (insertInfo.insertedCount === 0) throw "Could not add dog";

    const newId = insertInfo.insertedId;

    const animal = await this.get(newId);
    return animal;
  },
  async remove(name) {
    if (!name) throw "You must provide an id to search for";

    const animalCollection = await animals();
    const deletionInfo = await animalCollection.removeOne({ "name":name });
    

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete dog with id of ${name}`;
    }
  },
  async rename(name,newName) {
  if (!name) throw "You must provide an id to search for";

    //if (!name) throw "You must provide a name for your dog";

    //if (!breeds || !Array.isArray(breeds))
      //throw "You must provide an array of breeds";

    //if (breeds.length === 0) throw "You must provide at least one breed.";

    const animalCollection = await animals();
    const rename = {
      name: newName    
      
    };

    const updateInfo = await animalCollection.replaceOne({ "name": name }, rename);
    if (updateInfo.modifiedCount === 0) {
      throw "could not update dog successfully";
    }

    return await this.get(name);
  }
};