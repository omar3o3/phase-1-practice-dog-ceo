console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded' , imageLoader);

const imageLoader = () =>{
    fetch('https://dog.ceo/api/breeds/image/random/4').then(resp => resp.json()).then(data => imageAdder(data))
}

const imageAdder = (data) =>{
    let dogContainer = document.querySelector('#dog-image-container');

    data.forEach(element of data){
        let dogPicture = document.createElement('img');
        dogPicture.src = data.message;
        dogContainer.append(dogPicture);
    }
}