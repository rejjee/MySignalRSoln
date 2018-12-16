
(function () {

    var chat = $.connection.chat;

    var donefunction = function () {
        chat.server.announceToEverybody('Connected!');
        $.connection.hub.logging = true;
    };

    var failfunction = function () {
        writeToPage('error');
    }

    var getServerDateTime = function () {
        chat.server.getServerDateTime()
        .done(function (data) { writeToPage(data) })
        .fail(function (e) { writeToPage(e); });
    }


    chat.client.announceToEverybody = function (message) {
        writeToPage(message);
    }

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + '<br />');
    }

    $.connection.hub.start()
    .done(donefunction)
    .fail(failfunction);

    $("#myButton").on("click", function () { getServerDateTime(); })

})()