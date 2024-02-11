const dotenv = require('dotenv');
dotenv.config();
var config = {};
const cameras = process.env.cameras.split(",");

config.listenPort = 8500;
config.cameras = cameras;
config.frigateBaseURL = process.env.frigateBaseURL;
config.setLapseSeconds = process.env.setLapseSeconds;
config.imageSaveDir = "images/";
config.videoSaveDir = "videos/";
config.httpOrHttps = "http";
config.timeLapseDir = "time-lapse-vids";
config.timeLapseURL = process.env.timeLapseURL;
config.homeAssistantURL = process.env.homeAssistantURL;
config.homeAssistantToken = process.env.homeAssistantToken;
config.postToHomeAssistant = process.env.postToHomeAssistant;

module.exports = config;
