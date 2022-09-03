

// // const mobileData = async (search, dataLimit) => {
// //     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
// //     const data = await res.json()
// //     displayMobiles(data.data, dataLimit)
// // }
// // const displayMobiles = (mobiles, dataLimit) => {
// //     // console.log(mobiles)
// //     const mobileContainer = document.getElementById('mobile-container')
// //     mobileContainer.innerHTML = '';
//     // const showAll = document.getElementById('show-all');
//     // if (dataLimit && mobiles.length > 10) {
//     //     mobiles = mobiles.slice(0, 10)
//     //     showAll.classList.remove('d-none')
//     // }
//     // else {
//     //     showAll.classList.add('d-none')
//     // }

//     // const noPhone = document.getElementById('not-found');  //not found msg added
//     // if (mobiles.length === 0) {
//     //     noPhone.classList.remove('d-none')
//     // }
//     // else {
//     //     noPhone.classList.add('d-none')
//     // }

//     // mobiles.forEach(mobile => {
//     //     const mobileDiv = document.createElement('div')
//     //     mobileDiv.classList.add('col')
//     //     mobileDiv.innerHTML = `
//     //     <div class="card">
//     //        <img src="${mobile.image}" class="card-img-top" alt="...">
//     //        <div class="card-body">
//     //          <h5 class="card-title">${mobile.phone_name}</h5>
//     //          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     //          <button onclick="loadPhoneDetails('${mobile.slug}')" class="btn btn-primary">See Details</button>
//     //        </div>
//     //      </div>
        
//         `
// //         mobileContainer.appendChild(mobileDiv)
// //     })
// //     // toggleSpinner(false) //hide the spinner
// // }
// // // const processSearch = (dataLimit) => {
// // //     toggleSpinner(true)
// // //     const searhField = document.getElementById('search-field');
// // //     const searchText = searhField.value;
// // //     mobileData(searchText, dataLimit)
// // //     // searhField.value = '';
// // // }

// // // document.getElementById('search-btn').addEventListener('click', function () {
// // //     processSearch(10)

// // // })

// // // document.getElementById('search-field').addEventListener('keypress', function (e) {
// // //     if (e.key === 'Enter') {
// // //         processSearch(10)
// // //     }
// // // });

// // // const toggleSpinner = isLoading => {
// // //     const loaderSection = document.getElementById('loader');
// // //     if (isLoading) {
// // //         loaderSection.classList.remove('d-none')
// // //     }
// // //     else {
// // //         loaderSection.classList.add('d-none')
// // //     }
// // // }

// // // document.getElementById('btn-show-all').addEventListener('click', function () {
// // //     processSearch();
// // // })

// // const loadPhoneDetails = async id => {
//     const url = `https://openapi.programming-hero.com/api/phone/${id}`
// //     const res = await fetch(url)
// //     const data = await res.json();
// //     console.log(data.data)
// // }




// mobileData();





