"use strict";(self.webpackChunkreact_kabzda_kak_podrobno=self.webpackChunkreact_kabzda_kak_podrobno||[]).push([[427],{"./src/components/UnControlAccordion/UnControlAccordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccordionDemo:()=>AccordionDemo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UnControlAccordion_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnControlAccordion(props){let[collapsed,setCollapsed]=(0,react.useState)(!0);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(AccordionTitle,{title:props.titleValue,onClick:()=>{setCollapsed(!collapsed)}}),!collapsed&&(0,jsx_runtime.jsx)(AccordionBody,{})]})}function AccordionTitle(props){return(0,jsx_runtime.jsxs)("h3",{onClick:()=>{props.onClick()},children:["---",props.title,"---"]})}function AccordionBody(){return(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"1"}),(0,jsx_runtime.jsx)("li",{children:"2"}),(0,jsx_runtime.jsx)("li",{children:"3"}),(0,jsx_runtime.jsx)("li",{children:"4"})]})}try{UnControlAccordion.displayName="UnControlAccordion",UnControlAccordion.__docgenInfo={description:"",displayName:"UnControlAccordion",props:{titleValue:{defaultValue:null,description:"",name:"titleValue",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnControlAccordion/UnControlAccordion.tsx#UnControlAccordion"]={docgenInfo:UnControlAccordion.__docgenInfo,name:"UnControlAccordion",path:"src/components/UnControlAccordion/UnControlAccordion.tsx#UnControlAccordion"})}catch(__react_docgen_typescript_loader_error){}let UnControlAccordion_stories={title:"UnControlAccordion",component:UnControlAccordion},AccordionDemo=()=>(0,jsx_runtime.jsx)(UnControlAccordion,{titleValue:"Accordion"});AccordionDemo.parameters={...AccordionDemo.parameters,docs:{...AccordionDemo.parameters?.docs,source:{originalSource:"() => {\n  return <UnControlAccordion titleValue={'Accordion'} />;\n}",...AccordionDemo.parameters?.docs?.source}}};let __namedExportsOrder=["AccordionDemo"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-UnControlAccordion-UnControlAccordion-stories.856237d5.iframe.bundle.js.map