const url = 'https://zeeltech.vercel.app';

//fetch data
async function getItemData(url) {
    const response = await fetch(url);

    const clone = response.clone();

    return {response, clone}
}

const items = await getItemData(url);

async function logItemData(resp) {
    const {response, clone} = resp;
    const headerVar = response.headers.get('Content-Type');
    console.log(`clone: `, clone.headers.get('server'));
    console.log(headerVar);
}

logItemData(items);
