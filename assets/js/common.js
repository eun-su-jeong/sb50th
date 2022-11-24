var _device = {};

// 즉시실행 IIFE(Immediately Invoked Function Expression)
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
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) ||
		/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4))) {
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
		_device.isIE = /*@cc_on!@*/ false || !!document.documentMode;
		_device.isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
		_device.isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
			return p.toString() === "[object SafariRemoteNotification]";
		})(!window["safari"] || (typeof safari !== "undefined" && safari.pushNotification));
	}

	// custom event triggering
	$(document).on("keyup", function (e) {
		if (e.which == 13) $(e.target).trigger("enter");
	});

	if (_device.isMobile) {
		// <link rel="stylesheet" href="../assets/css/common.css">
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "../assets/css/mobile.css";
		document.head.appendChild(link);
	}

})(jQuery);

var publish = function () {
	var common = {
		init: function () {
			common.setHistory();
			common.hambergerMenu();
			common.toggleModal();
			common.set50Story();
			common.textEffect();
			common.numberCounting();
		},
		// 인트로 설정 (은수정)
		hambergerMenu: function () {
			var $body = $('body');
			var $logo = $('header .logo');
			$(".hamburger").click(function () {
				$(this).toggleClass("is-active");
				if ($(this).hasClass("is-active")) {
					$('.overlay-menu').addClass('opend');
					$body.addClass('body-hidden');
				} else {
					$('.overlay-menu').removeClass('opend');
					$body.removeClass('body-hidden');
				}

				if(_device.isMobile){
					$logo.toggleClass('logo-hidden');
				}
			});
		}, set50Story: function () {
			var storySwiper = new Swiper(".st50-story", {
				slidesPerView: 2,
				spaceBetween: 20,
				// centeredSlides: true,
				effect: "slide",

				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					320: {
						slidesPerView: 1,  //브라우저가 320보다 클 때
						spaceBetween: 12,
					},
					768: {
						slidesPerView: 2,  //브라우저가 768보다 클 때
						spaceBetween: 20,
					}
				}
			});
		},
		toggleModal: function () {
			$('.openmodal').click(function (event) {
				event.preventDefault();
				$(this).modal({
					fadeDuration: 250
				});
			});
		},

		textEffect: function () {
			const upeffects = document.querySelectorAll('.upeffect');
			const active = function (entries) {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						$(entry.target).addClass("on");
					}
				});
			}
			const upeff1 = new IntersectionObserver(active);
			for (let i = 0; i < upeffects.length; i++) {
				upeff1.observe(upeffects[i]);
			}
		},

		numberCounting: function () {
			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
			$('#property-number')
				.prop('number', 110000000000000)
				.animateNumber(
					{
						number: 180000000000000,
						numberStep: comma_separator_number_step
					},
					{
						duration: 999
					}
				);
			$('#customer-number')
				.prop('number', 7000000)
				.animateNumber(
					{
						number: 7690000,
						numberStep: comma_separator_number_step
					},
					{
						duration: 999
					}
				);
		},
		setHistory: function () {
			let lbls = [];
			let effect = (_device.isMobile) ? "slide" : "fade";
			$(".ui-history .swiper-slide h5").each(function () {
				lbls.push($(this).text());
			});
			var swiper = new Swiper(".mySwiper", {
				slidesPerView: 1,
				spaceBetween: 0,
				effect: effect,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
					renderBullet: (index, className) => {
						return `<span class="${className}"><span class="icn"></span><span class="lbl">${lbls[index]}</span></span>`;
					}
				}
			});

			const intersects = document.querySelectorAll('.intersect');
			const active = function (entries) {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						$(entry.target).addClass("on");
					}
				});
			}
			const inter1 = new IntersectionObserver(active);
			for (let i = 0; i < intersects.length; i++) {
				inter1.observe(intersects[i]);
			}
			const typings = document.querySelectorAll(".typing");
			let letter = [], // 글자 모음 - 개행문자(\n)로 줄바꿈
				letters = [],
				speed = 20, // 타이핑 속도
				inters = [],
				title = [],
				delay = 0;

			for (let i = 0; i < typings.length; i++) {
				letter[i] = typings[i].innerHTML;
				delay = i * 100;
				// 줄바꿈을 위한 <br> 치환
				const changeLineBreak = (letter) => {
					return letter.map(text => text === "\n" ? "<br>" : text);
				}
				// 타이핑 효과
				const typing = async () => {
					if ($(typings[i]).hasClass("done")) return false;
					typings[i].innerHTML = "";
					// 기존코드에서 개행치환코드 추가
					letter[i] = changeLineBreak(letter[i].split(""));
					if (i > 0) await wait(delay);
					while (letter[i].length) {
						await wait(speed);
						typings[i].innerHTML += letter[i].shift();
					}
					typings[i].classList.add("done");
				}
				title[i] = function (entries) {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							typing();
						}
					});
				}
				inters[i] = new IntersectionObserver(title[i]);
				inters[i].observe(typings[i]);
			}
			function wait(ms) {
				return new Promise(res => setTimeout(res, ms))
			}
		}
	};
	return common;
}();

// $(document).ready(function() {})
$(function () {
	// plugins
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
		if (typeof (recursion) == "number") {
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