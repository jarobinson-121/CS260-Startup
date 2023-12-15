const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const fortuneCollection = db.collection('fortunes');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  async function addFortune(fortune) {
    const result = await fortuneCollection.insertOne(fortune);
    return result;
  }
  

  function getNewFortune(data) {
    const forturl = 'https://fortune-cookie4.p.rapidapi.com/slack';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': config.apiKey,
            'X-RapidAPI-Host': config.apiEndpoint
        }
    };
    
    fetch(forturl, options)
        .then((response) => response.json())
        .then((data) => {
            return data;
            console.log(data);
        });
}

  function getFortunes() {
    const query = { score: { $gt: 0, $lt: 900 } };
    const options = {
      sort: { score: -1 },
      limit: 10,
    };
    const cursor = fortuneCollection.find(query, options);
    return cursor.toArray();
  }
  
  module.exports = { addFortune, getFortunes, getNewFortune };
  