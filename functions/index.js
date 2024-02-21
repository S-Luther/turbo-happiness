/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const util = require("./util.js");
const { randomUUID } = require('crypto');
const admin = require('firebase-admin');


const firebaseConfig = {
  apiKey: "AIzaSyBigw7mJf0KYy4OBJv7Y6QI8nGDuDIXRbY",
  authDomain: "cs-322-0.firebaseapp.com",
  projectId: "cs-322-0",
  storageBucket: "cs-322-0.appspot.com",
  messagingSenderId: "416702487992",
  appId: "1:416702487992:web:45bb3fdfc16dc674cd434d",
  measurementId: "G-3NSQJDVRRL"
};

admin.initializeApp(firebaseConfig);

const db = admin.firestore();

const docRef = db.collection('Facts').doc('Cat');



const functions = require("firebase-functions");
const axios = require('axios');

const params = {}

exports.pubsub = functions
                  .runWith({timeoutSeconds: 60, memory: "1GB"})
                  .pubsub
                  .schedule('every 1 minutes')
                  .onRun(async context => {

                    await axios.get('https://cat-fact.herokuapp.com/facts', {params})
                    .then(response => {
                      const apiResponse = response.data;
                      docRef.set({
                        current: apiResponse,
                      })
                    }).catch(error => {
                      console.log(error);
                    });
                  });











exports.helloWorld = onRequest({timeoutSeconds: 15, cors: true, maxInstances: 10}, (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  docRef.set({
    title: 'testSite',
    updateTime: new Date().toISOString()
  })
  response.send("Hello World!");
});




exports.flashBriefing = onRequest({timeoutSeconds: 15, cors: true, maxInstances: 10}, async (request, response) => {
  logger.info("Flash Briefing Requested!", {structuredData: true});
  response.set('Content-Type', 'application/json').json([
    {
        "uid": randomUUID(),
        "updateDate": new Date().toISOString(),
        "titleText": "What kind of test will I do today?",
        "mainText": "The quick brown fox jumped over the lazy dog's back 1234567890.",
        "streamUrl": null,
        "redirectionUrl": "https://example.com"
    }
  ]);
});