(window.webpackJsonp=window.webpackJsonp||[]).push([["toggle-menu-drawer"],{715:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(8),i=n(6),c=n.n(i),s=n(2),l=n.n(s),u=n(3),f=function(e){var t=e.alignment,n=e.closeBtn,r=c()("drawer__header",t);return o.a.createElement(o.a.Fragment,null,t&&"right"===t?o.a.createElement("div",{className:r},o.a.createElement("div",{className:"drawer__icons drawer__icons-btn-close",onClick:n},o.a.createElement(a.a,{icon:"IconClose",className:"drawer__icons-icon-close"})),o.a.createElement("div",{className:"drawer__notifications"},o.a.createElement("h4",{className:"drawer__notifications-header"},Object(u.localize)("all notifications")))):o.a.createElement("div",{className:r},o.a.createElement("div",{className:"drawer__icons drawer__icons-btn-close",onClick:n},o.a.createElement(a.a,{icon:"IconClose",className:"drawer__icons-icon-close"})),o.a.createElement("div",{className:"drawer__icons drawer__brand-logo"},o.a.createElement("div",{className:"drawer__image"}))))};f.propTypes={alignment:l.a.string,closeBtn:l.a.func};var p=n(11),m=n(37);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=b(this,(e=w(t)).call.apply(e,[this].concat(o)))).drawerItemClicked=function(){n.props.hideDrawers(),n.props.collapseItems&&n.props.collapseItems()},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.link_to,n=e.text,r=e.icon,a=e.custom_action;return o.a.createElement("div",{className:"drawer__item",onClick:this.drawerItemClicked},a?o.a.createElement("a",{className:"drawer__item-link",onClick:a},o.a.createElement("span",{className:"drawer__item-link-text"},r,n)):o.a.createElement(m.a,{className:"drawer__item-link",to:t},o.a.createElement("span",{className:"drawer__item-link-text"},r,n)))}}])&&d(n.prototype,r),a&&d(n,a),t}(o.a.Component);g.propTypes={collapseItems:l.a.func,custom_action:l.a.func,hideDrawers:l.a.func,href:l.a.string,icon:l.a.node,link_to:l.a.string,text:l.a.string};var h=Object(p.b)((function(e){return{hideDrawers:e.ui.hideDrawers}}))(g);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=j(this,(e=k(t)).call.apply(e,[this].concat(o)))).state={is_collapsed:!1},n.collapseItems=function(){n.setState({is_collapsed:!n.state.is_collapsed})},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=this.state.is_collapsed,n=this.props,r=n.text,a=n.items,i={visibility:t?"visible":"hidden"},s=c()("drawer__parent-item",{"drawer__parent-item--show":t}),l=c()("drawer__items",{"drawer__items--show":t});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"drawer__item",onClick:this.collapseItems},o.a.createElement("span",{className:s},r)),o.a.createElement("div",{className:l,style:i},o.a.createElement("div",{className:"items-group"},a.map((function(t,n){return o.a.createElement(h,E({key:n},t,{collapseItems:e.collapseItems}))})))))}}])&&O(n.prototype,r),a&&O(n,a),t}(o.a.Component)).propTypes={items:l.a.array,text:l.a.string};var D=n(111);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=C(this,(e=T(t)).call.apply(e,[this].concat(o)))).state={is_this_drawer_on:!1},n.setRef=function(e){n.ref=e},n.hide=function(){n.scrollToggle(!1),n.props.hideDrawers()},n.handleClickOutside=function(e){n.state.is_this_drawer_on&&n.ref&&!n.ref.contains(e.target)&&n.hide()},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),n=t,a=[{key:"getDerivedStateFromProps",value:function(e,t){return"left"===e.alignment?t.is_this_drawer_on=e.is_main_drawer_on:"right"===e.alignment&&(t.is_this_drawer_on=e.is_notifications_drawer_on),t}}],(r=[{key:"scrollToggle",value:function(e){this.is_open=e,document.body.classList.toggle("no-scroll",this.is_open)}},{key:"render",value:function(){var e,t,n,r=this.state.is_this_drawer_on,a=this.props,i=a.alignment,s=a.closeBtn,l=a.children,u=c()("drawer__bg",{"drawer--show":r}),p=c()("drawer",(e={},t="drawer--".concat(i),n=i,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return o.a.createElement(D.CSSTransition,{in:r,timeout:150,classNames:{enter:"drawer__container--enter",enterDone:"drawer__container--enter-done",exit:"drawer__container--exit"},unmountOnExit:!0},o.a.createElement("aside",{className:"drawer-container"},o.a.createElement("div",{className:u,onClick:this.handleClickOutside},o.a.createElement("div",{ref:this.setRef,className:p},o.a.createElement(f,{alignment:i,closeBtn:s}),l))))}}])&&S(n.prototype,r),a&&S(n,a),t}(o.a.Component);I.propTypes={alignment:l.a.string,children:l.a.oneOfType([l.a.array,l.a.object]),closeBtn:l.a.func,footer:l.a.func,hideDrawers:l.a.func,icon_class:l.a.string,icon_link:l.a.string,is_main_drawer_on:l.a.bool,is_notifications_drawer_on:l.a.bool};var M=Object(p.b)((function(e){var t=e.ui;return{is_main_drawer_on:t.is_main_drawer_on,is_notifications_drawer_on:t.is_notifications_drawer_on,hideDrawers:t.hideDrawers}}))(I);var R=function(e){var t,n,r,a=e.style,i=e.toggled,s=a||"switch-button",l=c()(s,(t={},n="".concat(s,"--toggled"),r=i,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t));return o.a.createElement("div",{className:l})};R.propTypes={style:l.a.string,toggled:l.a.bool};var z=R,B=function(e){var t=e.text,n=e.to_toggle,r=e.toggle;return o.a.createElement("div",{className:"drawer-item__toggle",onClick:r},o.a.createElement("span",null,t),o.a.createElement(z,{toggled:n}))};function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}B.propTypes={text:l.a.string,to_toggle:l.a.bool,toggle:l.a.func};var q=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=L(this,(e=J(t)).call.apply(e,[this].concat(o)))).showDrawer=function(){var e=n.props.alignment;"left"===e?n.props.showMainDrawer():"right"===e&&n.props.showNotificationsDrawer()},n.closeDrawer=function(){n.props.hideDrawers()},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.icon_class,n=e.icon,r=e.alignment,a=e.children,i=c()("header__navbar-icons","header__navbar-icons--".concat(t));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:i,onClick:this.showDrawer},n),o.a.createElement(M,{alignment:r,closeBtn:this.closeDrawer},a))}}])&&A(n.prototype,r),a&&A(n,a),t}(o.a.Component);q.propTypes={alignment:l.a.string,children:l.a.oneOfType([l.a.array,l.a.object]),footer:l.a.func,hideDrawers:l.a.func,icon:l.a.shape({className:l.a.string}),icon_class:l.a.string,showMainDrawer:l.a.func,showNotificationsDrawer:l.a.func};var G=Object(p.b)((function(e){var t=e.ui;return{showMainDrawer:t.showMainDrawer,showNotificationsDrawer:t.showNotificationsDrawer,hideDrawers:t.hideDrawers}}))(q),K=n(27),Q=n(16),U=function(e){var t=e.is_dark_mode,n=e.is_logged_in,r=e.is_mobile,i=e.is_positions_drawer_on,c=e.toggleDarkMode,s=e.togglePositionsDrawer;return o.a.createElement("div",{className:"drawer__items-container"},o.a.createElement("div",{className:"list-items-container"},r&&o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{text:Object(u.localize)("Trade"),icon:o.a.createElement(a.a,{icon:"IconTrade",className:"drawer__icon"}),link_to:K.a.trade}),o.a.createElement(h,{text:Object(u.localize)("Portfolio"),icon:o.a.createElement(a.a,{icon:"IconPortfolio",className:"drawer__icon"}),link_to:K.a.portfolio}),o.a.createElement(h,{text:Object(u.localize)("Statement"),icon:o.a.createElement(a.a,{icon:"IconReports",className:"drawer__icon"}),link_to:K.a.statement}),o.a.createElement("hr",{className:"hr"}),o.a.createElement(B,{text:Object(u.localize)("Dark Mode"),toggle:c,to_toggle:t}))),!(!n||!r)&&o.a.createElement("div",{className:"drawer__footer"},o.a.createElement(h,{icon:o.a.createElement(a.a,{icon:"IconLogout",className:"drawer__icon"}),text:Object(u.localize)("Logout"),custom_action:function(){i&&s(),Object(Q.c)()}})))};U.propTypes={is_dark_mode:l.a.bool,is_logged_in:l.a.bool,is_mobile:l.a.bool,is_positions_drawer_on:l.a.bool,toggleDarkMode:l.a.func,togglePositionsDrawer:l.a.func};var V=Object(p.b)((function(e){var t=e.client,n=e.ui;return{is_logged_in:t.is_logged_in,is_dark_mode:n.is_dark_mode_on,is_mobile:n.is_mobile,is_positions_drawer_on:n.is_positions_drawer_on,toggleDarkMode:n.toggleDarkMode,togglePositionsDrawer:n.togglePositionsDrawer}}))(U);t.default=function(){return o.a.createElement(G,{alignment:"left",icon:o.a.createElement(a.a,{icon:"IconHamburger"}),icon_class:"header__menu-toggle"},o.a.createElement(V,null))}}}]);
//# sourceMappingURL=toggle-menu-drawer.400d2b030392ed88794b.js.map