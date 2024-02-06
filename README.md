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
git clone https://your-repository-url.git
cd firebase-push-notification
```

2. **Install Dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the root of your project directory and add the following line:

```env
FIREBASE_SERVICE_ACCOUNT_KEY_PATH=./path/to/your/service-account-file.json
```

Replace `./path/to/your/service-account-file.json` with the actual path to your Firebase service account key file.

4. **Run the Application**

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

* **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourgithub)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Acknowledgments

* Firebase documentation
* Node.js community
```

Adjust the content as necessary to fit the details and specifics of your project, such as updating the repository URL, adding any additional setup instructions, and personalizing the author section.