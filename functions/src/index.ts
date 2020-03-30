import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// Clean expired requests every 24 hours
// CHANGED TO A HTTPS FUNCTION FOR TESTING WHILE WE GET BILLING SETUP (scheduling requires billing)
// To change to proper definition remove prefix on the name, and remove the https code then uncomment the scheduler code
export const cleanRequestsHttps = functions.region("us-east4")/*.pubsub.schedule('every 24 hours').timeZone('America/New_York').onRun((context)*/.https.onRequest(async (req, res) => {
    // Create date object that represents today
    const expiredCutoffDate = new Date();
    // Update the date field to reflect 3 days ago
    expiredCutoffDate.setDate(expiredCutoffDate.getDate() - 3);
    // Convert the date object to a firestore Timestamp
    const expiredCutoff = admin.firestore.Timestamp.fromDate(expiredCutoffDate);
    // Use the expired cutoff Timestamp to get all expired requests
    const expired = admin.firestore().collection("requests").where("time_created", "<=", expiredCutoff);
    // Get the snapshot for the expired items query
    const snapshot = await expired.get();
    // Iterate over each expired request and delete the document
    snapshot.forEach(doc => doc.ref.delete());
    // Log the number of expired requests deleted
    console.log(`${snapshot.size} expired requests deleted`);
    // ONLY NEEDED FOR HTTPS FUNCTION, REMOVE WHEN CHANGED TO SCHEDULED FUNCTION
    res.send(`${snapshot.size} expired documents deleted`); // Return the number of documents deleted to the caller
});