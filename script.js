const contacts = [
    {
        name: "Vadim Apanasenko",
        email: "apanasenkova22@st.ithub.ru",
        phone: "+79993339988",
        image: "img/vadim.jpg"
    },
    {
        name: "Igor Tatoshkin",
        email: "tatoshkinim22@st.ithub.ru",
        phone: "+79994448899",
        image: "img/igor.jpg"
    },
    {
        name: "Arsen Kalantaryan",
        email: "kalantarovayu22@st.ithub.ru",
        phone: "+79998899999",
        image: "img/arsen.jpg"
    }
];


function createContactCard(contact) {
    const template = document.getElementById('contact-card-template');
    const clone = template.content.cloneNode(true);
    
    
    clone.querySelector('img').src = contact.image;
    clone.querySelector('h3').textContent = contact.name;
    clone.querySelector('.email').textContent = contact.email;
    clone.querySelector('.phone').textContent = contact.phone;

    
    document.body.appendChild(clone);
}


contacts.forEach(createContactCard);