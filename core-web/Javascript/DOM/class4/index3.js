// Async function to fetch weather from different cities
async function utility() {
    // Create Promises for each city's weather (simulated with setTimeout)
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Delhi is hot af."); // resolves after 10s
        }, 10000);
    });

    let hydWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hyderabad is cool."); // resolves after 20s
        }, 20000);
    });

    let ngpWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nagpur is moderate."); // resolves after 30s
        }, 30000);
    });

    // Await each promise **sequentially**
    // This means: wait for Delhi first, then Hyderabad, then Nagpur
    let dw = await delhiWeather; // waits 10s
    let hw = await hydWeather;   // waits 20s more (total 30s)
    let nw = await ngpWeather;   // waits 30s more (total 60s)

    // Return all results as an array
    return [dw, hw, nw];
}

// Call the async function
utility().then(results => console.log(results));

// What await does

// await pauses the execution of the async function until the Promise resolves.

// It allows you to get the resolved value directly instead of the Promise object.

// Execution of the async function stops at that line but does not block the main thread.

//no await
async function utilityWithoutAwait() {
    let delhiWeather = new Promise((resolve) => setTimeout(() => resolve("Delhi is hot af."), 10000));
    let hydWeather = new Promise((resolve) => setTimeout(() => resolve("Hyderabad is cool."), 20000));
    let ngpWeather = new Promise((resolve) => setTimeout(() => resolve("Nagpur is moderate."), 30000));

    // NOT using await
    let dw = delhiWeather;  
    let hw = hydWeather;
    let nw = ngpWeather;

    return [dw, hw, nw];
}

// utilityWithoutAwait().then(results => console.log(results));

// Each element is a Promise, not the actual weather string.

// Why?

// await tells JavaScript: "pause here until the Promise resolves."

// Without await, the function returns instantly, giving unresolved Promise objects.
