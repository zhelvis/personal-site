(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Bl7J:function(t,e,a){"use strict";var n=a("txSG"),l=a("q1tI"),i=a("zLVn"),o=a("izhR"),r=a("9Koi"),c=a("10BB"),b=a("Frpm"),s=a("6Gk8"),u=function(t){var e=Object.assign({},t);return Object(n.a)(b.a,Object.assign({sx:{variant:"navlink"}},e))},d=function(t){t.children;var e=t.handleClose,a=void 0===e?null:e,l=Object(i.a)(t,["children","handleClose"]),o=Object(r.a)("navigation").t;return Object(n.a)("div",Object.assign({sx:{width:["15em","18em"],height:"100vh"}},l),Object(n.a)(s.a,{sx:{alignItems:"flex-start"}}),Object(n.a)("nav",{sx:{p:3,display:"grid",alignItems:"flex-start",fontSize:"1.2rem"}},Object(n.a)(u,{onClick:a,to:"/"},o(["navigation:home","Home"])),Object(n.a)(u,{onClick:a,to:"/blog/"},o(["navigation:blog","Blog"])),Object(n.a)(u,{onClick:a,to:"/about/"},o(["navigation:about","About"]))))},j=function(t){t.children;var e=Object(i.a)(t,["children"]),a=Object(r.a)("buttons").t,b=Object(l.useState)(!1),s=b[0],u=b[1];return Object(n.a)("div",Object.assign({sx:{display:["block","none"]}},e),Object(n.a)(o.b,{sx:{outlineStyle:"none",cursor:"pointer"},"aria-label":a(["buttons:nav.open","Open navigation"]),onClick:function(){return u(!0)}},Object(n.a)(c.d,{sx:{fill:"text"}})),Object(n.a)("div",{sx:{display:s?"flex":"none",alignItems:"flex-start",height:"100vh",width:"100vw",position:"fixed",top:0,left:0,zIndex:2,backgroundColor:"rgba(0, 0, 0, 0.7)"}},Object(n.a)("div",{sx:{display:"flex",height:"inherit",animation:"drawer 0.2s ease-out 0s"}},Object(n.a)(d,{sx:{backgroundColor:"background"},handleClose:function(){return u(!1)}}),Object(n.a)("div",{sx:{height:"3.5em",display:"flex",alignItems:"center",pl:1}},Object(n.a)(o.b,{"aria-label":a(["buttons:nav.close","Close navigation"]),onClick:function(){return u(!1)},sx:{color:"hsl(210, 50%, 96%)",outlineStyle:"none",cursor:"pointer"}},Object(n.a)(c.a,{sx:{fill:"currentColor"}})))),Object(n.a)("div",{"aria-label":a(["buttons:nav.close","Close navigation"]),sx:{height:"inherit",flexGrow:"1"},onClick:function(){return u(!1)}})))},O=function(){return Object(n.a)(d,{sx:{display:["none","block"],position:"fixed",top:0,left:0,backgroundColor:"muted"}})},g=a("jDMg"),x=a("u9tI");e.a=function(t){var e=t.children,a=t.path;return Object(n.a)(l.Fragment,null,Object(n.a)(O,null),Object(n.a)("div",{sx:{marginLeft:[0,"18em"]}},Object(n.a)("header",{sx:{display:"flex",alignItems:"center",height:"3.5rem",position:"fixed",width:["100%","calc(100% - 18em)"],top:0,px:3,backgroundColor:"background",borderBottom:"1px solid",borderColor:"muted",zIndex:1}},Object(n.a)(j,null),Object(n.a)("div",{sx:{mx:"auto"}}),Object(n.a)(x.a,{path:a}),Object(n.a)(g.a,null)),Object(n.a)("div",{sx:{py:"3.5rem",px:3}},e)))}},vx99:function(t,e,a){"use strict";a.r(e);var n=a("txSG"),l=a("MXbp"),i=a("q1tI"),o=a("Frpm"),r=a("9Koi"),c=a("Bl7J"),b=a("vrFN");e.default=function(t){var e=t.data,a=Object(r.a)("blog").t;return Object(n.a)(i.Fragment,null,Object(n.a)(b.a,{title:a(["blog:title","Blog"]),description:a(["blog:description","List of blog posts"])}),Object(n.a)(c.a,{path:"/blog/"},Object(n.a)(l.b.h1,null,a(["blog:title","Blog"])),Object(n.a)("div",{sx:{maxWidth:768}},Object(n.a)("ul",{className:"post-list",sx:{listStyle:"none",m:0,pl:0}},e.allFile.nodes.map((function(t){var e=t.childMdx;return Object(n.a)("li",{key:""+e.frontmatter.title,sx:{mb:3,variant:"paper"}},Object(n.a)(l.b.h2,{sx:{my:3}},Object(n.a)(l.b.a,{as:o.a,to:e.frontmatter.slug},e.frontmatter.title)),Object(n.a)("small",null,Object(n.a)("span",{role:"img","aria-label":"calendar"},"📅")," ",Object(n.a)("b",null,e.frontmatter.date)),Object(n.a)("br",null),Object(n.a)("small",null,Object(n.a)("span",{role:"img","aria-label":"time"},"⏱")," ",Object(n.a)("i",null,e.timeToRead+" "+a(["blog:m","min read"]))),Object(n.a)("p",{sx:{mt:3,mb:0}},e.frontmatter.foreword))}))))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-6ee5fb5a1229315f7bed.js.map