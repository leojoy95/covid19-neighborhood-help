import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Clean expired requests every 24 hours
// CHANGED TO A HTTPS FUNCTION FOR TESTING WHILE WE GET BILLING SETUP (scheduling requires billing)
// To change to proper definition remove prefix on the name, and remove the https code then uncomment the scheduler code
export const cleanRequestsHttps = functions.region('us-east4')/*.pubsub.schedule('every 24 hours').timeZone('America/New_York').onRun((context)*/.https.onRequest((req, res) => {
    console.log('ran scheduled function');
});