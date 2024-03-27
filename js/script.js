$(document).ready(function () {
    $(".menu-toggle").click(function () {
      $(".menu-toggle").toggleClass("menu-open");
      $(".menu").toggleClass("active");
    });
    $(".link").click(function () {
      $(".menu-toggle").toggleClass("menu-open");
      $(".menu").toggleClass("active");
    });
    $(".videoOne").click(function () {
      $(".overlayOne").toggleClass("active");
    });
    $(".videoTwo").click(function () {
      $(".overlayTwo").toggleClass("active");
    });
    $(".videoThree").click(function () {
      $(".overlayThree").toggleClass("active");
    });
    $(".videoFour").click(function () {
      $(".overlayFour").toggleClass("active");
    });
    $(".closeOverlayOne").click(function () {
      $(".overlayOne").toggleClass("active");
    });
    $(".closeOverlayTwo").click(function () {
      $(".overlayTwo").toggleClass("active");
    });
    $(".closeOverlayThree").click(function () {
      $(".overlayThree").toggleClass("active");
    });
    $(".closeOverlayFour").click(function () {
      $(".overlayFour").toggleClass("active");
    });
  });