(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,n,t){e.exports=t(87)},48:function(e,n,t){},79:function(e,n){},82:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),o=t(39),a=t.n(o),u=(t(48),t(42)),i=t(1),s=t(89),l=function(e){return c.a.createElement("button",{onClick:function(){var n=Object(s.a)();e.history.push("/room/".concat(n))}},"Create Room")},f=t(40),d=t.n(f),m=function(e){var n=Object(r.useRef)(),t=Object(r.useRef)(),o=Object(r.useRef)(),a=Object(r.useRef)(),u=Object(r.useRef)(),i=Object(r.useRef)();function s(e){var n=new RTCPeerConnection({iceServers:[{urls:"stun:stun.stunprotocol.org"},{urls:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]});return n.onicecandidate=m,n.ontrack=p,n.onnegotiationneeded=function(){return function(e){o.current.createOffer().then((function(e){return o.current.setLocalDescription(e)})).then((function(){var n={target:e,caller:a.current.id,sdp:o.current.localDescription};a.current.emit("offer",n)})).catch((function(e){return console.log(e)}))}(e)},n}function l(e){o.current=s();var n=new RTCSessionDescription(e.sdp);o.current.setRemoteDescription(n).then((function(){i.current.getTracks().forEach((function(e){return o.current.addTrack(e,i.current)}))})).then((function(){return o.current.createAnswer()})).then((function(e){return o.current.setLocalDescription(e)})).then((function(){var n={target:e.caller,caller:a.current.id,sdp:o.current.localDescription};a.current.emit("answer",n)}))}function f(e){var n=new RTCSessionDescription(e.sdp);o.current.setRemoteDescription(n).catch((function(e){return console.log(e)}))}function m(e){if(e.candidate){var n={target:u.current,candidate:e.candidate};a.current.emit("ice-candidate",n)}}function h(e){var n=new RTCIceCandidate(e);o.current.addIceCandidate(n).catch((function(e){return console.log(e)}))}function p(e){t.current.srcObject=e.streams[0]}return Object(r.useEffect)((function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(t){n.current.srcObject=t,i.current=t,a.current=d.a.connect("/"),a.current.emit("join room",e.match.params.roomID),a.current.on("other user",(function(e){!function(e){o.current=s(e),i.current.getTracks().forEach((function(e){return o.current.addTrack(e,i.current)}))}(e),u.current=e})),a.current.on("user joined",(function(e){u.current=e})),a.current.on("offer",l),a.current.on("answer",f),a.current.on("ice-candidate",h)}))}),[]),c.a.createElement("div",null,c.a.createElement("video",{autoPlay:!0,ref:n,muted:!0}),c.a.createElement("video",{autoPlay:!0,ref:t}))};t(82);var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:l}),c.a.createElement(i.a,{path:"/room/:roomID",component:m}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.5ad61c37.chunk.js.map