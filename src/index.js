// write your code here

    const detailRamenImage = document.getElementsByClassName('detail-image')[0]   
    const detailRamenName = document.getElementsByClassName('name')[0]
    const detailRamenRestName = document.getElementsByClassName('restaurant')[0]
    const detailRamenRating = document.getElementById('rating-display')
    const detailRamenComment = document.getElementById('comment-display')

fetch('http://127.0.0.1:4002/ramens')
.then(resp => resp.json())
.then(ramens => {

    displayRamenDetails(ramens[0])

    ramens.forEach(ramen => {
        const ramenMenuElement = document.getElementById('ramen-menu')
        const ramenImg = document.createElement('img')
        ramenImg.src = ramen.image
        ramenMenuElement.appendChild(ramenImg)

        ramenImg.addEventListener('click', () => {
            displayRamenDetails(ramen)
        })
        
    })
    function displayRamenDetails(ramen){
    
    detailRamenImage.src = ramen.image
    detailRamenName.textContent = ramen.name
    detailRamenRestName.textContent = ramen.restaurant
    detailRamenRating.textContent = ramen.rating
    detailRamenComment.textContent = ramen.comment
    }

    
    const newRamenForm = document.getElementById('new-ramen')
    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log('hello')

        const newRamendata = {
            name: name.image,
            restaurant:
        }
    })


    
  
    

})