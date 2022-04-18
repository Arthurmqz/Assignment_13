"use strict";
var greetingTime;
(function (greetingTime) {
    greetingTime["morning"] = "Good Morning";
    greetingTime["afternoon"] = "Good Afternoon";
    greetingTime["evening"] = "Good Evening";
})(greetingTime || (greetingTime = {}));
const customerGreeting = (time_of_day, customer) => {
    const loyal = 'We appreciate you for being a loyal customer!';
    const notLoyal = 'How about we make a deal. If you join our loyalty program today, you can get a free cup of coffee!';
    let greeting = `${time_of_day} ${customer.name}! `;
    greeting += customer.loyal ? loyal : notLoyal;
    return greeting;
};
const gabriel = {
    loyal: true,
    name: 'Gabriel',
    visits: 2
};
console.log(customerGreeting(greetingTime.morning, gabriel));
