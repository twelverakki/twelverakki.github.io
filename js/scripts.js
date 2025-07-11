(function ($) {
	// emailjs.init("XfIGLd7FDiSkpcEGw-ICoo");
	("use strict");
	$(window).on("load", function () {
		$(".loader").fadeOut(1000);
		var wow = new WOW({ offset: 150, mobile: false });
		wow.init();
	});
	$(".animsition").animsition({
		inClass: "fade-in",
		outClass: "fade-out",
		inDuration: 1000,
		outDuration: 700,
		linkElement: "a.project-box",
		loading: true,
		loadingParentElement: "body",
		loadingClass: "spinner",
		loadingInner:
			'<div class="double-bounce1"></div><div class="double-bounce2"></div>',
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: ["animation-duration", "-webkit-animation-duration"],
		overlay: false,
		overlayClass: "animsition-overlay-slide",
		overlayParentElement: "body",
		transition: function (url) {
			window.location.href = url;
		},
	});
	$(".popup-youtube").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-with-zoom",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	$(".navbar-toggle").on("click", function () {
		$("body").removeClass("menu-is-closed").addClass("menu-is-opened");
	});
	$(".close-menu, .click-capture, .menu-list li a").on("click", function () {
		$("body").removeClass("menu-is-opened").addClass("menu-is-closed");
		$(".menu-list ul").slideUp(300);
	});
	$(".menu-list li a").on("click", function () {
		$(".menu-list li").removeClass("active");
		$(this).closest("li").addClass("active");
	});
	if ($(".owl-carousel").length > 0) {
		$(".review-carousel").owlCarousel({
			responsive: {
				0: { items: 1 },
				720: { items: 1 },
				1280: { items: 1 },
			},
			responsiveRefreshRate: 0,
			nav: false,
			navText: [],
			animateIn: "fadeIn",
			dots: true,
		});
	}
	if ($(".pagepiling").length > 0) {
		$(".pagepiling").pagepiling({
			scrollingSpeed: 280,
			loopBottom: true,
			anchors: [
				"page1",
				"page2",
				"page3",
				"page4",
				"page5",
				"page6",
				"page7",
			],
			afterLoad: function (anchorLink, index) {
				if ($(".pp-section.active").scrollTop() > 0) {
					$(".navbar").removeClass("navbar-white");
				} else {
					$(".navbar").addClass("navbar-white");
				}
			},
		});
	}
	$("#pp-nav")
		.remove()
		.appendTo(".animsition")
		.addClass("white right-boxed d-none d-sm-block");
	$(".pp-nav-up").on("click", function () {
		$.fn.pagepiling.moveSectionUp();
	});
	$(".pp-nav-down").on("click", function () {
		$.fn.pagepiling.moveSectionDown();
	});
	$(".project-box").on("mouseover", function () {
		var index = $(".project-box").index(this);
		$(".bg-changer .section-bg")
			.removeClass("active")
			.eq(index)
			.addClass("active");
	});
	// Validasi Form dan Pengiriman Email dengan EmailJS
	if ($(".js-form").length) {
		$(".js-form").each(function () {
			$(this).validate({
				errorClass: "error",
				submitHandler: function (form) {
					// Ambil data dari form
					const name = form.name.value;
					const email = form.email.value;
					const subject = form.subject.value;
					const message = form.message.value;

					console.log(name, email, subject, message);

					// Kirim email menggunakan EmailJS
					emailjs
						.send("service_5viuebm", "template_92anrv7", {
							from_name: name,
							from_email: email,
							subject: subject,
							message: message,
						})
						.then(
							function (response) {
								$(".form-group-message").show();
								$("#error").hide();
								$("#success").show();
							},
							function (error) {
								$(".form-group-message").show();
								$("#success").hide();
								$("#error").show();
							}
						);
				},
			});
		});
	}
})(jQuery);
