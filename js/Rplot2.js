
(function($) {
    $(document).ready(function() {

	    var bildergruppe = ["element1", "element2"];
		for(i = 0; i<= 29; i++)
		{
			bildergruppe[i] = "images/eta=0.01-st=true-data=iris" + "/Rplot" + (i+1) +".png";
		}
			
		$.fn.scianimator.defaults.theme = 'dark';
		$('#Rplot').scianimator({
		    'images': [
		    	bildergruppe[0],
		    	bildergruppe[1],
		    	bildergruppe[2],
		    	bildergruppe[3],
		    	bildergruppe[4],
		    	bildergruppe[5],
		    	bildergruppe[6],
		    	bildergruppe[7],
		    	bildergruppe[8],
		    	bildergruppe[9],
		    	bildergruppe[10],
		    	bildergruppe[11],
		    	bildergruppe[12],
		    	bildergruppe[13],
		    	bildergruppe[14],
		    	bildergruppe[15],
		    	bildergruppe[16],
		    	bildergruppe[17],
		    	bildergruppe[18],
		    	bildergruppe[19],
		    	bildergruppe[20],
		    	bildergruppe[21],
		    	bildergruppe[22],
		    	bildergruppe[23],
		    	bildergruppe[24],
		    	bildergruppe[25],
		    	bildergruppe[26],
		    	bildergruppe[27],
		    	bildergruppe[28],
		    	bildergruppe[29]
		    			],
		    'width': 1500,
		    'delay': 1000,
		    'loopMode': 'loop'
	});
	$('#Rplot').scianimator('play');
    });
})(jQuery);



function buttonClicked(){
	//eta=0.01-st=true-data=iris
	//format:  eta=0.01-
	var eta = "eta=" + document.getElementById("eta1").value + "-";
	//format: st-false- / st-true-
	var standardize = "st=" + document.getElementById("standardize1").value + "-";
	//format: data=cancer / data=iris
	var data = "data=" + document.getElementById("data1").value;

	var zwischen = "Images/" + eta + standardize + data;

	var bildergruppe = ["element1", "element2"];
	for(i = 0; i<= 29; i++)
	{
		bildergruppe[i] = zwischen + "/Rplot" + (i+1) +".png";
	}

	document.getElementById("Rplot").innerHTML = "";
	document.getElementById("subheading").style.display="none";

	$.fn.scianimator.defaults.theme = 'dark';
	$('#Rplot').scianimator({
	    'images': [
	    	bildergruppe[0],
	    	bildergruppe[1],
	    	bildergruppe[2],
	    	bildergruppe[3],
	    	bildergruppe[4],
	    	bildergruppe[5],
	    	bildergruppe[6],
	    	bildergruppe[7],
	    	bildergruppe[8],
	    	bildergruppe[9],
	    	bildergruppe[10],
	    	bildergruppe[11],
	    	bildergruppe[12],
	    	bildergruppe[13],
	    	bildergruppe[14],
	    	bildergruppe[15],
	    	bildergruppe[16],
	    	bildergruppe[17],
	    	bildergruppe[18],
	    	bildergruppe[19],
	    	bildergruppe[20],
	    	bildergruppe[21],
	    	bildergruppe[22],
	    	bildergruppe[23],
	    	bildergruppe[24],
	    	bildergruppe[25],
	    	bildergruppe[26],
	    	bildergruppe[27],
	    	bildergruppe[28],
	    	bildergruppe[29]
	    			],
	    'width': 1500,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#Rplot').scianimator('play');
}


$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#nav');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});
