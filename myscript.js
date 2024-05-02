$(function () {

    var shrinkHeader = 70;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if ((scroll >= shrinkHeader) && ($(window).width() >= 1280)) {
            $('.navbar').addClass('smaller');
        }
        else {
            $('.navbar').removeClass('smaller');
        }

    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$(function () {
    var submitIcon = $('.search_icon');
    var inputBox = $('.search_input');
    var searchBox = $('.search_box');
    var isOpen = false;
    submitIcon.click(function () {
        if (isOpen == false) {
            searchBox.addClass('searchbox_open');
            inputBox.focus().css('padding-left', '0');
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox_open');
            inputBox.focusout().css('padding-left', '7vw');
            isOpen = false;
        }
    });
    function buttonUp() {
        var inputVal = $('.search_input').val();
        inputVal = $.trim(inputVal).length;
        if (inputVal !== 0) {

        } else {
            $('.search_input').val('');
            $('.search_icon').css('display', 'block');
        }
    }
    inputBox.keyup(buttonUp);
});

$(function () {
    $('#nav-icon3').click(function () {
        $('.sliding-nav').toggleClass('sliding-nav-open');
        $('#nav-icon3').toggleClass('menu-opened');
    });

    $('.open').click(function () {
        $('.sliding-nav').toggleClass('sliding-nav-open');
        $('.mask').removeClass('show');
        $('#nav-icon3').toggleClass('menu-opened');
    })
});


$(document).ready(function () {
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
    });
});






(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

        let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/19/",
        elektrikeel = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > elektrikeel) {
      elektrikeel = dayMonth + nextYear;
    }

    const countDown = new Date(elektrikeel).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / (second));


            if (distance < 0) {
                clearInterval(x);
                document.getElementsByClassName("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";

            }

        }, 0)
}());




const scrollers = document.querySelectorAll(".instagramfeed");


if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {

        scroller.setAttribute("data-animated", true);


        const scrollerInner = scroller.querySelector(".scroll");
        const scrollerContent = Array.from(scrollerInner.children);


        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.gototop').fadeIn(200);
        } else {
            $('.gototop').fadeOut(200);
        }
    });


    $('.gototop').click(function (event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
    })
});








$('.draw-me').children('rect').each(function() {
	var path = this;
	// Get the length of each path	
	var pathLength = path.getTotalLength();
	$(this).css('stroke-dasharray', pathLength);
	$(this).css('stroke-dashoffset', pathLength);
});


$(document).ready(function() {
	$('.generaladmission').mouseenter(
		function() {
			$(this).children('.draw-me').children('rect').each(function() {
				var path = this;
				var pathLength = path.getTotalLength();
				$(this).css('stroke-dasharray', pathLength);
				$(this).css('stroke-dashoffset', 0);
                $(path).css('stroke-width', '18px');
                $(path).css('stroke', '#fff');
              
              
			});
		},
	
	);
    $('.generaladmission').mouseleave(
		function() {
			$(this).children('.draw-me').children('rect').each(function() {
				var path = this;
				var pathLength = path.getTotalLength();
				$(this).css('stroke-dasharray', pathLength);
				$(this).css('stroke-dashoffset', pathLength);


			});
		},
	
	);
});

$(function() {
	$('.vip').mouseenter(
		function() {
			$(this).children('.draw-me').children('rect').each(function() {
				var path = this;
				var pathLength = path.getTotalLength();
				$(this).css('stroke-dasharray', pathLength);
				$(this).css('stroke-dashoffset', 0);
                $(path).css('stroke-width', '18px');
                $(path).css('stroke', '#fff');
              
              
			});
		},
	
	);
    $('.vip').mouseleave(
		function() {
			$(this).children('.draw-me').children('rect').each(function() {
				var path = this;
				var pathLength = path.getTotalLength();
				$(this).css('stroke-dasharray', pathLength);
				$(this).css('stroke-dashoffset', pathLength);


			});
		},
	
	);
});

setTimeout(function(){
    $('#loading').remove();
},8100);
