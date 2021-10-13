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
var BedController = $('#bedShowRoom')


AboutController.hide();
homeController.show();
ContactController.hide();
BedRoomController.hide();
BedController.hide();

$('#aboutLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite')


    AboutController.show();
    homeController.hide();
    ContactController.hide();
    BedRoomController.hide();
    BedController.hide();

});
$('#bedLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite')


    BedController.show();
    homeController.hide();
    ContactController.hide();
    BedRoomController.hide();
    AboutController.hide();

});

$('#homeLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite')


    AboutController.hide();
    homeController.show();
    ContactController.hide();
    BedRoomController.hide();
    BedController.hide();

});

$('#contactLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite')


    homeController.hide();
    ContactController.show();
    AboutController.hide();
    BedRoomController.hide();
    BedController.hide();

});

$('#bedSuiteLink').click(function () {
    var homeController = $('#home');
    var AboutController = $('#about');
    var ContactController = $('#contact');
    var BedController = $('#bedShowRoom');
    var BedRoomController = $('#bedRoomSuite')


    homeController.hide();
    ContactController.hide();
    AboutController.hide();
    BedRoomController.show();
    BedController.hide();

});