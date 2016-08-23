var strangeFacts=[];
var matchDrink=[
	{title:'Vodka straight or with water/club soda',like:'vodka-straight',match:'sauvignon-blanc'},
	{title:'Vodka with sweet mixer',like:'vodka-sweet',match:'moscato'},
	{title:'Vodka with sour mixer',like:'vodka-sour',match:'chardonnay'},
	{title:'Scotch straight or with water/club soda',like:'scotch',match:'merlot'},
	{title:'Rum straight or with water/club soda',like:'rum-straight',match:'merlot'},
	{title:'Rum with sweet mixer',like:'rum-sweet',match:'zinfandel'},
	{title:'Rum with sour mixer',like:'rum-sour',match:'cabernet-sauvignon'},
	{title:'Gin straight or with water/club soda',like:'gin-straight',match:'mourvedre'},
	{title:'Gin with sweet mixer',like:'gin-sweet',match:'tannat'},
	{title:'Gin with sour mixer',like:'gin-sour',match:'petite-verdot'},
	{title:'Tequila straight',like:'tequila-straight',match:'syrah'},
	{title:'Tequila with sweet mixer',like:'tequila-sweet',match:'tannat'},
	{title:'Tequila with sour mixer',like:'tequila-sour',match:'petit-verdot'},
	{title:'Lager',like:'lager',match:'cabernet-sauvignon'},
	{title:'Ale',like:'ale',match:'merlot'},
	{title:'Beer',like:'beer',match:'merlot'},
	{title:'Hard Lemonade or Hard Iced Tea',like:'hard-lemonade',match:'zinfandel'},
	{title:'Other',like:'other',match:'search'}
	]
var matchFood=[
	{title:'Red Meat',like:'red-meat',match:'cabernet-sauvignon'},
	{title:'Poultry',like:'poultry',match:'sauvignon-blanc'},
	{title:'Fish',like:'fish',match:'chardonnay'},
	{title:'Light meal or appetizers',like:'light-appetizers',match:'champagne'},
	{title:'Salty',like:'salty',match:'zinfandel'},
	{title:'Tart',like:'tart',match:'cabernet-sauvignon'},
	{title:'Spicy',like:'spicy',match:'petit-sirah'},
	{title:'Sweet with chocolate',like:'sweet-chocolate',match:'zinfandel'},
	{title:'Other sweets',like:'other-sweet',match:'search'}
]
$(document).ready(function() {
	// populate drink match list
	for (var i=0;i<matchDrink.length;i++){
		$('#drinkmatchlist').append($('<li>').html($('<p>').attr({'class':'drinkMatch','value':matchDrink[i].like})
			.html(matchDrink[i].title)));
	}
	$('.drinkMatch').on('click',function(){
		for (var i=0;i<matchDrink.length;i++){
			if ($(this).attr('value')==matchDrink[i].like){
				alert('You like '+($(this).attr('value'))+', so we think you\'ll like '+matchDrink[i].match);
			}
		}
	});
	// populate food match list
	for (var i=0;i<matchFood.length;i++){
		$('#right-side').append($('<li>').html($('<p>').attr({'class':'foodMatch','value':matchFood[i].like})
			.html(matchFood[i].title)));
	}
	$('.foodMatch').on('click',function(){
		for (var i=0;i<matchFood.length;i++){
			if ($(this).attr('value')==matchFood[i].like){
				alert('You like '+($(this).attr('value'))+', so we think you\'ll like '+matchFood[i].match);
			}
		}
	});
});
