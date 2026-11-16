(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},t=([e,n,r])=>{let i=document.createElementNS(`http://www.w3.org/2000/svg`,e);return Object.keys(n).forEach(e=>{i.setAttribute(e,String(n[e]))}),r?.length&&r.forEach(e=>{let n=t(e);i.appendChild(n)}),i},n=(n,r={})=>t([`svg`,{...e,...r},n]),r=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),i=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},a=e=>{let t=``,n=!1;for(let r of e)r===`-`||r===`_`||r<=` `?n=t.length>0:(t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t},o=e=>{let t=a(e);return t.charAt(0).toUpperCase()+t.slice(1)},s=e=>Array.from(e.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),c=e=>typeof e==`string`?e:!e||!e.class?``:e.class&&typeof e.class==`string`?e.class.split(` `):e.class&&Array.isArray(e.class)?e.class:``,l=(t,{nameAttr:a,icons:l,attrs:u})=>{let d=t.getAttribute(a);if(d==null)return;let f=l[o(d)];if(!f)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);let p=s(t),m=i(p)?{}:{"aria-hidden":`true`},h={...e,"data-lucide":d,...m,...u,...p},g=c(p),_=c(u),v=r(`lucide`,`lucide-${d}`,...g,..._);v&&Object.assign(h,{class:v});let y=n(f,h);return t.parentNode?.replaceChild(y,t)},u=[[`path`,{d:`M5 12h14`}],[`path`,{d:`m12 5 7 7-7 7`}]],d=[[`path`,{d:`M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`}],[`path`,{d:`m16 9-5.5 5.5L8 12`}]],f=[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`}]],p=[[`path`,{d:`M12 5v16`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`}]],m=[[`path`,{d:`M8 2v3`}],[`path`,{d:`M16 2v3`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}],[`path`,{d:`M3 9h18`}],[`path`,{d:`m9 15 2 2 4-4`}]],h=[[`path`,{d:`M8 2v3`}],[`path`,{d:`M16 2v3`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}],[`path`,{d:`M3 9h18`}]],g=[[`path`,{d:`M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`}],[`circle`,{cx:`12`,cy:`13`,r:`3`}]],_=[[`path`,{d:`m6 9 6 6 6-6`}]],v=[[`path`,{d:`m15 18-6-6 6-6`}]],y=[[`path`,{d:`m9 18 6-6-6-6`}]],ee=[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`}],[`path`,{d:`m9 11 3 3L22 4`}]],te=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M12 6v6l4 2`}]],ne=[[`path`,{d:`M2 12h20`}],[`path`,{d:`M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8`}],[`path`,{d:`m4 8 16-4`}],[`path`,{d:`m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8`}]],re=[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`}]],ie=[[`path`,{d:`M15 3h6v6`}],[`path`,{d:`M10 14 21 3`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`}]],ae=[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`}]],oe=[[`path`,{d:`M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z`}],[`path`,{d:`M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0`}]],se=[[`path`,{d:`M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762`}]],ce=[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`}]],le=[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}]],ue=[[`path`,{d:`m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11`}],[`path`,{d:`M17 7A5 5 0 0 0 7 7`}],[`path`,{d:`M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4`}]],de=[[`path`,{d:`M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20`}],[`path`,{d:`M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13`}]],fe=[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`}],[`circle`,{cx:`12`,cy:`10`,r:`3`}]],pe=[[`path`,{d:`M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`}],[`path`,{d:`M15 5.764v15`}],[`path`,{d:`M9 3.236v15`}]],me=[[`path`,{d:`M15 3h6v6`}],[`path`,{d:`m21 3-7 7`}],[`path`,{d:`m3 21 7-7`}],[`path`,{d:`M9 21H3v-6`}]],he=[[`path`,{d:`M4 5h16`}],[`path`,{d:`M4 12h16`}],[`path`,{d:`M4 19h16`}]],ge=[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`}]],_e=[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`}]],ve=[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`}]],ye=[[`polygon`,{points:`3 11 22 2 13 21 11 13 3 11`}]],be=[[`path`,{d:`M13 2a9 9 0 0 1 9 9`}],[`path`,{d:`M13 6a5 5 0 0 1 5 5`}],[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`}]],xe=[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`}]],Se=[[`path`,{d:`M5 12h14`}],[`path`,{d:`M12 5v14`}]],Ce=[[`path`,{d:`m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777`}],[`path`,{d:`M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25`}],[`path`,{d:`M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9`}],[`path`,{d:`m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2`}],[`rect`,{width:`20`,height:`4`,x:`2`,y:`11`,rx:`1`}]],we=[[`path`,{d:`M16 10a4 4 0 0 1-8 0`}],[`path`,{d:`M3.103 6.034h17.794`}],[`path`,{d:`M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`}]],b=[[`path`,{d:`m15 11-1 9`}],[`path`,{d:`m19 11-4-7`}],[`path`,{d:`M2 11h20`}],[`path`,{d:`m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4`}],[`path`,{d:`M4.5 15.5h15`}],[`path`,{d:`m5 11 4-7`}],[`path`,{d:`m9 11 1 9`}]],x=[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`}],[`path`,{d:`M20 2v4`}],[`path`,{d:`M22 4h-4`}],[`circle`,{cx:`4`,cy:`20`,r:`2`}]],S=[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`}]],C=[[`circle`,{cx:`12`,cy:`12`,r:`4`}],[`path`,{d:`M12 2v2`}],[`path`,{d:`M12 20v2`}],[`path`,{d:`m4.93 4.93 1.41 1.41`}],[`path`,{d:`m17.66 17.66 1.41 1.41`}],[`path`,{d:`M2 12h2`}],[`path`,{d:`M20 12h2`}],[`path`,{d:`m6.34 17.66-1.41 1.41`}],[`path`,{d:`m19.07 4.93-1.41 1.41`}]],w=[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`}]],T=[[`path`,{d:`M10 11v6`}],[`path`,{d:`M14 11v6`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]],E=[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`}],[`circle`,{cx:`9`,cy:`7`,r:`4`}]],D=[[`path`,{d:`m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8`}],[`path`,{d:`M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7`}],[`path`,{d:`m2.1 21.8 6.4-6.3`}],[`path`,{d:`m19 5-7 7`}]],O=[[`path`,{d:`M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2`}],[`path`,{d:`M7 2v20`}],[`path`,{d:`M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7`}]],k=[[`path`,{d:`M2 22 16 8`}],[`path`,{d:`M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z`}],[`path`,{d:`M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z`}],[`path`,{d:`M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z`}],[`path`,{d:`M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z`}],[`path`,{d:`M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z`}],[`path`,{d:`M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z`}],[`path`,{d:`M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z`}]],Te=[[`path`,{d:`M18 6 6 18`}],[`path`,{d:`m6 6 12 12`}]],Ee=[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`}]],A=({icons:e={},nameAttr:t=`data-lucide`,attrs:n={},root:r=document,inTemplates:i}={})=>{if(!Object.values(e).length)throw Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(r===void 0)throw Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${t}]`)).forEach(r=>l(r,{nameAttr:t,icons:e,attrs:n})),i&&Array.from(r.querySelectorAll(`template`)).forEach(r=>A({icons:e,nameAttr:t,attrs:n,root:r.content,inTemplates:i})),t===`data-lucide`){let t=r.querySelectorAll(`[icon-name]`);t.length>0&&(console.warn(`[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide`),Array.from(t).forEach(t=>l(t,{nameAttr:`icon-name`,icons:e,attrs:n})))}},j={name:`The Copper Kettle`,tagline:`Bistro & Fresh Kitchen`,slogan:`Honest Flavors, Warm Hospitality & Everyday Comfort Food`,description:`A cozy neighborhood dining destination serving lovingly prepared comfort meals, smoky grills, aromatic biryanis, and artisanal desserts. Made fresh daily with local produce, no artificial colors, and zero shortcuts.`,phone:`+1 (555) 382-7490`,phoneFormatted:`+1 (555) 382-7490`,whatsappNumber:`15553827490`,email:`hello@thecopperkettlebistro.com`,address:{street:`142 Heritage Boulevard, Suite 4`,landmark:`Opposite Market Square Garden`,city:`Metro City`,state:`CA`,zip:`94016`,mapsUrl:`https://maps.google.com/?q=142+Heritage+Boulevard+Metro+City`},openingHours:[{day:`Monday`,opens:`11:30 AM`,closes:`10:30 PM`,openHour:11.5,closeHour:22.5},{day:`Tuesday`,opens:`11:30 AM`,closes:`10:30 PM`,openHour:11.5,closeHour:22.5},{day:`Wednesday`,opens:`11:30 AM`,closes:`10:30 PM`,openHour:11.5,closeHour:22.5},{day:`Thursday`,opens:`11:30 AM`,closes:`10:30 PM`,openHour:11.5,closeHour:22.5},{day:`Friday`,opens:`11:30 AM`,closes:`11:30 PM`,openHour:11.5,closeHour:23.5},{day:`Saturday`,opens:`11:00 AM`,closes:`11:30 PM`,openHour:11,closeHour:23.5},{day:`Sunday`,opens:`11:00 AM`,closes:`10:30 PM`,openHour:11,closeHour:22.5}],stats:[{number:`4.8★`,label:`1,450+ Google Reviews`},{number:`45+`,label:`Chef Signature Dishes`},{number:`100%`,label:`Farm-Fresh Local Produce`},{number:`6+`,label:`Years Serving You`}]},M=[{id:`offer-1`,code:`WEEKDAY15`,discount:`15% OFF`,title:`Executive Lunch Hour`,description:`Enjoy 15% off your entire meal bill on all Dine-In and Takeaway orders between 12:00 PM and 4:00 PM.`,validity:`Mon – Thu | 12:00 PM – 4:00 PM`,badge:`Popular Deal`,minOrder:`$25`},{id:`offer-2`,code:`FAMILYFEAST`,discount:`$12 OFF`,title:`Family Weekend Bonanza`,description:`Flat $12 discount on orders above $60. Includes complimentary chef's dessert platter for the table.`,validity:`Fri – Sun | All Day`,badge:`Weekend Special`,minOrder:`$60`},{id:`offer-3`,code:`STUDENTBITE`,discount:`FREE FRIES`,title:`Student Combo Perk`,description:`Get a free portion of Peri-Peri Truffle Fries with any Burger or Wrap upon showing student ID.`,validity:`Everyday | Students Only`,badge:`Pocket Friendly`,minOrder:`1 Main Dish`}],De=[{id:`all`,label:`All Items`,icon:`Utensils`},{id:`starters`,label:`Starters`,icon:`Flame`},{id:`main-course`,label:`Main Course`,icon:`CookingPot`},{id:`biryani-rice`,label:`Biryani & Rice`,icon:`Wheat`},{id:`fast-food`,label:`Fast Food`,icon:`Sandwich`},{id:`beverages`,label:`Beverages`,icon:`GlassWater`},{id:`desserts`,label:`Desserts`,icon:`IceCream`}],N=[{id:`m-1`,name:`Crispy Honey Chilli Lotus Stem`,category:`starters`,price:9.5,isVeg:!0,isPopular:!0,isChefSpecial:!0,rating:4.9,description:`Thinly sliced lotus root tossed in sesame oil, tangy honey-chilli glaze, and roasted sesame seeds.`,image:`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80`,spiceLevel:`medium`,prepTime:`12 mins`},{id:`m-2`,name:`Smoky Charcoal Chicken Tikka`,category:`starters`,price:12,isVeg:!1,isPopular:!0,isChefSpecial:!1,rating:4.8,description:`Tender boneless chicken thigh marinated in hung yogurt, mustard oil, and hand-ground degi mirch.`,image:`https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80`,spiceLevel:`hot`,prepTime:`15 mins`},{id:`m-3`,name:`Cheesy Herb Stuffed Mushrooms`,category:`starters`,price:10.5,isVeg:!0,isPopular:!1,isChefSpecial:!0,rating:4.7,description:`Plump button mushrooms filled with herb ricotta, mozzarella, and garlic breadcrumb crust.`,image:`https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80`,spiceLevel:`mild`,prepTime:`14 mins`},{id:`m-4`,name:`Malabar Pepper Garlic Prawns`,category:`starters`,price:14.5,isVeg:!1,isPopular:!1,isChefSpecial:!0,rating:4.9,description:`Fresh coastal prawns sautéed in cold-pressed coconut oil, crushed Tellicherry pepper, and curry leaves.`,image:`https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=700&q=80`,spiceLevel:`hot`,prepTime:`12 mins`},{id:`m-5`,name:`Crispy Sweet Corn Chaat Basket`,category:`starters`,price:8.5,isVeg:!0,isPopular:!1,isChefSpecial:!1,rating:4.6,description:`Crunchy golden corn kernels tossed with pomegranate, chaat masala, fresh lime, and cilantro.`,image:`https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80`,spiceLevel:`mild`,prepTime:`10 mins`},{id:`m-6`,name:`Old Delhi Velvet Butter Chicken`,category:`main-course`,price:14.5,isVeg:!1,isPopular:!0,isChefSpecial:!0,rating:5,description:`Tandoor-roasted chicken simmered in an aromatic velvety tomato and cashew gravy with churned butter.`,image:`https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=700&q=80`,spiceLevel:`mild`,prepTime:`18 mins`},{id:`m-7`,name:`Royal Paneer Lababdar`,category:`main-course`,price:12.5,isVeg:!0,isPopular:!0,isChefSpecial:!1,rating:4.8,description:`Fresh cottage cheese cubes folded into a coarse onion-tomato gravy with grated paneer and kasuri methi.`,image:`https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80`,spiceLevel:`medium`,prepTime:`15 mins`},{id:`m-8`,name:`24-Hour Slow Dal Makhani`,category:`main-course`,price:10,isVeg:!0,isPopular:!0,isChefSpecial:!0,rating:4.9,description:`Black lentils slow-cooked overnight over glowing charcoal with churned butter, cream, and subtle ginger.`,image:`https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80`,spiceLevel:`mild`,prepTime:`10 mins`},{id:`m-9`,name:`Herb Grilled Chicken & Mash`,category:`main-course`,price:15,isVeg:!1,isPopular:!1,isChefSpecial:!1,rating:4.7,description:`Pan-seared marinated chicken breast served over creamy garlic mashed potatoes and rosemary jus.`,image:`https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80`,spiceLevel:`mild`,prepTime:`20 mins`},{id:`m-10`,name:`Smoked Eggplant Bharta & Roti`,category:`main-course`,price:9.5,isVeg:!0,isPopular:!1,isChefSpecial:!1,rating:4.6,description:`Fire-roasted mashed eggplant tempered with shallots, heirloom tomatoes, green chillies, and fresh coriander.`,image:`https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80`,spiceLevel:`medium`,prepTime:`12 mins`},{id:`m-11`,name:`Dum Pukht Chicken Biryani`,category:`biryani-rice`,price:13.5,isVeg:!1,isPopular:!0,isChefSpecial:!0,rating:4.9,description:`Aged long-grain basmati rice and marinated chicken sealed in a clay handi with saffron, caramelized onions, and mint.`,image:`https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80`,spiceLevel:`medium`,prepTime:`20 mins`},{id:`m-12`,name:`Hyderabadi Subz Dum Biryani`,category:`biryani-rice`,price:11,isVeg:!0,isPopular:!1,isChefSpecial:!1,rating:4.8,description:`Seasonal garden veggies, paneer cubes, and aromatic basmati slow steamed with kewra water and fried cashews.`,image:`https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=700&q=80`,spiceLevel:`medium`,prepTime:`15 mins`},{id:`m-13`,name:`Nawabi Slow-Cooked Mutton Biryani`,category:`biryani-rice`,price:16.5,isVeg:!1,isPopular:!0,isChefSpecial:!0,rating:4.9,description:`Tender bone-in mutton pieces marinated in royal spices and layered with fragrant saffron rice. Served with mirchi ka salan.`,image:`https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80`,spiceLevel:`hot`,prepTime:`22 mins`},{id:`m-14`,name:`Ghee Jeera Basmati Pulao`,category:`biryani-rice`,price:6.5,isVeg:!0,isPopular:!1,isChefSpecial:!1,rating:4.6,description:`Fluffy basmati rice tempered with golden cumin seeds, green cardamom, and fragrant desi cow ghee.`,image:`https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80`,spiceLevel:`mild`,prepTime:`10 mins`},{id:`m-15`,name:`The Kettle Smashed Cheeseburger`,category:`fast-food`,price:11,isVeg:!1,isPopular:!0,isChefSpecial:!0,rating:4.9,description:`Two crispy-edged prime beef or chicken patties, melted cheddar, house secret smoky kettle sauce, and pickles on brioche.`,image:`https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80`,spiceLevel:`mild`,prepTime:`12 mins`},{id:`m-16`,name:`Crispy Peri-Peri Paneer Tikka Wrap`,category:`fast-food`,price:8.5,isVeg:!0,isPopular:!0,isChefSpecial:!1,rating:4.7,description:`Smoky tandoori paneer cubes, crunchy bell peppers, pickled onions, and house mint mayo rolled in a handmade flatbread.`,image:`https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80`,spiceLevel:`medium`,prepTime:`10 mins`},{id:`m-17`,name:`Loaded Cheesy Truffle Fries`,category:`fast-food`,price:7,isVeg:!0,isPopular:!0,isChefSpecial:!1,rating:4.8,description:`Hand-cut Idaho potato fries dusted with peri-peri spice, drenched in molten cheddar sauce, truffle oil, and chives.`,image:`https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=700&q=80`,spiceLevel:`mild`,prepTime:`8 mins`},{id:`m-18`,name:`Honey Chipotle BBQ Chicken Wings (6 pcs)`,category:`fast-food`,price:10.5,isVeg:!1,isPopular:!1,isChefSpecial:!1,rating:4.8,description:`Crispy double-fried wings tossed in our sweet and smoky house honey chipotle glaze with cool ranch dip.`,image:`https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80`,spiceLevel:`medium`,prepTime:`14 mins`},{id:`m-19`,name:`Alphonso Mango Cardamom Lassi`,category:`beverages`,price:5.5,isVeg:!0,isPopular:!0,isChefSpecial:!0,rating:4.9,description:`Thick churned farm yogurt blended with sweet Alphonso mango pulp, crushed pistachios, and green cardamom.`,image:`https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80`,spiceLevel:`none`,prepTime:`5 mins`},{id:`m-20`,name:`Fresh Kaffir Lime & Mint Cooler`,category:`beverages`,price:4.5,isVeg:!0,isPopular:!1,isChefSpecial:!1,rating:4.7,description:`Sparkling infused water with fresh garden mint, hand-squeezed Persian lime, black salt, and organic cane sugar.`,image:`https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80`,spiceLevel:`none`,prepTime:`5 mins`},{id:`m-21`,name:`Artisanal Masala Cutting Chai`,category:`beverages`,price:3,isVeg:!0,isPopular:!0,isChefSpecial:!1,rating:4.9,description:`Strong black Assam tea simmered with fresh crushed ginger, cinnamon bark, cardamom, and creamy whole milk.`,image:`https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80`,spiceLevel:`none`,prepTime:`6 mins`},{id:`m-22`,name:`Iced Hazelnut Cold Brew`,category:`beverages`,price:6,isVeg:!0,isPopular:!1,isChefSpecial:!1,rating:4.8,description:`Single-origin Arabica steeped for 18 hours, served over artisanal ice with toasted hazelnut syrup and cold foam.`,image:`https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80`,spiceLevel:`none`,prepTime:`4 mins`},{id:`m-23`,name:`Sizzling Chocolate Walnut Brownie`,category:`desserts`,price:8.5,isVeg:!0,isPopular:!0,isChefSpecial:!0,rating:5,description:`Warm fudgy dark chocolate brownie on a smoking cast iron skillet, topped with Madagascar vanilla gelato and hot fudge.`,image:`https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80`,spiceLevel:`none`,prepTime:`8 mins`},{id:`m-24`,name:`Angoori Gulab Jamun & Saffron Rabri`,category:`desserts`,price:7.5,isVeg:!0,isPopular:!0,isChefSpecial:!0,rating:4.9,description:`Bite-sized golden milk dumplings soaked in cardamom rose syrup, nestled in rich saffron-reduced condensed milk.`,image:`https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80`,spiceLevel:`none`,prepTime:`5 mins`},{id:`m-25`,name:`New York Baked Berry Cheesecake`,category:`desserts`,price:8,isVeg:!0,isPopular:!1,isChefSpecial:!1,rating:4.8,description:`Classic dense cream cheese cake on a golden graham cracker crust, topped with tart house-made mixed berry compote.`,image:`https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80`,spiceLevel:`none`,prepTime:`4 mins`}],P=[{id:`g-1`,category:`food`,title:`Signature Dum Biryani Platter`,caption:`Slow cooked in sealed clay handis with saffron and aromatic spices.`,url:`https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80`,thumb:`https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80`},{id:`g-2`,category:`interior`,title:`Warm Rustic Dining Room`,caption:`Cozy timber booths and warm ambient lighting designed for family gatherings.`,url:`https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80`,thumb:`https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80`},{id:`g-3`,category:`kitchen`,title:`Charcoal Tandoor Skewers`,caption:`Live clay ovens firing fresh naans and marinated tikka skewers.`,url:`https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80`,thumb:`https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80`},{id:`g-4`,category:`food`,title:`The Smashed Brioche Burger`,caption:`Crispy lacy edges, double American cheese and kettle sauce.`,url:`https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80`,thumb:`https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80`},{id:`g-5`,category:`interior`,title:`Outdoor Sunny Patio`,caption:`Breezy afternoon coffee, evening drinks and pet-friendly outdoor seating.`,url:`https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80`,thumb:`https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80`},{id:`g-6`,category:`food`,title:`Velvety Butter Chicken & Garlic Naan`,caption:`Slow-simmered creamy tomato gravy served piping hot.`,url:`https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1200&q=80`,thumb:`https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80`},{id:`g-7`,category:`kitchen`,title:`Fresh Daily Prep & Spices`,caption:`Whole spices stone-ground every morning with zero synthetic preservatives.`,url:`https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80`,thumb:`https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80`},{id:`g-8`,category:`food`,title:`Sizzling Gelato Brownie`,caption:`Cast iron skillet decadence topped with Belgian chocolate drizzle.`,url:`https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80`,thumb:`https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80`}],Oe=[{id:`rev-1`,author:`Elena Rostova`,role:`Local Foodie & Architect`,rating:5,date:`November 4, 2026`,avatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80`,verified:!0,source:`Google Review`,comment:`The Butter Chicken and Dal Makhani here are hands down the best in the area! The prices are unbelievably fair for this portion size. Cozy atmosphere, fast service, and the staff actually treats you like family.`},{id:`rev-2`,author:`Marcus Chen`,role:`College Student & Regular`,rating:5,date:`October 28, 2026`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`,verified:!0,source:`Google Review`,comment:`The Smashed Cheeseburger with peri-peri fries is my go-to post-lecture meal. Great student combos and super convenient to order ahead on WhatsApp and grab it on my way home!`},{id:`rev-3`,author:`Priya & Rajesh Sharma`,role:`Family of 4`,rating:5,date:`October 19, 2026`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`,verified:!0,source:`TripAdvisor`,comment:`We hosted my parents' 30th anniversary dinner here. The Dum Chicken Biryani was fragrant and delicate, not greasy at all. Everyone from my 8-year-old to my grandparents loved the food. Highly recommended!`},{id:`rev-4`,author:`David Miller`,role:`Software Consultant`,rating:5,date:`September 30, 2026`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80`,verified:!0,source:`Google Review`,comment:`The weekday lunch deal is unbeatable value. Fast, fresh, clean, and delicious. You can taste the real stone-ground spices in every bite.`}],ke=[{q:`Do you offer pure vegetarian and gluten-friendly options?`,a:`Yes! Over 50% of our menu is purely vegetarian, prepared with separate cookware and utensils. We also clearly mark gluten-sensitive and dairy-free options on our menu.`},{q:`How does ordering through WhatsApp work?`,a:`Simply browse our menu, add your favorites to your order tray, and tap 'Order via WhatsApp'. It creates a pre-formatted message with your items, selected address or pickup time, and sends it directly to our kitchen team for instant confirmation!`},{q:`Can I reserve a table for large groups or birthdays?`,a:`Absolutely! You can use our Table Booking form on this page or give us a quick call. For parties larger than 10, we recommend booking at least 24 hours in advance.`},{q:`Is parking available at the restaurant?`,a:`Yes, we have dedicated customer parking behind the building accessible from Market Square Lane, plus ample street parking out front.`}],Ae={Star:S,Plus:Se,Utensils:O,Flame:ae,CookingPot:ne,Wheat:k,Sandwich:Ce,GlassWater:oe,IceCream:ue,Sparkles:x,Copy:re,Maximize2:me,BadgeCheck:d,ChevronDown:_,ChevronLeft:v,ChevronRight:y,Trash2:T,PhoneCall:be,Phone:xe,MessageCircle:ge,ShoppingBag:we,ShoppingBasket:b,Sun:C,Moon:ve,Menu:he,X:Te,Home:le,Heart:ce,BookOpen:p,Tag:w,Camera:g,MapPin:fe,Leaf:de,Zap:Ee,Users:E,ArrowRight:u,Navigation:ye,Map:pe,Clock:te,Calendar:h,CalendarCheck:m,CheckCircle:ee,ExternalLink:ie,Bell:f,UtensilsCrossed:D,HeartHandshake:se,MessageSquare:_e},F={theme:localStorage.getItem(`theme`)||(window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`),cart:JSON.parse(localStorage.getItem(`copper_kettle_cart`)||`[]`),appliedCoupon:null,activeCategory:`all`,activeDietFilter:`all`,searchQuery:``,galleryCategory:`all`,lightboxIndex:0,lightboxImages:[...P],orderType:`delivery`};document.addEventListener(`DOMContentLoaded`,()=>{je(),Fe(),R(),z(),B(),Le(),V(),Be(),Ve(),He(),Y(),Je(),I()});function I(){A({icons:Ae})}function je(){L(F.theme),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{localStorage.getItem(`theme`)||L(e.matches?`dark`:`light`)})}function L(e){F.theme=e,e===`dark`?document.documentElement.classList.add(`dark`):document.documentElement.classList.remove(`dark`),localStorage.setItem(`theme`,e),Ne()}function Me(){let e=F.theme===`dark`?`light`:`dark`;L(e),$(`Switched to ${e} mode`)}function Ne(){let e=F.theme===`dark`;document.querySelectorAll(`.theme-icon-sun`).forEach(t=>{t.classList.toggle(`hidden`,!e)}),document.querySelectorAll(`.theme-icon-moon`).forEach(t=>{t.classList.toggle(`hidden`,e)})}function Pe(){let e=new Date,t=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`][e.getDay()],n=e.getHours()+e.getMinutes()/60,r=j.openingHours.find(e=>e.day===t);return r?n>=r.openHour&&n<r.closeHour?{isOpen:!0,message:`Open Now • Closes at ${r.closes}`,badgeClass:`bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30`,dotClass:`bg-emerald-500 animate-pulse`}:{isOpen:!1,message:`Currently Closed • Opens at ${r.opens}`,badgeClass:`bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30`,dotClass:`bg-amber-500`}:{isOpen:!0,message:`Open Today`,badgeClass:`bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20`}}function Fe(){let e=Pe();document.querySelectorAll(`.live-status-container`).forEach(t=>{t.innerHTML=`
      <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${e.badgeClass}">
        <span class="w-2 h-2 rounded-full ${e.dotClass}"></span>
        <span>${e.message}</span>
      </span>
    `})}function R(){let e=document.getElementById(`popular-dishes-grid`);e&&(e.innerHTML=N.filter(e=>e.isPopular).slice(0,4).map(e=>{let t=F.cart.find(t=>t.id===e.id),n=t?t.quantity:0;return`
      <div class="group flex flex-col bg-white dark:bg-[#1E222B] rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#2D3442] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="relative h-52 overflow-hidden bg-stone-200 dark:bg-stone-800">
          <img
            src="${e.image}"
            alt="${e.name}"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
          
          <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-medium text-white">
            ${e.isVeg?`<span class="veg-icon bg-white/90 dark:bg-stone-900/90 p-0.5"><span class="veg-icon-dot"></span></span><span class="text-emerald-400">Pure Veg</span>`:`<span class="non-veg-icon bg-white/90 dark:bg-stone-900/90 p-0.5"><span class="non-veg-icon-triangle"></span></span><span class="text-red-400">Non-Veg</span>`}
          </div>

          <div class="absolute top-3 right-3 flex items-center gap-1 bg-amber-500 text-stone-900 font-bold px-2 py-0.5 rounded-full text-xs shadow-md">
            <i data-lucide="star" class="w-3 h-3 fill-stone-900"></i>
            <span>${e.rating}</span>
          </div>

          <div class="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
            <span class="text-xs bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-stone-200">
              ⏱️ ${e.prepTime}
            </span>
            <span class="text-xl font-extrabold tracking-tight text-white drop-shadow-md">
              $${e.price.toFixed(2)}
            </span>
          </div>
        </div>

        <div class="p-5 flex flex-col flex-1">
          <div class="flex items-start justify-between gap-2 mb-2">
            <h3 class="font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              ${e.name}
            </h3>
          </div>
          <p class="text-stone-600 dark:text-stone-400 text-sm line-clamp-2 mb-4 flex-1">
            ${e.description}
          </p>

          <div class="pt-3 border-t border-[#F0E9DF] dark:border-[#2A303C] flex items-center justify-between">
            <div class="text-xs text-stone-500 dark:text-stone-400">
              Spice: <span class="font-medium capitalize text-stone-700 dark:text-stone-300">${e.spiceLevel}</span>
            </div>

            ${n>0?`
              <div class="flex items-center gap-2 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 rounded-xl px-2 py-1">
                <button onclick="window.handleCartQuantity('${e.id}', -1)" aria-label="Decrease quantity" class="w-7 h-7 flex items-center justify-center rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors shadow-xs font-bold text-sm">
                  -
                </button>
                <span class="font-bold text-stone-900 dark:text-white px-1 text-sm">${n}</span>
                <button onclick="window.handleCartQuantity('${e.id}', 1)" aria-label="Increase quantity" class="w-7 h-7 flex items-center justify-center rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors shadow-xs font-bold text-sm">
                  +
                </button>
              </div>
            `:`
              <button 
                onclick="window.handleAddToCart('${e.id}')"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20 active:scale-95 transition-all"
              >
                <i data-lucide="plus" class="w-4 h-4"></i>
                <span>Add to Tray</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `}).join(``),I())}function z(){let e=document.getElementById(`menu-categories-nav`);e&&(e.innerHTML=De.map(e=>{let t=F.activeCategory===e.id;return`
      <button 
        onclick="window.handleCategorySelect('${e.id}')"
        class="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${t?`bg-red-600 text-white shadow-md shadow-red-600/25 scale-102`:`bg-white dark:bg-[#1E232C] text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-[#282F3B] border border-stone-200 dark:border-stone-800 shadow-xs`}"
      >
        <i data-lucide="${e.icon}" class="w-4 h-4 ${t?`text-white`:`text-stone-500 dark:text-stone-400`}"></i>
        <span>${e.label}</span>
      </button>
    `}).join(``),I())}function Ie(){return N.filter(e=>{let t=F.activeCategory===`all`||e.category===F.activeCategory,n=!0;F.activeDietFilter===`veg`&&(n=e.isVeg===!0),F.activeDietFilter===`non-veg`&&(n=e.isVeg===!1),F.activeDietFilter===`chef-special`&&(n=e.isChefSpecial===!0);let r=!0;if(F.searchQuery.trim()!==``){let t=F.searchQuery.toLowerCase().trim();r=e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.category.toLowerCase().includes(t)}return t&&n&&r})}function B(){let e=document.getElementById(`menu-items-grid`),t=document.getElementById(`menu-items-count`);if(!e)return;let n=Ie();t&&(t.textContent=`Showing ${n.length} ${n.length===1?`dish`:`dishes`}`),n.length===0?(e.innerHTML=`
      <div class="col-span-full py-16 text-center bg-stone-50 dark:bg-[#181B22] rounded-3xl border border-dashed border-stone-300 dark:border-stone-800 p-8">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400">
          <i data-lucide="utensils-crossed" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">No dishes match your selection</h3>
        <p class="text-stone-600 dark:text-stone-400 max-w-md mx-auto text-sm mb-6">
          We couldn't find anything matching "${F.searchQuery}". Try selecting another category or resetting filters.
        </p>
        <button 
          onclick="window.resetMenuFilters()"
          class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-md transition-all"
        >
          Reset All Filters
        </button>
      </div>
    `,I()):(e.innerHTML=n.map(e=>{let t=F.cart.find(t=>t.id===e.id),n=t?t.quantity:0;return`
      <div class="group flex flex-col bg-white dark:bg-[#1E222B] rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#2D3442] transition-all duration-300 hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1">
        <div class="relative h-48 overflow-hidden bg-stone-200 dark:bg-stone-800">
          <img
            src="${e.image}"
            alt="${e.name}"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50"></div>
          
          <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-medium text-white">
            ${e.isVeg?`<span class="veg-icon bg-white/90 dark:bg-stone-900/90 p-0.5"><span class="veg-icon-dot"></span></span><span class="text-emerald-400">Veg</span>`:`<span class="non-veg-icon bg-white/90 dark:bg-stone-900/90 p-0.5"><span class="non-veg-icon-triangle"></span></span><span class="text-red-400">Non-Veg</span>`}
          </div>

          ${e.isChefSpecial?`
            <div class="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
              <i data-lucide="sparkles" class="w-3 h-3"></i>
              <span>Chef's Choice</span>
            </div>
          `:`
            <div class="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md text-amber-400 font-semibold px-2 py-0.5 rounded-full text-xs">
              <i data-lucide="star" class="w-3 h-3 fill-amber-400"></i>
              <span>${e.rating}</span>
            </div>
          `}

          <div class="absolute bottom-3 left-3 text-xs bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-stone-200">
            ⏱️ ${e.prepTime}
          </div>
        </div>

        <div class="p-4 sm:p-5 flex flex-col flex-1 justify-between">
          <div>
            <div class="flex items-start justify-between gap-2 mb-1.5">
              <h3 class="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                ${e.name}
              </h3>
            </div>
            <p class="text-stone-600 dark:text-stone-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
              ${e.description}
            </p>
          </div>

          <div class="pt-3 border-t border-[#F0E9DF] dark:border-[#2A303C] flex items-center justify-between mt-auto">
            <div class="flex flex-col">
              <span class="text-xs text-stone-500 dark:text-stone-400">Price</span>
              <span class="text-lg font-black text-stone-900 dark:text-white">
                $${e.price.toFixed(2)}
              </span>
            </div>

            ${n>0?`
              <div class="flex items-center gap-1.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 rounded-xl px-2 py-1">
                <button onclick="window.handleCartQuantity('${e.id}', -1)" aria-label="Decrease quantity" class="w-7 h-7 flex items-center justify-center rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors shadow-xs font-bold text-sm">
                  -
                </button>
                <span class="font-bold text-stone-900 dark:text-white px-2 text-sm">${n}</span>
                <button onclick="window.handleCartQuantity('${e.id}', 1)" aria-label="Increase quantity" class="w-7 h-7 flex items-center justify-center rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors shadow-xs font-bold text-sm">
                  +
                </button>
              </div>
            `:`
              <button 
                onclick="window.handleAddToCart('${e.id}')"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-red-600 hover:bg-red-700 text-white shadow-sm shadow-red-600/20 active:scale-95 transition-all"
              >
                <i data-lucide="plus" class="w-4 h-4"></i>
                <span>Add</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `}).join(``),I())}function Le(){let e=document.getElementById(`special-offers-grid`);e&&(e.innerHTML=M.map(e=>`
      <div class="relative flex flex-col justify-between bg-white dark:bg-[#1E222B] rounded-3xl p-6 sm:p-7 border border-[#E8DFD3] dark:border-[#2D3442] shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-36 h-36 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
        
        <div>
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400 border border-red-200 dark:border-red-900/50">
              ${e.badge}
            </span>
            <span class="text-xs text-stone-500 dark:text-stone-400 font-medium">
              Min. ${e.minOrder}
            </span>
          </div>

          <div class="text-3xl font-black text-red-600 dark:text-red-400 mb-2">
            ${e.discount}
          </div>

          <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
            ${e.title}
          </h3>

          <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6">
            ${e.description}
          </p>
        </div>

        <div class="pt-4 border-t border-dashed border-stone-200 dark:border-stone-800">
          <div class="flex items-center justify-between gap-2 bg-stone-50 dark:bg-[#161920] p-2 rounded-2xl border border-stone-200 dark:border-stone-800">
            <div class="pl-2 font-mono font-bold text-sm text-stone-800 dark:text-stone-200 tracking-wider">
              ${e.code}
            </div>
            <button 
              onclick="window.copyCouponCode('${e.code}')"
              class="px-3.5 py-1.5 rounded-xl bg-stone-900 text-white dark:bg-white dark:text-stone-900 text-xs font-bold hover:bg-red-600 dark:hover:bg-red-500 dark:hover:text-white transition-all flex items-center gap-1 active:scale-95"
            >
              <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              <span>Copy</span>
            </button>
          </div>
          <p class="text-[11px] text-stone-500 dark:text-stone-400 mt-2 text-center">
            Valid: ${e.validity}
          </p>
        </div>
      </div>
    `).join(``),I())}function Re(e){navigator.clipboard.writeText(e).then(()=>{F.appliedCoupon=e,$(`Coupon code "${e}" copied & applied to your tray!`),Y(),X()}).catch(()=>{F.appliedCoupon=e,$(`Applied coupon "${e}" to your tray!`),Y()})}function V(){let e=document.getElementById(`gallery-grid`);if(!e)return;let t=F.galleryCategory===`all`?P:P.filter(e=>e.category===F.galleryCategory);F.lightboxImages=t,e.innerHTML=t.map((e,t)=>`
      <div 
        onclick="window.openLightbox(${t})"
        class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-stone-200 dark:bg-stone-800 shadow-sm border border-[#E8DFD3] dark:border-[#2D333F]"
      >
        <img
          src="${e.thumb}"
          alt="${e.title}"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
          <span class="text-xs uppercase tracking-wider font-semibold text-amber-400 mb-1">
            ${e.category}
          </span>
          <h4 class="font-bold text-lg mb-1">${e.title}</h4>
          <p class="text-xs text-stone-300 line-clamp-1">${e.caption}</p>
          <div class="mt-3 flex items-center gap-1.5 text-xs text-stone-200">
            <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
            <span>Click to expand</span>
          </div>
        </div>
      </div>
    `).join(``),I()}function ze(e){F.lightboxIndex=e,G();let t=document.getElementById(`lightbox-modal`);t&&(t.classList.remove(`hidden`),t.classList.add(`flex`),document.body.style.overflow=`hidden`)}function H(){let e=document.getElementById(`lightbox-modal`);e&&(e.classList.add(`hidden`),e.classList.remove(`flex`),document.body.style.overflow=``)}function U(){F.lightboxImages.length!==0&&(F.lightboxIndex=(F.lightboxIndex+1)%F.lightboxImages.length,G())}function W(){F.lightboxImages.length!==0&&(F.lightboxIndex=(F.lightboxIndex-1+F.lightboxImages.length)%F.lightboxImages.length,G())}function G(){let e=F.lightboxImages[F.lightboxIndex];if(!e)return;let t=document.getElementById(`lightbox-image`),n=document.getElementById(`lightbox-title`),r=document.getElementById(`lightbox-desc`),i=document.getElementById(`lightbox-counter`);t&&(t.src=e.url),n&&(n.textContent=e.title),r&&(r.textContent=e.caption),i&&(i.textContent=`${F.lightboxIndex+1} / ${F.lightboxImages.length}`)}function Be(){let e=document.getElementById(`reviews-grid`);e&&(e.innerHTML=Oe.map(e=>`
      <div class="flex flex-col justify-between bg-white dark:bg-[#1E222B] p-6 sm:p-7 rounded-3xl border border-[#E8DFD3] dark:border-[#2D3442] shadow-sm hover:shadow-xl transition-all duration-300">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-1 text-amber-500">
              ${Array.from({length:e.rating}).map(()=>`<i data-lucide="star" class="w-4 h-4 fill-amber-500 text-amber-500"></i>`).join(``)}
            </div>
            <span class="text-xs text-stone-400 font-medium">${e.source}</span>
          </div>

          <p class="text-stone-700 dark:text-stone-300 text-sm leading-relaxed mb-6 italic">
            "${e.comment}"
          </p>
        </div>

        <div class="flex items-center gap-3 pt-4 border-t border-[#F0E9DF] dark:border-[#2A303C]">
          <img
            src="${e.avatar}"
            alt="${e.author}"
            class="w-11 h-11 rounded-full object-cover border border-stone-200 dark:border-stone-700"
          />
          <div>
            <h4 class="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-1.5">
              ${e.author}
              ${e.verified?`<i data-lucide="badge-check" class="w-4 h-4 text-emerald-500" title="Verified Customer"></i>`:``}
            </h4>
            <span class="text-xs text-stone-500 dark:text-stone-400">${e.role}</span>
          </div>
        </div>
      </div>
    `).join(``),I())}function Ve(){let e=document.getElementById(`opening-hours-table`);if(!e)return;let t=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`][new Date().getDay()];e.innerHTML=j.openingHours.map(e=>{let n=e.day===t;return`
      <div class="flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors ${n?`bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 font-semibold`:`hover:bg-stone-50 dark:hover:bg-stone-800/50`}">
        <div class="flex items-center gap-2">
          <span class="text-sm ${n?`text-red-700 dark:text-red-400 font-bold`:`text-stone-700 dark:text-stone-300`}">
            ${e.day}
          </span>
          ${n?`<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-red-600 text-white tracking-wider">Today</span>`:``}
        </div>
        <span class="text-sm font-medium ${n?`text-red-800 dark:text-red-300`:`text-stone-600 dark:text-stone-400`}">
          ${e.opens} – ${e.closes}
        </span>
      </div>
    `}).join(``)}function He(){let e=document.getElementById(`faq-container`);e&&(e.innerHTML=ke.map((e,t)=>`
      <div class="border border-[#E8DFD3] dark:border-[#2D333F] rounded-2xl overflow-hidden bg-white dark:bg-[#1C2028]">
        <button 
          onclick="window.toggleFaq(${t})"
          class="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-stone-900 dark:text-stone-100 hover:text-red-600 dark:hover:text-red-400 transition-colors"
        >
          <span class="text-sm sm:text-base">${e.q}</span>
          <i data-lucide="chevron-down" id="faq-icon-${t}" class="w-5 h-5 text-stone-400 transition-transform duration-200 flex-shrink-0"></i>
        </button>
        <div id="faq-content-${t}" class="hidden px-5 pb-5 text-stone-600 dark:text-stone-400 text-sm leading-relaxed border-t border-[#F0E9DF] dark:border-[#2A303C] pt-3">
          ${e.a}
        </div>
      </div>
    `).join(``),I())}function Ue(e){let t=document.getElementById(`faq-content-${e}`),n=document.getElementById(`faq-icon-${e}`);if(!t)return;let r=t.classList.contains(`hidden`);t.classList.toggle(`hidden`,!r),n&&(n.style.transform=r?`rotate(180deg)`:`rotate(0deg)`)}function We(e){let t=N.find(t=>t.id===e);if(!t)return;let n=F.cart.find(t=>t.id===e);n?n.quantity+=1:F.cart.push({id:t.id,name:t.name,price:t.price,isVeg:t.isVeg,image:t.image,quantity:1}),q(),Y(),B(),R(),$(`Added "${t.name}" to your tray!`)}function K(e,t){let n=F.cart.findIndex(t=>t.id===e);n!==-1&&(F.cart[n].quantity+=t,F.cart[n].quantity<=0&&F.cart.splice(n,1),q(),Y(),B(),R())}function Ge(e){F.cart=F.cart.filter(t=>t.id!==e),q(),Y(),B(),R()}function Ke(){F.cart=[],F.appliedCoupon=null,q(),Y(),B(),R(),$(`Order tray cleared.`)}function q(){localStorage.setItem(`copper_kettle_cart`,JSON.stringify(F.cart))}function J(){let e=F.cart.reduce((e,t)=>e+t.price*t.quantity,0),t=0;F.appliedCoupon===`WEEKDAY15`?t=e*.15:F.appliedCoupon===`FAMILYFEAST`&&e>=60?t=12:F.appliedCoupon===`STUDENTBITE`&&e>0&&(t=7);let n=e-t>0?(e-t)*.08:0,r=F.orderType===`delivery`&&e>0?3.5:0,i=Math.max(0,e-t+n+r);return{subtotal:e,discount:t,tax:n,deliveryFee:r,total:i}}function Y(){let e=F.cart.reduce((e,t)=>e+t.quantity,0),t=J();document.querySelectorAll(`.cart-badge-count`).forEach(t=>{t.textContent=e,t.classList.toggle(`hidden`,e===0)}),document.querySelectorAll(`.cart-subtotal-text`).forEach(e=>{e.textContent=`$${t.total.toFixed(2)}`});let n=document.getElementById(`cart-drawer-items`),r=document.getElementById(`cart-drawer-empty`),i=document.getElementById(`cart-drawer-footer`);if(!n)return;if(F.cart.length===0){n&&(n.innerHTML=``),r&&r.classList.remove(`hidden`),i&&i.classList.add(`hidden`);return}r&&r.classList.add(`hidden`),i&&i.classList.remove(`hidden`),n.innerHTML=F.cart.map(e=>`
      <div class="flex items-center gap-3 p-3 bg-white dark:bg-[#1E222B] rounded-2xl border border-stone-200 dark:border-stone-700 shadow-xs">
        <img
          src="${e.image}"
          alt="${e.name}"
          class="w-16 h-16 rounded-xl object-cover"
        />
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-stone-900 dark:text-stone-100 text-sm truncate">${e.name}</h4>
          <span class="text-xs text-stone-500 dark:text-stone-400">$${e.price.toFixed(2)} each</span>
          <div class="text-sm font-bold text-red-600 dark:text-red-400 mt-0.5">
            $${(e.price*e.quantity).toFixed(2)}
          </div>
        </div>

        <div class="flex items-center gap-1.5 bg-stone-100 dark:bg-[#282F3B] border border-stone-200 dark:border-stone-700 rounded-xl px-1.5 py-1">
          <button 
            onclick="window.handleCartQuantity('${e.id}', -1)"
            aria-label="Decrease quantity"
            class="w-6 h-6 flex items-center justify-center rounded-lg text-stone-700 dark:text-stone-200 hover:bg-white dark:hover:bg-stone-700 font-bold text-xs"
          >
            -
          </button>
          <span class="text-xs font-bold text-stone-900 dark:text-white px-1">${e.quantity}</span>
          <button 
            onclick="window.handleCartQuantity('${e.id}', 1)"
            aria-label="Increase quantity"
            class="w-6 h-6 flex items-center justify-center rounded-lg text-stone-700 dark:text-stone-200 hover:bg-white dark:hover:bg-stone-700 font-bold text-xs"
          >
            +
          </button>
        </div>

        <button 
          onclick="window.handleRemoveCartItem('${e.id}')"
          aria-label="Remove item"
          class="p-1.5 text-stone-400 hover:text-red-500 transition-colors"
        >
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `).join(``);let a=document.getElementById(`cart-subtotal`),o=document.getElementById(`cart-discount-row`),s=document.getElementById(`cart-discount-val`),c=document.getElementById(`cart-delivery-row`),l=document.getElementById(`cart-delivery-val`),u=document.getElementById(`cart-tax`),d=document.getElementById(`cart-total`);a&&(a.textContent=`$${t.subtotal.toFixed(2)}`),o&&s&&(t.discount>0?(o.classList.remove(`hidden`),s.textContent=`-$${t.discount.toFixed(2)} (${F.appliedCoupon})`):o.classList.add(`hidden`)),c&&l&&(F.orderType===`delivery`?(c.classList.remove(`hidden`),l.textContent=`$${t.deliveryFee.toFixed(2)}`):c.classList.add(`hidden`)),u&&(u.textContent=`$${t.tax.toFixed(2)}`),d&&(d.textContent=`$${t.total.toFixed(2)}`),I()}function X(){let e=document.getElementById(`cart-drawer`),t=document.getElementById(`cart-drawer-backdrop`);e&&t&&(t.classList.remove(`hidden`),e.classList.remove(`translate-x-full`),document.body.style.overflow=`hidden`)}function Z(){let e=document.getElementById(`cart-drawer`),t=document.getElementById(`cart-drawer-backdrop`);e&&t&&(e.classList.add(`translate-x-full`),t.classList.add(`hidden`),document.body.style.overflow=``)}function qe(){if(F.cart.length===0){$(`Your tray is empty! Add dishes to order.`);return}let e=J(),t=document.getElementById(`order-address-input`),n=document.getElementById(`order-notes-input`),r=t?t.value.trim():``,i=n?n.value.trim():``,a=`🍽️ *NEW ORDER - ${j.name.toUpperCase()}*\n`;a+=`━━━━━━━━━━━━━━━━━━━━━
`,a+=`📍 *Order Type:* ${F.orderType.toUpperCase()}\n`,r&&(a+=`🏠 *Delivery / Table:* ${r}\n`),a+=`━━━━━━━━━━━━━━━━━━━━━
`,a+=`📋 *ORDERED ITEMS:*
`,F.cart.forEach(e=>{a+=`• ${e.quantity}x ${e.name} ($${(e.price*e.quantity).toFixed(2)})\n`}),a+=`━━━━━━━━━━━━━━━━━━━━━
`,a+=`💵 *Subtotal:* $${e.subtotal.toFixed(2)}\n`,e.discount>0&&(a+=`🏷️ *Discount (${F.appliedCoupon}):* -$${e.discount.toFixed(2)}\n`),F.orderType===`delivery`&&(a+=`🛵 *Delivery Fee:* $${e.deliveryFee.toFixed(2)}\n`),a+=`🏛️ *Estimated Tax:* $${e.tax.toFixed(2)}\n`,a+=`✨ *FINAL TOTAL:* $${e.total.toFixed(2)}\n`,a+=`━━━━━━━━━━━━━━━━━━━━━
`,i&&(a+=`📝 *Kitchen Instructions:* ${i}\n`),a+=`
Please confirm order availability and estimated preparation time. Thank you!`;let o=`https://wa.me/${j.whatsappNumber}?text=${encodeURIComponent(a)}`;window.open(o,`_blank`)}var Q;function $(e){let t=document.getElementById(`toast-notification`),n=document.getElementById(`toast-message`);t&&n&&(n.textContent=e,t.classList.remove(`translate-y-20`,`opacity-0`,`pointer-events-none`),t.classList.add(`translate-y-0`,`opacity-100`),clearTimeout(Q),Q=setTimeout(()=>{t.classList.add(`translate-y-20`,`opacity-0`,`pointer-events-none`),t.classList.remove(`translate-y-0`,`opacity-100`)},3200))}function Je(){document.querySelectorAll(`.theme-toggle-btn`).forEach(e=>{e.addEventListener(`click`,Me)});let e=document.getElementById(`mobile-menu-toggle`),t=document.getElementById(`mobile-nav-drawer`),n=document.getElementById(`mobile-nav-close`),r=document.getElementById(`mobile-nav-backdrop`);e&&t&&e.addEventListener(`click`,()=>{t.classList.remove(`-translate-x-full`),r&&r.classList.remove(`hidden`),document.body.style.overflow=`hidden`});let i=()=>{t&&t.classList.add(`-translate-x-full`),r&&r.classList.add(`hidden`),document.body.style.overflow=``};n&&n.addEventListener(`click`,i),r&&r.addEventListener(`click`,i),document.querySelectorAll(`.mobile-nav-link`).forEach(e=>{e.addEventListener(`click`,i)});let a=document.getElementById(`menu-search-input`);a&&a.addEventListener(`input`,e=>{F.searchQuery=e.target.value,B()}),document.querySelectorAll(`.diet-filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.filter;F.activeDietFilter=t,document.querySelectorAll(`.diet-filter-btn`).forEach(e=>{let n=e.dataset.filter===t;e.classList.toggle(`bg-red-600`,n),e.classList.toggle(`text-white`,n),e.classList.toggle(`border-transparent`,n),e.classList.toggle(`bg-white`,!n),e.classList.toggle(`dark:bg-[#1E232C]`,!n),e.classList.toggle(`text-stone-700`,!n),e.classList.toggle(`dark:text-stone-300`,!n)}),B()})}),document.querySelectorAll(`.gallery-filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.category;F.galleryCategory=t,document.querySelectorAll(`.gallery-filter-btn`).forEach(e=>{let n=e.dataset.category===t;e.classList.toggle(`bg-red-600`,n),e.classList.toggle(`text-white`,n),e.classList.toggle(`bg-white`,!n),e.classList.toggle(`dark:bg-[#1E232C]`,!n),e.classList.toggle(`text-stone-700`,!n),e.classList.toggle(`dark:text-stone-300`,!n)}),V()})}),document.addEventListener(`keydown`,e=>{let t=document.getElementById(`lightbox-modal`);t&&!t.classList.contains(`hidden`)&&(e.key===`Escape`&&H(),e.key===`ArrowRight`&&U(),e.key===`ArrowLeft`&&W())}),document.querySelectorAll(`.open-cart-btn`).forEach(e=>{e.addEventListener(`click`,X)});let o=document.getElementById(`close-cart-btn`),s=document.getElementById(`cart-drawer-backdrop`);o&&o.addEventListener(`click`,Z),s&&s.addEventListener(`click`,Z),document.querySelectorAll(`.order-type-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.type;F.orderType=t,document.querySelectorAll(`.order-type-btn`).forEach(e=>{let n=e.dataset.type===t;e.classList.toggle(`bg-red-600`,n),e.classList.toggle(`text-white`,n),e.classList.toggle(`bg-stone-100`,!n),e.classList.toggle(`dark:bg-[#1E232C]`,!n),e.classList.toggle(`text-stone-700`,!n),e.classList.toggle(`dark:text-stone-300`,!n)});let n=document.getElementById(`order-address-label`),r=document.getElementById(`order-address-input`);n&&r&&(t===`delivery`?(n.textContent=`Delivery Address & Apt #`,r.placeholder=`e.g. 742 Evergreen Terr, Apt 4B`):t===`dine-in`?(n.textContent=`Your Table Number (if seated)`,r.placeholder=`e.g. Table #12 or Patio Booth`):(n.textContent=`Pickup Time & Contact Name`,r.placeholder=`e.g. John Doe, pickup in 25 mins`)),Y()})});let c=document.getElementById(`apply-coupon-btn`),l=document.getElementById(`cart-coupon-input`);c&&l&&c.addEventListener(`click`,()=>{let e=l.value.trim().toUpperCase();e&&(M.find(t=>t.code===e)?(F.appliedCoupon=e,$(`Coupon "${e}" applied successfully!`),Y()):$(`Invalid coupon code. Try WEEKDAY15 or FAMILYFEAST`))});let u=document.getElementById(`cart-whatsapp-order-btn`);u&&u.addEventListener(`click`,qe);let d=document.getElementById(`clear-cart-btn`);d&&d.addEventListener(`click`,Ke);let f=document.getElementById(`table-booking-form`);f&&f.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`book-name`).value.trim(),n=document.getElementById(`book-phone`).value.trim(),r=document.getElementById(`book-date`).value,i=document.getElementById(`book-time`).value,a=document.getElementById(`book-guests`).value,o=document.getElementById(`book-seating`).value,s=document.getElementById(`book-notes`).value.trim();if(!t||!n||!r||!i){$(`Please fill out all required reservation fields.`);return}let c=document.getElementById(`booking-confirmation-modal`),l=document.getElementById(`booking-summary-details`);if(c&&l){l.innerHTML=`
          <div class="space-y-2 text-sm text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800/60 p-4 rounded-xl border border-stone-200 dark:border-stone-700">
            <div class="flex justify-between"><strong>Guest:</strong> <span>${t}</span></div>
            <div class="flex justify-between"><strong>Phone:</strong> <span>${n}</span></div>
            <div class="flex justify-between"><strong>Date & Time:</strong> <span>${r} at ${i}</span></div>
            <div class="flex justify-between"><strong>Guests:</strong> <span>${a} Persons (${o})</span></div>
            ${s?`<div class="flex justify-between"><strong>Notes:</strong> <span>${s}</span></div>`:``}
          </div>
        `,c.classList.remove(`hidden`),c.classList.add(`flex`);let e=document.getElementById(`booking-send-wa-btn`);e&&(e.onclick=()=>{let e=`📅 *TABLE RESERVATION REQUEST - ${j.name.toUpperCase()}*\n`;e+=`━━━━━━━━━━━━━━━━━━━━━
`,e+=`👤 *Name:* ${t}\n`,e+=`📞 *Phone:* ${n}\n`,e+=`🗓️ *Date:* ${r}\n`,e+=`⏰ *Time:* ${i}\n`,e+=`👥 *Party Size:* ${a} Guests\n`,e+=`🪑 *Seating:* ${o}\n`,s&&(e+=`📝 *Special Requests:* ${s}\n`),e+=`━━━━━━━━━━━━━━━━━━━━━
`,e+=`Please confirm if a table is available at this time. Thank you!`,window.open(`https://wa.me/${j.whatsappNumber}?text=${encodeURIComponent(e)}`,`_blank`),c.classList.add(`hidden`),c.classList.remove(`flex`),f.reset()})}});let p=document.getElementById(`close-booking-modal-btn`);p&&p.addEventListener(`click`,()=>{let e=document.getElementById(`booking-confirmation-modal`);e&&(e.classList.add(`hidden`),e.classList.remove(`flex`))});let m=document.getElementById(`newsletter-form`);m&&m.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`newsletter-email`);t&&t.value&&($(`🎉 Thank you! Check your email for your $5 welcome coupon.`),t.value=``)})}window.handleAddToCart=We,window.handleCartQuantity=K,window.handleRemoveCartItem=Ge,window.handleCategorySelect=e=>{F.activeCategory=e,z(),B()},window.resetMenuFilters=()=>{F.activeCategory=`all`,F.activeDietFilter=`all`,F.searchQuery=``;let e=document.getElementById(`menu-search-input`);e&&(e.value=``),z(),B()},window.copyCouponCode=Re,window.openLightbox=ze,window.closeLightbox=H,window.nextLightboxImage=U,window.prevLightboxImage=W,window.toggleFaq=Ue;