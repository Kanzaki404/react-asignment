(this["webpackJsonpstar-wars-api"]=this["webpackJsonpstar-wars-api"]||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},18:function(e,a,t){e.exports=t(42)},23:function(e,a,t){},24:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t.n(l),o=(t(23),t(2)),i=(t(24),t(17)),s=t.n(i),m=function(e){var a=e.tabCallback;return c.a.createElement("nav",{className:"nav-bar-style"},c.a.createElement("img",{onClick:function(){return a("Search")},src:s.a,alt:"logo"}),c.a.createElement("ul",null,c.a.createElement("li",null," ",c.a.createElement("button",{onClick:function(){return a("Search")}}," Search")," "),c.a.createElement("li",null," ",c.a.createElement("button",{onClick:function(){return a("Favorite")}}," ","Favorites")," ")))},u=t(3),d=function(e){var a=e.data,t=e.dataPlanets,l=e.addFav,r=Object(n.useState)(""),i=Object(o.a)(r,2),s=i[0],m=i[1],u=a.filter((function(e){return e.name.toLowerCase().match(s.toLowerCase())||e.eye_color.toLowerCase().match(s.toLowerCase())||e.birth_year.toLowerCase().match(s.toLowerCase())})).map((function(e){return c.a.createElement("div",{className:"card",key:e.name},c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"CHARACTER"),c.a.createElement("div",null,"Name:",e.name),c.a.createElement("div",null,"Eye Color: ",e.eye_color),c.a.createElement("div",null,"Age:",e.birth_year),c.a.createElement("button",{className:"favBtn",onClick:function(){return l(e,"people")}},"Add To Favorites")))})),d=t.filter((function(e){return e.name.toLowerCase().match(s.toLowerCase())||e.climate.toLowerCase().match(s.toLowerCase())||e.terrain.toLowerCase().match(s.toLowerCase())})).map((function(e){return c.a.createElement("div",{className:"card",key:e.name},c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"PLANET"),c.a.createElement("div",null,"Name: ",e.name),c.a.createElement("div",null,"Climate: ",e.climate),c.a.createElement("div",null,"Terrain: ",e.terrain),c.a.createElement("button",{className:"favBtn",onClick:function(){return l(e,"planets")}},"Add To Favorites")))}));return c.a.createElement("div",{className:"listContainer"},c.a.createElement("div",{className:"searchBar"},c.a.createElement("input",{value:s,onChange:function(e){return m(e.target.value)}})),c.a.createElement("div",{className:"listItem"},c.a.createElement("div",{className:"Item"},u),c.a.createElement("div",{className:"Item"},d)))},v=function(e){var a=e.favData,t=e.favDataPlanets,l=e.remFav,r=Object(n.useState)("all"),i=Object(o.a)(r,2),s=i[0],m=i[1],d=a.map((function(e){return c.a.createElement("div",{className:"Item",key:e.name},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"CHARACTER"),c.a.createElement("div",null,"Name: ",e.name),c.a.createElement("div",null,"Eye Color: ",e.eye_color),c.a.createElement("div",null,"Age: ",e.birth_year),c.a.createElement("button",{className:"favBtn",onClick:function(){return l(e,"people")}},"Remove from Favorites"))))})),v=t.map((function(e){return c.a.createElement("div",{className:"Item",key:e.name},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"PLANET"),c.a.createElement("div",null,"Name: ",e.name),c.a.createElement("div",null,"Climate: ",e.climate),c.a.createElement("div",null,"Terrain: ",e.terrain),c.a.createElement("button",{className:"favBtn",onClick:function(){return l(e,"planets")}},"Remove from Favorites"))))})),E=[].concat(Object(u.a)(v),Object(u.a)(d));return c.a.createElement("div",{className:"listContainer"},c.a.createElement("ul",{className:"category"},c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return m("all")}},"All")),"|",c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return m("people")}},"People")),"|",c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return m("planets")}},"Planets"))),c.a.createElement("div",{className:"listItem"},function(e){switch(e){case"all":return E;case"people":return d;case"planets":return v;default:return E}}(s)))},E=t(6),f=t.n(E),p=[],b=[],h=[];var C=[];var N=function(e){var a=e.tabSelected,t=Object(n.useState)([]),l=Object(o.a)(t,2),r=l[0],i=l[1],s=Object(n.useState)([]),m=Object(o.a)(s,2),E=m[0],N=m[1],w=Object(n.useState)([]),O=Object(o.a)(w,2),j=O[0],y=O[1],g=Object(n.useState)([]),k=Object(o.a)(g,2),S=k[0],L=k[1];return Object(n.useEffect)((function(){!function e(a,t){f.a.get("".concat(t)).then((function(t){h.push.apply(h,Object(u.a)(t.data.results)),a([].concat(h)),null!==t.data.next&&e(a,t.data.next)})).catch((function(e){return console.log("ERROR ---\x3e "+e)}))}(i,"https://swapi.dev/api/people/"),function e(a,t){f.a.get("".concat(t)).then((function(t){C.push.apply(C,Object(u.a)(t.data.results)),a([].concat(C)),null!==t.data.next&&e(a,t.data.next)})).catch((function(e){return console.log("ERROR ---\x3e "+e)}))}(N,"https://swapi.dev/api/planets/")}),[]),c.a.createElement("div",{className:"listComponent"},c.a.createElement("div",{className:"listItemContainer"},"Search"===a?c.a.createElement(d,{data:r,dataPlanets:E,addFav:function(e,a){return function(e,a){if("people"===a)if(console.log("setToFavorite fired"),p.some((function(a){return a.name===e.name})))window.alert("already exists");else{var t=[];t=[].concat(Object(u.a)(t),[e]),p.push.apply(p,Object(u.a)(t)),y([].concat(p))}else if(console.log("setToFavorite fired"),b.some((function(a){return a.name===e.name})))window.alert("already exists");else{var n=[];n=[].concat(Object(u.a)(n),[e]),b.push.apply(b,Object(u.a)(n)),L([].concat(b))}}(e,a)}}):c.a.createElement(v,{favData:j,favDataPlanets:S,remFav:function(e,a){return function(e,a){if("people"===a){var t=p.indexOf(e);t>-1&&p.splice(t,1),y([].concat(p))}else{var n=b.indexOf(e);n>-1&&b.splice(n,1),L([].concat(b))}}(e,a)}})))};var w=function(){var e=Object(n.useState)("Search"),a=Object(o.a)(e,2),t=a[0],l=a[1];return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(m,{tabCallback:function(e){l(e)}}),c.a.createElement("h1",{className:"titleTab"},t)),c.a.createElement("main",null,c.a.createElement("div",{className:"content"},c.a.createElement(N,{tabSelected:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1a3c4a65.chunk.js.map