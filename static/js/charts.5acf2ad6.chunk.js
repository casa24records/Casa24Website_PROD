"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[176],{3144:(e,t,o)=>{o.r(t),o.d(t,{GChart:()=>xe,default:()=>me});var i=o(17588),a=o(14726),r=o(37577),s=o(72342),n=o.n(s);const l=e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length),c=e=>e&&"object"===typeof e&&!Array.isArray(e),h=(e,t)=>{const o=Object.assign({},e);return c(e)&&c(t)&&Object.keys(t).forEach((i=>{c(t[i])?i in e?o[i]=h(e[i],t[i]):Object.assign(o,{[i]:t[i]}):Object.assign(o,{[i]:t[i]})})),o},f=window.navigator.userAgent.toLowerCase().includes("firefox"),d=r.Ay.div((e=>({".apexcharts-heatmap-series rect":{fill:e.recreate?void 0:"transparent",transform:e.recreate?void 0:"scale(0)"},".apexcharts-legend.apexcharts-align-center":{"&.position-right, &.position-left":{".apexcharts-legend-series":{display:"flex",alignItems:"center",padding:"2px 0"}}}})));class u extends i.PureComponent{constructor(e){super(e),this.chartRef=(0,i.createRef)(),this.chart=null}componentDidMount(){this.createChart()}componentDidUpdate(e){if(!this.chart)return;const{colors:t,height:o="auto",options:i,prefix:a,recreate:r,series:s,suffix:n,type:c,width:h="100%"}=this.props;if(e.type!==c!==(e.recreate!==r&&r)||e.options.markers&&!i.markers)return this.recreateChart(),void(this.chartRef.current&&!l(this.chartRef.current)&&((e,t)=>{if(!window.IntersectionObserver)return;const o=new window.IntersectionObserver((e=>{e.forEach((e=>{e.intersectionRatio>0&&(t(),o.disconnect())}))}),{root:document.documentElement});o.observe(e)})(this.chartRef.current,(()=>{setTimeout((()=>this.recreateChart()),0)})));const d=JSON.stringify(e.colors),u=JSON.stringify(e.options),p=JSON.stringify(e.series),g=JSON.stringify(t),x=JSON.stringify(i);var m,y;p!==JSON.stringify(s)&&(s&&!("length"in s)||0===s.length?this.chart.updateOptions(this.getConfig()):(m=e.series,y=s,m.some((e=>y.some((t=>e.name!==t.name&&!t.name))))||0===e.series.length?this.recreateChart():this.chart.updateSeries(s))),u===x&&h===e.width&&o===e.height&&a===e.prefix&&n===e.suffix&&d===g||!(!f||this.chartRef.current&&l(this.chartRef.current))||this.chart.updateOptions(this.getConfig())}componentWillUnmount(){this.chart&&"function"===typeof this.chart.destroy&&this.chart.destroy()}getConfig(){const{colors:e,height:t,options:o,series:i,type:a,width:r}=this.props,s={chart:{type:a,height:t,width:r},series:i,colors:e},n=JSON.parse(JSON.stringify(h(o,s)));var l;(n.tooltip.y.formatter=o.tooltip.y.formatter,"scatter"===a)&&(n.tooltip.y.formatter=o.tooltip.y.formatter,n.xaxis.labels.formatter=null===(l=o.xaxis)||void 0===l?void 0:l.labels.formatter);return n}recreateChart(){try{this.chart.destroy()}catch{console.error("Sorry, we errored with destroying the chart...")}this.createChart()}createChart(){this.chart=new(n())(this.chartRef.current,this.getConfig()),this.chart.render()}render(){const{recreate:e}=this.props;return i.createElement(d,{recreate:e,ref:this.chartRef})}}const p=e=>{let{animating:t,categories:o,colorAllTexts:a,colors:r,height:s,id:n,labelsFontSize:l,options:c,prefix:f,series:d,showAxisLabels:p=!1,stacked:g=!1,suffix:x,textColor:m,width:y}=e;const w={chart:{id:"area-chart-".concat(n),stacked:g},xaxis:{labels:{show:p,style:{colors:m,fontSize:l}},categories:o},yaxis:{labels:{show:p,style:{colors:a,fontSize:l}}},stroke:{show:!0},fill:{type:"solid",opacity:.2},legend:{fontSize:l,labels:{colors:a}}},b=h(c,w);return i.createElement(u,{recreate:t,colors:r,height:s,options:b,prefix:f,series:d,suffix:x,type:"area",width:y})},g=e=>{let{animating:t,categories:o,colorAllTexts:a,colors:r,height:s,horizontal:n=!1,id:l,invertYAxis:c=!1,labelsFontSize:f,options:d,prefix:p,series:g,showAxisLabels:x=!1,stacked:m=!1,suffix:y,textColor:w,width:b}=e;const A={chart:{id:"column-chart-".concat(l),stacked:m},xaxis:{labels:{show:x,style:{colors:a||(n?void 0:w),fontSize:f}},categories:o},yaxis:{reversed:c,opposite:c,labels:{show:x,style:{colors:a||(n?w:void 0),fontSize:f}}},plotOptions:{bar:{horizontal:n}},legend:{fontSize:f,labels:{colors:a}}},S=h(d,A);return i.createElement(u,{recreate:t,colors:r,height:s,options:S,prefix:p,series:g,suffix:y,type:"bar",width:b})},x=e=>{let{category:t,prefix:o,suffix:i,value:a}=e;const r=t?"".concat(t,": "):"",s=o?"".concat(o," "):"",n=i?" ".concat(i):"";return"".concat(r).concat(s).concat(a).concat(n)},m=e=>{var t,o;let{categories:a,colors:r,height:s,id:n,options:l,prefix:c,series:f,showAxisLabels:d=!1,suffix:p,textColor:g,width:m,animating:y,lineVariant:w,labelsFontSize:b,showTitles:A,colorAllTexts:S}=e;const v=(e=>0===e.length?[]:[{data:e[0].data,name:e[0].name,type:"column"},{data:e[1]?e[1].data:[],name:e[1]?e[1].name:"",type:"line"}])(f),C={chart:{id:"column-line-chart-".concat(n)},xaxis:{labels:{show:d,style:{colors:g,fontSize:b}},categories:a},yaxis:[{show:d,title:A?{text:null===v||void 0===v||null===(t=v[0])||void 0===t?void 0:t.name,style:{color:S,fontSize:b}}:void 0,labels:{align:d?"left":void 0,style:{colors:S,fontSize:b}}},{show:d,title:A?{text:null===v||void 0===v||null===(o=v[1])||void 0===o?void 0:o.name,style:{color:S,fontSize:b}}:void 0,labels:{align:d?"right":void 0,style:{colors:S,fontSize:b}},opposite:!0}],stroke:{curve:w||"straight",show:!0},tooltip:{x:{show:!1},y:{formatter:(e,t)=>{let{seriesIndex:o}=t;return"".concat(x({prefix:c[o],suffix:p[o],value:e}))}}},legend:{fontSize:b,labels:{colors:S}}},E=h(l,C);return i.createElement(u,{recreate:y,colors:r,height:s,options:E,prefix:c,series:v,suffix:p,type:"line",width:m})},y=e=>{let{categories:t,colors:o,height:a,id:r,options:s,prefix:n,series:l,suffix:c,width:f,animating:d,labelsFontSize:p,colorAllTexts:g}=e;const x={chart:{id:"donut-chart-".concat(r)},tooltip:{theme:"light"},labels:t,legend:{fontSize:p,labels:{colors:g}}},m=h(s,x);return i.createElement(u,{recreate:d,colors:o,height:a,options:m,prefix:n,series:l[0]?l[0].data:[],suffix:c,type:"donut",width:f})};var w=o(95046);const b=(e,t)=>{const o=(0,w.K6)((0,w.E2)(e)),i={h:o.h,s:o.s,l:o.l+t>100?100:o.l+t};return(0,w.Ob)((0,w.YL)(i))},A=r.Ay.div((()=>({position:"relative",svg:{maxHeight:"100%"}}))),S=r.Ay.g((e=>{let{animate:t=!1,theme:{color:o}}=e;return{transitionProperty:"transform",transitionDuration:"".concat(t?.8:0,"s"),transitionTimingFunction:"ease-in-out",line:{stroke:o.content.secondary.default()},circle:{fill:o.content.secondary.default()}}})),v=r.Ay.circle((e=>{let{animate:t=!1}=e;return{fill:"transparent",transitionProperty:"stroke-dasharray",transitionDuration:t?"".concat(.8,"s"):"0",transitionTimingFunction:"ease-in-out"}})),C=r.Ay.circle((e=>{let{theme:{color:t}}=e;return{stroke:t.content.tertiary.default(),fill:"transparent"}})),E=80*Math.PI,T=50,R=e=>{const t=E/2*e;return"".concat(t," ").concat(E-t)},z=e=>"".concat(180*Math.abs(e)-90),L=e=>{let{categories:t,colors:o,height:a,id:r,options:s,prefix:n,series:l,showTooltip:c,suffix:h,width:f}=e;const d=s.chart.animations.enabled,[u,p]=(0,i.useState)(0),[g,x]=(0,i.useState)(o[0]);(0,i.useEffect)((()=>{x(o[0])}),[o]),(0,i.useEffect)((()=>{const e=(e=>Math.min(100,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(void 0===e[t])return 0;const o=e[t].data[0];return void 0!==o?o:0}(e))/100)(l);p(e)}),[l,u]);const m="".concat(n," ").concat(l[0]?l[0].data[0]:0," ").concat(h),y="".concat(t[0],": <b>").concat(m,"</b>");return i.createElement(A,{id:"gauge-chart-".concat(r),style:{width:f,height:a}},i.createElement("svg",{viewBox:"".concat(-50," ").concat(-50," ").concat(100," ").concat(52)},i.createElement("defs",null,i.createElement("clipPath",{id:"semi-".concat(r)},i.createElement("rect",{x:-50,y:-50,width:"100",height:T}))),i.createElement("g",{clipPath:"url(#semi-".concat(r,")")},i.createElement(C,{r:40,strokeWidth:10}),i.createElement(v,{animate:d,r:40,stroke:g,strokeWidth:10,strokeDasharray:R(u),transform:"rotate(180)",onMouseEnter:()=>x(b(o[0],10)),onMouseLeave:()=>x(o[0]),"data-chart-tooltip":c,"data-title":l[0]?l[0].name:"","data-body":y,"data-color":o[0]})),i.createElement(S,{id:"gauge",animate:d,style:{transform:"rotateZ(".concat(z(u),"deg)")}},i.createElement("line",{x:"0",y:"0",x1:"0",y2:-(40+10/1.8)}),i.createElement("circle",{cy:-1,r:2}))))},_=e=>{let{animating:t,categories:o,colorAllTexts:a,colors:r,height:s,id:n,labelsFontSize:l,options:c,prefix:f,series:d,showAxisLabels:p=!1,suffix:g,textColor:x,width:m}=e;const y={chart:{id:"heat-map-chart-".concat(n)},xaxis:{labels:{show:p,style:{colors:x,fontSize:l}},categories:o},yaxis:{labels:{show:p,style:{colors:x,fontSize:l}}},stroke:{show:!0},legend:{fontSize:l,labels:{colors:a}}},w=h(c,y),b="#ffffff"===r[0]?r[1]:r[0],A=b?[b]:void 0;return i.createElement(u,{recreate:t,colors:A,height:s,options:w,prefix:f,series:d,suffix:g,type:"heatmap",width:m})},D=e=>{let{animating:t,categories:o,colorAllTexts:a,colors:r,height:s,id:n,labelsFontSize:l,options:c,prefix:f,series:d,showAxisLabels:p=!1,suffix:g,textColor:x,width:m}=e;const y={chart:{id:"line-chart-".concat(n)},xaxis:{labels:{show:p,style:{colors:x,fontSize:l}},categories:o},yaxis:{labels:{show:p,style:{colors:a,fontSize:l}}},stroke:{show:!0},legend:{fontSize:l,labels:{colors:a}}},w=h(c,y);return i.createElement(u,{recreate:t,colors:r,height:s,options:w,prefix:f,series:d,suffix:g,type:"line",width:m})},F=e=>{let{animating:t,categories:o,colorAllTexts:a,colors:r,height:s,id:n,labelsFontSize:l,options:c,prefix:f,series:d,suffix:p,width:g}=e;const x={chart:{id:"pie-chart-".concat(n)},tooltip:{theme:"light"},labels:o,legend:{fontSize:l,labels:{colors:a}}},m=h(c,x);return i.createElement(u,{recreate:t,colors:r,height:s,options:m,prefix:f,series:d[0]?d[0].data:[],suffix:p,type:"pie",width:g})};var k=o(61158);const H=r.Ay.div.attrs((e=>{let{width:t,height:o}=e;return{style:{width:t,height:o}}}))((()=>({alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"}))),O=r.Ay.div.attrs((e=>{let{fullHeight:t}=e;return{style:{height:t}}}))((()=>({alignItems:"flex-start",boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"flex-start",overflow:"hidden",position:"relative",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%","&:last-child":{marginBottom:0}}))),N=r.Ay.p.attrs((e=>{let{currentHeight:t,fontSize:o}=e;return{style:{overflowX:0!==t?"hidden":"visible",minHeight:0!==t?"".concat(t,"px"):"auto",fontSize:o}}}))((e=>{let{textColor:t}=e;return{...k.iF.mixins.increaseSpecificity({whiteSpace:"nowrap",textOverflow:"ellipsis",width:"100%",marginBottom:"4px",display:"block",height:"auto",fontFamily:"Arial, sans-serif",fontWeight:"bold",letterSpacing:"-0.5px",color:t})}})),M=r.Ay.div((()=>({alignItems:"center",display:"flex",height:"100%",justifyContent:"flex-start",position:"relative",width:"100%"}))),I=r.Ay.div((e=>{let{theme:{color:t}}=e;return{alignItems:"center",backgroundColor:t.background.tertiary.default(),display:"flex",height:"calc(100% - 4px)",justifyContent:"flex-start",position:"relative",width:"100%"}})),P=r.Ay.div.attrs((e=>{let{percent:t,color:o,animationDelay:i}=e;return{style:{width:"".concat(t>100?100:t,"%"),background:o,transitionDelay:"".concat(i/1e3,"s")}}}))((e=>{let{enableAnimation:t}=e;return{position:"absolute",top:0,left:0,height:"100%",transition:t?"width 0.8s ease-in-out":"0s"}})),U=r.Ay.p((e=>{let{fontSize:t,textColor:o,maxWidthValueText:i}=e;return{...k.iF.mixins.increaseSpecificity({fontSize:t,fontFamily:"Arial, sans-serif",fontWeight:"bold",letterSpacing:"-0.5px",marginLeft:"8px",minWidth:i?"".concat(i,"px"):"initial",maxWidth:"50%",color:o})}})),W=r.Ay.span((e=>{let{fontSize:t,textColor:o}=e;return{fontSize:t,fontFamily:"Arial, sans-serif",fontWeight:"bold",letterSpacing:"-0.5px",marginLeft:"8px",color:o}})),V=e=>{let{animationDelay:t,category:o,className:a="",color:r,height:s,maxWidthValueText:n,onWidthCalculated:l,options:c,prefix:h,progressBarsId:f,serieName:d,showLegend:u,showTooltip:p,showValues:g,suffix:x,textColor:m,textValue:y,value:w}=e;const[A,S]=(0,i.useState)(0),[v,C]=(0,i.useState)(0),[E,T]=(0,i.useState)(0),[R,z]=(0,i.useState)(r),L=(0,i.useRef)(null),_=(0,i.useRef)(null);(0,i.useEffect)((()=>{z(r)}),[r]),(0,i.useEffect)((()=>{S(28*parseFloat(s)/100),C(45*parseFloat(s)/100),T(0)}),[s]),(0,i.useEffect)((()=>{L.current&&0===n&&l(parseFloat(window.getComputedStyle(L.current).getPropertyValue("width")))}),[v,n,l]),(0,i.useEffect)((()=>{_.current&&0!==A&&0===E&&setTimeout((()=>{if(!_.current)return;const e=parseFloat(window.getComputedStyle(_.current).getPropertyValue("height"));T(e)}),t)}),[A,t,E]);const D="".concat(h," ").concat(y," ").concat(x),F="".concat(o,": <b>").concat(D,"</b>");return i.createElement(O,{fullHeight:s,className:a},u&&i.createElement(N,{textColor:m,fontSize:A,ref:_,currentHeight:E},o),i.createElement(M,null,i.createElement(I,null,i.createElement(P,{animationDelay:t,color:R,"data-body":F,"data-chart-tooltip":p,"data-chart-tooltip-options":JSON.stringify({parent:"#".concat(f)}),"data-color":r,"data-title":d,enableAnimation:c.chart.animations.enabled,onMouseEnter:()=>z(b(r,10)),onMouseLeave:()=>z(r),percent:v?w:0})),g&&i.createElement(U,{fontSize:v,maxWidthValueText:n,ref:L,textColor:m},h&&i.createElement(W,{fontSize:A,textColor:m},"".concat(h," ")),y,x&&i.createElement(W,{fontSize:A,textColor:m}," ".concat(x)))))},B=e=>{var t,o;let{animationDelay:a,categories:r,colors:s,height:n,id:l,options:c,prefix:h,series:f,showLegend:d,showTooltip:u,showValues:p,suffix:g,textColor:x,width:m}=e;const[y,w]=(0,i.useState)([]),[b,A]=(0,i.useState)(0),S=f[0]?f[0].data.length:0,v="".concat(parseFloat(n)/S-16*(S-1)/S,"px"),C=e=>{y.push(e)};(0,i.useEffect)((()=>{f.length&&y.length===S&&A(y.length?y.reduce(((e,t)=>t>e?t:e)):0)}),[S,f.length,y]);const{data:E}=f&&f[0]&&f[0].data?f[0]:{data:[]};(0,i.useEffect)((()=>{w([]),A(0)}),[n,h,g,E]);const T=E&&E.length?parseFloat(null!==(t=null===f||void 0===f||null===(o=f[0])||void 0===o?void 0:o.data.reduce(((e,t)=>t>e?t:e)))&&void 0!==t?t:"0"):0;if(!f[0]||!f[0].data.length)return null;const R="progress-bar-chart-".concat(l);return i.createElement(H,{width:m,height:n,id:R},f[0].data.map(((e,t)=>{const o="%"===g?e:100*parseFloat(e)/T,n="".concat(r[t]).concat(t);return i.createElement(V,{animationDelay:a+150*t,category:r[t],color:s[0],height:v,key:n,maxWidthValueText:b,onWidthCalculated:C,options:c,prefix:h,progressBarsId:R,serieName:f[0]?f[0].name:"",showLegend:d,showTooltip:u,showValues:p,suffix:g,textColor:x,textValue:e,value:o})})))},{PI:j}=Math,G="left",J="right",Y=e=>e*(j/180),K=function(e,t){return{x:(arguments.length>2&&void 0!==arguments[2]?arguments[2]:G)===G?50-e/2:50+e/2,y:t}},X=(e,t)=>{const o=t?100:0,i=t?68:63.43,a=e.reduce(((e,a,r)=>{const s=e[r-1],n=s&&s.offset?s.offset:0,l=s&&s.width?s.width:o,c=K(l,n,G),h=K(l,n,J),f=((e,t,o,i)=>{const a=Y(o),r=Y(90)-a,s=e*Math.sin(r)/Math.sin(a);return i?t-2*s:t+2*s})(a,l,i,t),d=n+a,u=K(f,d,J),p=K(f,d,G);return e.push({offset:d,topLeft:c,topRight:h,bottomRight:u,bottomLeft:p,width:f,height:a}),e}),[]);return a},Z=e=>{let{topLeft:t,topRight:o,bottomRight:i,bottomLeft:a}=e;return"".concat(t.x,",").concat(t.y," ").concat(o.x,",").concat(o.y," \n  ").concat(i.x,",").concat(i.y," ").concat(a.x,",").concat(a.y)},$=r.Ay.g.attrs((e=>{let{yPos:t,enabledAnimation:o=!1,animationDelay:i}=e;return{transform:"translate(50, ".concat(t-.75,")"),style:{transitionDelay:o?"".concat(i,"ms"):"0ms"}}}))((e=>{let{enabledAnimation:t,hasData:o=!1}=e;return{transition:t?"opacity ".concat(.8,"s ease-in-out"):"0ms",opacity:o?1:0}})),q=r.Ay.line.attrs((e=>{let{color:t}=e;return{x1:0,x2:60,y1:.5,y2:.5,style:{stroke:t}}}))((()=>({strokeWidth:.5}))),Q=r.Ay.text.attrs((e=>{let{color:t,fontSize:o,y:i}=e;return{fontFamily:"Arial",fill:t,fontSize:o,y:i,x:65}}))((()=>({...k.iF.mixins.ellipsis(!0),marginBottom:"1%"}))),ee=e=>{let{animationDelay:t,category:o,enabledAnimation:a=!1,fontSize:r,hasData:s=!1,index:n,lineColor:l,offset:c,reverse:h=!1,textColor:f,totalOfSections:d}=e;const u=c,p=t+300*(h?n:d-n);return i.createElement($,{yPos:u,animationDelay:p,enabledAnimation:a,hasData:s},i.createElement(q,{color:l}),i.createElement(Q,{color:f,fontSize:r,y:r/2-.5},o))},te=(e,t)=>e?"translate(0, 0)":t?"translate(0, -50)":"translate(0, 50)",oe=r.Ay.polygon.attrs((e=>{let{enabledAnimation:t=!1,animationDelay:o,hasData:i=!1,reverse:a=!1}=e;return{style:{transitionDelay:t?"".concat(o,"ms"):"0ms"},transform:te(i,a)}}))((e=>{let{enabledAnimation:t=!1,hasData:o=!1}=e;return{transition:t?"transform ".concat(.8,"s ease, opacity ").concat(.8/1.5,"s ease"):"0ms",opacity:o?1:0}})),ie=e=>{let{animationDelay:t,bottomLeft:o,bottomRight:a,category:r,color:s,enabledAnimation:n,hasData:l,index:c,offset:h=0,prefix:f,rawValue:d,reverse:u,serieName:p,showTooltip:g,suffix:x,topLeft:m,topRight:y,totalOfSections:w,value:A}=e;const S=h+A,[v,C]=(0,i.useState)(s);(0,i.useEffect)((()=>{C(s)}),[s]);const E=t+150*(w-c),T="".concat(f," ").concat(d," ").concat(x),R="".concat(r,": <b>").concat(T,"</b>");return i.createElement(oe,{animationDelay:E,hasData:l,"data-body":R,"data-chart-tooltip":g,"data-color":s,"data-title":p,enabledAnimation:n,fill:v,key:S,onMouseEnter:()=>C(b(s,10)),onMouseLeave:()=>C(s),points:Z({topLeft:m,topRight:y,bottomRight:a,bottomLeft:o}),reverse:u})},ae=r.Ay.div.attrs((e=>{let{width:t,height:o}=e;return{style:{width:t,height:o}}}))((()=>({position:"relative",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",svg:{maxHeight:"100%"}}))),re=r.Ay.div((()=>({width:"100%",height:"100%",position:"relative"}))),se=e=>{let{animationDelay:t=0,categories:o,colors:a,height:r,id:s,options:n,prefix:l,reverse:c=!1,series:h,showLegend:f,showTooltip:d,suffix:u,textColor:p,width:g}=e;const[x,m]=(0,i.useState)(0),[y,w]=(0,i.useState)(!1),b=(0,i.useMemo)((()=>h[0]?h[0].data:[]),[h]),A=b.reduce(((e,t)=>e+parseFloat(t)),0),S=b.map((e=>parseFloat(e)/A*100)),v=a.slice(0,b.length),C=c?[...b].reverse():[...b],E=c?v.reverse():v,T=c?[...o].reverse():[...o],R=n.chart.animations.enabled,z=X(S,c),L=c?z.reverse():z;(0,i.useEffect)((()=>{m(parseFloat(null!==g&&void 0!==g?g:"0")/100)}),[g]),(0,i.useEffect)((()=>{b.length&&!y&&setTimeout((()=>{w(!0)}),0)}),[b,y]);return i.createElement(ae,{id:"pyramid-chart-".concat(s),width:g,height:r},i.createElement(re,null,i.createElement("svg",{viewBox:f?"-5 -5 160 110":"-5 -5 110 110"},f?L.map(((e,o)=>{var a,r;let{offset:s}=e;const n="".concat(s,"-").concat(o);return i.createElement(ee,{animationDelay:t,hasData:y,category:null!==(a=T[o])&&void 0!==a?a:"",enabledAnimation:R,fontSize:x,index:o,key:n,lineColor:null!==(r=E[o])&&void 0!==r?r:"",offset:s,textColor:p,totalOfSections:S.length})})):null,L.map(((e,o)=>{let{topLeft:a,topRight:r,bottomRight:s,bottomLeft:n,height:f}=e;const p="".concat(f,"-").concat(a.y);return i.createElement(ie,{animationDelay:t,hasData:y,bottomLeft:n,bottomRight:s,category:T[o],color:E[o],enabledAnimation:R,index:o,key:p,prefix:l,rawValue:C[o],reverse:c,serieName:h[0]?h[0].name:"",showTooltip:d,suffix:u,topLeft:a,topRight:r,totalOfSections:S.length,value:f})})))))},ne=e=>{let{categories:t,colors:o,height:a,id:s,options:n,prefix:l,series:c,showAxisLabels:f=!1,suffix:d,textColor:p,width:g,animating:x,labelsFontSize:m,colorAllTexts:y}=e;const{color:w}=(0,r.DP)(),b={chart:{id:"radar-chart-".concat(s)},xaxis:{labels:{show:f,style:{colors:t.map((()=>p)),fontSize:m}},categories:t},yaxis:{labels:{show:f,style:{fontSize:m}}},stroke:{show:!0,curve:"straight"},fill:{opacity:void 0},plotOptions:{radar:{polygons:{strokeColors:w.content.tertiary.default(),connectorColors:w.content.tertiary.default(),fill:{colors:["transparent"]}}}},legend:{fontSize:m,labels:{colors:y}}},A=h(n,b);return i.createElement(u,{recreate:x,colors:o,height:a,options:A,prefix:l,series:c,suffix:d,type:"radar",width:g})},le=e=>{let{animating:t,categories:o,colorAllTexts:a,colors:r,height:s,id:n,labelsFontSize:l,options:c,prefix:f,series:d,suffix:p,width:g}=e;const x={chart:{id:"radial-chart-".concat(n)},labels:o,plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},legend:{fontSize:l,labels:{colors:a}}},m=h(c,x);return i.createElement(u,{recreate:t,colors:r,height:s,options:m,prefix:f,series:d[0]?d[0].data:[],suffix:p,type:"radialBar",width:g})},ce=e=>{let{animating:t,categories:o,colorAllTexts:a,colors:r,height:s,id:n,labelsFontSize:l,options:c,prefix:f,series:d,showAxisLabels:p=!1,suffix:g,width:m}=e;const y=d.map((e=>({name:e.name,data:[e.data]}))),w={chart:{id:"scatter-chart-".concat(n)},tooltip:{x:{show:!1},y:{formatter:(e,t)=>{let{seriesIndex:i}=t;return"".concat(x({category:o[0],prefix:f[0],suffix:g[0],value:d[i].data[0]}),", \n          ").concat(x({category:o[1],prefix:f[1],suffix:g[1],value:e}))}}},xaxis:{type:"numeric",labels:{show:p,type:"numeric",formatter:e=>parseFloat(e).toFixed(1),style:{colors:a,fontSize:l}}},yaxis:{type:"numeric",labels:{show:p,style:{colors:a,fontSize:l}}},legend:{fontSize:l,labels:{colors:a}}},b=h(c,w);return i.createElement(u,{colors:r,height:s,options:b,prefix:f,recreate:t,series:y,suffix:g,type:"scatter",width:m})},he=e=>{let{animating:t,categories:o,colorAllTexts:a,colors:r,height:s,id:n,labelsFontSize:l,options:c,prefix:f,series:d,showAxisLabels:p=!1,suffix:g,textColor:x,width:m}=e;const y={chart:{id:"timeline-chart-".concat(n)},xaxis:{type:"datetime",labels:{show:p,style:{colors:a,fontSize:l}}},yaxis:{labels:{show:p,style:{colors:x,fontSize:l}}},plotOptions:{bar:{horizontal:!0,distributed:!0}},dataLabels:{enabled:!1,distributed:!1,offsetX:0,offsetY:0,style:{colors:["#fff"]}},legend:{show:!1,fontSize:l,labels:{colors:a}}},w=h(c,y),b=o.length&&d.length&&d[0]&&d[1]&&d[0].data.length&&d[1].data.length?[{name:"",data:o.map(((e,t)=>({x:e,y:[d[0].data[t]&&d[1].data[t]?new Date(d[0].data[t]).getTime():0,d[0].data[t]&&d[1].data[t]?new Date(d[1].data[t]).getTime():0]})))}]:[{name:"",data:[{x:"",y:[0,0]}]}];return i.createElement(u,{recreate:t,colors:r,height:s,options:w,prefix:f,series:b,suffix:g,type:"rangeBar",width:m})},fe=e=>{const t=e.reduce(((e,t)=>t.length>e?t.length:e),0),o=Array(t);return e.forEach(((t,i)=>{t.forEach(((t,a)=>{o[a]||(o[a]=Array(e.length).fill(0)),o[a][i]=t}))})),o},de=(e,t)=>{let o;return o="string"!==typeof e?e:"CHART_COLUMN_LINE"===t||"CHART_SCATTER"===t?[e,e]:[e],o},ue=e=>{const t=e.toString(16);return 1===t.length?"0".concat(t):t},pe=e=>{const{r:t,g:o,b:i}=(e=>{const t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);return{r:Number(t[1]),g:Number(t[2]),b:Number(t[3]),a:Number(t[4])||1}})(e);return"#".concat(ue(t)).concat(ue(o)).concat(ue(i))},ge=e=>e?e.includes("#")?e:pe(e):"#000000",xe=(0,a.PA)((e=>{let t,{animationDelay:o=0,colorAllTexts:a,colors:s,data:n,documentConfig:l,enableAnimation:c=!1,enableDataLabels:h=!1,height:f,id:d,invertYAxis:u=!1,labelsFontSize:w,lineVariant:b,prefix:A="",scale:S=1,showAxisLabels:v=!1,showLegend:C=!1,showLineMarkers:E=!1,showTitles:T,showTooltip:R=!1,style:z={},suffix:k="",textColor:H,type:O,width:N}=e;switch(O){case"CHART_HEATMAP":t=(e=>{const t=(e=>{if(!e.length)return e;const t=[e[0]],o=[...e].reverse();return o.pop(),t.concat(o)})(e);return fe(t)})(n);break;case"CHART_COLUMNS":case"CHART_COLUMNS_GROUPED":case"CHART_COLUMNS_STACKED":case"CHART_SCATTER":t=fe(n);break;default:t=n}const{series:M,categories:I}=(e=>{const t=[],o=[];return e.forEach(((i,a)=>i.forEach(((i,r)=>{var s;0!==r||0===a?0!==r&&0!==a&&(t[r-1]||(t[r-1]={name:e[0][r],data:[]}),null===(s=t[r-1])||void 0===s||s.data.push(i)):o.push(i)})))),{series:t||[],categories:o||[]}})(t),P=de(A,O),U=de(k,O),{color:W}=(0,r.DP)(),V=M.map((e=>({name:e.name,data:[e.data[0],e.data[1]]}))),j=[...I];j.length=2;const G={chart:{scale:S,zoom:{enabled:!1},animations:{enabled:c},toolbar:{show:!1},foreColor:W.content.tertiary.default()},legend:{show:C,showForSingleSeries:C,markers:{strokeWidth:1,strokeColor:"#eceff1"}},tooltip:{enabled:R,theme:"#ffffff"===s[0]?"dark":"light",y:{formatter:e=>x({prefix:P[0],suffix:U[0],value:e})}},dataLabels:{enabled:h},stroke:{show:!1,curve:b||"smooth"},fill:{opacity:1},...!0===E&&{markers:{size:5,strokeWidth:0}}},[J,Y]=(0,i.useState)(!c),K=(0,i.useRef)(void 0);(0,i.useEffect)((()=>(c&&void 0===K.current&&(K.current=setTimeout((()=>{Y(!0)}),1e3*o)),()=>{void 0!==K.current&&clearTimeout(K.current)})),[c,o]);const X=s.map((e=>{if(l&&l.colors){const{Primary:t,Secondary:o,Tertiary:i}=l.colors;if(e.includes("var(--genially-primary)"))return ge(t);if(e.includes("var(--genially-secondary)"))return ge(o);if(e.includes("var(--genially-tertiary)"))return ge(i)}return e})),Z=J?X:X.map((()=>"rgba(1,1,1,0)"));(e=>"CHART_FUNNEL"!==e&&"CHART_GAUGE"!==e&&"CHART_PROGRESS_BAR"!==e&&"CHART_PYRAMID"!==e)(O)&&(G.dataLabels.colors=X,G.fill.type=J?G.fill.type:"solid",G.legend.markers.fillColors=X);return i.createElement("div",{className:"genially-chart-wrapper",style:z},(()=>{var e,t,r,n,l,c;switch(O){case"CHART_COLUMNS":case"CHART_COLUMNS_GROUPED":return i.createElement(g,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,animating:J,showAxisLabels:v,suffix:U[0],textColor:H,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_COLUMNS_STACKED":return i.createElement(g,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,animating:J,showAxisLabels:v,stacked:!0,suffix:U[0],textColor:H,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_BARS":case"CHART_BARS_GROUPED":return i.createElement(g,{invertYAxis:u,categories:I,colors:Z,height:f,horizontal:!0,id:d,options:G,prefix:P[0],series:M,animating:J,showAxisLabels:v,suffix:U[0],textColor:H,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_BARS_STACKED":return i.createElement(g,{invertYAxis:u,categories:I,colors:Z,height:f,horizontal:!0,id:d,options:G,prefix:P[0],series:M,animating:J,showAxisLabels:v,stacked:!0,suffix:U[0],textColor:H,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_DONUT":return i.createElement(y,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,animating:J,suffix:U[0],width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_LINE":case"CHART_LINE_SERIES":return i.createElement(D,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,animating:J,suffix:U[0],showAxisLabels:v,textColor:H,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_PIE":return i.createElement(F,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,suffix:U[0],animating:J,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_RADAR":return i.createElement(ne,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,animating:J,showAxisLabels:v,suffix:U[0],textColor:H,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_AREA":case"CHART_AREA_SERIES":return i.createElement(p,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,animating:J,showAxisLabels:v,suffix:U[0],textColor:H,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_AREA_STACKED":return i.createElement(p,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,animating:J,showAxisLabels:v,stacked:!0,suffix:U[0],textColor:H,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_HEATMAP":return i.createElement(_,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,animating:J,showAxisLabels:v,suffix:U[0],textColor:H,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_SCATTER":return i.createElement(ce,{animating:J,categories:j,colors:Z,height:f,id:d,options:G,prefix:P,series:V,showAxisLabels:v,suffix:U,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_RADIAL":return i.createElement(le,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,animating:J,suffix:U[0],width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_COLUMN_LINE":return i.createElement(m,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P,series:M,animating:J,showAxisLabels:v,suffix:U,textColor:H,width:N,lineVariant:b,labelsFontSize:w,showTitles:T,colorAllTexts:a});case"CHART_PROGRESS_BAR":return i.createElement(B,{animationDelay:1e3*o,categories:I,colors:s,height:f,id:d,options:G,prefix:P[0],series:M,showLegend:C,showTooltip:R,showValues:v,suffix:U[0],textColor:H,width:N});case"CHART_TIMELINE":return i.createElement(he,{categories:I,colors:Z,height:f,id:d,options:G,prefix:P[0],series:M,animating:J,showAxisLabels:v,suffix:U[0],textColor:H,width:N,labelsFontSize:w,colorAllTexts:a});case"CHART_GAUGE":return i.createElement(L,{categories:I,colors:s,height:f,id:d,options:G,prefix:P[0],series:J?M:[{name:null!==(e=null===(t=M[0])||void 0===t?void 0:t.name)&&void 0!==e?e:"",data:[]}],showTooltip:R,suffix:U[0],width:N});case"CHART_PYRAMID":return i.createElement(se,{categories:I,colors:X,height:f,id:d,key:"CHART_PYRAMID",options:G,prefix:P[0],series:J?M:[{name:null!==(r=null===(n=M[0])||void 0===n?void 0:n.name)&&void 0!==r?r:"",data:[]}],showLegend:C,showTooltip:R,suffix:U[0],textColor:H,width:N});case"CHART_FUNNEL":return i.createElement(se,{key:"CHART_FUNNEL",categories:I,colors:X,height:f,id:d,options:G,prefix:P[0],reverse:!0,series:J?M:[{name:null!==(l=null===(c=M[0])||void 0===c?void 0:c.name)&&void 0!==l?l:"",data:[]}],showLegend:C,showTooltip:R,suffix:U[0],textColor:H,width:N});default:return i.createElement("div",null)}})())})),me=xe}}]);
//# sourceMappingURL=https://s3-static-genially.genially.com/view/static/js/charts.5acf2ad6.chunk.js.map