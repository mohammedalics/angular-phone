/* COMMON JS CODE */

/**************** filter dropdown check boxes ****************************/
$(document).ready(function(){
		$(".filterDropDown ul>li").click( function(event) {
				var checkBoxes = $(this).find("input");
				checkBoxes.prop("checked", !checkBoxes.prop("checked"));
				event.stopPropagation();
			})
			$(".filterDropDown ul>li input").click(function() {
				var checkBoxes = $(this);
				$(this).prop("checked",!checkBoxes.prop("checked"));
			})
			$(".filterDropDown ul>li").click( function() {
				filterText = $(this).text();
				var filterElement = "<div class=filterElement>"+ filterText
									+ "<span class='glyphicon glyphicon-remove' onclick='removeFilter(this)'></span>"
				if ($(this).find("input").is(":checked")) {
					$(".filterDiv").append(filterElement);
				} else {
					$('.filterElement:contains(' + filterText + ')').remove();
					}
				});
		});
		function removeFilter(obj) {
			$(obj).parent().remove();
			objText = $(obj).parent().text();
			$("li:contains(" + objText + ") input").attr('checked', false);
		}
/**************************************************************************/

		
/**************** sort by dropdown menus id=sortByButton *****************/
$(".normalDropDown li").click(function() {
	$(this).parents(".dropdown_select").find(".btn").html($(this).text()+ '<span class="glyphicon glyphicon-menu-down red-arrow"></span>');
})
$(".DropDownWithTitle li").click(function() {	
	$(this).parents(".dropdown_select").find(".btn").html("Title: "+ $(this).text()+ '<span class="glyphicon glyphicon-menu-down red-arrow"></span>')
});
/****************************************************************************/
											
$(function() {
	var substringMatcher = function(strs) {
		return function findMatches(q, cb) {
			var matches, substringRegex;
			matches = [];
			substrRegex = new RegExp(q, 'i');
			$.each(strs, function(i, str) {
				if (substrRegex.test(str)) {
					matches.push(str);
				}
			});
			cb(matches);
		};
	};
	var keys = [ 'Hala', 'Broadband', 'Shahry', 'MyFi', 'Internet',
			'Inernational', 'Promotions', 'Roaming', '4G', '4G+', '3G' ];
	$('#search_bar .typeahead').typeahead({}, {
		name : 'search',
		source : substringMatcher(keys)
	});
	$('#search_navbar_mobile .typeahead').typeahead({}, {
		name : 'search',
		source : substringMatcher(keys)
	});
	
});




$('.dropdown.search').on(
		'show.bs.dropdown',
		function() {
			$(this).find("a>.glyphicon-search").removeClass("glyphicon-search")
					.addClass("glyphicon-remove");
		});
$('.dropdown.search').on(
		'hide.bs.dropdown',
		function() {
			$(this).find("a>.glyphicon-remove").removeClass("glyphicon-remove")
					.addClass("glyphicon-search");
		});
jQuery('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = jQuery('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    }
});

window.addEventListener("resize", function() {
	if ($(window).width() > 767) {
		$('.menu-header-items .title').nextAll('li').show();
	}

	if ($(window).width() < 767) {
		$('.menu-header-items .title').nextAll('li').hide();
	}
});
$(document).ready(function() {
	if ($(window).width() < 767) {
		$('.menu-header-items .title').nextAll('li').slideUp();
	}
});

$('ul.menu-header-items>li.title').on('click', function(e) {
	if ($(window).width() < 767) {
		$('.menu-header-items .title').nextAll('li').slideUp();
		$(this).nextUntil('div').toggle();
		return false;
	}
});

$("#navbar").on('show.bs.collapse', function() {
	$("#search_navbar_mobile").collapse('hide')
});
$("#search_navbar_mobile").on('show.bs.collapse', function() {
	$("#navbar").collapse('hide')
});

/** fixing navbar panner in header **/
$('.level1').click(function(){
	$('.navbar-nav .absolute-div').css('height',$('.level1>.dropdown-menu').height());
});


/// needs fix

