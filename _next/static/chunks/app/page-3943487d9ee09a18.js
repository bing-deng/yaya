(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7610:function(e,l,t){Promise.resolve().then(t.bind(t,8554))},8554:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return Home}});var a=t(7437),i=t(1597),s=t(2239),n=t(2265),d=t(8747),c=t(1507),o=t(8142),r=t(2866),u=t(5169),m=t(3159);function AudioList(){let[e,l]=(0,n.useState)([]),[t,i]=(0,n.useState)(null),[s,x]=(0,n.useState)(null),[h,g]=(0,n.useState)({}),[p,f]=(0,n.useState)({}),[j,y]=(0,n.useState)({}),[b,N]=(0,n.useState)(1),[v,w]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let e=Array.from({length:42},(e,l)=>({id:l+1,title:"Spelling Bee Part ".concat(l+1),url:"https://github.com/bing-deng/yaya/raw/refs/heads/main/spelling-bee-media-player/public/audios/KG-P".concat(l+1,".MP3")}));l(e)},[]);let formatTime=e=>"".concat(Math.floor(e/60),":").concat(Math.floor(e%60).toString().padStart(2,"0")),handlePlay=e=>{let l=document.getElementById("audio-".concat(e));if(t===e)l.pause(),i(null);else{if(t){let e=document.getElementById("audio-".concat(t));null==e||e.pause()}l.play(),i(e)}},handleLoop=e=>{let l=document.getElementById("audio-".concat(e));s===e?(l.loop=!1,x(null)):(l.loop=!0,x(e))},updateProgress=e=>{let l=document.getElementById("audio-".concat(e)),t=l.currentTime/l.duration*100;g(l=>({...l,[e]:t})),y(t=>({...t,[e]:l.currentTime}))},handleVolumeChange=l=>{N(l),e.forEach(e=>{let t=document.getElementById("audio-".concat(e.id));t&&(t.volume=l)}),0===l?w(!0):w(!1)},toggleMute=()=>{let e=v?b||1:0;handleVolumeChange(e),w(!v)};return(0,a.jsx)("div",{className:"gap-4 grid grid-cols-1",children:e.map(e=>(0,a.jsx)(d.w,{className:"w-full",children:(0,a.jsxs)(c.G,{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold",children:e.title}),(0,a.jsx)("audio",{id:"audio-".concat(e.id),src:e.url,onEnded:()=>i(null),onTimeUpdate:()=>updateProgress(e.id),onLoadedMetadata:l=>{let t=l.currentTarget;f(l=>({...l,[e.id]:t.duration}))}})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 min-w-[140px]",children:[(0,a.jsx)(o.A,{isIconOnly:!0,variant:"light",onClick:toggleMute,className:"text-default-500",children:v?(0,a.jsx)(m.xZH,{}):(0,a.jsx)(m.rxG,{})}),(0,a.jsx)(r.L,{size:"sm",value:v?0:b,onChange:e=>handleVolumeChange(Number(e)),maxValue:1,step:.1,className:"w-20"})]}),(0,a.jsx)(o.A,{isIconOnly:!0,color:"primary",onClick:()=>handlePlay(e.id),"aria-label":t===e.id?"暂停":"播放",children:t===e.id?(0,a.jsx)(m.Wh,{}):(0,a.jsx)(m.gmG,{})}),(0,a.jsx)(o.A,{isIconOnly:!0,color:s===e.id?"success":"default",onClick:()=>handleLoop(e.id),"aria-label":"循环",children:(0,a.jsx)(m.WLu,{})})]})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)(u.W,{"aria-label":"音频进度",value:h[e.id]||0,className:"h-1",color:"secondary",onClick:l=>{let t=document.getElementById("audio-".concat(e.id)),a=l.currentTarget.getBoundingClientRect(),i=l.clientX-a.left,s=i/a.width*100;t.currentTime=s/100*t.duration},classNames:{base:"cursor-pointer",track:"border border-default-100",indicator:"bg-gradient-to-r from-secondary to-primary"}}),(0,a.jsxs)("div",{className:"flex justify-between text-small text-default-500",children:[(0,a.jsx)("span",{children:formatTime(j[e.id]||0)}),(0,a.jsx)("span",{children:formatTime(p[e.id]||0)})]})]})]})},e.id))})}function AudioList2(){let[e,l]=(0,n.useState)([]),[t,i]=(0,n.useState)(null),[s,x]=(0,n.useState)(null),[h,g]=(0,n.useState)({}),[p,f]=(0,n.useState)({}),[j,y]=(0,n.useState)({}),[b,N]=(0,n.useState)(1),[v,w]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let e=Array.from({length:42},(e,l)=>({id:l+1,title:"Grammar Unit ".concat(l+1),url:"https://github.com/bing-deng/yaya/raw/refs/heads/main/spelling-bee-media-player/public/audios/grammer/unit_".concat(l+1,".mp3")}));l(e)},[]);let formatTime=e=>"".concat(Math.floor(e/60),":").concat(Math.floor(e%60).toString().padStart(2,"0")),handlePlay=e=>{let l=document.getElementById("audio-".concat(e));if(t===e)l.pause(),i(null);else{if(t){let e=document.getElementById("audio-".concat(t));null==e||e.pause()}l.play(),i(e)}},handleLoop=e=>{let l=document.getElementById("audio-".concat(e));s===e?(l.loop=!1,x(null)):(l.loop=!0,x(e))},updateProgress=e=>{let l=document.getElementById("audio-".concat(e)),t=l.currentTime/l.duration*100;g(l=>({...l,[e]:t})),y(t=>({...t,[e]:l.currentTime}))},handleVolumeChange=l=>{N(l),e.forEach(e=>{let t=document.getElementById("audio-".concat(e.id));t&&(t.volume=l)}),0===l?w(!0):w(!1)},toggleMute=()=>{let e=v?b||1:0;handleVolumeChange(e),w(!v)};return(0,a.jsx)("div",{className:"gap-4 grid grid-cols-1",children:e.map(e=>(0,a.jsx)(d.w,{className:"w-full",children:(0,a.jsxs)(c.G,{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold",children:e.title}),(0,a.jsx)("audio",{id:"audio-".concat(e.id),src:e.url,onEnded:()=>i(null),onTimeUpdate:()=>updateProgress(e.id),onLoadedMetadata:l=>{let t=l.currentTarget;f(l=>({...l,[e.id]:t.duration}))}})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 min-w-[140px]",children:[(0,a.jsx)(o.A,{isIconOnly:!0,variant:"light",onClick:toggleMute,className:"text-default-500",children:v?(0,a.jsx)(m.xZH,{}):(0,a.jsx)(m.rxG,{})}),(0,a.jsx)(r.L,{size:"sm",value:v?0:b,onChange:e=>handleVolumeChange(Number(e)),maxValue:1,step:.1,className:"w-20"})]}),(0,a.jsx)(o.A,{isIconOnly:!0,color:"primary",onClick:()=>handlePlay(e.id),"aria-label":t===e.id?"暂停":"播放",children:t===e.id?(0,a.jsx)(m.Wh,{}):(0,a.jsx)(m.gmG,{})}),(0,a.jsx)(o.A,{isIconOnly:!0,color:s===e.id?"success":"default",onClick:()=>handleLoop(e.id),"aria-label":"循环",children:(0,a.jsx)(m.WLu,{})})]})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)(u.W,{"aria-label":"音频进度",value:h[e.id]||0,className:"h-1",color:"secondary",onClick:l=>{let t=document.getElementById("audio-".concat(e.id)),a=l.currentTarget.getBoundingClientRect(),i=l.clientX-a.left,s=i/a.width*100;t.currentTime=s/100*t.duration},classNames:{base:"cursor-pointer",track:"border border-default-100",indicator:"bg-gradient-to-r from-secondary to-primary"}}),(0,a.jsxs)("div",{className:"flex justify-between text-small text-default-500",children:[(0,a.jsx)("span",{children:formatTime(j[e.id]||0)}),(0,a.jsx)("span",{children:formatTime(p[e.id]||0)})]})]})]})},e.id))})}function VideoList(){let[e,l]=(0,n.useState)([]),[t,i]=(0,n.useState)(null),[s,r]=(0,n.useState)(null);(0,n.useEffect)(()=>{l([{id:1,title:"Video 1",url:"https://github.com/bing-deng/yaya/raw/refs/heads/main/spelling-bee-media-player/public/videos/video1.mp4"}])},[]);let handlePlay=e=>{let l=document.getElementById("video-".concat(e));if(t===e)l.pause(),i(null);else{if(t){let e=document.getElementById("video-".concat(t));null==e||e.pause()}l.play(),i(e)}},handleLoop=e=>{let l=document.getElementById("video-".concat(e));s===e?(l.loop=!1,r(null)):(l.loop=!0,r(e))};return(0,a.jsx)("div",{className:"gap-4 grid grid-cols-1",children:e.map(e=>(0,a.jsx)(d.w,{className:"w-full",children:(0,a.jsxs)(c.G,{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-2",children:e.title}),(0,a.jsx)("video",{id:"video-".concat(e.id),src:e.url,className:"w-full rounded-lg mb-2",onEnded:()=>i(null)}),(0,a.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,a.jsx)(o.A,{isIconOnly:!0,color:"primary",onClick:()=>handlePlay(e.id),"aria-label":t===e.id?"暂停":"播放",children:t===e.id?(0,a.jsx)(m.Wh,{}):(0,a.jsx)(m.gmG,{})}),(0,a.jsx)(o.A,{isIconOnly:!0,color:s===e.id?"success":"default",onClick:()=>handleLoop(e.id),"aria-label":"循环",children:(0,a.jsx)(m.WLu,{})})]})]})},e.id))})}function Home(){return(0,a.jsx)("main",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 py-12",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-white mb-8 text-center",children:"Hello ,kiman!"}),(0,a.jsx)("div",{className:"bg-white/10 backdrop-blur-md rounded-lg p-4",children:(0,a.jsxs)(i.n,{"aria-label":"Options",color:"primary",variant:"bordered",classNames:{tabList:"gap-6 w-full relative rounded-lg p-2",cursor:"w-full bg-primary",tab:"max-w-fit px-4 h-10",tabContent:"group-data-[selected=true]:text-white"},children:[(0,a.jsx)(s.r,{title:"Spelling Bee",className:"text-white",children:(0,a.jsx)(AudioList,{})},"music"),(0,a.jsx)(s.r,{title:"Grammar",className:"text-white",children:(0,a.jsx)(AudioList2,{})},"music2"),(0,a.jsx)(s.r,{title:"Video",className:"text-white",children:(0,a.jsx)(VideoList,{})},"video")]})})]})})}}},function(e){e.O(0,[420,986,655,971,472,744],function(){return e(e.s=7610)}),_N_E=e.O()}]);