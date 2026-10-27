jQuery(document).ready(function($) {
// Setup/Initialization for Image Gallery

// We only want these styles applied when javascript is enabled
$('.gallery-holder .content').css('display', 'block');
$('.gallery-holder .controls-holder-bg').fadeTo('fast', .85);
	
var captionOpacity = 0.0;

// Initialize Advanced Galleriffic Gallery
var gallery = $('#thumbs').galleriffic({
	delay:                     2500,
	numThumbs:                 1,
	preloadAhead:              10,
	enableTopPager:            true,
	enableBottomPager:         false,
	maxPagesToShow:            10,
	imageContainerSel:         '#slideshow',
	controlsContainerSel:      '#controls',
	captionContainerSel:       '#caption',
	loadingContainerSel:       '',
	renderSSControls:          false,
	renderNavControls:         true,
	playLinkText:              'Play Slideshow',
	pauseLinkText:             'Pause Slideshow',
	prevLinkText:              'Previous',
	nextLinkText:              'Next',
	nextPageLinkText:          '&rsaquo;',
	prevPageLinkText:          '&lsaquo;',
	enableHistory:             false,
	autoStart:                 false,
	syncTransitions:           true,
	defaultTransitionDuration: 600,
	onSlideChange:             function(prevIndex, nextIndex) {
		// 'this' refers to the gallery, which is an extension of $('#thumbs')
		//this.find('ul.thumbs').children()				
	},
	onTransitionOut:           function(slide, caption, isSync, callback) {
		slide.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0, callback);
		caption.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0);
	},
	onTransitionIn:            function(slide, caption, isSync) {
		var duration = this.getDefaultTransitionDuration(isSync);
		slide.fadeTo(duration, 1.0);			
		caption.fadeTo(duration, 1.0);
	},
	onPageTransitionOut:       function(callback) {
		this.fadeTo('fast', 1.0, callback);
	},
	onPageTransitionIn:        function() {
		this.fadeTo('fast', 1.0);
	}
});

/**** Functions to support integration of galleriffic with the jquery.history plugin ****/

// PageLoad function
// This function is called when:
// 1. after calling $.historyInit();
// 2. after calling $.historyLoad();
// 3. after pushing "Go Back" button of a browser
//function pageload(hash) {
//	// alert("pageload: " + hash);
//	// hash doesn't contain the first # character.
//	if(hash) {
//		$.galleriffic.gotoImage(hash);
//	} else {
//		gallery.gotoIndex(0);
//	}
//}

// Initialize history plugin.
// The callback is called at once by present location.hash. 
//$.historyInit(pageload);

// set onlick event for buttons using the jQuery 1.3 live method
//$("a[rel='history']").live('click', function(e) {
//	if (e.button != 0) return true;
//	
//	var hash = this.href;
//	hash = hash.replace(/^.*#/, '');

	// moves to a new page. 
	// pageload is called at once. 
	// hash don't contain "#", "?"
//	$.historyLoad(hash);
//
//	return false;
//});

// Slide In/Out of controls panel on gallery



});

