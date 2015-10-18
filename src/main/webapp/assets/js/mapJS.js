$(function() {
	$(".qatar_map_drawing_place").mapael({
		map : {
			name : "qatar",
			defaultArea : {
				attrs : {
					stroke : "#999",
					opacity : 0.9
				}
			}
		},
		areas: {
			"QA-DA" : {
				attrs : {
					fill : "#fff"
				},
				attrsHover : {
					fill : "#fff",
					opacity : 1
				}
			},
			"QA-KH" : {
				attrs : {
					fill : "#fff"
				},
				attrsHover : {
					fill : "#fff",
					opacity : 1
				}
			},
			"QA-MS" : {
				attrs : {
					fill : "#fff"
				},
				attrsHover : {
					fill : "#fff",
					opacity : 1
				}
			},
			"QA-RA" : {
				attrs : {
					fill : "#fff"
				},
				attrsHover : {
					fill : "#000",
					opacity : 1
				}
			},
			"QA-US" : {
				attrs : {
					fill : "#fff"
				},
				attrsHover : {
					fill : "#000",
					opacity : 1
				}
			},
			"QA-WA" : {
				attrs : {
					fill : "#fff"
				},
				attrsHover : {
					fill : "#DDD",
					opacity : 1
				}
			},
			"QA-ZA" : {
				attrs : {
					fill : "#fff"
				},
				attrsHover : {
					fill : "#fff",
					opacity : 1
				}
			}
		}
	});

	$(".footer_map").mapael({
		map : {
			name : "qatar",
			defaultArea : {
				attrs : {
					stroke : "#666",
					opacity : 0.9
				}
			}
		},
		areas: {
			"QA-DA" : {
				attrs : {
					fill : "#ddd"
				},
				attrsHover : {
					fill : "#ddd",
					opacity : 1
				}
			},
			"QA-KH" : {
				attrs : {
					fill : "#ddd"
				},
				attrsHover : {
					fill : "#ddd",
					opacity : 1
				}
			},
			"QA-MS" : {
				attrs : {
					fill : "#eeefef"
				},
				attrsHover : {
					fill : "#eeefef",
					opacity : 1
				}
			},
			"QA-RA" : {
				attrs : {
					fill : "#eeefef"
				},
				attrsHover : {
					fill : "#eeefef",
					opacity : 1
				}
			},
			"QA-US" : {
				attrs : {
					fill : "#ccc"
				},
				attrsHover : {
					fill : "#ccc",
					opacity : 1
				}
			},
			"QA-WA" : {
				attrs : {
					fill : "#fff"
				},
				attrsHover : {
					fill : "#fff",
					opacity : 1
				}
			},
			"QA-ZA" : {
				attrs : {
					fill : "#eeefef"
				},
				attrsHover : {
					fill : "#eeefef",
					opacity : 1
				}
			}
		}
	});
	
	/* DRAW THE MAPS ON THE FIRST PAGE LOADING */
	drawWorldMap();
	drawMENAMap();
	drawSouthAsiaMap();
	drawSoutheastAsiaMap();
	
	
	function drawWorldMap () {
		$(".roaming_international_map>#world-map").mapael({
			map : {
				name : "world",
				defaultArea : {
					attrs : {
						fill : "#fff",
						stroke : "#bbb"
					},
					attrsHover : {
						fill : "#fff"
					}
				}
			},

			areas : {
				"US" : {
					value: "2617939",
					href : "#",
					tooltip: {content : "<span style=\"font-weight:bold;\">Nord (59)</span><br />Population : 2617939"},
					attrs : {
						fill : "#fff",
						stroke : "#ccc"
					},
					attrsHover : {
						fill : "#ed1c24"
					}
					
				}
			}
		});
	}
	
	function drawMENAMap () {
		$(".roaming_international_map>#mena-map").mapael({
			map : {
				name : "mena",
				defaultArea : {
					attrs : {
						fill : "#fff",
						stroke : "#bbb"
					},
					attrsHover : {
						fill : "#fff"
					}
				}
			},

			areas : {
				"jo" : {
					value: "2617939",
					href : "#",
					tooltip: {content : "<span style=\"font-weight:bold;\">Nord (59)</span><br />Population : 2617939"},
					attrs : {
						fill : "#fff",
						stroke : "#ccc"
					},
					attrsHover : {
						fill : "#ed1c24"
					}
					
				}
			}
		});
	}
	
	function drawSouthAsiaMap () {
		$(".roaming_international_map>#south-asia-map").mapael({
			map : {
				name : "south_asia",
				defaultArea : {
					attrs : {
						fill : "#fff",
						stroke : "#bbb"
					},
					attrsHover : {
						fill : "#fff"
					}
				}
			},

			areas : {
				"jo" : {
					value: "2617939",
					href : "#",
					tooltip: {content : "<span style=\"font-weight:bold;\">Nord (59)</span><br />Population : 2617939"},
					attrs : {
						fill : "#fff",
						stroke : "#ccc"
					},
					attrsHover : {
						fill : "#ed1c24"
					}
					
				}
			}
		});
	}

	function drawSoutheastAsiaMap () {
		$(".roaming_international_map>#southeast-asia-map").mapael({
			map : {
				name : "southeast_asia",
				defaultArea : {
					attrs : {
						fill : "#fff",
						stroke : "#bbb"
					},
					attrsHover : {
						fill : "#fff"
					}
				}
			},

			areas : {
				"jo" : {
					value: "2617939",
					href : "#",
					tooltip: {content : "<span style=\"font-weight:bold;\">Nord (59)</span><br />Population : 2617939"},
					attrs : {
						fill : "#fff",
						stroke : "#ccc"
					},
					attrsHover : {
						fill : "#ed1c24"
					}
					
				}
			}
		});
	}

	
	
	/*
	 * WHEN YOU CHANGE THE INTERNET SPEED <4G+, 4G AND 3G>, THE MAP OF QATAR SHOULD HAS NEW LAYERS WHICH REFLECT THE COVERED AREA OF THE CHOSEN SPEED.
	 * 
	 * */
	$(".map_coverage_speeds circle").bind("click", function () {
		var target = $(this).attr("target");
		if($(this).hasClass("active"))
			return;
		$(".map_coverage_speeds circle.active").removeClass("active");
		$(this).addClass("active");
		$(".qatar_map_drawing_place img.layers.active").hide();
		$(".qatar_map_drawing_place img."+target+"_layer").fadeIn("fast").addClass("active");
	});
	
	
	/*
	 * WHEN YOU CHANGE THE MAP FOR THE INTERNATIONAL CALLING AND ROAMING IN THE HOME PAGE, THIS IS THE ACTION
	 * INSHALLAH I WON'T FORGET WHERE THIS FUNCTION IS WHEN I NEED TO UPDATE IT, IT'S JUST A COMMENT, WHO CARES!
	 * 
	 * */
	
	$(".roaming_international_map_switcher button").bind("click", function () {
		if($(this).hasClass("active"))
			return;
		
		var img_name = $(".roaming_international_map_switcher button.active").attr("img_name");
		$(".roaming_international_map_switcher button.active").find("img").attr("src","../dist/img/maps/"+img_name+"inactive.png");
		$(".roaming_international_map_switcher button.active").removeClass("active");
		$(this).addClass("active");
		var target = $(this).attr("target");
		$(".roaming_international_map>.map-container.active").hide().removeClass("active");
		$("#"+target+"-map").show().addClass("active");
		$(this).find("img").attr("src", "../dist/img/maps/"+$(this).attr("img_name")+"active.png");
	});

});