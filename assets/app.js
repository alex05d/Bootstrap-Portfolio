$(document).ready(function () {
    console.log("page loaded");


    window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    // $('#contact-form').submit(function (e) {
    //     var name = document.getElementById('#inputName')
    //     var email = document.getElementById('#inputEmail')
    //     var message = document.getElementById('#inputMessage')

    //     if (!name.value || !email.value || !message.value) {
    //         alertify.error("Please check your entries");
    //         return false;
    //     } else {
    //         $.ajax({
    //             method: 'POST',
    //             url: '//formspree.io/xzbenpvy',
    //             data: $('#contact-form').serialize(),
    //             datatype: 'json'
    //         });
    //         e.preventDefault();
    //         $(this).get(0).reset();
    //         alertify.success("Message sent");
    //     }
    // });


});