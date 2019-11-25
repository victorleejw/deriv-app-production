(window.webpackJsonp=window.webpackJsonp||[]).push([["cashier-deposit"],{675:function(e,t,r){"use strict";var n=r(5),o=r.n(n),a=r(0),i=r.n(a);t.a=function(e){var t=e.className,r=e.is_invisible,n=e.theme,a=e.id;return i.a.createElement("div",{id:a,className:o()("barspinner","barspinner--".concat(n||"dark"),{invisible:r},t)},Array.from(new Array(5)).map((function(e,t){return i.a.createElement("div",{key:t,className:"barspinner__rect barspinner__rect--".concat(t+1," rect").concat(t+1)})})))}},677:function(e,t,r){"use strict";var n=r(2),o=r.n(n),a=r(0),i=r.n(a),c=r(30),s=r.n(c),l=(r(70),r(6)),u=r(116),p=r(3),f=r(8),m=r(11),h=r(9);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){var t=e.header,r=e.message,n=e.button_link,o=e.onClickButton,a=e.button_text,c=e.footer;return i.a.createElement("div",{className:"cashier__wrapper"},i.a.createElement(f.a,{icon:"IconCashierError",className:"cashier-error__icon"}),t&&i.a.createElement("h2",{className:"cashier-error__header"},t),r&&i.a.createElement("p",{className:"cashier__paragraph"},r),n&&i.a.createElement(u.a,{className:"cashier-error__button",to:n,onClick:o,primary:!0,large:!0},i.a.createElement("span",{className:"btn__text"},a)),!n&&a&&i.a.createElement(s.a,{className:"cashier-error__button",onClick:o,text:a,primary:!0,large:!0}),c&&i.a.createElement("h2",{className:"cashier-error__footer"},c))},E=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=b(this,(e=d(t)).call.apply(e,[this].concat(o)))).error_fields={address_city:Object(p.localize)("Town/City"),address_line_1:Object(p.localize)("First line of home address"),address_postcode:Object(p.localize)("Postal Code/ZIP"),address_state:Object(p.localize)("State/Province"),email:Object(p.localize)("Email address"),phone:Object(p.localize)("Telephone"),residence:Object(p.localize)("Country of Residence")},r.onClickButton=function(){"function"==typeof r.props.error.onClickButton&&r.props.error.onClickButton(),r.clearErrorMessage()},r.closeCashierModal=function(){r.onClickButton(),r.props.toggleCashierModal()},r.clearErrorMessage=function(){r.props.setErrorMessage("")},r.acceptTNC=function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(m.b.tncApproval());case 2:r.onClickButton();case 3:case"end":return e.stop()}}))},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e,t=this;switch(this.props.error.code){case"InvalidToken":e=i.a.createElement(v,{header:Object(p.localize)("Identity confirmation failed"),message:i.a.createElement(l.a,{i18n_default_text:"It looks like your link is incorrect or no longer valid."}),onClickButton:this.onClickButton,button_text:Object(p.localize)("Request a new link")});break;case"ASK_TNC_APPROVAL":e=i.a.createElement(v,{header:Object(p.localize)("Our terms and conditions have changed"),message:i.a.createElement(l.a,{i18n_default_text:"Please accept our updated <0>terms and conditions</0> to continue.",components:[i.a.createElement("a",{key:0,className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.deriv.com/terms-and-conditions/#general"})]}),onClickButton:this.acceptTNC,button_text:Object(p.localize)("I accept")});break;case"ASK_FIX_DETAILS":e=i.a.createElement(v,{header:Object(p.localize)("Update your personal details"),message:i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{i18n_default_text:"We can't validate your personal details because there is some information missing."})," ",this.props.error.fields?i.a.createElement(l.a,{i18n_default_text:"Please update your {{details}} to continue.",values:{details:this.props.error.fields.map((function(e){return t.error_fields[e]||e})).join(", "),interpolation:{escapeValue:!1}}}):i.a.createElement(l.a,{i18n_default_text:"Please update your details to continue."})),button_link:"/account/personal-details",onClickButton:this.closeCashierModal,button_text:Object(p.localize)("Update my details"),footer:i.a.createElement(l.a,{i18n_default_text:"Need help? <0>Contact us</0>.",components:[i.a.createElement("a",{key:0,className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.deriv.com/help-centre/"})]})});break;case"WrongResponse":e=i.a.createElement(v,{header:this.props.error.message,onClickButton:this.onClickButton,button_text:Object(p.localize)("Try again")});break;default:e=i.a.createElement(v,{header:this.props.error.message})}return e}}])&&_(r.prototype,n),o&&_(r,o),t}(i.a.Component);E.propTypes={error:o.a.object,setErrorMessage:o.a.func,toggleCashierModal:o.a.func},t.a=Object(h.b)((function(e){var t=e.modules,r=e.ui;return{setErrorMessage:t.cashier.setErrorMessage,toggleCashierModal:r.toggleCashierModal}}))(E)},678:function(e,t,r){"use strict";var n=r(2),o=r.n(n),a=r(0),i=r.n(a),c=r(30),s=r.n(c),l=(r(70),r(6)),u=r(3),p=r(9);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=m(this,(e=h(t)).call.apply(e,[this].concat(o)))).onClickSignup=function(){r.props.toggleCashierModal(),setTimeout(r.props.openRealAccountSignup,500)},r.render=function(){return i.a.createElement("div",{className:"cashier__wrapper cashier__center-align-wrapper"},i.a.createElement("div",{className:"cashier__center-align-content"},i.a.createElement("h2",{className:"cashier-error__header cashier__virtual-header"},i.a.createElement(l.a,{i18n_default_text:"You're currently using a demo account"})),r.props.has_real_account?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"cashier__paragraph cashier__text"},i.a.createElement(l.a,{i18n_default_text:"You need to switch to a real money account to use this feature."}),i.a.createElement("br",null),i.a.createElement(l.a,{i18n_default_text:"You can do this by selecting a real account from the Account Switcher."})),i.a.createElement("div",{className:"cashier__account-switch-icon"})):i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"cashier__paragraph cashier__text"},i.a.createElement(l.a,{i18n_default_text:"You need a real money account to use this feature. It's easy to create a real money account and start trading."})),i.a.createElement(s.a,{className:"cashier-error__button",has_effect:!0,text:Object(u.localize)("Create my real account"),onClick:r.onClickSignup,primary:!0,large:!0}))))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),t}(i.a.Component);_.propTypes={has_real_account:o.a.bool,openRealAccountSignup:o.a.func,toggleCashierModal:o.a.func},t.a=Object(p.b)((function(e){var t=e.client,r=e.ui;return{has_real_account:t.has_any_real_account,openRealAccountSignup:r.openRealAccountSignup,toggleCashierModal:r.toggleCashierModal}}))(_)},696:function(e,t,r){"use strict";var n=r(2),o=r.n(n),a=r(0),i=r.n(a),c=r(41),s=r.n(c),l=(r(80),r(675));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,h(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.is_loading&&i.a.createElement(l.a,null),this.props.iframe_url&&i.a.createElement(s.a,{style:{width:"100%",height:this.props.iframe_height?"100%":0},autoHide:!0,autoHeightMax:550,renderTrackHorizontal:function(e){return i.a.createElement("div",p({},e,{className:"track-horizontal",style:{display:"none"}}))},renderThumbHorizontal:function(e){return i.a.createElement("div",p({},e,{className:"thumb-horizontal",style:{display:"none"}}))}},i.a.createElement("iframe",{className:"cashier__content",height:this.props.iframe_height,src:this.props.iframe_url,frameBorder:"0",scrolling:"auto"})))}}])&&f(r.prototype,n),o&&f(r,o),t}(i.a.Component);_.propTypes={className:o.a.string,iframe_height:o.a.oneOfType([o.a.number,o.a.string]),iframe_url:o.a.string,is_loading:o.a.bool},t.a=_},738:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),a=r(0),i=r.n(a),c=r(9),s=r(677),l=r(678),u=r(696);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,h(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.container),this.props.onMount()}},{key:"render",value:function(){return this.props.is_virtual?i.a.createElement(l.a,null):i.a.createElement(i.a.Fragment,null,this.props.error.message?i.a.createElement(s.a,{error:this.props.error}):i.a.createElement(u.a,{iframe_height:this.props.iframe_height,iframe_url:this.props.iframe_url,is_loading:this.props.is_loading}))}}])&&f(r.prototype,n),o&&f(r,o),t}(i.a.Component);_.propTypes={container:o.a.string,error:o.a.object,iframe_height:o.a.oneOfType([o.a.number,o.a.string]),iframe_url:o.a.string,is_loading:o.a.bool,is_virtual:o.a.bool,onMount:o.a.func,setActiveTab:o.a.func},t.default=Object(c.b)((function(e){var t=e.client,r=e.modules;return{is_virtual:t.is_virtual,container:r.cashier.config.deposit.container,error:r.cashier.config.deposit.error,iframe_height:r.cashier.config.deposit.iframe_height,iframe_url:r.cashier.config.deposit.iframe_url,is_loading:r.cashier.is_loading,onMount:r.cashier.onMount,setActiveTab:r.cashier.setActiveTab}}))(_)}}]);
//# sourceMappingURL=core.cashier-deposit.7ace6963520910a6a75c.js.map