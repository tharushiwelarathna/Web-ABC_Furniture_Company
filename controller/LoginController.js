
/**
 *@author Tharushi Welarathna <nirmanitharushi1@gmail.com>
 *@since 10/29/2021
 */
const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
};





$('#loginbtn').click(function () {
    let loginMail = $('#txtLoginEmail').val();
    let loginPassword = $('#txtLoginPassword').val();
    $.ajax({
        method: "GET",
        url: "http://localhost:8082/EasyCarRental_war_exploded/api/v1/admin?adminemail=" + loginMail,
        contentType: 'application/json',
        async: true,
        success: function (data) {
            console.log(data);
            if (loginPassword === data.password) {
                $('#homeLink').hide();
                $('#aboutLink').hide();
                $('#contactLink').hide();
                $('#bedRoomSuite').hide();
                $('#bedShowRoom').hide();
                $('#v-tabs-dash-tab').show();
                getAllAvailableCategory();
                getAllAvailableCategory1();

            } else {

            }
        }
    });
});


