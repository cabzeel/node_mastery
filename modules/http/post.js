const url = 'http://localhost:5000/';

const body = {
    name : 'Zeeltech Solutions',
    age : '2yrs',
    location : 'Southwest, Cameroon'
}

async function postData(url) {
    try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body : JSON.stringify(body)
    })
    } catch (error) {
        console.error(`error: ${error}`)
    }
}

console.log(postData(url))