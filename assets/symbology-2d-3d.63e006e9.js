import"./modulepreload-polyfill.b7f2da20.js";/* empty css             */import{j as y,m as h,x as g,D as b,o as s,q as t,S as d,b as r,r as l,s as w,v as u}from"./vendor.96994164.js";let a=new y({basemap:"topo-vector",ground:{surfaceColor:"white"}}),e=new h({container:"viewDiv",map:a,qualityProfile:"high",camera:{position:{x:-.17162553,y:51.48422402,z:171.46968},heading:331.12,tilt:74}});var c;((c=e.environment.lighting)==null?void 0:c.type)==="sun"&&(e.environment.lighting.directShadowsEnabled=!0);e.ui.empty("top-left");const v=new g({view:e,content:new b({view:e}),group:"top-right",expanded:!1});e.ui.add(v,"top-right");let o=new s;o.elevationInfo={mode:"on-the-ground"};a.add(o);let i=new s;i.elevationInfo={mode:"on-the-ground"};i.visible=!1;a.add(i);let n=new s;n.visible=!1;a.add(n);const m=new t({symbolLayers:[new d({resource:{primitive:"circle"},material:{color:"red"},outline:{color:"brown",size:"1px"},size:10})]}),p=new r({x:-.176,y:51.48791,z:0}),f=new t({symbolLayers:[{type:"icon",resource:{href:"pin.png"},anchor:"bottom",size:30}]}),D=new l({geometry:p,symbol:f});n.add(D);const x=new l({geometry:p,symbol:m});o.add(x);const z=new r({x:-.175,y:51.4877,z:-4}),P=new r({x:-.175+37e-6,y:51.4877+125e-6,z:-4}),L=new t({symbolLayers:[new w({resource:{href:"./pin/ubermapin.gltf"},material:{color:[66,126,245]},height:20})]}),S=new l({geometry:z,symbol:L});n.add(S);const _=new l({geometry:P,symbol:m});o.add(_);new r({x:-.174,y:51.48791,z:0});new t({symbolLayers:[new d({resource:{href:"plane.png"},anchor:"bottom",size:40})]});function E(){o.visible=!o.visible,i.visible=!i.visible,n.visible=!n.visible}document.getElementById("toggle-symbology").onclick=E;e.ui.add("paneDiv","bottom-right");const I=new u({view:e});e.ui.add(I,"bottom-left");