(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{263:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(1),o=r(6),a=(r(0),r(807)),i={title:"Property Validation"},s={unversionedId:"property-validation",id:"version-3.6/property-validation",isDocsHomePage:!1,title:"Property Validation",description:"MirkoORM will validate your properties before actual persisting happens. It will try to fix wrong",source:"@site/versioned_docs/version-3.6/property-validation.md",slug:"/property-validation",permalink:"/docs/3.6/property-validation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/property-validation.md",version:"3.6",lastUpdatedBy:"Pac\xf4me Fran\xe7on",lastUpdatedAt:1604520930,sidebar:"version-3.6/docs",previous:{title:"EntityHelper and Decorated Entities",permalink:"/docs/3.6/entity-helper"},next:{title:"Lifecycle Hooks",permalink:"/docs/3.6/lifecycle-hooks"}},l=[],u={rightToc:l};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MirkoORM")," will validate your properties before actual persisting happens. It will try to fix wrong\ndata types for you automatically. If automatic conversion fails, it will throw an error. You can\nenable strict mode to disable this feature and let ORM throw errors instead. Validation is triggered\nwhen persisting the entity. "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// number instead of string will throw\nconst author = new Author('test', 'test') as WrappedEntity<Author>;\nauthor.assign({ name: 111, email: 222 });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.name of type 'string' to '111' of type 'number'\"\n\n// string date with unknown format will throw\nauthor.assign(author, { name: '333', email: '444', born: 'asd' });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.born of type 'date' to 'asd' of type 'string'\"\n\n// string date with correct format will be auto-corrected\nauthor.assign({ name: '333', email: '444', born: '2018-01-01' });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born).toBe(true); // instance of Date\n\n// Date object will be ok\nauthor.assign({ born: new Date() });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born).toBe(true); // instance of Date\n\n// null will be ok\nauthor.assign({ born: null });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.born); // null\n\n// string number with correct format will be auto-corrected\nauthor.assign({ age: '21' });\nawait orm.em.persistAndFlush(author);\nconsole.log(author.age); // number 21\n\n// string instead of number with will throw\nauthor.assign({ age: 'asd' });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to 'asd' of type 'string'\"\nauthor.assign({ age: new Date() });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to '2019-01-17T21:14:23.875Z' of type 'date'\"\nauthor.assign({ age: false });\nawait orm.em.persistAndFlush(author); // throws \"Validation error: trying to set Author.age of type 'number' to 'false' of type 'boolean'\"\n")))}c.isMDXComponent=!0},807:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?o.a.createElement(f,s(s({ref:t},u),{},{components:r})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);