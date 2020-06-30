// All reference errors INSIDE preload will print in the console as 'unable to load preload script'

// import all file system modules
// don't import electron unless you need it INSIDE this file. main can use electron module without preload.

const path = require("path");
const url = require("url");
const fs = require("fs");
const http2 = require("http2");
const grpc = require("@grpc/grpc-js");
const electron = require("electron");
const { icpRenderer, remote, app, Menu } = require("electron");

const { session, dialog } = require("electron").remote;

// const {
//   TouchBar,
//   ipcMain,
//   dialog,
//   ipcRenderer,
//   contextBridge,
// } = require("electron");
const protoLoader = require("@grpc/proto-loader");
// const {
//   default: installExtension,
//   REACT_DEVELOPER_TOOLS,
//   REDUX_DEVTOOLS,
// } = require("electron-devtools-installer");
// Import Auto-Updater- Swell will update itself
// const { autoUpdater } = require("electron-updater");
// TouchBarButtons are our nav buttons(ex: Select All, Deselect All, Open Selected, Close Selected, Clear All)
// const { TouchBarButton, TouchBarSpacer } = TouchBar;

const log = require("electron-log");

// basic http cookie parser
const cookie = require("cookie");
// node-fetch for the fetch request
const fetch2 = require("node-fetch");

// GraphQL imports
const { ApolloClient } = require("apollo-client");
const gql = require("graphql-tag");
const { InMemoryCache } = require("apollo-cache-inmemory");
const { createHttpLink } = require("apollo-link-http");
const { ApolloLink } = require("apollo-link");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object

// contextBridge.exposeInMainWorld("api", {
//   send: (channel, data) => {
//     // whitelist channels
//     const validChannels = ["toMain"];
//     if (validChannels.includes(channel)) {
//       ipcRenderer.send(channel, data);
//     }
//   },
//   receive: (channel, func) => {
//     const validChannels = ["fromMain"];
//     if (validChannels.includes(channel)) {
//       // Deliberately strip event as it includes `sender`
//       ipcRenderer.on(channel, (event, ...args) => func(...args));
//     }
//   },
// });
