/**
 * Created by mayujain on 1/4/17.
 */

var regularDelivery = {
    name: "John",

    handleMessage: function (msg, handler) {
        handler(msg);
    },

    receiveMessage: function () {

        var that = this;

        this.handleMessage("Hello ", function (message) {
            console.log("The 'this' inside this function has its own scope...!!")
            console.log(message + that.name);
        })
    }
}

var smartDelivery = {
    name: "Jonny",

    handleMessage: function (msg, handler) {
        handler(msg);
    },

    receiveMessage: function (greeting) {

        this.handleMessage(greeting, message => {
            console.log("The 'this' inside this function has lexical scope!!");
            console.log(message + this.name);
        })
    }
}

regularDelivery.receiveMessage();

smartDelivery.receiveMessage("Awesome ");