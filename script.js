(function(){
"use strict";
const detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const destName = event.target.elements['name'].value;
    const destlocation = event.target.elements['location'].value;
    const destPhoto = event.target.elements['photo'].value;
    const destdesc = event.target.elements['discription'].value;

    // for loop to clear all the elements in the form

    for (let i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = '';
    }

    // function call to create new card
    const destcard = createDestinationCard(destName, destlocation, destPhoto, destdesc);
    // function that create new card

    const wishListContainer = document.getElementById('destination_container');

    if (wishListContainer.children.length === 0) {
        document.getElementById('title').innerHTML = 'My Wish List';
    }
    // appending card to container
    document.querySelector('#destination_container').appendChild(destcard);
}
// function to Add details to the card

function createDestinationCard(name, location, photoURL, description) {

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.setAttribute('alt', name);

    const constimageURL = './/images/image1.jpg';

    if (photoURL.length === 0) {
        img.setAttribute('src', constimageURL);
    } 
    else {
        img.setAttribute('src', photoURL);
    }

    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardLocation = document.createElement('h4');
    cardLocation.innerText = location;
    cardBody.appendChild(cardLocation);

    if (description.length !== 0) {
        let cardDescription = document.createElement('p');
        cardDescription.className = 'card-text';
        cardDescription.innerText = description;
        cardBody.appendChild(cardDescription);
    }

    const cardRemoveButton = document.createElement('button');
    cardRemoveButton.innerText = 'Remove';

    cardRemoveButton.addEventListener('click', removeDestination);
    cardBody.appendChild(cardRemoveButton);

    card.appendChild(cardBody);
    return card;
}

// removing the card

function removeDestination(event) {
    let card = event.target.parentElement.parentElement;
    card.remove();
}

})();


