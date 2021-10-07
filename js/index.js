const heart = document.getElementById('heart');
heart.onclick = () => {
    if (heart.getAttribute('src') === 'assets/empty_heart.png') {
        heart.setAttribute('src', 'assets/full_heart.png');
    } else {
        heart.setAttribute('src', 'assets/empty_heart.png');
    }
};

const contact = document.getElementById('contact');
contact.onclick = () => {
    alert('contact list ~~');
};

const allBtn = document.getElementById('allBtn');
allBtn.onclick = () => {
    if (allBtn.getAttribute('class') === 'basicBtn') {
        allBtn.setAttribute('class', 'clickedBtn');
    } else {
        allBtn.setAttribute('class', 'basicBtn');
    }
};
