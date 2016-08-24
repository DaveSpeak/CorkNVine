$(document).ready(function() {

  var list = ['<a href="#">Eureka</a>', 'Mendocino', 'Sonoma', 'Napa Valley', 
  'Sacramento', 'San Francisco', 'Lodi', 'Livermore', 
  'Modesto', 'SantaCruz', 'Monterey/Carmel', 'Sierra Foothills', 
  'Madera', 'Fresno', 'San Luis Obispo', 'Santa Barbara', 
  'Ventura County', 'Malibu', 'Los Angeles', 'Orange County', 
  'Palm Springs', 'San Diego']

  var ids = ['eureka', 'mendocino', 'sonoma', 'napa', 
  'sacramento', 'sanFrancisco', 'lodi', 'livermore', 
  'modesto', 'santaCruz', 'monterey', 'sierra', 
  'madera', 'fresno', 'sanLuis', 'santaBarbara', 
  'ventura', 'malibu', 'losAngeles', 'orangeCounty', 
  'palmSprings', 'sanDiego']

if (document.readyState != 'loading'){
    start();
} else {
    document.addEventListener('DOMContentLoaded', start);
}

function start() {

//   var wineArea = $(this).attr('data-name');
//   console.log(wineArea);
// var queryURL = "http://services.wine.com/api/beta2/service.svc/format/catalog=" + wineArea +
//   "1ffb6a6f186532beb31e2aad18f8f14b";

//   $.ajax({
//             url: queryURL,
//             method: 'GET'
//           })
//           .done(function(response) {

//               // console.log("this is id[1] " + response.data[1].id);
//               // console.log("this is fixed_w still " + response.data[1].images.fixed_width_still.url);
//               // console.log("this is fixed_w animated " + response.data[1].images.fixed_width.url);

//             results = response.data;




  // new Drop({
  //   target: eureka,
  //   position: 'top left',
  //   openOn: 'click'
  // });
  new Tether({
    element: mendocino,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'top left',
    // offset: '20px 0px',
    targetOffset: '190px 60px'
  });
  new Tether({
    element: sierra,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'top left',
    // offset: '20px 0px',
    targetOffset: '190px 210px'
  });
  new Tether({
    element: sonoma,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'top left',
    // offset: '20px 0px',
    targetOffset: '250px 90px'
  });
  new Tether({
    element: napa,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'top left',
    // offset: '20px 0px',
    targetOffset: '255px 125px'
  });
  new Tether({
    element: sacramento,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'top left',
    // offset: '20px 0px',
    targetOffset: '255px 180px'
  });
  new Tether({
    element: sanFrancisco,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'top left',
    // offset: '20px 0px',
    targetOffset: '330px 100px'
  });
  new Tether({
    element: lodi,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'top left',
    // offset: '20px 0px',
    targetOffset: '290px 200px'
  });
  new Tether({
    element: livermore,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'top left',
    // offset: '20px 0px',
    targetOffset: '330px 165px'
  });
  new Tether({
    element: modesto,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'top left',
    // offset: '20px 0px',
    targetOffset: '310px 210px'
  });
  new Tether({
    element: santaCruz,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '20px 120px'
  });
  new Tether({
    element: madera,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
     targetOffset: '0 290px'
  });
  new Tether({
    element: fresno,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '60px 250px'
  });
  new Tether({
    element: monterey,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '80px 170px'
  });
  new Tether({
    element: sanLuis,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '135px 215px'
  });
  new Tether({
    element: santaBarbara,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '185px 235px'
  });
  new Tether({
    element: venturaCounty,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '200px 320px'
  });
  new Tether({
    element: malibu,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '250px 340px'
  });
  new Tether({
    element: losAngeles,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '200px 365px'
  });
  new Tether({
    element: orangeCounty,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '255px 390px'
  });
  new Tether({
    element: palmSprings,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '245px 480px'
  });
  new Tether({
    element: sanDiego,
    target: map,
    attachment: 'bottom right',
    targetAttachment: 'center left',
    // offset: '20px 0px',
    targetOffset: '300px 460px'
    });
// for (i = 0; i < ids.length; i++) {
//    drop = new Drop({
//         target: document.querySelector("#" + ids[i]),
//         content: list[0],
//         position: 'left middle',
//         openOn: 'click',
//         classes: 'drop-theme-arrows-bounce-dark'
//     });
// }
    drop = new Drop({
        target: document.querySelector('#eureka'),
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

