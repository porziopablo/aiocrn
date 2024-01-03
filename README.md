# Art Institute of Chicago React Native Challenge

<img src="https://github.com/porziopablo/aiocrn/assets/54630895/cdad1b7d-90aa-426f-9e54-39d6302f9bb6" width="192">

This is a React Native challenge that I had to develop for a recruiting process. It's a mobile application that allows an user to navigate the events exposed by the [Art Institute of Chicago API](https://api.artic.edu/docs/#introduction). The user should be able to see a thumbnail and a small description of each event in the main screen of the app. When clicking on a thumbnail the user must be sent to a detailed screen of the event containing a better quality image and more detailed information about the piece, the author, and any other data that might be relevant for the end user. The user should be able to save some favorite events, and should be able to explore them even after the application is completely closed and reopened.

### Notes
 - The app should use animated transitions and any other cool feature that will show up how experienced you are in mobile development.
 - Code quality, clarity and development best practices are evaluated.
 - The app should be built using React Native CLI and Typescript.
 - Select you preferred platform (iOS or Android) and create your own Native Module using the Bridge or the Fabric Native Components to add the events schedules into the user calendar, without using a React Native package.
 - Additional bonus if some kind of push notifications are implemented.

## Tech Stack

The app was built using these tools among others:
 - React Native 0.73.1
 - React 18.2.0
 - Typescript 5.0.4
 - [Gluestack](https://gluestack.io/ui/docs/overview/introduction), for UI components.
 - [React Native Notifications](https://github.com/wix/react-native-notifications), for push notifications.
 - [React Navigation](https://reactnavigation.org/docs/getting-started/), for navigation inside the app.
 - [Redux Toolkit](https://redux.js.org/introduction/why-rtk-is-redux-today), [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) and [redux-persist](https://github.com/rt2zz/redux-persist) to manage state and requests to the API.
 - [react-i18next](https://react.i18next.com/) to manage internationalization.
 
The environment that was used during development consisted of:
 - Node v20.10.0 (npm v10.2.3)
 - Java 19.0.1 (for running on and building for Android)
 - CocoaPods 1.11.2 (for running and bulding for iOS)

## Run the challenge

### Step 1: Clone the repo

```bash
git clone git@github.com:porziopablo/aiocrn.git && cd aiocrn
```

### Step 2: Install Node dependencies

```bash
npm i
```
### Step 3: Create your own .env file

```bash
cp .env.example .env
```

### Step 4: Run the app

#### For Android

```bash
npm run android
```

#### For iOS

```bash
npm run ios
```
