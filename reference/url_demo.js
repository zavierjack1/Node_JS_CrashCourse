const url = require('url')

const myUrl = new URL("http://mywebsite.com:8000/hello.html?id=100&status=active");

console.log(myUrl.href);
console.log(myUrl.toString());

//Host root domain
console.log(myUrl.host);

//Hostname
console.log(myUrl.hostname);

//Pathname
console.log("pathname: ", myUrl.pathname);

//Serialized Query
console.log("search: ", myUrl.search);

//Search Params
console.log("search params: ", myUrl.searchParams);

myUrl.searchParams.append("name", "Zavier");
console.log("search params2: ", myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
