//Write a function that uses async/await to make an API call to fetch data and returns a promise with the response.


async function fetchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}


fetchData("https://jsonplaceholder.typicode.com/posts")
    .then( (data) => {
        console.log(data);
    })
    .catch( (error) => {
        console.error(error);
    }
    );

