const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
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


  function getUser(email) {
    return userCollection.findOne({ email: email });
  }
  
  function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }
  
  async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
  }

  async function addFortune(fortune) {
    const result = fortuneCollection.insertOne(fortune);
    return result;
  }
  

  function getNewFortune() {
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
  
  module.exports = { addFortune, getFortunes, getNewFortune, getUser, getUserByToken, createUser, };
  