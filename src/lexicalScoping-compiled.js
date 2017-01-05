"use strict";

/**
 * Created by mayujain on 1/4/17.
 */

var regularDelivery = {
    name: "John",

    handleMessage: function handleMessage(msg, handler) {
        handler(msg);
    },

    receiveMessage: function receiveMessage() {

        this.handleMessage("Hello ", function (message) {
            console.log(message + this.name);
        });
    }
};

regularDelivery.receiveMessage();

//# sourceMappingURL=lexicalScoping-compiled.js.map