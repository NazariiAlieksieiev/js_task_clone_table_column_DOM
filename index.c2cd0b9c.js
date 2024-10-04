function e(e,c){let r=[];return[...e.children].map(e=>[...e.children]).forEach(e=>{e.forEach(e=>{let n=[...e.children];r.push(n[c])})}),r}!function(c,r,n){let t=e(c,1);e(c,3).forEach((e,c)=>{e.after(t[c].cloneNode(!0))})}(document.querySelector("table"),0,0);
//# sourceMappingURL=index.c2cd0b9c.js.map
