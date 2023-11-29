const ramenMenuDivElement = document.getElementById('ramen-menu')
const detailImage = document.querySelector('.detail-image')
const detailName = document.querySelector('.name') 
const detailRestaurant = document.getElementsByClassName('restaurant')[0]
const detailRating = document.getElementById('rating-display')
const detailComment = document.getElementById('comment-display')
const newRamenForm = document.getElementById('new-ramen')
fetch('http://127.0.0.1:4000/ramens')
    .then(resp => resp.json())
    .then(ramenList => {
        ramenList.forEach(ramen => {
            displayImageInMenu(ramen)
        })
        
    }) 
    addNewRamen() 

function displayImageInMenu(soup){
    const ramenImgElement = document.createElement('img')
    ramenImgElement.src = soup.image
    ramenMenuDivElement.appendChild(ramenImgElement)

    ramenImgElement.addEventListener('click', () => {
        displayRamenDetail(soup)
    })}

function displayRamenDetail(soup){
    detailImage.src = soup.image
    detailName.textContent = soup.name
    detailRestaurant.textContent = soup.restaurant
    detailRating.textContent = soup.rating
    detailComment.textContent = soup.comment}

function addNewRamen(){
    newRamenForm.addEventListener('submit', e => {
        e.preventDefault()

        let newRamenData = {
        name: e.target[0].value,
        restaurant: e.target[1].value,
        image: e.target[2].value,
        rating: e.target[3].value,
        comment: e.target[4].value
        }
        displayImageInMenu(newRamenData)
        newRamenForm.reset()
    })}








































// fetch('http://127.0.0.1:3000/ramens')
// .then(resp => resp.json())
// .then(ramenList => {
    
//     //1
//     ramenList.forEach(ramen => {
//         displayMenu(ramen)   ///made function b/c it's reused to add new ramen into menu list when new ramen form submitted
       
//         //click event listener on images
        
//         })

        
//         displayRamenDetail(ramenList[0])


//     })
//     //2

    
//      const newRamenForm = document.getElementById('new-ramen')
//      newRamenForm.addEventListener('submit', e => {
//          e.preventDefault()

//          const newName = document.getElementById('new-name')
//          const newImage = document.getElementById('new-image')
//          const newRating = document.getElementById('new-rating')
//          const newComment = document.getElementById('new-comment')

//          const newRamenObject = {
//              name: newName.value,
//              image: newImage.value,
//              rating: newRating.value,
//              comment: newComment.value
//          }
//          displayMenu(newRamenObject)

         
         
//      })








// function displayRamenDetail(ramen){
//     const detailImage = document.querySelector('.detail-image')
//     const detailName = document.querySelector('.name')
//     const detailRestaurant = document.querySelector('.restaurant')
//     const detailRating = document.getElementById('rating-display')
//     const detailComment = document.getElementById('comment-display')

//     detailImage.src = ramen.image
//     detailName.textContent = ramen.name
//     detailRestaurant.textContent = ramen.restaurant
//     detailRating.textContent = ramen.rating
//     detailComment.textContent = ramen.comment
//     }

//     function displayMenu(ramen){
//     const imgElement = document.createElement('img')
//     const ramenMenu = document.getElementById('ramen-menu')
//     imgElement.src = ramen.image
//     ramenMenu.appendChild(imgElement)

//     imgElement.addEventListener('click', e => {
//         displayRamenDetail(ramen)
//     })
// }





















































// fetch('http://127.0.0.1:3000/ramens')
// .then(resp => resp.json())
// .then(ramenList => {

//     ramenList.forEach(ramen => {
//         displayRamen(ramen)

//     })

   



   

// const newRamenForm = document.getElementById('new-ramen')
// newRamenForm.addEventListener('submit', e => {
//     e.preventDefault()

//     const newNameElement = document.getElementById('new-name')
//     const newRestaurantElement = document.getElementById('new-restaurant')
//     const newImageElement = document.getElementById('new-image')
//     const newRatingElement = document.getElementById('new-rating')
//     const newCommentElement = document.getElementById('new-comment')

//     let newFood = {               //key is case sensitive, must be exactly same as data we fetched from server. name not Name  can be in global scope or wiehin 2nd .then
//         name: newNameElement.value,
//         restaurant: newRestaurantElement.value,
//         image: newImageElement.value,
//         rating: newRatingElement.value,
//         comment: newCommentElement.value
//     }
//     displayRamen(newFood)
// })

// })






// function displayRamen(ramen){
//     const imgElement = document.createElement('img')
//     const ramenMenu = document.getElementById('ramen-menu')
//     imgElement.src = ramen.image
//     ramenMenu.appendChild(imgElement)
//     imgElement.addEventListener('click', e => {
//         displayRamenDetail(ramen)
//     })
// }


// function displayRamenDetail(ramen){
//     const detailImage = document.querySelector('.detail-image')
//     const detailName = document.querySelector('.name')
//     const detailRestaurant = document.querySelector('.restaurant')
//     const detailRating = document.getElementById('rating-display')
//     const detailComment = document.getElementById('comment-display')

//     detailImage.src = ramen.image
//     detailName.textContent = ramen.name
//     detailRestaurant.textContent = ramen.restaurant
//     detailRating.textContent = ramen.rating
//     detailComment.textContent = ramen.comment

//     console.log('displayRamen called')
// }































































// // write your code here


//     const detailRamenImage = document.getElementsByClassName('detail-image')[0]   
//     const detailRamenName = document.getElementsByClassName('name')[0]
//     const detailRamenRestName = document.getElementsByClassName('restaurant')[0]
//     const detailRamenRating = document.getElementById('rating-display')
//     const detailRamenComment = document.getElementById('comment-display')
// //forms
// const ramenForm = document.querySelector('#new-ramen')  
// const newNameElement = document.getElementById('new-name')
// const newRestaurantElement = document.getElementById('new-restaurant')
// const newImageElement = document.getElementById('new-image')
// const newRatingElement = document.getElementById('new-rating')
//  const newCommentElement = document.getElementById('new-comment')




// fetch('http://127.0.0.1:3000/ramens')
// .then(resp => resp.json())
// .then(ramenData => {
//         ramenData.map(eachRamen => {         //1 creating individual ramen image in menu
//             displayRamenMenu(eachRamen)
//         })


//         displayRamenDetail(ramenData[0])
// })

// //1 refactored into global scope
// const displayRamenMenu = (ramen) =>{
//     const ramenImg = document.createElement('img')
//     const ramenMenu = document.getElementById('ramen-menu')
//     ramenImg.src = ramen.image
//     ramenMenu.appendChild(ramenImg)

//     //deliverable 2. we have access to ramenImg here, so add click eventlistner here. This event will result in displaying ramen details when ramen images are clicked
//     ramenImg.addEventListener('click', (e) => {
//         displayRamenDetail(ramen)
//     })



// }
// // 2 refactored displaying ramen detail
// const displayRamenDetail = (ramen) => {
//     detailRamenImage.src = ramen.image
//     detailRamenName.textContent = ramen.name
//     detailRamenRestName.textContent = ramen.restaurant
//     detailRamenRating.textContent = ramen.rating
//     detailRamenComment.textContent = ramen.comment
// }


// //challenge 3 FORM
// // 1. select html form 
//     // 2. select input element or with submit event, we can retrieve event values
//     // 3. add eventlistner 
//     // 4. get the new ramen Ob
//     // 5. send that obj to the menu
//  // we can select each input box or use
//  ramenForm.addEventListener('submit', (e) =>{
//     e.preventDefault()
    
//     let newRamen = {
//         "name": newNameElement.value,
//         "restaurant": newRestaurantElement.value,
//         "image": e.target['new-image'].value,
//         "rating": e.target['new-rating'].value,
//         "comment": e.target['new-comment'].value
//     }

//     displayRamenMenu(newRamen)
//     ramenForm.reset()
//  })
















// //     displayRamenDetails(ramens[0])

// //     ramens.forEach(ramen => {
// //         displayRamenMenu(ramen)
// //         const ramenMenuElement = document.getElementById('ramen-menu')
// //         const ramenImg = document.createElement('img')
// //         ramenImg.src = ramen.image
// //         ramenMenuElement.appendChild(ramenImg)

// //         ramenImg.addEventListener('click', () => {
// //             displayRamenDetails(ramen)
// //         })
        
// //     })
// //     function displayRamenDetails(ramen){
    
// //     detailRamenImage.src = ramen.image
// //     detailRamenName.textContent = ramen.name
// //     detailRamenRestName.textContent = ramen.restaurant
// //     detailRamenRating.textContent = ramen.rating
// //     detailRamenComment.textContent = ramen.comment
// //     }

    
// //     const newRamenForm = document.getElementById('new-ramen')
// //     newRamenForm.addEventListener('submit', (e) => {
// //         e.preventDefault()

// //         const newNameElement = document.getElementById('new-name')
// //         const newRestaurantElement = document.getElementById('new-restaurant')
// //         const newImageElement = document.getElementById('new-image')
// //         const newRatingElement = document.getElementById('new-rating')
// //         const newCommentElement = document.getElementById('new-comment')
        
// //         const newRamenData = {
// //             Name: newNameElement.value,
// //             Restaurant: newRestaurantElement.value,
// //             Image: newImageElement.value,
// //             Rating: newRatingElement.value,
// //             Comment: newCommentElement.value
// //         }
     

// //         //select form elements.value etc
      
// //     })


    
  
    

// // })