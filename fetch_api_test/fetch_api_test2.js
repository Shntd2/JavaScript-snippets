const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
.then((response) => response.json())
.then((data) => {
    console.log(`Received ${data.length} products`);
    console.log(`This is the first one: ${data[0].name}`);
    console.log("This is the rest:");
    console.log(data);
})
.catch((error) => {
    console.error("Error fetching data:", error);
});
