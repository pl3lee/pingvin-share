"use strict";(self.webpackChunkpingvindocs=self.webpackChunkpingvindocs||[]).push([[126],{3833:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=i(4848),r=i(8453);const d={id:"configuration"},s="Configuration",c={id:"setup/configuration",title:"Configuration",description:"You can customize Pingvin Share like changing your domain by going to the configuration page in your admin dashboard /admin/config.",source:"@site/docs/setup/configuration.md",sourceDirName:"setup",slug:"/setup/configuration",permalink:"/pingvin-share/setup/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/stonith404/pingvin-share/docs/docs/docs/setup/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration"},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/pingvin-share/setup/installation"},next:{title:"Integrations",permalink:"/pingvin-share/setup/integrations"}},o={},h=[{value:"Environment variables",id:"environment-variables",level:4},{value:"Backend",id:"backend",level:5},{value:"Frontend",id:"frontend",level:5}];function l(e){const n={code:"code",h1:"h1",h4:"h4",h5:"h5",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You can customize Pingvin Share like changing your domain by going to the configuration page in your admin dashboard ",(0,t.jsx)(n.code,{children:"/admin/config"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"environment-variables",children:"Environment variables"}),"\n",(0,t.jsx)(n.p,{children:"For installation specific configuration, you can use environment variables. The following variables are available:"}),"\n",(0,t.jsx)(n.h5,{id:"backend",children:"Backend"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"PORT"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"8080"})}),(0,t.jsx)(n.td,{children:"The port on which the backend listens."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DATABASE_URL"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"file:../data/pingvin-share.db?connection_limit=1"})}),(0,t.jsx)(n.td,{children:"The URL of the SQLite database."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DATA_DIRECTORY"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"./data"})}),(0,t.jsx)(n.td,{children:"The directory where data is stored."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CLAMAV_HOST"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"127.0.0.1"})}),(0,t.jsx)(n.td,{children:"The IP address of the ClamAV server."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CLAMAV_PORT"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"3310"})}),(0,t.jsx)(n.td,{children:"The port number of the ClamAV server."})]})]})]}),"\n",(0,t.jsx)(n.h5,{id:"frontend",children:"Frontend"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"PORT"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"3000"})}),(0,t.jsx)(n.td,{children:"The port on which the frontend listens."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"API_URL"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"http://localhost:8080"})}),(0,t.jsx)(n.td,{children:"The URL of the backend for the frontend."})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(6540);const r={},d=t.createContext(r);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);