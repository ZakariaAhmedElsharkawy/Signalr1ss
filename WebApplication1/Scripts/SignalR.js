function value() {
    return document.getElementById("Message").value;
}

$.connection.zikaHub.client.announce = function (message) {
    var para = document.createElement("p");
    var node = document.createTextNode(message);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);

}
    document.getElementById("Send").addEventListener("click", function myFunction() {

        $.connection.hub.start()
            .done(function () {
                console.log("It Work !!");
                console.log(value())
                $.connection.zikaHub.server.announce(document.getElementById("Message").value);


            })
            .fail(function () { alert("Fail") });
    });






