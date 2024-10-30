(function(){"use strict";var e={3029:function(e,t,n){var r=n(5130),o=n(6768);const a={id:"app"};function i(e,t,n,r,i,s){const l=(0,o.g2)("QRGenerator");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(l)])}var s=n(4232);const l={id:"app"},c={class:"qrhead-container"},u={class:"qrSize-container"},d=["disabled"],f=["disabled"],p={class:"qrGenerate-container"},h={key:0},v=["data-index"],k=["onClick"],m=["onClick"],x={key:1,style:{color:"red"}};function b(e,t,n,a,i,b){return(0,o.uX)(),(0,o.CE)("div",l,[(0,o.Lk)("div",c,[t[5]||(t[5]=(0,o.Lk)("h1",null,"QR 코드 생성기",-1)),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.inputText=e),placeholder:"여기에 데이터를 입력하세요... (줄바꿈으로 구분된 데이터)",rows:"10",cols:"30"},"        ",512),[[r.Jo,i.inputText]]),(0,o.Lk)("div",u,[t[4]||(t[4]=(0,o.Lk)("label",null,"바코드 사이즈 : ",-1)),(0,o.bo)((0,o.Lk)("input",{id:"qrSizeinputVal","onUpdate:modelValue":t[1]||(t[1]=e=>i.inputSize=e),type:"number",placeholder:"150"},null,512),[[r.Jo,i.inputSize]])]),(0,o.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>b.generateQR&&b.generateQR(...e)),disabled:!i.inputText},"QR 코드 생성",8,d),(0,o.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>b.downloadExcel&&b.downloadExcel(...e)),disabled:0===i.qrDataList.length},"엑셀 다운로드",8,f)]),(0,o.Lk)("div",p,[t[7]||(t[7]=(0,o.Lk)("h2",null,"생성된 QR 코드들:",-1)),t[8]||(t[8]=(0,o.Lk)("hr",null,null,-1)),i.qrDataList.length?((0,o.uX)(),(0,o.CE)("div",h,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.qrDataList,((e,n)=>((0,o.uX)(),(0,o.CE)("div",{key:e.text,ref_for:!0,ref:"qrCodeContainer"},[(0,o.Lk)("canvas",{ref_for:!0,ref:"qrCanvas","data-index":n},null,8,v),(0,o.Lk)("p",null,(0,s.v_)(e.text),1),(0,o.Lk)("button",{onClick:e=>b.removeQRCode(n)},"삭제",8,k),(0,o.Lk)("button",{onClick:e=>b.saveQRCode(n)},"저장",8,m),t[6]||(t[6]=(0,o.Lk)("hr",null,null,-1))])))),128))])):(0,o.Q3)("",!0),i.errorMessage?((0,o.uX)(),(0,o.CE)("div",x,(0,s.v_)(i.errorMessage),1)):(0,o.Q3)("",!0)])])}n(4114),n(4603),n(7566),n(8721);var g=n(6543),L=n.n(g),w=n(2125),R=n.n(w),C=n(7093),q=n.n(C),y={data(){return{inputText:"",inputSize:150,qrDataList:[],errorMessage:""}},methods:{generateQR(){const e=this.inputText.trim().split("\n");this.qrDataList=[];const t=this.inputSize&&!isNaN(this.inputSize)?Number(this.inputSize):150;e.length>0&&e[0].trim()?(e.forEach((e=>{const t=e.trim();t&&this.qrDataList.push({text:t,canvasRef:null})})),this.$nextTick((()=>{this.qrDataList.forEach(((e,n)=>{const r=this.$refs.qrCanvas[n];e.canvasRef=r,new(L())({element:r,value:e.text,size:t})}))})),this.errorMessage=""):this.errorMessage="유효한 데이터를 입력하세요."},saveQRCode(e){const t=this.qrDataList[e].canvasRef;R()(t,{scale:2,willReadFrequently:!0}).then((t=>{const n=t.toDataURL("image/png"),r=document.createElement("a");r.href=n,r.download=`qrcode_${e+1}.png`,r.click()})).catch((e=>console.error("Error saving QR code:",e)))},removeQRCode(e){this.qrDataList.splice(e,1);const t=this.inputText.split("\n");-1!==e&&t.splice(e,1),this.inputText=t.join("\n")},async downloadExcel(){const e=new(q().Workbook),t=e.addWorksheet("QR Codes");t.columns=[{header:"QRCode",key:"qrCode",width:30},{header:"BarcodeNo",key:"text",width:50}];for(const a of this.qrDataList){const n=document.createElement("canvas");new(L())({element:n,value:a.text,size:200});const r=n.toDataURL("image/png"),o=e.addImage({base64:r.split(",")[1],extension:"png"});t.addRow({text:a.text}),t.addImage(o,{tl:{col:0,row:t.lastRow.number-1},ext:{width:150,height:150}});for(let e=0;e<8;e++)t.addRow({})}const n=await e.xlsx.writeBuffer(),r=new Blob([n],{type:"application/octet-stream"}),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download="qr_codes.xlsx",o.click()}}},Q=n(1241);const E=(0,Q.A)(y,[["render",b]]);var D=E,O={name:"App",components:{QRGenerator:D}};const j=(0,Q.A)(O,[["render",i]]);var z=j;(0,r.Ef)(z).component("QRGenerator",D).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkvuejs"]=self["webpackChunkvuejs"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(3029)}));r=n.O(r)})();