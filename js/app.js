/**
 * Created by qartks on 6/14/17.
 */
(function () {

    $(document).ready(function () {

        setTimeout(function () {
            if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('.slick-list.draggable').css("padding-top", "20px");
            } else {
                $('.slick-list.draggable').css("padding", "50px 0px 0 50px");
            }
        }, 1200);

        $('.real-estate-service').on('click', {content: ".real-estate-content", percent: "40%"},  DisplayContents);
        $('.automotive-service').on('click', {content: ".automotive-content", percent: "40%"},  DisplayContents);
        $('.academic-service').on('click', {content: ".academic-content", percent: "40%"},  DisplayContents);
        $('.medical-service').on('click', {content: ".medical-content", percent: "40%"},  DisplayContents);
        $('.legal-service').on('click', {content: ".legal-content", percent: "40%"},  DisplayContents);
        $('.home-service').on('click', {content: ".home-content", percent: "40%"},  DisplayContents);
        $('.financial-service').on('click', {content: ".financial-content", percent: "40%"},  DisplayContents);
        $('.entertainment-service').on('click', {content: ".entertainment-content", percent: "40%"},  DisplayContents);
        $('.travel-service').on('click', {content: ".travel-content", percent: "40%"},  DisplayContents);
        $('.insurance-service').on('click', {content: ".insurance-content", percent: "40%"},  DisplayContents);
        $('.internship-service').on('click', {content: ".internship-content", percent: "40%"},  DisplayContents);
        $('.campus-service').on('click', {content: ".campus-content", percent: "40%"},  DisplayContents);


        $('.slick-dots li button:before').on('click', function () {
            if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('.slick-list.draggable').css("padding-top", "20px");
            } else {
                $('.slick-list.draggable').css("padding", "50px 50px 0 50px");
            }
        });
        function DisplayContents(event) {

            if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('.slick-list.draggable').css("padding-top", "20px");
            } else {
                $('.slick-list.draggable').css("padding", "50px 50px 0 50px");
            }

            var content = $(event.data.content);
            var pert = event.data.percent;
            var parent = $(content).parent().parent().parent();

            if (content.css('display') == 'none') {

                removeActiveService();
                removeActiveServiceContent();

                $(event.currentTarget).toggleClass("active");

                $(parent).animateDiv("height", 800, pert, function () {
                    content
                        .velocity({opacity: 1}, {duration: 500, complete: function () {
                            $(parent).toggleClass("active");
                            $(this).toggleClass('active');
                        }}, "easeInSine")
                        .velocity("scroll", 500);
                })
            }
        }

        function removeActiveService() {
            $('.service.active').toggleClass('active');
            $('.service--info.active').toggleClass('active');
        }

        function removeActiveServiceContent() {
            $('.service--content.active')
                .velocity( { opacity: 0 }, { duration: 300 ,  complete: function () {
                    $(this).toggleClass('active');
                    $(this).parent().parent().parent().animateDiv("height", 10, "auto");
                }},  "easeOutSine" );
        }

        jQuery.fn.animateDiv = function(prop, speed, method, callback){
            var elem, height, width;
            return this.each(function(i, el){
                el = jQuery(el), elem = el.clone().css({ "height": method ,"width":"100%" }).appendTo("body");
                height = elem.css("height"),
                    width = elem.css("width"),
                    elem.remove();

                if(prop === "height")
                    el.animate({"height":height}, speed, callback);
                else if(prop === "width")
                    el.animate({"width":width}, speed, callback);
                else if(prop === "both")
                    el.animate({"width":width,"height":height}, speed, callback);
            });
        };

        $('.process--option.active').on('click', function (event) {});
        $('.process--option').on('click', function (event) {
            $('.process--option.active').toggleClass('active');
            $(event.currentTarget).toggleClass('active');
            $('.process--plate.active').toggleClass('active');
            $('.'+ event.currentTarget.attributes.data.nodeValue).toggleClass('active');
        });

    });

})();