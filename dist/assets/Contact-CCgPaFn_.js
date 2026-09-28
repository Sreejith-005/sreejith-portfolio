import{c,r as o,j as e,H as j,R as m,p as i,G as g}from"./index-CNxeeK24.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=c("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=c("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=c("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=c("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);function v(){const[a,h]=o.useState({name:"",email:"",subject:"",message:""}),[d,u]=o.useState([]),n=s=>t=>h({...a,[s]:t.target.value}),p=s=>{s.preventDefault();const t=[];if(a.name.trim()||t.push("Please enter your name."),/^\S+@\S+\.\S+$/.test(a.email)||t.push("Please enter a valid email address."),a.subject.trim()||t.push("Please enter a subject."),a.message.trim().length<10&&t.push("Message should be at least 10 characters."),u(t),t.length)return;const l=`${a.message}

— ${a.name} (${a.email})`;window.location.href=`mailto:${i.email}?subject=${encodeURIComponent(a.subject)}&body=${encodeURIComponent(l)}`},x=[{I:y,t:i.email,h:`mailto:${i.email}`},{I:N,t:i.phone,h:`tel:+91${i.phone}`},{I:f,t:i.location},{I:b,t:"linkedin.com/in/sreejith005",h:i.linkedin},{I:g,t:"github.com/Sreejith-005",h:i.github}],r="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-sm placeholder:text-muted";return e.jsxs("div",{className:"wrap",children:[e.jsx(j,{id:"contact",label:"Contact",title:"Let's Build Something Intelligent."}),e.jsxs("div",{className:"grid gap-10 lg:grid-cols-2",children:[e.jsxs(m,{children:[e.jsx("p",{className:"mb-6 text-muted",children:"Have an opportunity, project idea, or just want to connect? Feel free to reach out."}),e.jsx("ul",{className:"space-y-2",children:x.map(({I:s,t,h:l})=>e.jsx("li",{children:l?e.jsxs("a",{href:l,target:l.startsWith("http")?"_blank":void 0,rel:"noreferrer",className:"flex min-h-[44px] items-center gap-3 hover:text-cyan",children:[e.jsx(s,{size:18,className:"text-cyan","aria-hidden":!0}),t]}):e.jsxs("span",{className:"flex min-h-[44px] items-center gap-3",children:[e.jsx(s,{size:18,className:"text-cyan","aria-hidden":!0}),t]})},t))})]}),e.jsx(m,{delay:.1,children:e.jsxs("form",{onSubmit:p,noValidate:!0,className:"glass space-y-3 p-5",children:[e.jsxs("label",{className:"block text-sm",children:["Name",e.jsx("input",{className:r,value:a.name,onChange:n("name"),autoComplete:"name",required:!0})]}),e.jsxs("label",{className:"block text-sm",children:["Email",e.jsx("input",{type:"email",className:r,value:a.email,onChange:n("email"),autoComplete:"email",required:!0})]}),e.jsxs("label",{className:"block text-sm",children:["Subject",e.jsx("input",{className:r,value:a.subject,onChange:n("subject"),required:!0})]}),e.jsxs("label",{className:"block text-sm",children:["Message",e.jsx("textarea",{rows:5,className:r,value:a.message,onChange:n("message"),required:!0})]}),e.jsx("div",{"aria-live":"polite",className:"text-sm text-red-300",children:d.map(s=>e.jsx("p",{children:s},s))}),e.jsx("button",{type:"submit",className:"btn-primary w-full",children:"Send Message"}),e.jsx("p",{className:"text-xs text-muted",children:"This opens your email app. Nothing is sent from this page."})]})})]})]})}export{v as default};
