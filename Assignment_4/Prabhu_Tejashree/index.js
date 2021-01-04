const animals = require("./animals");

const connection = require("./mongoConnection");

const main = async () => {
    
  const sasha = await animals.create("sasha", "dog");  
  console.log(sasha);

  const lucy = await animals.create("lucy", "dog");  
  console.log(lucy);

  const duke = await animals.create("duke", "walrus");  
  console.log(duke);
  
  const sashita = await animals.rename("sasha", "shashita");  
  console.log(sashita);

  const sas = await animals.remove("sasha");  
  console.log(sas);
 
  
  const db = await connection();
  await db.serverConfig.close();

  console.log("Done!");
};

main().catch(error => {
  console.log(error);
});