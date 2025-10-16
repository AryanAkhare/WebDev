async function util() {
    let c = fetch('https://jsonplaceholder.typicode.com/posts/10');  // fetch returns a Promise
    let op = await c.then(res => res.json()); // equivalent to await c.json() if awaited after response
    console.log(op); // prints the resolved JSON object
}

util();
