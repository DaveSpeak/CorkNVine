 var listGift = ['<a href="gifts.html">', 'blah', 'blah'];
    giftList = Math.floor(Math.random() * names.length); 

    if (document.readyState != 'loading'){
    start();
} else {
    document.addEventListener('DOMContentLoaded', start);
}

function gifting() {

drop = new Drop({
        target: document.querySelector('#gifts'),
        content: listGift[0],
        position: 'left top',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
};