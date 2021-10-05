import $ from 'jquery';

function NavMenuToggle () {
    $(".nav-menus").toggleClass("open");
};

function NavMenuToggleLeft () {
    $(".nav-menus-left").toggleClass("open");
};

export  { NavMenuToggle, NavMenuToggleLeft };