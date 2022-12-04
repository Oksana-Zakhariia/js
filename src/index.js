// const list = document.querySelector('.list');
// const loadMoreButton = document.querySelector('.load');
// let page = 1;
// loadMoreButton.addEventListener('click', onLoadMoreButtonClick);


// function myApiRings(page = 1) {
//     const options = {
//         headers: {
//             Authorization: 'Bearer p5x3fafVd7jGFD8nSau5'

//         }
//     }
//     const BASE_URL = 'https://the-one-api.dev/v2/character'
//      return fetch(`${BASE_URL}?limit=400&page=${page}`, options).then((resp) => {
//         if (!resp.ok) {
//             throw new Error
//         }
//         return resp.json()
//     })
// }
    
// myApiRings().then((data) => { list.insertAdjacentHTML('beforeEnd', createMarkup(data.docs))
// }).catch((error)=> console.log(error.statusText))


// function createMarkup(arr) {
//     return arr.map(({name, race }) => {
//         return ` <li> <h2>${name}</h2>
//       <h3>${race}</h3></li>`
//      }).join('')
// }

// function onLoadMoreButtonClick() {
//     page += 1;
//     myApiRings(page).then((data) => {
//     list.insertAdjacentHTML('beforeEnd', createMarkup(data.docs))
//         if (data.page === data.pages) {
//         loadMoreButton.setAttribute('hidden', true)
//     }
//     }).catch((err) => { console.log(err) })
    


// }

const list = document.querySelector('.list');
const guard = document.querySelector('.js-guard')
const options = {
    root: null,
    rootMargin: '200px', 
    treshold: 1.0,

}
let page = 0; 
const observer = new IntersectionObserver(onLoad, options);
observer.observe(guard);
function onLoad(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            page += 1;
            myApiRings(page).then(data => {
                list.insertAdjacentHTML('beforeEnd', createMarkup(data.docs))
                if (data.page === data.pages) {
                    observer.unubserve(guard)
                }
            })
        }
        
    });
}

 function myApiRings(page = 1) {
    const options = {
        headers: {
            Authorization: 'Bearer p5x3fafVd7jGFD8nSau5'

        }
    }
    const BASE_URL = 'https://the-one-api.dev/v2/character'
     return fetch(`${BASE_URL}?limit=400&page=${page}`, options).then((resp) => {
        if (!resp.ok) {
            throw new Error
        }
        return resp.json()
    })
}
function createMarkup(arr) {
    return arr.map(({name, race }) => {
        return ` <li> <h2>${name}</h2>
      <h3>${race}</h3></li>`
     }).join('')
}
// myApiRings().then((data) => {
//     list.insertAdjacentHTML('beforeEnd', createMarkup(data.docs))
//      observer.observe(guard)
// }).catch((error)=> console.log(error.statusText))
