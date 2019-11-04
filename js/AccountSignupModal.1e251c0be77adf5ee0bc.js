(window.webpackJsonp=window.webpackJsonp||[]).push([["AccountSignupModal"],{1197:function(e,t,n){},1219:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),i=n(246),o=n.n(i),c=(n(478),n(255)),s=n.n(c),l=(n(476),n(18)),u=n.n(l),p=(n(55),n(1177)),d=n.n(p),f=(n(1178),n(21)),b=n(1),_=n.n(b),m=n(0),g=n.n(m),y=n(11),w=n(2),v=n(9),O=n(49),h=n(98);n(1197);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k={password:"",residence:""},D=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=P(this,(e=C(t)).call.apply(e,[this].concat(a)))).state={has_valid_residence:!1},n.onResidenceSelection=function(){n.setState({has_valid_residence:!0})},n.onSignupComplete=function(e){if(e)throw Error(e);n.props.isModalVisible(!1),n.props.enableApp()},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=t.onSignup,r=t.residence_list;return g.a.createElement("div",{className:"account-signup"},g.a.createElement(f.c,{initialValues:k,validate:function(e){return function(e,t){var n={};if(e.password&&(e.password.length<6||!Object(O.f)(e.password))&&(n.password=!0),e.residence){var r=t.findIndex((function(t){return t.text.toLowerCase()===e.residence.toLowerCase()}));-1!==r&&"DISABLED"!==t[r].disabled||(n.residence=Object(w.localize)("Unfortunately, {{website_name}} is not available in your country.",{website_name:h.website_name}))}else n.residence=!0;return n}(e,r)},onSubmit:function(t){var a=r.findIndex((function(e){return e.text.toLowerCase()===t.residence.toLowerCase()})),i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{residence:r[a].value});n(i,e.onSignupComplete)}},(function(t){var n=t.isSubmitting,i=t.errors,c=t.values,l=t.setFieldValue,p=t.touched;return g.a.createElement(f.b,null,g.a.createElement(g.a.Fragment,null,e.state.has_valid_residence?g.a.createElement("div",{className:"account-signup__password-selection"},g.a.createElement("p",{className:"account-signup__heading"},g.a.createElement(y.a,{i18n_default_text:"Keep your account secure with a password"})),g.a.createElement(f.a,{name:"password"},(function(e){var t=e.field;return g.a.createElement(s.a,E({},t,{className:"account-signup__password-field",label:Object(w.localize)("Create a password"),error:p.password&&i.password,required:!0}))})),g.a.createElement("p",{className:"account-signup__subtext"},g.a.createElement(y.a,{i18n_default_text:"Strong passwords contain at least 6 characters, combine uppercase and lowercase letters, numbers, and symbols."})),g.a.createElement(u.a,{className:a()("account-signup__btn",{"account-signup__btn--disabled":!c.password||i.password||n}),type:"submit",is_disabled:!c.password||!!i.password||n,text:Object(w.localize)("Start trading"),primary:!0})):g.a.createElement("div",{className:"account-signup__residence-selection"},g.a.createElement("p",{className:"account-signup__heading"},g.a.createElement(y.a,{i18n_default_text:"Thanks for verifying your email"})),g.a.createElement("p",{className:"account-signup__text"},g.a.createElement(y.a,{i18n_default_text:"Where do you live?"})),g.a.createElement(f.a,{name:"residence"},(function(e){var t=e.field;return g.a.createElement(o.a,E({},t,{autoComplete:"off",className:"account-signup__residence-field",dropdown_offset:"3.2rem",type:"text",label:Object(w.localize)("Choose country"),error:p.residence&&i.residence,required:!0,list_items:r,onItemSelection:function(e){var t=e.value,n=e.text;return l("residence",t?n:"",!0)}}))})),g.a.createElement(u.a,{className:a()("account-signup__btn",{"account-signup__btn--disabled":!c.residence||i.residence}),type:"button",is_disabled:!c.residence||!!i.residence,onClick:e.onResidenceSelection,primary:!0,text:Object(w.localize)("Next")}))))})))}}])&&x(n.prototype,r),i&&x(n,i),t}(g.a.Component);D.propTypes={onSignup:_.a.func,residence_list:_.a.array};var M=function(e){var t=e.enableApp,n=e.disableApp,r=e.is_loading,a=e.is_visible,i=e.onSignup,o=e.residence_list,c=e.toggleAccountSignupModal;return g.a.createElement(d.a,{is_visible:a,disableApp:n,enableApp:t,is_loading:r||!o.length,is_content_centered:!0},g.a.createElement(D,{onSignup:i,residence_list:o,isModalVisible:c,enableApp:t}))};M.propTypes={disableApp:_.a.func,enableApp:_.a.func,is_loading:_.a.bool,is_visible:_.a.bool,onSignup:_.a.func,residence_list:_.a.arrayOf(_.a.object)};var z=Object(v.b)((function(e){var t=e.ui,n=e.client;return{is_visible:t.is_account_signup_modal_visible,toggleAccountSignupModal:t.toggleAccountSignupModal,enableApp:t.enableApp,disableApp:t.disableApp,is_loading:t.is_loading,onSignup:n.onSignup,residence_list:n.residence_list}}))(M);n.d(t,"default",(function(){return z}))}}]);
//# sourceMappingURL=AccountSignupModal.1e251c0be77adf5ee0bc.js.map