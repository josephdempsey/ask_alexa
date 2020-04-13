const MarginCallsIntentHandler = {
    canHandle(handlerInput) {
        debugger
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MarginCallsIntent';
    },
    async handle(handlerInput) {
        let speechText = null;
        try {
          const count = await query('select count(*) as count from <TABLE_NAME> where is_archived=false and state="s" and client_sid=2;');
  
          speechText = `You have ${count[0].count} margin calls that require your attention today`;
        } catch (e) {
          console.log(e);
        } finally {
          connection.end();
        }
    
        return handlerInput.responseBuilder
          .speak(speechText)
          .withSimpleCard('Margin Calls', speechText)
          .getResponse();
      }
};

module.exports = { MarginCallsIntentHandler }