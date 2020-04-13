'use strict';
const Alexa = require('ask-sdk-core');
const { MarginCallsIntentHandler } = require('./intents/marginCalls');
const {    
    LaunchRequestHandler, 
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    ErrorHandler
} = require('./intents/default');

exports.handler = Alexa.SkillBuilders.custom()
     .addRequestHandlers(LaunchRequestHandler,
                         MarginCallsIntentHandler,
                         HelpIntentHandler,
                         CancelAndStopIntentHandler,
                         SessionEndedRequestHandler)
     .lambda();