const weather = true; //true -> resolve, false -> reject

const date = new Promise(function(resolve, reject) {
    if (weather) {
        const dateDetails = {
            name: "Pawornwan Sriprathung",
            location: "123st, Bangkok",
            table: 5
        }

        resolve(dateDetails)

    }else {
        reject(new Error("Bad weather, can not go to dinner."));
    }
});

const orderUber = function(dateDetails) {
    return new Promise(function(resolve, reject) {
        const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going to a dinner.`;
        resolve(message);
        //return Promise.resolve(message);
    })
}

async function myDate() {
    try{
        let dateDetails = await date;
        let message = await orderUber(dateDetails);
        console.log(message);

    } catch(error) {
        console.log(error.message);
    }
}

(async () => {
    await myDate();
})();
