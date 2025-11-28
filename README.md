# Expo Monorepo

A Yarn workspaces monorepo containing shared components and an Expo demo application. Showing an error during metro compilation.

## The issue

When trying to run the app, Metro bundler fails with the following error:

```
ExceptionsManager should be set up after React DevTools to avoid console.error arguments mutation
 ERROR  [TypeError: property is not writable]
```

This happens under the following conditions:

- We have in the root `node_modules` React v18 installed. That is because some other packages in the monorepo require it. (In this demo case we fake it by installing React v18 in the root).
- Yarn now cannot hoist React v19.x.x, Expo 54.x.x and React Native 0.81.x to the root `node_modules`.
- Yarn now installs React v19.x.x, Expo 54.x.x and React Native 0.81.x inside each workspace that requires it (in this case `apps/demo` and `components/core`).
- When Metro is now trying to bundle the app, it bundles multiple instances of React v19, Expo 54 and React Native 0.81.x, causing the error above.

## Structure

```
expo-monorepo-failure/
├── components/
│   └── core/              # Shared React Native components
│       ├── index.js       # Exports: Button, Card, CoreImage
│       ├── package.json
        ├── node_modules   # Packages for the demo app. Also contains expo, react-native and react.
│       └── README.md
├── apps/
│   └── demo/              # Expo application
│       ├── App.js
│       ├── package.json
│       ├── node_modules   # Packages for the demo app. Also contains expo, react-native and react.
│       └── ...
├── package.json           # Root package with workspaces config
├── node_modules           # Root/shared packages - We force install React v18 here.
└── README.md
```

## Installation

```bash
# Install dependencies
yarn install
```

## Running the Demo App

```bash
cd apps/demo

# Prebuild the specific platforms (iOS/Android), install and start on a sim/emu.
yarn ios
yarn android

# Only start a clean Metro bundler
yarn start
```
