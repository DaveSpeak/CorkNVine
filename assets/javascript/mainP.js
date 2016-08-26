

    if (document.readyState != 'loading'){
    start();
} else {
    document.addEventListener('DOMContentLoaded', wining);
}

function wining() {
drop = new Drop({
        target: document.querySelector('#dayWine'),
        content: "wine!",
        position: 'center center',
        openOn: 'hover',
        classes: 'drop-theme-arrows-bounce-dark'
    });
// drop = new Drop({
//         target: document.querySelector('#gifting'),
//         content: listGift[0],
//         position: 'center center',
//         openOn: 'hover',
//         classes: 'drop-theme-arrows-bounce-dark'
//     });
};

// function go() {
//    $('#randomQ').on('mouseover', function(){
//     var quotes = ['“In victory, you deserve Champagne. In defeat you need it.” ― Napoleon Bonaparte',
//        '“Beer is made by men, wine by God.”― Martin Luther', 
//        '“I cook with wine, sometimes I even add it to the food.” ― W.C. Fields', 
//        '“It takes a lot of good beer to make great wine” ― Brian O’Donnell, Winemaker of Belle Pente', 
//        '“Either give me more wine or leave me alone.” - Rumi', 
//        '“What wine goes with Captain Crunch?” - George Carlin', 
//        '“Wine is the most healthful and most hygienic of beverages.” -  Louis Pasteur', 
//        '“Anyone who tries to make you believe that he knows all about wines is obviously a fake.” -  Leon Adams', 
//        '“A man will be eloquent if you give him good wine.” – Ralph Waldo Emerson', 
//        '“One of the disadvanages of wine is that it makes a man mistake words for thoughts.” – Samuel Johnson', 
//        '“When it came to writing about wine, I did what almost everybody does – faked it” – Art Buchwald', 
//        '“Wine makes daily living easier, less hurried, with fewer tensions and more tolerance.” – Benjamin Franklin', 
//        '“My only regret in life is that I did not drink more wine.” – Ernest Hemingway', 
//        '“There can never be any substitute for your own palate nor any better education than tasting the wine yourself.” – Robert Parker'];
//   choices = Math.floor(Math.random() * quotes.length);
//             quote = quotes[choices];
//             });
//  drop = new Drop({
//         target: document.querySelector('#front-quote'),
//         content: quote,
//         position: 'center center',
//         openOn: 'hover',
//         classes: 'drop-theme-arrows-bounce-dark'
//     });
// }

$(document).ready(function() {

  var info;
  var wineImage;

function chooseWine() {


// <<<<<<< HEAD
//         var queryURL = "http://api.snooth.com/wines/?akey=wy1wfb4xvzcqbqhvvxf5yay3z8yt9vynuftd6n80bi9y9f56&q=wine&n=1&sr";

//         $.ajax({
//             url: queryURL,
//             dataType: "json",
//             // data: { 
//             //   name: value,
//             //   image: value},
//             method: 'GET'
//           })
        
//           .done(function(response) {
//              var info = response.wines;
// =======

  $.ajax({
            url: 'http://api.snooth.com/wines/?akey=wy1wfb4xvzcqbqhvvxf5yay3z8yt9vynuftd6n80bi9y9f56&q=wine&n=1&sr',
            method: 'GET',
        }).done(function(response) {
           console.log(JSON.parse(response));
        // });

        // var queryURL = "http://api.snooth.com/wines/?akey=wy1wfb4xvzcqbqhvvxf5yay3z8yt9vynuftd6n80bi9y9f56&q=wine&n=1&sr";

        // $.ajax({
        //     url: queryURL,
        //     dataType: "json",
           
        //     type: 'GET'
        //   })
        
          // .done(function(response) {
             var info = JSON.parse(response.wines);

// >>>>>>> 5da89e32b8bb189c63cf07b6ed5b7ae64bcb3599

            console.log("info = " + info);
            //  results = response.wines;
             var nameW = info.name;
            var imageW = info.image;

// <<<<<<< HEAD
// =======
// console.log(JSON.parse(response));
// >>>>>>> 5da89e32b8bb189c63cf07b6ed5b7ae64bcb3599
             console.log("name = " + nameW);
            console.log("image = " + imageW);
            var imageWine = $('<img>').attr('src', imageW);
            var nameWine = $('<h1>').html(nameW);
            var dayW = $('<div>').append(imageWine).append(nameWine);
            
            // //  [what does the api call the info array at beginning NOT data so not response, data but response, wine]
            // // results = response.wine;

            //       // var wineDiv = $('<div class="wine">');
            //       var name = response.name;
            //       var image = response.image;
            //      console.log("name = " + name);
            //      console.log("image = " + image);

// console.log(          
 
            });

// <<<<<<< HEAD
// //          
// =======
// //          console.log(JSON.parse(response));
// >>>>>>> 5da89e32b8bb189c63cf07b6ed5b7ae64bcb3599

//     if (document.readyState != 'loading'){
//     start();
// } else {
//     document.addEventListener('DOMContentLoaded', wining);
// }
// var listWine;
// function wining() {

// drop = new Drop({
//         target: document.querySelector('#dayWine'),
//         content: dayW.html(dayW),
//         position: 'center center',
//         openOn: 'hover',
//         classes: 'drop-theme-arrows-bounce-dark'
//     });
// drop = new Drop({
//         target: document.querySelector('#wineDay'),
//         content: dayW,
//         position: 'center center',
//         openOn: 'hover',
//         classes: 'drop-theme-arrows-bounce-dark'
//     });

// };
};
chooseWine();

// $(document).ready(function() {
    
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
// var listGift = ['<a href="gifts.html">Gift</a>', 'blah', 'blah'];
// var giftList = Math.floor(Math.random() * listGift.length); 




// var results;

//         var queryURL = "http://api.snooth.com/wines/?akey=wy1wfb4xvzcqbqhvvxf5yay3z8yt9vynuftd6n80bi9y9f56&q=wine&n=1&sr";

//         $.ajax({
//             url: queryURL,
//             method: 'GET'
//           })
        
//           .done(function(response) {
//              results = response.wine;
//              var nameW = response.name;
//             var imageW = response.image;
//             var imageWine = $('<img>').attr('src', imageW);
//             var nameWine = $('<h1>').html(nameW);
//             var dayW = $('<div>').append(imageWine).append(nameWine);
            
//             //  [what does the api call the info array at beginning NOT data so not response, data but response, wine]
//             // results = response.wine;

//                   // var wineDiv = $('<div class="wine">');
//                   var name = response.name;
//                   var image = response.image;
//                  console.log("name = " + name);
//                  console.log("image = " + image);

// // console.log(          
 
//             });
          // console.log("response.wine = " + response.data);

        console.log("name = " + name);

            // wine = response.data;
            // wine.append(listWine[0]);
          // };

// console.log("listWine = " + listWine)
// $(document).on('hover', '#wineDay', wineInfo);
// };
});
// drop = new Drop({
//         target: document.querySelector('#wineDay'),
//         content: dayW,
//         position: 'center center',
//         openOn: 'hover',
//         classes: 'drop-theme-arrows-bounce-dark'
//     });


