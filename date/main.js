$(document).ready(function() {
	var isBool;
	$(".m-skill-box").find(".skill-box").click(function() {
		var isBoolF = $(".m-skill-html").is(":animated") || $(".m-skill-css").is(":animated");/* 第一层盒子动画检测 */
		var isBoolS = $(".m-skill-js").is(":animated") || $(".m-skill-ps").is(":animated");/* 第二层盒子动画检测 */
		var sBox = $(this).closest(".skill-box")[0];/* 被点击对象所在skill-box（即s盒子） */
		var sBoxS = $(sBox).siblings()[0];/* 根据点击对象不同，s盒子相邻兄弟元素赋值有差异 */
		var sBoxB = $(sBox).siblings()[2];/* 根据点击对象不同，s盒子相邻兄弟元素赋值有差异 */

		if ($(sBox).parent().index() === 0) {
			isBool = isBoolF;
		} else if ($(sBox).parent().index() === 1) {
			isBool = isBoolS;
		}
		if ($(sBox).index() === 0) {
			if ($(sBoxB).css("display") !== "none") {
				if (!isBool) {
					$(sBoxB).css("zIndex","5");
					$(sBoxS).show();
					$(sBox).css({"borderColor":"#ccc","borderRightStyle":"dashed"});
					$(sBoxS).animate({"left":"300px"},800);
					$(sBoxB).animate({"left":"600px"},800,function(){$(this).hide();});
				}
			} else {
				if (!isBool) {
					$(sBoxB).show();
					// $(sBox).css({"borderColor":"transparent","borderRightStyle":"solid","hover":""});
					//$(sBox).hover({"borderColor":"#e4e4e4"});
					$(sBoxS).animate({"left":"0"},800,function(){$(this).hide();$(sBox).removeAttr('style');});
					$(sBoxB).animate({"left":"300px"},800,function(){$(this).css("zIndex","10");});
				}
			}
		} else if ($(sBox).index() === 3) {
			if ($(sBoxS).css("display") !== "none") {
				if (!isBool) {
					$(sBoxS).css("zIndex","5");
					$(sBoxB).show();
					$(sBox).css({"borderColor":"#ccc","borderLeftStyle":"dashed"});
					$(sBoxB).animate({"left":"0"},800);
					$(sBoxS).animate({"left":"-300px"},800,function(){$(this).hide();});
				}
			} else {
				if (!isBool) {
					$(sBoxS).show();
					$(sBoxB).animate({"left":"300px"},800,function(){$(this).hide();$(sBox).removeAttr('style');});
					$(sBoxS).animate({"left":"0"},800,function(){$(this).css("zIndex","10");});
				}
			}
		}
	});
	$(".modular-m-f-icon").click(function() {
		if (!$(".modular-m-f-notes").is(":animated")) {
			console.log($(".modular-m-f-notes").css("left"));
			$(".modular-m-f-notes").fadeToggle(1500,"linear");
		}
	});
	$(".m-toggle-b-down").click(function(){
		var modularsNone;
		var modulars = $(".modular-main").closest(".modular-main");
		console.log(modulars.length);
		modulars.each(function(index,element){
			if(!$(this).is(".dis-none")) {
				modularsNone = $(this);
				console.log(modularsNone.next().index());
			}
		});
		if (modularsNone != undefined) {
			if (modularsNone.index() < modulars.length){
				modularsNone.addClass("dis-none");
				modularsNone.next().removeClass("dis-none");
				if (modularsNone.index() == modulars.length-1) {
					$(this).css("background","#e4e4e4");
				} else {
					$(".m-toggle-b-up").removeAttr("style");
				}
			}
		}
	});
	$(".m-toggle-b-up").click(function(){
		var modularsNone;
		var modulars = $(".modular-main").closest(".modular-main");
		console.log(modulars.length);
		modulars.each(function(index,element){
			if(!$(this).is(".dis-none")) {
				modularsNone = $(this);
				console.log(modularsNone.prev().index());
			}
		});
		if (modularsNone != undefined) {
			if (modularsNone.index() > 1){
				modularsNone.addClass("dis-none");
				modularsNone.prev().removeClass("dis-none");
				if (modularsNone.index() == 2) {
					$(this).css("background","#e4e4e4");
				} else {
					$(".m-toggle-b-down").removeAttr("style");
				}
			}
		}
	});
});