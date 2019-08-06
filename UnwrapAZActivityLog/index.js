module.exports = async function (context, eventHubIn) {
    context.log('we been called')
    //context.log('JavaScript eventhub trigger function called for message array %o',eventHubIn);
    
    context.bindings.eventHubOut = [];

    eventHubIn.forEach((message, index) => {
        context.log('JavaScript eventhub trigger function called for message array %o',message);
        recordsArray = null;

        if ('records' in message) {
            recordsArray = message.records;
        } 
        // else if ('Records' in message) {
        //     recordsArray = message.Records;
        // }
        // else if ('record' in message) {
        //     recordsArray = message.record;
        // }
        // else if ('Record' in message) {
        //     recordsArray = message.Record;
        // }
        // else
        // {
        //     recordsArray = [ message ]
        // }
        if (recordsArray != null) {
            recordsArray.forEach((x,index2) => {
                //context.log("Processed sub-message " + index2 + " of message " + index);
                context.log("processing %o", x)
                context.bindings.eventHubOut.push(x);
            });
        }
    });
    context.log("Hit the bottom about to done-out")
    context.log("current output %o", context.bindings.eventHubOut);

    context.done();
};
