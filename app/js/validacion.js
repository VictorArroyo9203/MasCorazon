    $(document).on("pageinit", "#panel-fixed-page1", function (event) {

        if (localStorage.User != undefined) {
            $(location).attr('href', "#add-form");
        } else {
            $(location).attr('href', "Login.html");
        }

    });

