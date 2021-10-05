import $ from 'jquery';

function SideBarToggle () {
    $('.page-sidebar').toggleClass('open');
    $('.page-main-header').toggleClass('open');
}

export default SideBarToggle;