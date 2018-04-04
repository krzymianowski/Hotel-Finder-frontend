
$(document).ready(function () {
    var $searchMenuHolder = $("main>.header>.search-menu>ul>li>.menu-holder");
    var $searchMenuButton = $searchMenuHolder.children(".menu-button");

    $(document).click(function (event) {
        // let $icon = $("#current-user>#user-name i");

        if (!$(event.target).closest($searchMenuHolder).length) {
            $searchMenuHolder.children(".menu").each(function () {
                if ($(this).is(":visible")) {
                    let $icon = $(this).parent().find(".menu-button i");

                    $(this).fadeOut(100, function () {
                        $icon.toggleClass("fa-caret-down");
                        $icon.toggleClass("fa-caret-up");
                    })
                    coverFadeOut();
                }
            });

            // if ($searchMenuHolder.children(".menu").is(":visible")) {
            //     $searchMenuHolder.children(".menu").fadeOut(100, function (event) {
            //         $searchMenuButton.find("i").toggleClass("fa-caret-down");
            //         $searchMenuButton.find("i").toggleClass("fa-caret-up");
            //         // $('#current-user>.user-name').toggleClass("active");
            //     });
            // }
        }
    })

    $searchMenuButton.click(function () {

        let $searchMenuItemMenu = $(this).parent().children(".menu");
        let $icon = $(this).find("i");
        if ($searchMenuItemMenu.is(":visible")) {
            $searchMenuItemMenu.fadeToggle(100, function(){
                $icon.toggleClass("fa-caret-down");
                $icon.toggleClass("fa-caret-up");

                let hide = true;
                $("main>.header>.search-menu>ul>li>.menu-holder>.menu").each(function () {
                    if ($(this).is(":visible")) {
                        hide = false;
                    }
                })
                if(hide) coverFadeOut();
            })
        } else {
            coverFadeIn();
            $searchMenuItemMenu.fadeToggle(250);
            $icon.toggleClass("fa-caret-down");
            $icon.toggleClass("fa-caret-up");
        }

    })

    function coverFadeIn() {

        $("main>.header").css("box-shadow","none");
        $("main>.footer").css("box-shadow","none");
        $("main>.cover").fadeIn();
    }
    function coverFadeOut() {
        $("main>.cover").fadeOut("fast", function(){
            $("main>.header").css("box-shadow","0 4px 10px var(--color_gray_5)");
            $("main>.footer").css("box-shadow","0 -4px 10px var(--color_gray_5)");
        });
    }
})

