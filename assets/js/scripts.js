/*-----------------------------------------------------------------------------------

	Theme Name: Kevin Nowalski
	Front-end developer: Kevin Nowalski
	Date: 11/10/19

-----------------------------------------------------------------------------------*/

// Owl Slider
if(typeof $.fn.owlCarousel !== "undefined"){
	var portfolioLinksCount = $('.portfolio-link').length;
	$("#portfolio-links").owlCarousel({
		items: (portfolioLinksCount >= 2 ? 2 : portfolioLinksCount),
		margin: 30,
		nav: portfolioLinksCount > 2 ? true : false,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive:{
			767:{
				items: (portfolioLinksCount >= 2 ? 2 : portfolioLinksCount)
			},
			0:{
				items: (portfolioLinksCount >= 1 ? 1 : portfolioLinksCount)
			}
		}
	});
}