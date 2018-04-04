var mobileIn = 700;


$(document).ready(function () {
    $(document).click(function (event) {
        let $userMenu = $("#current-user>.user-menu");
        let $icon = $("#current-user>#user-name i");

        if (!$(event.target).closest('#current-user').length) {
            if ($userMenu.is(":visible")) {
                $userMenu.slideToggle(100, function () {
                    $icon.toggleClass("fa-caret-down");
                    $icon.toggleClass("fa-caret-up");
                    $('#current-user>.user-name').toggleClass("active");
                });
            }
        }

        if (!$(event.target).closest('nav').length && !$(event.target).closest('header>.group>.menu-button').length) {
            if ($('nav').is(":visible") && $(window).width() <= mobileIn) {
                $("nav").slideToggle("fast");
            }
        }
    })

    let $userButton = $("#current-user");
    $userButton.children(".user-name").click(function () {
        let $userMenu = $userButton.children(".user-menu");
        let $icon = $userButton.find("i");
        if ($userMenu.is(":visible")) {
            $userMenu.slideToggle(100, function () {
                $icon.toggleClass("fa-caret-down");
                $icon.toggleClass("fa-caret-up");
                $userButton.children(".user-name").toggleClass("active");
            });
        } else {
            $userButton.children(".user-name").toggleClass("active");
            $userMenu.slideToggle(250);
            $icon.toggleClass("fa-caret-down");
            $icon.toggleClass("fa-caret-up");
        }
    })

    var $loginForm = $("body>.login");
    if ($loginForm.length) {
        // $loginForm.hide();

        $("body>.login .login-dialog>.head>.exit").click(function () {
            $loginForm.fadeOut("fast");
        });

        $("#temporaryLoginButton").click(function () {
            $loginForm.fadeIn("fast");
        })

        $("#footerLoginBtn").click(function () {
            $loginForm.fadeIn("fast");
        })
    }

    var $menuButton = $("header>.group>.menu-button");
    $menuButton.click(function () {
        $("nav").slideToggle("fast");
    })
})

$(window).resize(function (event) {
    if (window.innerWidth > mobileIn) {
        if (!$("nav").is(":visible")) {
            $("nav").show();
        }
    } else {
        if ($("nav").is(":visible")) {
            $("nav").hide();
        }
    }
})