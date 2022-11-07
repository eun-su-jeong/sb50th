var _device = {};

// 즉시실행 IIFE
(function ($) {

	_device = {
		isMobile: false,
		isAndroid: false,
		isiOS: false,
		hasNotch: false,
		isiOSChrome: false,
		isChrome: false,
		isEdge: false,
		isEdgeChromium: false,
		isFirefox: false,
		isIE: false,
		isOpera: false,
		isSafari: false,
		winW: 0,
		winH: 0
	}

	// platform & browser detection
	var ua = navigator.userAgent.toLowerCase();
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua)
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4))) {
		_device.isMobile = true;
		_device.isAndroid = ua.indexOf("android") > -1;
		_device.isiOS = /iPhone/.test(navigator.userAgent) && !window.MSStream;
		var aspect = window.screen.width / window.screen.height;
		_device.hasNotch = (_device.isiOS && aspect.toFixed(3) === "0.462");
		_device.isiOSChrome = navigator.userAgent.match("CriOS");
	} else {
		_device.isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
		_device.isEdge = !_device.isIE && !!window.StyleMedia;
		_device.isEdgeChromium = _device.isChrome && (navigator.userAgent.indexOf("Edg") != -1);
		_device.isFirefox = typeof InstallTrigger !== "undefined";
		_device.isIE = /*@cc_on!@*/false || !!document.documentMode;
		_device.isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
		_device.isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window["safari"] || (typeof safari !== "undefined" && safari.pushNotification));
	}

	// custom event triggering
	$(document).on("keyup", function (e) {
		if (e.which == 13) $(e.target).trigger("enter");
	});

})(jQuery);

var publish = function () {
	var common = {
		init: function () {
			common.device();
			common.skip();
			common.header();
			common.footer();
			common.gnb();
			common.lnb();
			common.refresh();
			common.getIRC();
			common.accordion();
			common.tab();
			common.field();
			common.calendar();
			common.iframe();
			common.adj();
			common.observer();
			common.sitemap();
			common.terms();
			common.index();
		},
		device: function () {
			$("html").toggleClass("ie", _device.isIE);
		},
		// skip to main
		skip: function() {
			var $skip = "";
			var $main = [];
			if ($(".btn-skip").length < 1) {
				$("body").prepend("<a href=\"#main\" class=\"btn-skip\">본문 바로가기</a>");
			}
			setTimeout(function() {
				$skip = $(".btn-skip");
				$main[0] = $("main");
				$main[1] = $("main .main");
				if ($(".container").hasClass("index")) {
					$skip.attr("href", "#" + $main[0].attr("id"));
					$main[0].attr("tabindex", 0);
					$main[1].removeAttr("tabindex");
				} else {
					$skip.attr("href", "#" + $main[1].attr("id"));
					$main[0].removeAttr("tabindex");
					$main[1].attr("tabindex", 0);
				}
			}, 400);
		},
		header: function () {
			$("header").each(function() {
				var $header = $(this),
					$section = $("section", $header),
					sectionH = $section.height(),
					scrollT = 0,
					state = false;
				$(window).on("scroll", function () {
					scrollT = $(this).scrollTop(),
					state = (scrollT > sectionH);
					if (!$("html").hasClass("site-nav-on") || state) {
						$header.toggleClass("scrolled", state);
					}
				});
			});
		},
		footer: function () {
			$("footer").each(function () {
				var $footer = $(this),
					$stt = $("> .stt", $footer);
				setTimeout(function () {
					var footerH = $footer.height();
					$(".prefooter").css({
						"height": footerH
					});
					// $(window).on("scroll", function () {
					// 	var footerT = $(document).height() - $(window).height(),
					// 		scrollP = ($(this).scrollTop() - footerT + 20) / footerH;
					// 	if (scrollP >= 0) {
					// 		$footer.css("opacity", scrollP);
					// 	}
					// });
				}, 100);
				if ($stt.length > 0) {
					var scrollT,
						windowH = $(window).height() * 0.5;
					$stt.appendTo(".container");
					$(".btn-stt", $stt).off("click").on("click", function() {
						$("html, body").animate({
							scrollTop: 0
						}, 400);
						return false;
					});
					$(window).on("scroll", function () {
						scrollT = $(this).scrollTop();
						$("html").toggleClass("stt-on", (scrollT > windowH));
					});
				}
			});
		},
		gnb: function() {
			$(".gnb").each(function () {
				var $gnb = $(this),
					$a3Li = $("> .a3 > ul > li", $gnb),
					$a4Group = $("> .a4-group", $gnb),
					$a4GroupLi = $("> ul > li", $a4Group),
					$li = $.merge($a3Li, $a4GroupLi),
					idx, $div;
				$gnb.on("mouseenter", function() {
					$("header").addClass("gnb-expanded");
				}).on("mouseleave", function() {
					$("header").removeClass("gnb-expanded");
				});
				$li.on("mouseenter mouseleave", function(e) {
					$div = $(this).grandparent();
					idx = ($div.hasClass("a3")) ? $a3Li.index($(this)) : $a4GroupLi.index($(this));
					if (e.type == "mouseenter") {
						$a3Li.eq(idx).addClass("hover").siblings().removeClass("hover");
						$a4GroupLi.eq(idx).addClass("hover").siblings().removeClass("hover");
					} else {
						$a3Li.eq(idx).removeClass("hover");
						$a4GroupLi.eq(idx).removeClass("hover");
					}
				});
			});
			$(document).off("click", ".gnb a").on("click", ".gnb a", function(event) {
				$(this).blur();
				$("html").addClass("gnb-clicked");
				setTimeout(function() {
					$("html").removeClass("gnb-clicked");
				}, 400);
			});
		},
		lnb: function () {
			$(".lnb").each(function () {
				var $lnb = $(this),
					$a3Li = $("div.a3 > ul > li.current", $lnb);
				$a4Li = $("div.a4 > ul > li", $a3Li);
				$a5 = $("div.a5", $a4Li);
				$a4Li.each(function () {
					var isCurrent = $(this).hasClass("current");
					$(this)
						.toggleClass("has-a5", ($("div.a5:not(.hidden)", $(this)).length > 0))
						.toggleClass("expanded", isCurrent);
					$("div.a5", $(this)).toggle(isCurrent);
				});
				$("> a", $a4Li).off("click").on("click", function () {
					var $thisLi = $(this).parent("li"),
						$thisA5 = $("div.a5", $thisLi),
						duration = 300;
					if ($thisLi.hasClass("has-a5")) {
						if ($thisLi.hasClass("expanded")) {
							$thisLi.removeClass("expanded");
							$thisA5.slideUp(duration);
						} else {
							$thisLi.addClass("expanded");
							$thisA5.slideDown(duration);
							$a4Li.not($thisLi).removeClass("expanded");
							$a5.not($thisA5).slideUp(duration);
						}
					}
					return false;
				});
			});
		},
		getIRC: function () {
			$(".irc").each(function () {
				var $irc = $(this),
					$input = $("input[type=\"radio\"], input[type=\"checkbox\"]", $irc);
				common.setIRC($input, $input.is(":checked"));
				if ($input.is(":radio")) {
					var name = $input.attr("name"),
						$group = $("input[type=\"radio\"][name=\"" + name + "\"]");
					for (var i = 0; i < $group.length; i++) {
						var $this = $group.eq(i);
						common.setIRC($this, $this.is(":checked"));
					}
				} else {
					//
				}
			});
		},
		setIRC: function (input, state) {
			var $irc = input.closest(".irc");
			$irc.toggleClass("checked", state);
		},
		modal: function (element, options) {
			var $html = $("html"),
				statusClass = "has-modal";
			var defaults = {
				title: options.title || "한국투자저축은행",
				autoOpen: options.autoOpen || true,
				dialogClass: options.dialogClass || "ui-dialog-custom",
				modal: options.modal || true,
				draggable: options.draggable || false,
				width: options.width || "800",
				height: options.height || "auto",
				resizable: options.resizable || false,
				position: options.position || {
					my: "center center",
					at: "center center",
					of: window
				},
				show: options.show || "fade",
				create: onCreate,
				open: onOpen,
				beforeClose: onBeforeClose,
				close: onClose
			}
			var $place = $("<div>", { class: "ui-dialog-place" }).append(element),
				$modal = $place.dialog(defaults),
				$dialog;
			$(".btn-modal-close").on("click", function () {
				// do something on modal close
			});
			function onCreate() {
				$html.addClass(statusClass);
			}
			function onOpen() {
				$dialog = $(this).closest(".ui-dialog");
				$dialog.addClass("is-opened");
				$dialog.toggleClass("has-no-titlebar", (options.title == ""));
				var exception = ["ui-dialog-index-01", "ui-dialog-term"];
				if (!$dialog.hasClasses(exception)) {
					var $nano = $(".main", $dialog),
						$nanoContent = $("> .content-area", $nano),
						contentH = $nanoContent.prop("scrollHeight");
					$nano.addClass("nano");
					$nanoContent.addClass("nano-content");
					var maxH = $(window).height() - 240,
						tabIndex = (contentH > maxH) ? 0 : -1;
					var $nano = $(".nano", $dialog).nanoScroller({
						alwaysVisible: true,
						preventPageScrolling: true,
						tabIndex: tabIndex
					});
				}
				options && options.open && options.open();
			}
			function onBeforeClose() {
				$dialog.removeClass("is-opened");
			}
			function onClose() {
				$html.removeClass(statusClass);
				options && options.close && options.close();
			}
			return $modal;
		},
		modalUpdate: function(element, callback) {
			$dialog = element || $(".ui-dialog").get(0);
			var exception = ["ui-dialog-index-01", "ui-dialog-term"];
			if (!$dialog.hasClasses(exception)) {
				var $nano = $(".main", $dialog),
					$nanoContent = $("> .content-area", $nano),
					contentH = $nanoContent.prop("scrollHeight");
				$nano.addClass("nano");
				$nanoContent.addClass("nano-content");
				var maxH = $(window).height() - 240,
					tabIndex = (contentH > maxH) ? 0 : -1;
				var $nano = $(".nano", $dialog).nanoScroller({
					alwaysVisible: true,
					preventPageScrolling: true,
				});
				$nanoContent.attr({"tabindex": tabIndex});
			}
			$dialog.css({"transition": "top .4s ease"});
			$(".ui-dialog-content", $dialog).dialog("option", "position", {my: "center", at: "center", of: window});
			setTimeout(function() {
				$dialog.css({"transition": "none"});
			}, 500);
			callback && callback();
		},
		modalAlert: function (msg, options) {
			var $html = $("html"),
				statusClass = "has-alert";
			var $msg = $("<div class=\"alert-msg\">" + msg + "</div>"),
				$place = $("<div>", { class: "ui-dialog-place" }).append($msg),
				$modal = $place.dialog({
					title: "알림",
					autoOpen: true,
					dialogClass: "ui-dialog-alert",
					modal: true,
					draggable: false,
					width: "400",
					height: "auto",
					resizable: false,
					position: {
						my: "center center",
						at: "center center",
						of: window
					},
					show: "fade",
					create: onCreate,
					open: onOpen,
					beforeClose: onBeforeClose,
					close: onClose
				});
			var $dialog;
			function onCreate() {
				$html.addClass(statusClass);
			}
			function onOpen() {
				var $this = $(this);
				$dialog = $this.closest(".ui-dialog");
				var $bar = $("<div class=\"btn-bar\"></div>"),
					$btn = $(".ui-dialog-titlebar-close", $dialog);
				$btn.html("확인").appendTo($bar);
				$bar.appendTo($(".ui-dialog-content", $dialog));
				$btn.on("click", function () {
					$this.dialog("destroy").remove();
				});
				$dialog.addClass("is-opened");
				options && options.open && options.open();
			}
			function onBeforeClose() {
				$dialog.removeClass("is-opened");
			}
			function onClose() {
				$html.removeClass(statusClass);
				options && options.close && options.close();
			}
			return $modal;
		},
		modalConfirm: function (msg, lbl0, lbl1, options) {
			var $html = $("html"),
				statusClass = "has-confirm";
			var $msg = $("<div class=\"confirm-msg\">" + msg + "</div>"),
				$place = $("<div>", { class: "ui-dialog-place" }).append($msg),
				$modal = $place.dialog({
					title: "확인",
					autoOpen: true,
					dialogClass: "ui-dialog-confirm",
					modal: true,
					draggable: false,
					width: "400",
					height: "auto",
					resizable: false,
					position: {
						my: "center center",
						at: "center center",
						of: window
					},
					show: "fade",
					create: onCreate,
					open: onOpen,
					beforeClose: onBeforeClose,
					close: onClose
				});
			var $dialog;
			function onCreate() {
				$html.addClass(statusClass);
			}
			function onOpen() {
				var $this = $(this);
				$dialog = $this.closest(".ui-dialog");
				var $bar = $("<div class=\"btn-bar\"></div>"),
					$btn = [];
				$btn[0] = $(".ui-dialog-titlebar-close", $dialog);
				$btn[1] = $("<button type=\"button\"></div>");
				$btn[0].addClass("ui-dialog-confirm-button ui-dialog-confirm-cancel").html(lbl0).appendTo($bar);
				$btn[1].addClass("ui-dialog-confirm-button ui-dialog-confirm-confirm").html(lbl1).appendTo($bar);
				$bar.appendTo($(".ui-dialog-content", $dialog));
				$btn[0].on("click", function () {
					$this.dialog("destroy").remove();
					options && options.onCancel && options.onCancel();
				});
				$btn[1].on("click", function () {
					$this.dialog("destroy").remove();
					options && options.onConfirm && options.onConfirm();
				});
				$dialog.addClass("is-opened");
				options && options.open && options.open();
			}
			function onBeforeClose() {
				$dialog.removeClass("is-opened");
			}
			function onClose() {
				$html.removeClass(statusClass);
				options && options.close && options.close();
			}
			return $modal;
		},
		modalLoading: function (param) {
			if (param == "close") {
				$(".ui-dialog-loading").fadeOut(400, function() {
					$(".ui-dialog-place", $(this)).dialog("close");
				});
			} else {
				if ($(".ui-dialog-loading").length > 0) {
					$(".ui-dialog-loading").remove();
				}
				var $html = $("html"),
					statusClass = "has-loading";
				var $msg = $("<div class=\"ui-loading\">"
						 + "<div class=\"md\"><span class=\"loading-item\"></span><span class=\"loading-item\"></span></div>"
						 + "<div class=\"mt\">"
						 + "<h5>처리중입니다.</h5>"
						 + "<div class=\"desc\">"
						 + "<p>잠시만 기다려주세요.</p>"
						 + "</div>"
						 + "</div>"
						 + "</div>"),
					$place = $("<div>", { class: "ui-dialog-place" }).append($msg),
					$modal = $place.dialog({
						title: "로딩",
						autoOpen: true,
						dialogClass: "ui-dialog-loading",
						modal: true,
						draggable: false,
						width: "320",
						height: "auto",
						resizable: false,
						position: {
							my: "center center",
							at: "center center",
							of: window
						},
						show: "fade",
						create: onCreate,
						open: function() {
							return $modal;
						},
						beforeClose: onBeforeClose,
						close: function() {
							$modal.remove();
						}
					});
				function onCreate() {
					$html.addClass(statusClass);
				}
				function onBeforeClose() {
					$html.removeClass(statusClass);
				}
			}
		},
		accordion: function () {
			$(".ui-accordion:not(\".accordion-initiated\")").each(function () {
				var $ui = $(this),
					$acc = $(".accordion", $ui);
				function init() {
					for (var i = 0; i < $acc.length; i++) {
						var $this = $acc.eq(i);
						if ($this.hasClass("css-mode")) {
							// css mode
						} else {
							run($this, !$this.hasClass("accordion-expanded"), 0);
						}
						set($this);
						$ui.addClass("accordion-initiated");
					}
				}
				function set(acc) {
					var $get = $(".accordion-get", acc);
					if (!($get.is("a") || $get.is("button"))) {
						$get.attr({
							"role": "button",
							"tabindex": 0
						});
					}
					$get.off("click enter").on("click enter", function () {
						var state = acc.hasClass("accordion-expanded"),
							idx = $acc.index(acc);
						run(acc, state, 300);
						if (!state && $ui.hasClass("exclusive")) {
							for (var i = 0; i < $acc.length; i++) {
								if (i != idx) run($acc.eq(i), true, 300);
							}
						}
						return false;
					});
				}
				function run(element, state, duration) {
					var $get = $(".accordion-get", element),
						$set = $(".accordion-set", element),
						title = (state) ? "내용 펼치기" : "내용 접기";
					if (element.hasClass("css-mode")) {
						// css mode
					} else {
						if (state) {
							$set.slideUp(duration);
						} else {
							$set.slideDown(duration);
						}
						$get.attr({
							"title": title,
							"aria-expanded": !state
						});
						element.toggleClass("accordion-expanded", !state);
					}
				}
				init();
			});
		},
		tab: function () {
			$(".tab-grp").each(function (index, element) {
				var $wrap = $(element),
					$buttons = $wrap.find(".tab-btn");
				var _index = $buttons.filter(".current").index();
				_index = _index < 0 ? 0 : _index;
				set($buttons, _index);
				$buttons.off("click").on("click", function (event) {
					set($buttons, $(this).index());
				});
			});
			function set($buttons, index) {
				for (var i = 0; i < $buttons.length; i++) {
					var state = (i == index),
						title = state ? "선택됨" : "선택되지 않음";
					$buttons.eq(i)
					.toggleClass("current", state)
					.attr({
						"title": title,
						"aria-selected": state
					});
				}
			}
		},
		field: function () {
			$(".ui-field").each(function () {
				var $ui = $(this),
					$get = $(".field-get", $ui),
					$set = $(".field-set", $ui);
				if ($get.hasClass("field-radio")) {
					get();
					var $radio = $("input[type=\"radio\"]", $get),
						name = $radio.attr("name"),
						$group = $("input[type=\"radio\"][name=\"" + name + "\"]");
					$group.on("change", function () {
						common.getRadioRadio(name);
					});
				}
			});
		},
		calendar: function () {
			setTimeout(function () {
				$(".w2calendar_header_last_month, .w2calendar_header_next_month").attr({
					"type": "button",
					"aria-hidden": true,
					"tabindex": -1
				});
			}, 100);
		},
		iframe: function () {
			return false;
			$(".iframe-term").each(function () {
				var $iframe = $(this);
				$iframe.attr({
					"frameborder": 0,
					"scrolling": "no"
				});
				setTimeout(function () {
					// $iframe.height( $iframe.contents().outerHeight() );
					$iframe.height("500px");
				}, 500);
			});
		},
		getCheckedRadio: function (name) {
			var $group = $("input[type=\"radio\"][name=\"" + name + "\"]");
			for (var i = 0; i < $group.length; i++) {
				if ($group.eq(i).is(":checked")) return i;
			}
		},
		refresh: function () {
			return false;
		},
		xml: function () {
			var tag = [];
			var tags = [
				"header", "main", "footer", "aside", "nav", "section", "article", "figure", "figcaption",
				"h1", "h2", "h3", "h4", "h5", "h6",
				"div", "ol", "ul", "li", "dl", "dt", "dd",
				"table", "caption", "colgroup", "col", "thead", "tbody", "tfoot", "tr", "th", "td", "summary",
				"p", "span",
				"a", "button", "img", "map", "area",
				"form", "fieldset", "legend", "select", "option", "input", "textarea", "label",
				/* input
				text tel search password num
				radio checkbox
				button submit file hidden
				*/
				"hr", "em", "strong", "address", "small", "b", "sup", "sub", "del", "pre", "code", "i", "u",
				"frameset", "frame", "iframe", "object", "embed", "audio", "video", "meta", "canvas",
				"template", "noframes", "param",
				"xfcol", "xfselect", "xfselect1", "xfinput", "xfsecret", "xftextarea", "w2inputcalendar", "w2upload"
			];
			$("a").each(function () {
				var href = $(this).attr("href"),
					target = $(this).attr("target"),
					$attrs = $("<w2:attributes></w2:attributes>").prependTo($(this));
				if (href) $("<w2:href>" + $(this).attr("href") + "</w2:href>").appendTo($attrs);
				if (target) $("<w2:target>" + $(this).attr("target") + "</w2:target>").appendTo($attrs);
				$(this).removeAttr("href").removeAttr("target");
			});
			$("button").each(function () {
				var type = $(this).attr("type"),
					$attrs = $("<w2:attributes></w2:attributes>").prependTo($(this));
				if (type) $("<w2:type>" + $(this).attr("type") + "</w2:type>").appendTo($attrs);
				$(this).removeAttr("type");
			});
			$("select").each(function () {
				var $choices = $("<xf:choices></xf:choices>").prependTo($(this)),
					$option = $("option", $(this)),
					$item;
				for (var i = 0; i < $option.length; i++) {
					$item = $("<xf:item></xf:item>").appendTo($choices);
					$("<xf:label>[CDATA[" + $option.eq(i).text() + "]]</xf:label>").appendTo($item);
					$("<xf:value>[CDATA[" + $option.eq(i).val() + "]]</xf:value>").appendTo($item);
				}
				$(this).find("option").remove();
				$(this).attr({ "appearance": "minimal", "renderType": "select" }).changeElementType("xfselect1");
			});
			$("input[type=\"text\"], input[type=\"num\"]").each(function () {
				if ($(this).hasClass("field-calendar")) {
					$(this).attr({ "renderType": "component", "footerDiv": false, "renderDiv": true, "focusOnDataSelect": false, "calendarValueType": "yearMonthDate", "rightAlign": true }).removeAttr("type").changeElementType("w2inputcalendar");
				} else {
					$(this).attr({ "dataType": $(this).attr("type"), "initValue": $(this).attr("value") }).removeAttr("type").removeAttr("value").changeElementType("xfinput");
				}
			});
			$("input[type=\"password\"]").each(function () {
				$(this).attr({ "initValue": $(this).attr("value") }).removeAttr("type").removeAttr("value").changeElementType("xfsecret");
			});
			$("textarea").each(function () {
				$(this).changeElementType("xftextarea");
			});
			$("input[type=\"checkbox\"]").each(function () {
				$(this).removeAttr("type").attr({ "appearance": "full", "renderType": "native" }).changeElementType("xfselect");
			});
			$("input[type=\"radio\"]").each(function () {
				$(this).removeAttr("type").attr({ "appearance": "full", "renderType": "native" }).changeElementType("xfselect1");
			});
			$("input[type=\"file\"]").each(function () {
				$(this).removeAttr("type").changeElementType("w2upload");
			});
			$("col").each(function () {
				$(this).changeElementType("xfcol");
			});
			$("th, td").each(function () {
				var scope = $(this).attr("scope"),
					rowspan = $(this).attr("rowspan"),
					colspan = $(this).attr("colspan"),
					$attrs;
				if (scope || rowspan || colspan) {
					$attrs = $("<w2:attributes></w2:attributes>").prependTo($(this));
					if (scope) $("<w2:scope>" + $(this).attr("scope") + "</w2:scope>").appendTo($attrs);
					if (rowspan) $("<w2:rowspan>" + $(this).attr("rowspan") + "</w2:rowspan>").appendTo($attrs);
					if (colspan) $("<w2:colspan>" + $(this).attr("colspan") + "</w2:colspan>").appendTo($attrs);
				}
				$(this).removeAttr("scope").removeAttr("rowspan").removeAttr("colspan");
			});

			var html = $("body").html()
				.replace(/^\s+/gm, "")	// remove leading white spaces
				.replace(/(\r\n|\n|\r)/gm, "") // remove line breaks
				.replace(/<img(.*?)>/gm, "<img$1></img>")
				.replace(/readonly="readonly"/gm, "readOnly=\"true\"")
				.replace(/rendertype/gm, "renderType")
				.replace(/datatype/gm, "dataType")
				.replace(/initvalue/gm, "initValue")
				.replace(/footerdiv/gm, "footerDiv")
				.replace(/renderdiv/gm, "renderDiv")
				.replace(/focusondataselect/gm, "focusOnDataSelect")
				.replace(/calendarvaluetype/gm, "calendarValueType")
				.replace(/rightalign/gm, "rightAlign")
				.replace(/\[CDATA\[/gm, "<![CDATA[")
				.replace(/\]\]/gm, "]]>")
				.replace(/<br(.*?)>/gm, "<br$1/>")
				.replace(/<hr(.*?)>/gm, "<hr$1/>")

			for (var i = 0; i < tags.length; i++) {
				tag[0] = new RegExp("<" + tags[i] + "( |>)", "g");
				tag[1] = new RegExp("</" + tags[i] + ">", "g");
				if (tags[i] == "img") {
					html = html.replace(tag[0], "<xf:image$1");
					html = html.replace(tag[1], "</xf:image>");
				} else if (tags[i] == "xfselect") {
					html = html.replace(tag[0], "<xf:select$1");
					html = html.replace(tag[1], "</xf:select>");
				} else if (tags[i] == "xfselect1") {
					html = html.replace(tag[0], "<xf:select1$1");
					html = html.replace(tag[1], "</xf:select1>");
				} else if (tags[i] == "xfinput") {
					html = html.replace(tag[0], "<xf:input$1");
					html = html.replace(tag[1], "</xf:input>");
				} else if (tags[i] == "xfsecret") {
					html = html.replace(tag[0], "<xf:secret$1");
					html = html.replace(tag[1], "</xf:secret>");
				} else if (tags[i] == "xftextarea") {
					html = html.replace(tag[0], "<xf:textarea$1");
					html = html.replace(tag[1], "</xf:textarea>");
				} else if (tags[i] == "w2upload") {
					html = html.replace(tag[0], "<w2:upload$1");
					html = html.replace(tag[1], "</w2:upload>");
				} else if (tags[i] == "w2inputcalendar") {
					html = html.replace(tag[0], "<w2:inputCalendar$1");
					html = html.replace(tag[1], "</w2:inputCalendar>");
				} else {
					if (tags[i] == "div") {
						html = html.replace(tag[0], "<xf:group$1");
					} else {
						html = html.replace(tag[0], "<xf:group tagname=\"" + tags[i] + "\"$1");
					}
					html = html.replace(tag[1], "</xf:group>");
				}
			}
			html = html
				.replace(/><\/w2:upload>/gm, "/>")
				.replace(/tagname="xfcol"/gm, "tagname=\"col\"")
				.replace(/<!-- Code injected by live-server -->(.*?)<\/script>/gm, "")
				.replace(/<script(.*?)>(.*?)<\/script>/gm, "")
				.replace(/<noscript(.*?)>(.*?)<\/noscript>/gm, "")
				.replace(/<link(.*?)>/gm, "")
				.replace(/&nbsp;/gm, "");

			console.log(html);
			const textarea = document.createElement("textarea");
			document.body.appendChild(textarea);
			textarea.value = html;
			textarea.select();
			document.execCommand("copy");
			document.body.removeChild(textarea);
		},
		adj: function () {
			$(".gridview-auto-height").each(function() {
				common.adjGridView($(this));
				common.setGridView($(this));
			});
		},
		observer: function() {
			$(".w2grid").each(function() {
				var $grid = $(this),
					trLen = [];
				trLen[0] = $(".w2grid_main tbody", $grid).children(":not(.w2grid_hidedRow)").length;
				// $("table thead", $grid).each(function() {
				// 	var $thead = $(this);
				// 	if (!$thead.get(0).hasAttribute("id")) {
				// 		$thead.attr({"aria-hidden": true});
				// 	}
				// });
				removeRole($grid);
				var gvObserver = new MutationObserver(function (records) {
					trLen[1] = $(".w2grid_main tbody", $grid).children(":not(.w2grid_hidedRow)").length;
					if (trLen[0] !== trLen[1]) {
						common.setGridView($grid);
						trLen[0] = trLen[1];
					}
				});
				gvObserver.observe($grid.get(0), {
					childList: true,
					subtree: true
				});
				function removeRole(gv) {
					gv.removeAttr("role");
					$("table, colgroup, col, thead, tbody, tfoot, tr, th, td", gv).removeAttr("role");
				}
			});
			$("#___processbar2").each(function() {
				var $loadingOverlay = $(this),
					$html = $("html"),
					statusClass = "has-loading";
				var ldObserver = new MutationObserver(function (mutations) {
					var styles = $loadingOverlay.attr("style").split(";"),
						style = {},
						split = "",
						state = false;
					for (var i = 0, len = styles.length; i < len; i++) {
						split = styles[i].split(":");
						style[$.trim(split[0])] = $.trim(split[1]);
					}
					state = (style.display == "block");
					$loadingOverlay.toggleClass("block", state);
					if (state) {
						$html.addClass(statusClass);
					} else {
						$html.removeClass(statusClass);
					}
				});
				ldObserver.observe($loadingOverlay.get(0), {
					attributes: true,
					attributeFilter: ["style"]
				});
			});
		},
		adjGridView: function(gv) {
			gv.height(function () {
				return $(this).find("table").height();
			});
		},
		setGridView: function(gv) {
			common.adjGridView(gv);
			var trLen = $(".w2grid_main tbody", gv).children(":not(.w2grid_hidedRow)").length;
			if (trLen > 0) {
				gv.removeClass("has-no-result");
				$(".msg-gridview-no-result-custom", gv).remove();
			} else {
				var msg = $(".msg-gridview-no-result-default", gv).html(),
					className = "msg-gridview-no-result-custom";
				if ($($("." + className), gv).length < 1) {
					$msg = $("<div><span class=\"icn\"><span class=\"dot\"></span><span class=\"dot\"></span><span class=\"dot\"></span></span><span class=\"lbl\">" + msg + "</span></div>").appendTo(gv);
					gv.addClass("has-no-result");
					$msg.attr("aria-hidden", true).addClass(className);
				}
			}
		},
		sitemap: function (commands) {
			var $html = $("html"),
				$container = $(".container", $html),
				$sitemap = $(".sitemap", $container),
				$a = $("a", $sitemap),
				$close = $(".run-site-nav"),
				$nano,
				scrollH = $(".a4-group", $sitemap).height(),
				minH = $(window).height() - $("section.a3", $sitemap).height();
			$sitemap.accessibility({
				tabIndex: -1,
				ariaHidden: true
			});
			$(document).on("focusin", function(e) {
				if ($html.hasClass("site-nav-on") && $sitemap.find(e.target).length < 1) {
					sitemapOff();
				}
			});
			$(".run-site-nav").off("click").on("click", function () {
				sitemapOn($(this));
			});
			if (commands == "off") {
				sitemapOff();
			}
			function sitemapOn(el) {
				if (el) $close = el;
				var scrollT = $(document).scrollTop();
				$sitemap.accessibility({
					tabIndex: 0,
					ariaHidden: false
				});
				$html
					.attr("data-scrollTop", scrollT)
					.addClass("site-nav-on");
				$container.scrollTop(scrollT);
				$nano = $(".nano", $sitemap).nanoScroller({
					preventPageScrolling: true,
					tabIndex: 0
				});
				$(".btn-sitemap-close").off("click").on("click", function () {
					sitemapOff();
				});
				sitemapInit();
			}
			function sitemapOff() {
				$html.removeClass("site-nav-on");
				$sitemap.accessibility({
					tabIndex: -1,
					ariaHidden: true
				});
				$(".nano", $sitemap).nanoScroller({
					scroll: "top"
				});
				setTimeout(function () {
					var scrollT = $html.attr("data-scrolltop") || 0;
					if (scrollT) $("html, body").scrollTop(scrollT).removeAttr("data-scrolltop");
					$close.focus();
				}, 10);
			}
			function sitemapInit() {
				var $a3Li = $(".a3 li", $sitemap),
					$a3A = $("> a", $a3Li),
					$a4Ul = $(".a4-group > article > ul", $sitemap),
					$a4Li = $("> li", $a4Ul),
					$a4A = $("a", $a4Ul),
					$content = $(".nano-content", $nano);
				$a4Li.filter(":last-of-type").css("min-height", minH);
				$a3A.off("click").on("click", function (e) {
					var idx = $a3A.index($(this)),
						toTop = $a4Li.eq(idx).position().top + $a4Ul.scrollTop()
					$(".nano-content", $nano).stop().animate({
						"scrollTop": toTop
					}, {
						queue: false,
						duration: 600,
						specialEasing: {
							"scrollTop": "easeOutExpo"
						}
					});
					return false;
				});
				var a4Tops = [];
				for (var i = 0; i < $a4Li.length; i++) {
					a4Tops.push($a4Li.eq(i).position().top)
				}
				$content.on("scroll", function() {
					var thisTop = $(this).scrollTop(),
						idx = 0;
					for (var i = 0; i < a4Tops.length; i++) {
						if (thisTop > (a4Tops[i] - (scrollH * 0.3))) idx = i;
					}
					$a3Li.eq(idx).addClass("current").siblings("li").removeClass("current");
				});
				$a3Li.on("mouseenter", function() {
					var idx = $a3Li.index($(this));
					setBlob(idx);
				});
				function setBlob(idx) {
					var $blob = $(".blob", $sitemap),
						$thisA = $("a", $a3Li.eq(idx)),
						left = $thisA.position().left + parseInt($thisA.css("padding-left")),
						width = $thisA.width(),
						duration = 150;
					$blob.animate({
						left: left,
						width: width
					}, {
						queue: false,
						duration: duration
					})
				}
			}
		},
		index: function() {
			$(".pane.has-stage").each(function() {
				var $window= $(window),
					$pane = $(this),
					winH = $window.height(),
					winT = $window.scrollTop(),
					paneT = $pane.offset().top,
					ratio = 0.65,
					state = false;
				// $(window).on("scroll", function () {
				// 	winT = $(this).scrollTop();
				// 	state = (paneT - winT) < (winH * ratio);
				// 	$pane.toggleClass("on-stage", state);
				// });
				$pane.addClass("off-stage")
				$(window).on("scroll", function () {
					winT = $(this).scrollTop();
					state = (paneT - winT) > (winH * ratio);
					$pane.toggleClass("off-stage", state);
				});
			});
		},
		carousel: function(name) {
			var config = {},
				carousel = false;
			switch (name) {
				case "bnd":
					config = {
						ui: ".bnd-carousel",
						slidesPerView: 1,
						spaceBetween: 60,
						effect: "fade",
						speed: 400,
						autoplay: false,
						loop: true,
						parallax: false,
						simulateTouch: false,
						paginationType: "bullets"
					}
					break;
				case "bnr":
					config = {
						ui: ".bnr-carousel",
						slidesPerView: 1,
						spaceBetween: 60,
						effect: "slide",
						speed: 400,
						autoplay: false,
						loop: true,
						parallax: false,
						simulateTouch: false,
						paginationType: "bullets"
					}
					break;
				case "vis":
					config = {
						ui: ".vis-carousel",
						slidesPerView: 1,
						spaceBetween: 40,
						effect: "slide",
						speed: 400,
						autoplay: {
							delay: 4000,
							disableOnInteraction: false
						},
						loop: true,
						parallax: true,
						simulateTouch: false,
						paginationType: "bullets"
					}
					break;
				default:
					break;
			}
			carousel = setCarousel(config);
			function setCarousel(config) {
				var $ui = $(config.ui),
					swiper = false;
				$ui.each(function () {
					var $li = $(".swiper-slide", $ui),
						$navigation = $(".swiper-navigation", $ui),
						$pagination = $(".swiper-pagination", $ui),
						$operation = $(".swiper-operation", $ui),
						container = $(".swiper-container", $ui).get(0);
					var $prev = $("<a href=\"#\" class=\"swiper-button prev\"><span class=\"icn\"></span><span class=\"lbl\">이전</span></a>").appendTo($navigation),
						$next = $("<a href=\"#\" class=\"swiper-button next\"><span class=\"icn\"></span><span class=\"lbl\">다음</span></a>").appendTo($navigation),
						$pp = $("<a href=\"#\" class=\"swiper-button pp\"><span class=\"icn\"></span><span class=\"lbl\"></span></a>").appendTo($operation);
					swiper = new Swiper(container, {
						slidesPerView: config.slidesPerView || 1,
						spaceBetween: config.spaceBetween || 0,
						effect: config.effect || "slide",
						speed: config.speed || 400,
						autoplay: config.autoplay || false,
						loop: config.loop || false,
						parallax: config.parallax || false,
						simulateTouch: config.simulateTouch || false,
						watchSlidesVisibility: true,
						navigation: {
							prevEl: $prev[0],
							nextEl: $next[0]
						},
						pagination: {
							el: $pagination[0],
							type: config.paginationType || "bullets",
							clickable: true
						},
						on: {
							init: onInit,
							transitionEnd: onTransitionEnd
						}
					});
					function onInit() {
						setTimeout(function() {
							var $lbl = $(".lbl", $pp);
							if ($ui.hasClass("paused")) {
								swiper.autoplay.stop();
								$lbl.text("자동재생");
							} else {
								$lbl.text("일시정지");
							}
							$.merge($prev, $next).removeAttr("aria-label");
							$pp.off("click").on("click", function (e) {
								e.preventDefault();
								var state = $ui.hasClass("paused"),
									text = state ? "자동재생" : "일시정지";
								if (state) {
									swiper.autoplay.start();
								} else {
									swiper.autoplay.stop();
								}
								$ui.toggleClass("paused", !state);
								$lbl.text(text);
							});
							$ui.toggleClass("has-only-slide", ($li.length == 1));
						}, 100)
					}
					function onTransitionEnd() {
						var $slide = $(".swiper-slide", $ui),
							$bullet = $(".swiper-pagination-bullet", $pagination);
						for (var i = 0; i < $slide.length; i++) {
							var state = $slide.eq(i).hasClass("swiper-slide-visible"),
								tabIndex = state ? 0 : -1;
							$slide.eq(i).attr("aria-hidden", !state);
							$("a, button", $slide.eq(i)).attr("tabindex", tabIndex);
						}
						for (var i = 0; i < $bullet.length; i++) {
							var state = $bullet.eq(i).hasClass("swiper-pagination-bullet-active");
							$bullet.eq(i).attr("aria-selected", state);
							if (state) {
								$bullet.eq(i).attr("title", "선택됨");
							} else {
								$bullet.eq(i).removeAttr("title");
							}
						}
					}
				});
				return swiper;
			}
			return carousel;
		},
		terms: function() {
			var $nano = $(".terms-scroll .nano").nanoScroller({
				alwaysVisible: true,
				preventPageScrolling: true,
				tabIndex: 0
			});
		},
		getReader: function () {
			var getAcrobatInfo = function () {
				var getBrowserName = function () {
					return this.name = this.name || function () {
						var userAgent = navigator ? navigator.userAgent.toLowerCase() : "other";
						if (userAgent.indexOf("chrome") > -1) {
							return "chrome";
						} else if (userAgent.indexOf("safari") > -1) {
							return "safari";
						} else if (userAgent.indexOf("msie") > -1 || navigator.appVersion.indexOf("Trident/") > 0) {
							return "ie";
						} else if (userAgent.indexOf("firefox") > -1) {
							return "firefox";
						} else {
							return userAgent;
						}
					}();
				};
				var getActiveXObject = function (name) {
					try { return new ActiveXObject(name); } catch (e) { }
				};
				var getNavigatorPlugin = function (name) {
					for (key in navigator.plugins) {
						var plugin = navigator.plugins[key];
						if (plugin.name == name) return plugin;
					}
				};
				var getPDFPlugin = function () {
					return this.plugin = this.plugin || function () {
						if (getBrowserName() == "ie") {
							// load the activeX control
							// AcroPDF.PDF is used by version 7 and later
							// PDF.PdfCtrl is used by version 6 and earlier
							return getActiveXObject("AcroPDF.PDF") || getActiveXObject("PDF.PdfCtrl");
						} else {
							return getNavigatorPlugin("Adobe Acrobat") || getNavigatorPlugin("Chrome PDF Viewer") || getNavigatorPlugin("WebKit built-in PDF");
						}
					}();
				};
				var isAcrobatInstalled = function () {
					return !!getPDFPlugin();
				};
				var getAcrobatVersion = function () {
					try {
						var plugin = getPDFPlugin();
						if (getBrowserName() == "ie") {
							var versions = plugin.GetVersions().split(",");
							var latest = versions[0].split("=");
							return parseFloat(latest[1]);
						}
						if (plugin.version) return parseInt(plugin.version);
						return plugin.name
					}
					catch (e) {
						return null;
					}
				}
				return {
					browser: getBrowserName(),
					acrobat: isAcrobatInstalled() ? "installed" : false,
					acrobatVersion: getAcrobatVersion()
				};
			};
			var info = getAcrobatInfo();
			return ((info.browser != "ie") || (info.acrobat));
		},
		a11y: function () {
			// <title>페이지타이틀</title>
			var domain = "한국투자저축은행",
				$h3 = $("main .main .title-bar h3"),
				delimiter = " - ",
				title = domain;
			if ($h3.length > 0) {
				setTimeout(function() {
					title += delimiter + $h3.text();
					document.title = title;
				}, 400);
			}
			// <a title="새창열림">
			$(".blank").each(function() {
				$(this).attr({"title": "새창열림"});
			});
			// current tab to page title
			$(".tab-grp").each(function() {
				var $grp = $(this),
					$btn = $(".tab-btn", $grp);
				setTimeout(function() {
					setTabTitle($grp);
				}, 500);
				$btn.on("click", function() {
					setTabTitle($grp);
				});
			});
			function setTabTitle(el) {
				setTimeout(function() {
					var $current = $(".tab-btn.current");
					document.title += delimiter + $current.find(".lbl").text();
				}, 100);
			}
			// .bbs-search
			$(".bbs-search").each(function() {
				var $ui = $(this);
				$("select", $ui).attr({ "title": "검색 분류 선택" });
				$("input[type=text]", $ui).attr({ "title": "검색어 입력" });
				$("button .lbl", $ui).text("검색");
			});
			// <label for>
			$(".tdl-form label.for").each(function() {
				var $label = $(this),
					label = $label.text(),
					$dd = $label.closest("dl").find("dd"),
					title = "",
					$first = $dd.find("input[type=text], select, textarea").filter(":visible:first"),
					$field, $group, $next;
				if ($first.length > 0) {
					if (!$first.get(0).hasAttribute("title") || $first.attr("title") == "title") {
						title = label.replace(/\s\s+/g, " ");
						if (title == "주민등록번호") {
							$first.attr({ "title": title + " 앞자리" });
							$group = $first.closest(".field-group");
							$next = $group.find(".field-input").eq(1).find("input[type=text], input[type=number]");
							if ($next.length) $next.attr({"title": title + " 뒷자리"});
						} else if (title == "외국인등록번호") {
							$first.attr({ "title": title + " 앞자리" });
							$group = $first.closest(".field-group");
							$next = $group.find(".field-input").eq(1).find("input[type=text], input[type=number]");
							if ($next.length) $next.attr({ "title": title + " 뒷자리" });
						} else if (title == "사업자번호" || title == "사업자등록번호") {
							$first.attr({ "title": title + " 첫번째자리" });
							$group = $first.closest(".field-group");
							$next = $group.find(".field-input").eq(1).find("input[type=text], input[type=number]");
							if ($next.length) $next.attr({ "title": title + " 두번째자리" });
							$next = $group.find(".field-input").eq(2).find("input[type=text], input[type=number]");
							if ($next.length) $next.attr({ "title": title + " 세번째자리" });
						} else if (title == "휴대폰번호" || title == "전화번호" || title == "자택전화번호" || title == "직장전화번호") {
							$first.attr({ "title": title + " 첫번째자리" });
							$group = $first.closest(".field-group").next(".field-group");
							$next = $group.find(".field-input").eq(0).find("input[type=text], input[type=number]");
							if ($next.length) $next.attr({ "title": title + " 두번째자리" });
							$next = $group.find(".field-input").eq(1).find("input[type=text], input[type=number]");
							if ($next.length) $next.attr({ "title": title + " 세번째자리" });
						} else if (title == "E-mail" || title == "이메일주소") {
							title = "이메일";
							$first.attr({ "title": title + " 아이디" });
							$group = $first.closest(".field-group");
							$next = $group.find(".field-input").eq(1).find("input[type=text]");
							if ($next.length) $next.attr({ "title": title + " 도메인" });
							$group = $group.next(".field-group");
							$next = $group.find(".field-select");
							if ($next.length) $next.attr({ "title": title + " 도메인 선택" });
						} else if (title == "자택주소" || title == "직장주소") {
							$first.attr({ "title": title + " 우편번호" });
							$field = $first.closest(".field").next(".field");
							$next = $field.find("input[type=text]");
							if ($next.length) $next.attr({ "title": title + " 기본주소" });
							$field = $field.next(".field");
							$next = $field.find("input[type=text]");
							if ($next.length) $next.attr({ "title": title + " 상세주소" });
						} else if (title == "생년월일") {
							$first.attr({ "title": title + " 년" });
							$group = $first.closest(".field-group").next(".field-group");
							$next = $group.find("input[type=text]");
							if ($next.length) $next.attr({ "title": title + " 월" });
							$group = $next.closest(".field-group").next(".field-group");
							$next = $group.find("input[type=text]");
							if ($next.length) $next.attr({ "title": title + " 일" });
						} else {
							$first.attr({ "title": title });
						}
					}
				}
			});
			// <img alt="">
			$("main img").each(function() {
				var $img = $(this);
				if (!this.hasAttribute("alt")) $img.attr({ "alt": "" });
			});
		}
	};
	return common;
}();

$(function () {

	$.fn.hasClasses = function (selectors) {
		var self = this;
		for (var i in selectors) {
			if ($(self).hasClass(selectors[i])) return true;
		}
		return false;
	};

	$.fn.changeElementType = function (newType) {
		var newElements = [];
		$(this).each(function () {
			var attrs = {};
			$.each(this.attributes, function (idx, attr) {
				attrs[attr.nodeName] = attr.nodeValue;
			});
			var newElement = $("<" + newType + "/>", attrs).append($(this).contents());
			$(this).replaceWith(newElement);
			newElement.push(newElement);
		});
		return $(newElements);
	};

	$.fn.grandparent = function (recursion) {
		if (recursion == undefined) recursion = 2;
		if (typeof(recursion) == "number") {
			recursion = parseInt(recursion);
			if (recursion > 0) {
				grandsome = $(this);
				for (var i = 0; i < recursion; i++) {
					grandsome = grandsome.parent();
				}
				return grandsome;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};

	$.fn.accessibility = function (options) {
		var defaults = {
			tabIndex: -1,
			ariaHidden: true
		};
		var settings = $.extend(true, defaults, options);
		return this.each(function () {
			$(this).attr({
				"aria-hidden": settings.ariaHidden
			});
			$("a, button, input, select, textarea", $(this)).attr({
				"tabindex": settings.tabIndex
			});
		});
	}

	publish.init();

});
