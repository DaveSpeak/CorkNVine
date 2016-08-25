var listGift = ['<a href="gifts.html">Gift</a>', 'blah', 'blah'];
var giftList = Math.floor(Math.random() * listGift.length); 

var listWine = ['<a href="wineDay.html">Wine of the Day</a>', 'blah', 'blah'];
var wineList = Math.floor(Math.random() * listWine.length); 


    if (document.readyState != 'loading'){
    start();
} else {
    document.addEventListener('DOMContentLoaded', gifting);
}

function gifting() {


drop = new Drop({
        target: document.querySelector('#gifting'),
        content: listGift[0],
        position: 'center center',
        openOn: 'hover',
        classes: 'drop-theme-arrows-bounce-dark'
    });
};

    if (document.readyState != 'loading'){
    start();
} else {
    document.addEventListener('DOMContentLoaded', wining);
}

function wining() {

drop = new Drop({
        target: document.querySelector('#dayWine'),
        content: listWine[0],
        position: 'center center',
        openOn: 'hover',
        classes: 'drop-theme-arrows-bounce-dark'
    });
};

$(document).ready(function() {
    
    var quotes = ['“In victory, you deserve Champagne. In defeat you need it.” ― Napoleon Bonaparte',
       '“Beer is made by men, wine by God.”― Martin Luther', 
       '“I cook with wine, sometimes I even add it to the food.” ― W.C. Fields', 
       '“It takes a lot of good beer to make great wine” ― Brian O’Donnell, Winemaker of Belle Pente', 
       '“Either give me more wine or leave me alone.” - Rumi', 
       '“What wine goes with Captain Crunch?” - George Carlin', 
       '“Wine is the most healthful and most hygienic of beverages.” -  Louis Pasteur', 
       '“Anyone who tries to make you believe that he knows all about wines is obviously a fake.” -  Leon Adams', 
       '“A man will be eloquent if you give him good wine.” – Ralph Waldo Emerson', 
       '“One of the disadvanages of wine is that it makes a man mistake words for thoughts.” – Samuel Johnson', 
       '“When it came to writing about wine, I did what almost everybody does – faked it” – Art Buchwald', 
       '“Wine makes daily living easier, less hurried, with fewer tensions and more tolerance.” – Benjamin Franklin', 
       '“My only regret in life is that I did not drink more wine.” – Ernest Hemingway', 
       '“There can never be any substitute for your own palate nor any better education than tasting the wine yourself.” – Robert Parker'];

        $('#randomQ').on('mouseover', function(){
            choices = Math.floor(Math.random() * quotes.length);
            quote = quotes[choices];
     
            $("#quote-back").html(quote);
            console.log(quote);
        });

});