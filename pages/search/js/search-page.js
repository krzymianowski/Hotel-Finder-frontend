
$(document).ready(function () {
    var $searchMenuHolder = $("main>.header>.search-menu>ul>li>.menu-holder");
    var $searchMenuButton = $searchMenuHolder.children(".menu-button");

    $searchMenuHolder.each(function (index) {
        $(this).parent().css("z-index", -index);
    })


    $(document).click(function (event) {
        if (!$(event.target).closest($searchMenuHolder).length) {
            $searchMenuHolder.children(".menu").each(function () {
                if ($(this).is(":visible")) {
                    let $icon = $(this).parent().find(".menu-button i");

                    $(this).fadeOut(100, function () {
                        $icon.addClass("fa-caret-down");
                        $icon.removeClass("fa-caret-up");
                    })
                    coverFadeOut();
                }
            });
        }

        $("main>.header>.search-menu>ul>li>.menu-holder").each(function () {
            if (!$(event.target).closest($(this)).length) {
                    $(this).children(".menu").fadeOut();
                    $(this).find(".icon i").addClass("fa-caret-down");
                    $(this).find(".icon i").removeClass("fa-caret-up");
            }
        })

    })

    $searchMenuButton.click(function () {

        let $searchMenuItemMenu = $(this).parent().children(".menu");
        let $icon = $(this).find("i");
        if ($searchMenuItemMenu.is(":visible")) {
            $searchMenuItemMenu.fadeToggle(100, function () {
                $icon.addClass("fa-caret-down");
                $icon.removeClass("fa-caret-up");

                let hide = true;
                $("main>.header>.search-menu>ul>li>.menu-holder>.menu").each(function () {
                    if ($(this).is(":visible")) {
                        hide = false;
                    }
                })
                if (hide) coverFadeOut();
            })
        } else {
            coverFadeIn();
            $searchMenuItemMenu.fadeToggle(250);
            $icon.removeClass("fa-caret-down");
            $icon.addClass("fa-caret-up");
        }

    })

    function coverFadeIn() {

        $("main>.header").css("box-shadow", "none");
        $("main>.footer").css("box-shadow", "none");
        $("main>.cover").fadeIn();
    }
    function coverFadeOut() {
        $("main>.cover").fadeOut("fast", function () {
            $("main>.header").css("box-shadow", "0 4px 10px var(--color_gray_5)");
            $("main>.footer").css("box-shadow", "0 -4px 10px var(--color_gray_5)");
        });
    }
})

