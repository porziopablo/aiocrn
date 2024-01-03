# Art Institute of Chicago React Native Challenge

<img src="https://github.com/porziopablo/aiocrn/assets/54630895/cdad1b7d-90aa-426f-9e54-39d6302f9bb6" width="192">

This is a React Native challenge that I had to develop for a recruiting process (`NOT FOR THE INSTITUTE`). It's a mobile application that allows an user to navigate the events exposed by the [Art Institute of Chicago API](https://api.artic.edu/docs/#introduction). The user should be able to see a thumbnail and a small description of each event in the main screen of the app. When clicking on a thumbnail the user must be sent to a detailed screen of the event containing a better quality image and more detailed information about the piece, the author, and any other data that might be relevant for the end user. The user should be able to save some favorite events, and should be able to explore them even after the application is completely closed and reopened.

### Notes
 - The app should use animated transitions and any other cool feature that will show up how experienced the candidate is in mobile development.
 - Code quality, clarity and development best practices are evaluated.
 - The app should be built using React Native CLI and Typescript.
 - A preferred platform should be selected (iOS or Android) to create a Native Module using the Bridge or the Fabric Native Components to add the events schedules into the user calendar, without using a React Native package.
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
 - React Native Bridge to save events to iOS calendar. 
 
The environment that was used during development consisted of:
 - Node v20.10.0 (npm v10.2.3)
 - Java 19.0.1 (for running on and building for Android)
 - CocoaPods 1.11.2 (for running and bulding for iOS)

## Screenshots

### Event list with infinite scrolling
<img src="https://github.com/porziopablo/aiocrn/assets/54630895/0deeb520-b796-480b-8472-ce15a1550956" width="192">

### Event detail
<img src="https://github.com/porziopablo/aiocrn/assets/54630895/e03a1265-8368-4583-92f7-36104874c3b6" width="192">

### Save event to iOS calendar
https://github.com/porziopablo/aiocrn/assets/54630895/6150379c-78ff-457c-b26f-09489a22b512

### Save event in favorites
https://github.com/porziopablo/aiocrn/assets/54630895/2f70e647-37eb-4aeb-924d-d852b5f8b9bf

## Notes
Since this was challenge and not a real app, some things should be considered:
- The app connects to a real API only to get events, but there is no back-end where users can authenticate and have their data stored. The selected app language and the events marked as favorites are persisted thanks to redux-persist, just to show how it would work. The main difference would be that instead of persisting a Redux slice in the device's storage, there would be one or more repositories made with RTK Query that would communicate with that API.
- The project includes the logic to request user's permissions to receive push notifications, get the device's token that would be sent to the back-end in order to start receiving them and to set listeners for both foreground and background notifications. However, the project does not include the config files related to APN or FCM that would actually let the app receive real notifications.

## Run the challenge

### Step 1: Clone the repo

```bash
git clone git@github.com:porziopablo/aiocrn.git && cd aiocrn
```

### Step 2: Install Node dependencies

```bash
npm i
```
### Step 3: Create .env file

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
