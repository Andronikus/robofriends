(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(1),l=n(2),i=n(4),h=n(3),u=n(5),m=function(e){var t=e.searchBoxChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},d=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-2"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},b=function(e){var t=e.robots.map((function(e,t){return r.a.createElement(d,{key:t,id:e.id,name:e.name,email:e.email})}));return r.a.createElement("div",null,t)},f=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"2px solid black",height:"700px"}},e.children)},g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={hasErrors:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasErrors:!0}),console.log("[ErrorBoundary]","error!")}},{key:"render",value:function(){return this.state.hasErrors?r.a.createElement("h1",null,"Ups something went wrong"):this.props.children}}]),t}(a.Component),p=(n(14),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){return e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"title"},"RoboFriends"),r.a.createElement(m,{searchBoxChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(g,null,r.a.createElement(b,{robots:a})))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component)),v=(n(15),n(16),n(8));n.n(v).a.load({google:{families:["Roboto:400,700","sans-serif"]}}),c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.26960378.chunk.js.map