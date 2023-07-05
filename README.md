# Quirkify

Quirkify is a simple social media app, where users can create profiles, post updates, comment on other posts, and chat with friends.

## Features

- User authentication with email and password
- Profile creation and editing
- Post creation, editing, and deletion
- Comment creation, editing, and deletion
- Real-time chat with friends
- Responsive design for mobile devices

## Technologies

- React: A JavaScript library for building user interfaces
- Firebase: A platform for developing web and mobile applications
- Material UI: A popular React UI framework
- React Router: A collection of navigational components for React
- React Hook Form: A library for managing forms in React
- Socket.IO: A library for enabling real-time communication

## Installation

To run this project locally, you need to have Node.js and npm installed on your machine.

1. Clone this repository: `git clone https://github.com/your-username/quirkify.git`
2. Navigate to the project directory: `cd quirkify`
3. Install the dependencies: `npm install`
4. Create a Firebase project and enable authentication, Firestore, and Realtime Database services. Follow the instructions [here](https://firebase.google.com/docs/web/setup).
5. Create a `.env` file in the root directory and add your Firebase configuration variables. You can find them in the Firebase console under Project settings > General > Your apps > Firebase SDK snippet > Config. The file should look like this:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

6. Start the development server: `yarn dev`
7. Open http://localhost:5173 to view the app in the browser.

## Usage

To use the app, you need to sign up with an email and password. 

After signing in, you can create your profile by adding a photo, a bio, and some interests. You can also edit or delete your profile at any time.

You can create posts by clicking on the "What's on your mind?" box on the home page. You can also edit or delete your own posts.

You can comment on other posts by clicking on the comment icon below each post. You can also edit or delete your own comments.

You can chat with other users by clicking on the chat icon on the top right corner of the app. You can select a user from the list or search for them by name. You can also see who is online or offline.

You can sign out from the app by clicking on the menu icon on the top right corner of the app and selecting "Sign out".

## License

This project is licensed under the MIT License - see the LICENSE file for details.