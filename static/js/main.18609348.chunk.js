(this["webpackJsonptiffany-tse-project-five"]=this["webpackJsonptiffany-tse-project-five"]||[]).push([[0],{18:function(e,t,n){e.exports=n(41)},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(16),s=n.n(r),o=(n(23),n(2)),u=n(3),c=n(5),l=n(4),m=n(17),d=n.n(m),h=(n(6),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).getFormSelection=function(t){e.setState({userEnteredIngredient:t.target.value})},e.state={userEnteredIngredient:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{action:""},i.a.createElement("input",{onChange:this.getFormSelection,value:this.state.userEnteredIngredient,type:"text",name:"translateText",id:"translateText"}),i.a.createElement("button",{type:"submit",onClick:function(t){return e.props.getChoice(t,e.state.userEnteredIngredient)}},"Find Substitute"))}}]),n}(a.Component)),b=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h1",null,"Ingredient Substitution Finder"),i.a.createElement("p",null,"Enter the ingredient you're missing to see if there's anything you can use to substitute it with!"))}}]),n}(a.Component),f=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).getAxios=function(){d()({url:"https://api.spoonacular.com/food/ingredients/substitutes",method:"GET",responseType:"json",params:{apiKey:"fe865e8ce28b4733ae2e9fd57d01b355",ingredientName:e.state.ingredientName}}).then((function(t){e.setState({substitutionsAvailable:t.data.status,substitutionMessage:t.data.message,substitutionOptions:t.data.substitutes})}))},e.getChoice=function(t,n){t.preventDefault(),e.setState({ingredientName:n},(function(){e.getAxios()}))},e.state={ingredientName:" ",substitutionsAvailable:" ",substitutionMessage:" ",substitutionOptions:[]},e}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,null),i.a.createElement(h,{getChoice:this.getChoice}),"failure"===this.state.substitutionsAvailable?i.a.createElement("p",null,"Sorry there are no substitutes available for ",this.state.ingredientName):i.a.createElement("div",null,i.a.createElement("h2",null,this.state.ingredientName),i.a.createElement("p",null,this.state.substitutionMessage),i.a.createElement("ul",null,this.state.substitutionOptions.map((function(e){return i.a.createElement("li",null,e)})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.18609348.chunk.js.map