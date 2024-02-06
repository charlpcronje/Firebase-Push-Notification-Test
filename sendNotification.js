require('dotenv').config(); // This line loads the environment variables from the .env file
const admin = require('firebase-admin');

// Use the environment variable for the service account key path
const serviceAccount = require(process.env.FIREBASE_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Retrieve the FCM token from the first command-line argument
const token = process.argv[2]; // Note: process.argv[0] is node, process.argv[1] is the script path

if (!token) {
  console.log('Please provide an FCM token as the first argument.');
  process.exit(1); // Exit the script if no token is provided
}

const message = {
  notification: {
    title: 'Hello, World!',
    body: 'This is a test notification',
  },
  token: token,
};

admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
    console.log('Error code:', error.code);
  });
