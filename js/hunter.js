const phoneLoad = async (searchText,dataLimit) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    displayMobiles(data.data,dataLimit)
}


const displayMobiles = (mobiles,dataLimit) => {
    const mobileContainer = document.getElementById('mobile-container')
    mobileContainer.textContent = '';
   
    // 10+ mobile hole showAll button dekabe 
    const showAll = document.getElementById('show-all')
    if (dataLimit && mobiles.length > 10) {
        mobiles = mobiles.slice(0, 10)
        showAll.classList.remove('d-none')
    }
    else {
        showAll.classList.add('d-none')
    }
    // mobile er man jodi 0 hoy tahole not found error dekabe 
    const notFound = document.getElementById('not-found');
    if (mobiles.length === 0) {
        notFound.classList.remove('d-none')
    }
    else {
        notFound.classList.add('d-none')
    }
    // forEach diye dynamic vabhe card create kora holo 
    mobiles.forEach(mobile => {
        // console.log(mobile)
        const mobileDiv = document.createElement('div')
        mobileDiv.classList.add('col')
        mobileDiv.innerHTML = `
        <div class="card">
        <img src="${mobile.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${mobile. phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button  onclick="loadPhoneDetails('${mobile.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>

 

        </div>
      </div>
        `
        mobileContainer.appendChild(mobileDiv)
    })
    toggleSpinner(false)
}

const processSearch = dataLimit => {
    toggleSpinner(true)
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    phoneLoad(searchText,dataLimit)
    
}
//  keypress 
document.getElementById('search-field').addEventListener('keypress', function (e) {
    
    if (e.key === 'Enter') {
        processSearch(10);
    }
});
 
document.getElementById('search-btn').addEventListener('click', function () {
    processSearch(10);
})
 
// spinner loader 
const toggleSpinner = isLoading => {
    const spinnerLoading = document.getElementById('loader')
    if (isLoading) {
        spinnerLoading.classList.remove('d-none')
    }
    else {
        spinnerLoading.classList.add('d-none')
    }
}

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})

const loadPhoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url)
    const data = await res.json()
    displayLoadPhoneDetails(data.data)
}

const displayLoadPhoneDetails = mobile => {
    console.log(mobile)
    const phoneDetailModal = document.getElementById('phoneDetailModalLabel')
    phoneDetailModal.innerText = mobile.name;
    const phoneDetail = document.getElementById('phone-details');
    phoneDetail.innerHTML = `
    <p>${mobile.releaseDate ? mobile.releaseDate : 'no realsed update'}</p>
    `
}

// phoneLoad();