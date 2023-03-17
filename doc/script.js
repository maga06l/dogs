const btn = document.querySelector('.btn');
// const list = document.querySelector('.list')

btn.addEventListener('click', () => {
    // const li = document.createElement('li');
    // const image = document.createElement('img')
    // list.appendChild(li);
    // li.appendChild(image);

    let imgUrl = getResponse().then((message) => {
        addList(message)

    })
})

// const renderDogsImg = data => {

// }
// fetch("https://dog.ceo/api/breeds/image/random/5")
//     .then((response) => response.json())
//     .then((data) => console.log(data.message));

function addList(imgUrl) {
    let list = document.querySelector('.pic-item')
    console.log(list)
    list.innerHTML += `
    <li>
    <img src="${imgUrl}"/>
    </li>  
    `
}

// function getResponse() {
//    fetch("https://dog.ceo/api/breeds/image/random")
//    .then.response.json().then((data) => {
//         return data.message
//     })
// }

async function getResponse() {
    const resp = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await resp.json()

    return data.message
}