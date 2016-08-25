$(document).ready(function() {

  var list = ['<a href="#">Humboldt County</a>', 'Mendocino', 'Sonoma', 'Napa Valley', 
  'Sacramento', 'San Francisco', 'Lodi', 'Livermore', 
  'Modesto', 'SantaCruz', 'Monterey/Carmel', 'Sierra Foothills', 
  'Madera', 'Fresno', 'San Luis Obispo', 'Santa Barbara', 
  'Ventura County', 'Malibu', 'Los Angeles', 'Orange County', 
  'Palm Springs', 'San Diego']

  var ids = ['humboldt', 'mendocino', 'sonoma', 'napa', 
  'sacramento', 'sanFrancisco', 'lodi', 'livermore', 
  'modesto', 'santaCruz', 'monterey', 'sierra', 
  'madera', 'fresno', 'sanLuis', 'santaBarbara',
  'ventura', 'malibu', 'losAngeles', 'orangeCounty', 
  'palmSprings', 'sanDiego']

//   for (i =0; i <= ids.length; i++) {



//             function findVin(){
//                 var searchTerm="https://www.googleapis.com/customsearch/v1?key=AIzaSyCMGfdDaSfjqv5zYoS0mTJnOT3e9MURWkU&cx=005427488377789592791:p7w1yrvn9co&q=" + ids[i];
//                 var terms=$('#location-input').val().trim();;
//                 terms=terms.replace(/[!@#$%^&*()+=\[\]\{\}\:\;\'\",.<>?/\\|`~]/g,'');
//                 terms=terms.replace(/ /g,'+');
//                 searchTerm+=terms;
//                 console.log(searchTerm);
//                     $.ajax({url: searchTerm, method: "GET"}) 
//                         .done(function(RETURN) {
//                         var title=[];
//                         console.log('got here');
//                         for (var j=0;j<10;j++){
//                             title[j] = {
//                              name:RETURN.items[j].title,
//                              url:RETURN.items[j].link
//                             };
//                             console.log(title[j]);
//                             console.log(link[j]);
//                         }
//                             // locationRef.set(title);
//                     });
//                     }
//                     return false;
// };



if (document.readyState != 'loading'){
    start();
} else {
    document.addEventListener('DOMContentLoaded', start);
}

function start() {

    drop = new Drop({
        target: document.querySelector('#humboldt'),
        content: list[0],
        position: 'left top',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#mendocino'),
        content: list[1],
        position: 'left middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#sonoma'),
        content: list[2],
        position: 'left middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#napa'),
        content: list[3],
        position: 'left bottom',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#sacramento'),
        content: list[4],
        position: 'right middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#sanFrancisco'),
        content: list[5],
        position: 'left middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#lodi'),
        content: list[6],
        position: 'right middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#livermore'),
        content: list[7],
        position: 'left bottom',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#modesto'),
        content: list[8],
        position: 'right bottom',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#santaCruz'),
        content: list[9],
        position: 'left middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#monterey'),
        content: list[10],
        position: 'left middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#sierra'),
        content: list[11],
        position: 'right middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#madera'),
        content: list[12],
        position: 'right bottom',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#fresno'),
        content: list[13],
        position: 'right middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#sanLuis'),
        content: list[14],
        position: 'left top',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#santaBarbara'),
        content: list[15],
        position: 'left top',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#venturaCounty'),
        content: list[16],
        position: 'left middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#malibu'),
        content: list[17],
        position: 'left middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#losAngeles'),
        content: list[18],
        position: 'right bottom',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#orangeCounty'),
        content: list[9],
        position: 'left middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#palmSprings'),
        content: list[20],
        position: 'right bottom',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop = new Drop({
        target: document.querySelector('#sanDiego'),
        content: list[21] + " " + list[20], 
        position: 'left middle',
        openOn: 'click',
        classes: 'drop-theme-arrows-bounce-dark'
    });
  };

});

