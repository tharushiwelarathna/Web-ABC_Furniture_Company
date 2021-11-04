/*----------------------------------------------------------------------------------------------
 *Copyright(C) GDSE-55-56-Gang. All rights reserved.
 *Licensed under the MIT License. See License, txt in the project root for license information.
 *---------------------------------------------------------------------------------------------*/
/**
 *@author Tharushi Welarathna <nirmanitharushi1@gmail.com>
 *@since 10/13/2021
 */
var homeController = $('#home');
var AboutController = $('#about');
var ContactController = $('#contact');
var BedRoomController = $('#bedRoomSuite');
var BedController = $('#bedShowRoom');
var LoginController = $('#login')


AboutController.hide();
homeController.show();
ContactController.hide();
BedRoomController.hide();
BedController.hide();
LoginController.hide();

$('#aboutLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite');
    var LoginController = $('#login')


    AboutController.show();
    homeController.hide();
    ContactController.hide();
    BedRoomController.hide();
    BedController.hide();
    LoginController.hide();

});
$('#bedLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite');
    var LoginController = $('#login')


    BedController.show();
    homeController.hide();
    ContactController.hide();
    BedRoomController.hide();
    AboutController.hide();
    LoginController.hide();

});

$('#homeLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite');
    var LoginController = $('#login')


    AboutController.hide();
    homeController.show();
    ContactController.hide();
    BedRoomController.hide();
    BedController.hide();
    LoginController.hide();

});

$('#contactLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite');
    var LoginController = $('#login')


    homeController.hide();
    ContactController.show();
    AboutController.hide();
    BedRoomController.hide();
    BedController.hide();
    LoginController.hide();

});

$('#bedSuiteLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite');
    var LoginController = $('#login')


    homeController.hide();
    ContactController.hide();
    AboutController.hide();
    BedRoomController.show();
    BedController.hide();
    LoginController.hide();

});
$('#loginLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite');
    var LoginController = $('#login')


    homeController.hide();
    ContactController.hide();
    AboutController.hide();
    BedRoomController.hide();
    BedController.hide();
    LoginController.show();

});