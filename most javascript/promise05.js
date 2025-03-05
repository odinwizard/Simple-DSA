//Write a function that uses async/await to make multiple API calls in parallel and returns a promise with an array of responses.


async function fetchMultipleUrls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url))); // remeber about the map function here because we are using an array of urls
        const data = await Promise.all(responses.map(response => response.json()));// remeber about the map function here because we are using an array of responses
        return data;
    } catch (error) {
        return Promise.reject(error);     
    }
}


fetchMultipleUrls(["https://jsonplaceholder.typicode.com/posts",
                     "https://jsonplaceholder.typicode.com/comments"])
    .then( (data) => {
        console.log(data);
    })
    .catch( (error) => {
        console.error(error);
    }
    );

