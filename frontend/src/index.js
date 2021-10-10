import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// font awesome
import '@fortawesome/fontawesome-free/css/all.css';
// ico-font
import './css/icofont.css';
// Themify icon
import './css/themify.css';
// Flag icon
import './css/flag-icon.css';
// Feather icon
import './css/feather-icon.css';
// Plugins css start
import './css/prism.css';
import './css/whether-icon.css';
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// App css
import './css/style.css';
import './css/light-1.css';
// Responsive css-
import './css/responsive.css';




// latest jquery
// import 'jquery/dist/jquery.min.js'; 
// import $ from 'jquery/dist/jquery.min.js'; 
// import $ from 'jquery/src/jquery';
// import $ from 'jquery';
// import * as $ from 'jquery';;
// import './js/jquery-3.2.1.min.js';

// Bootstrap js
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// feather icon js
// import './js/icons/feather-icon/feather.min.js';
// import './js/icons/feather-icon/feather-icon.js';

// Sidebar menu
import './js/sidebar-menu.js';
import './js/config.js';

// Plugins JS start
// import './js/prism/prism.min.js';
// import './js/clipboard/clipboard.min.js';
// import './js/general-widget.js'; // requires .owlCarousel
import './js/height-equal.js';
import './js/tooltip-init.js';
// Plugins JS Ends

// Theme js
import './js/script.js';
import './js/theme-customizer/customizer.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);