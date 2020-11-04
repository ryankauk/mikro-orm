(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{414:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(6),a=(t(0),t(807)),c={title:"Read Replica Connections"},i={unversionedId:"read-connections",id:"read-connections",isDocsHomePage:!1,title:"Read Replica Connections",description:"Users can specify multiple read connections via replicas option. You can provide only fields",source:"@site/docs/read-connections.md",slug:"/read-connections",permalink:"/docs/next/read-connections",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/read-connections.md",version:"current",lastUpdatedBy:"Pac\xf4me Fran\xe7on",lastUpdatedAt:1604520930,sidebar:"docs",previous:{title:"Migrations",permalink:"/docs/next/migrations"},next:{title:"EntityManager API",permalink:"/docs/next/entity-manager-api"}},s=[],l={rightToc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Users can specify multiple read connections via ",Object(a.b)("inlineCode",{parentName:"p"},"replicas")," option. You can provide only fields\nthat differ from master connection, rest will be taken from it."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entities: [Author, ...],\n  dbName: `my_database`,\n  type: 'mysql',\n  user: 'master_user',\n  host: 'master_host',\n  replicas: [\n    { name: 'read-1', host: 'read_host_1', user: 'read_user' },\n    { name: 'read-2', host: 'read_host_2' }, // user omitted, will be taken from master connection\n  ],\n});\n")),Object(a.b)("p",null,"By default select queries will use random read connection if not inside transaction. You can\nspecify connection type manually in ",Object(a.b)("inlineCode",{parentName:"p"},"em.getConnection(type: 'read' | 'write')"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const connection = orm.em.getConnection(); // write connection\nconst readConnection = orm.em.getConnection('read'); // random read connection\n\nconst qb1 = orm.em.createQueryBuilder(Author);\nconst res1 = await qb1.select('*').execute(); // random read connection\n\nconst qb2 = orm.em.createQueryBuilder(Author, 'a', 'write');\nconst res2 = await qb2.select('*').execute(); // write connection\n\nconst qb3 = orm.em.createQueryBuilder(Author);\nconst res3 = await qb3.update(...).where(...).execute(); // write connection\n\n// all queries inside a transaction will use write connection\nawait orm.em.transactional(async em => {\n  const a = await em.findOne(Author, 1); // write connection\n  a.name = 'test'; // will trigger update on write connection once flushed\n});\n")))}u.isMDXComponent=!0},807:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?o.a.createElement(f,i(i({ref:n},l),{},{components:t})):o.a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);