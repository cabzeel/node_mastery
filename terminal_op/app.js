//basic GET usage

const testData =  async(url) => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data[0])
}

testData('https://jsonplaceholder.typicode.com/posts');

//basic post usage..
const body = {
    title : 'post edit',
    body : 'first working with the post request',
    userId : '1'

}

const testPost = async (url)=> {
    const response = await fetch(url, {
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json' 
        },
        body : JSON.stringify(body)
    })

    const data = await response.json();
    console.log(data.title);
}
 
testPost('https://jsonplaceholder.typicode.com/posts')
