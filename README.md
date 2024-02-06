# Firebase Push Notification Token Tester

This Node.js application demonstrates how to send push notifications to a device using Firebase Cloud Messaging (FCM) with the Firebase Admin SDK. It allows you to specify the FCM token as a command-line argument to send a notification directly to a device.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js installed on your local machine
- Firebase project with Firebase Cloud Messaging enabled
- Firebase service account key file

### Installing

1. **Clone the Repository**

```bash
git clone https://github.com/charlpcronje/Firebase-Push-Notification-Test.git
cd Firebase-Push-Notification-Test
```

2. **Install Dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the root of your project directory and add the following line:

```env
FIREBASE_CREDENTIALS=./path/to/your/service-account.json
```

Replace `./path/to/your/service-account.json` with the actual path to your Firebase service account key file.

1. **Run the Application**

To send a notification, run the script with the FCM token as an argument:

```bash
node sendNotification.js 'your_fcm_token_here'
```

Replace `'your_fcm_token_here'` with the FCM token of the device you want to send a notification to.

## Built With

* [Node.js](https://nodejs.org/) - The JavaScript runtime used
* [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) - Firebase service for server-side operations

## Handling Errors

The application handles common errors, such as invalid FCM tokens. Make sure to check the console output for error messages and follow the recommended actions.

## Authors

* **Charl Cronje** - *Initial work* - [charlpcronje](https://github.com/charlpcronje)

