(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7610:function(e,t,l){Promise.resolve().then(l.bind(l,617))},617:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Home}});var a=l(7437),s=l(1597),i=l(2239),n=l(2265),d=l(8747),c=l(1507),o=l(8142),r=l(2866),u=l(5169),m=l(3159);function AudioList(){let[e,t]=(0,n.useState)([]),[l,s]=(0,n.useState)(null),[i,h]=(0,n.useState)(null),[x,f]=(0,n.useState)({}),[g,p]=(0,n.useState)({}),[j,y]=(0,n.useState)({}),[b,N]=(0,n.useState)(1),[v,w]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let e=Array.from({length:42},(e,t)=>({id:t+1,title:"KG Part ".concat(t+1),url:"https://github.com/bing-deng/yaya/raw/refs/heads/gh-pages/audios/KG-P".concat(t+1,".mp3")}));t(e)},[]);let formatTime=e=>"".concat(Math.floor(e/60),":").concat(Math.floor(e%60).toString().padStart(2,"0")),handlePlay=e=>{let t=document.getElementById("audio-".concat(e));if(l===e)t.pause(),s(null);else{if(l){let e=document.getElementById("audio-".concat(l));null==e||e.pause()}t.play(),s(e)}},handleLoop=e=>{let t=document.getElementById("audio-".concat(e));i===e?(t.loop=!1,h(null)):(t.loop=!0,h(e))},updateProgress=e=>{let t=document.getElementById("audio-".concat(e)),l=t.currentTime/t.duration*100;f(t=>({...t,[e]:l})),y(l=>({...l,[e]:t.currentTime}))},handleVolumeChange=t=>{N(t),e.forEach(e=>{let l=document.getElementById("audio-".concat(e.id));l&&(l.volume=t)}),0===t?w(!0):w(!1)},toggleMute=()=>{let e=v?b||1:0;handleVolumeChange(e),w(!v)};return(0,a.jsx)("div",{className:"gap-4 grid grid-cols-1",children:e.map(e=>(0,a.jsx)(d.w,{className:"w-full",children:(0,a.jsxs)(c.G,{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold",children:e.title}),(0,a.jsx)("audio",{id:"audio-".concat(e.id),src:e.url,onEnded:()=>s(null),onTimeUpdate:()=>updateProgress(e.id),onLoadedMetadata:t=>{let l=t.currentTarget;p(t=>({...t,[e.id]:l.duration}))}})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 min-w-[140px]",children:[(0,a.jsx)(o.A,{isIconOnly:!0,variant:"light",onClick:toggleMute,className:"text-default-500",children:v?(0,a.jsx)(m.xZH,{}):(0,a.jsx)(m.rxG,{})}),(0,a.jsx)(r.L,{size:"sm",value:v?0:b,onChange:e=>handleVolumeChange(Number(e)),maxValue:1,step:.1,className:"w-20"})]}),(0,a.jsx)(o.A,{isIconOnly:!0,color:"primary",onClick:()=>handlePlay(e.id),"aria-label":l===e.id?"暂停":"播放",children:l===e.id?(0,a.jsx)(m.Wh,{}):(0,a.jsx)(m.gmG,{})}),(0,a.jsx)(o.A,{isIconOnly:!0,color:i===e.id?"success":"default",onClick:()=>handleLoop(e.id),"aria-label":"循环",children:(0,a.jsx)(m.WLu,{})})]})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)(u.W,{"aria-label":"音频进度",value:x[e.id]||0,className:"h-1",color:"secondary",onClick:t=>{let l=document.getElementById("audio-".concat(e.id)),a=t.currentTarget.getBoundingClientRect(),s=t.clientX-a.left,i=s/a.width*100;l.currentTime=i/100*l.duration},classNames:{base:"cursor-pointer",track:"border border-default-100",indicator:"bg-gradient-to-r from-secondary to-primary"}}),(0,a.jsxs)("div",{className:"flex justify-between text-small text-default-500",children:[(0,a.jsx)("span",{children:formatTime(j[e.id]||0)}),(0,a.jsx)("span",{children:formatTime(g[e.id]||0)})]})]})]})},e.id))})}function VideoList(){let[e,t]=(0,n.useState)([]),[l,s]=(0,n.useState)(null),[i,r]=(0,n.useState)(null);(0,n.useEffect)(()=>{let fetchData=async()=>{let e=await fetch("/api/video"),l=await e.json();t(l)};fetchData()},[]);let handlePlay=e=>{let t=document.getElementById("video-".concat(e));if(l===e)t.pause(),s(null);else{if(l){let e=document.getElementById("video-".concat(l));null==e||e.pause()}t.play(),s(e)}},handleLoop=e=>{let t=document.getElementById("video-".concat(e));i===e?(t.loop=!1,r(null)):(t.loop=!0,r(e))};return(0,a.jsx)("div",{className:"gap-4 grid grid-cols-1",children:e.map(e=>(0,a.jsx)(d.w,{className:"w-full",children:(0,a.jsxs)(c.G,{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2",children:e.title}),(0,a.jsx)("video",{id:"video-".concat(e.id),src:e.url,className:"w-full rounded-lg mb-2",onEnded:()=>s(null)}),(0,a.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,a.jsx)(o.A,{isIconOnly:!0,color:"primary",onClick:()=>handlePlay(e.id),"aria-label":l===e.id?"暂停":"播放",children:l===e.id?(0,a.jsx)(m.Wh,{}):(0,a.jsx)(m.gmG,{})}),(0,a.jsx)(o.A,{isIconOnly:!0,color:i===e.id?"success":"default",onClick:()=>handleLoop(e.id),"aria-label":"循环",children:(0,a.jsx)(m.WLu,{})})]})]})},e.id))})}function Home(){return(0,a.jsx)("main",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 py-12",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-white mb-8 text-center",children:"Hello ,kiman!"}),(0,a.jsx)("div",{className:"bg-white/10 backdrop-blur-md rounded-lg p-4",children:(0,a.jsxs)(s.n,{"aria-label":"Options",color:"primary",variant:"bordered",classNames:{tabList:"gap-6 w-full relative rounded-lg p-2",cursor:"w-full bg-primary",tab:"max-w-fit px-4 h-10",tabContent:"group-data-[selected=true]:text-white"},children:[(0,a.jsx)(i.r,{title:"Music",className:"text-white",children:(0,a.jsx)(AudioList,{})},"music"),(0,a.jsx)(i.r,{title:"Video",className:"text-white",children:(0,a.jsx)(VideoList,{})},"video")]})})]})})}}},function(e){e.O(0,[420,986,655,971,472,744],function(){return e(e.s=7610)}),_N_E=e.O()}]);