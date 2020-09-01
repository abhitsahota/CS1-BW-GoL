(this["webpackJsonpgol-app"]=this["webpackJsonpgol-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),u=(n(14),n(15),n(19)),o=n(20),i=n(21);var s=function(){return r.a.createElement("div",{className:"About"},r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"A cellular automation is a program that is stored in a grid. A set of rules describes how a cell value on the grid changes over time, as often as the result of the states of its environment."),r.a.createElement("p",null,"Each round of the simulation examines the current state of the grid, and then produce an entirely new grid consisting of the old state."),r.a.createElement("ul",null,r.a.createElement("li",null,"In my implementation I used a doube buffering technique. One state or grid is manipulated by the algorithm, and second grid is shown to the user. This implementation allows for the cellular automaton to compute changes and visualize them quickly, and accurately.")))};var m=function(){return r.a.createElement("div",{className:"Rules"},r.a.createElement("h2",null,"Rules"),r.a.createElement("br",null),r.a.createElement("p",null,"In the Game of Life, the rules examine a cell's neighbours to determine the outcome of its generation. "),r.a.createElement("ul",null,r.a.createElement("li",null,"If the cell is alive\xa0and\xa0has 2 or 3 neighbors, then it remains alive. Else it dies."),r.a.createElement("li",null,"If the cell is dead\xa0and\xa0has exactly 3 neighbors, then it comes to life. Else if remains dead.")),r.a.createElement("br",null),r.a.createElement("p",null,"Note: The cells just outside of the grid are assumed to be dead. "),r.a.createElement("br",null))},f=n(2),d=n(6),E=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]];var h=function(){var e=Object(a.useState)(0),t=Object(f.a)(e,2),n=t[0],l=t[1],c=Object(a.useRef)(n);c.current=n;var u=function(){for(var e=new Array(25),t=0;t<e.length;t++)e[t]=new Array(25).fill(0);return l(0),e},o=Object(a.useState)((function(){return u()})),i=Object(f.a)(o,2),s=i[0],m=i[1],h=Object(a.useState)(!1),b=Object(f.a)(h,2),v=b[0],p=b[1],g=Object(a.useRef)(v);g.current=v;var j=Object(a.useState)(1e3),O=Object(f.a)(j,2),y=O[0],k=O[1],w=Object(a.useRef)(y);w.current=y;var A=Object(a.useCallback)((function(){g.current&&(m((function(e){return Object(d.a)(e,(function(t){for(var n=function(n){for(var a=function(a){var r=0;E.forEach((function(t){var l=Object(f.a)(t,2),c=l[0],u=l[1],o=n+c,i=a+u;o>=0&&o<25&&i>=0&&i<25&&(r+=e[o][i])}));var u=c.current+1;l(u),r<2||r>3?t[n][a]=0:0===e[n][a]&&3===r&&(t[n][a]=1)},r=0;r<25;r++)a(r)},a=0;a<25;a++)n(a)}))})),setTimeout(A,w.current))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){p(!v),v||(g.current=!0,A())}},v?"stop":"start"),r.a.createElement("button",{onClick:function(){m((function(e){return Object(d.a)(e,(function(t){for(var n=function(n){for(var a=function(a){var r=0;E.forEach((function(t){var l=Object(f.a)(t,2),c=l[0],u=l[1],o=n+c,i=a+u;o>=0&&o<25&&i>=0&&i<25&&(r+=e[o][i])}));var u=c.current+1;l(u),r<2||r>3?t[n][a]=0:0===e[n][a]&&3===r&&(t[n][a]=1)},r=0;r<25;r++)a(r)},a=0;a<25;a++)n(a)}))}))}},"Step"),r.a.createElement("button",{onClick:function(){return m(u())}},"Clear"),v?"":r.a.createElement("button",{onClick:function(){return m(function(){for(var e=new Array(25),t=0;t<e.length;t++){e[t]=new Array(25).fill(0);for(var n=0;n<25;n++)e[t][n]=Math.floor(2*Math.random())}return l(0),e}())}},"random"),r.a.createElement("label",{for:"speed"},"Sim Speed"),r.a.createElement("select",{name:"speed",id:"speed",value:w,onChange:function(e){k(e.target.value),w.current=y,console.log(y)}},r.a.createElement("option",{value:w},"N/A"),r.a.createElement("option",{value:"1000"},"1x"),r.a.createElement("option",{value:"250"},"2x"),r.a.createElement("option",{value:"125"},"4x"),r.a.createElement("option",{value:"50"},"10x")),r.a.createElement("br",null),r.a.createElement("p",null,"Generation: ",c.current," "),r.a.createElement("br",null),r.a.createElement("div",{className:"Grid",style:{display:"grid",gridTemplateColumns:"repeat(".concat(25,", 20px)")}},s.map((function(e,t){return e.map((function(e,n){return r.a.createElement("div",{key:"".concat(t).concat(n),onClick:function(){return function(e,t){var n=Object(d.a)(s,(function(n){n[e][t]=s[e][t]?0:1}));m(n)}(t,n)},style:{width:20,height:20,backgroundColor:s[t][n]?"black":"white",border:"solid 1px black"}})}))}))))};var b=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Simulation"),r.a.createElement(h,null))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Abhit's Conway's Game of Life"),r.a.createElement(u.a,null,r.a.createElement(o.a,null,r.a.createElement(i.a,{sm:8},r.a.createElement(b,null)),r.a.createElement(i.a,{sm:4},r.a.createElement(m,null))),r.a.createElement(o.a,null,r.a.createElement(i.a,{sm:12},r.a.createElement(s,null)))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f4e6b397.chunk.js.map