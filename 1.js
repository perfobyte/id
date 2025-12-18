var c=(t,o,p,u,g,r,n)=>{for(var l=t.byteLength,e=0,x=0,a=0,f=null;e<l;)r[0]=x++&255,(f=u(g,o).update(p).update(r).digest()).copy(t,e,0,a=n(f.length,l-e)),e+=a;return t};export{c as generate};
//# sourceMappingURL=1.js.map
