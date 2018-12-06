!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var r,o=function(){function t(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.cachedCanvas=document.createElement("canvas"),this.sprites=t.data.sprites}return t.prototype.render=function(n){var e=this;return n?(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),n.idGrid.forEach(function(t,n){t.forEach(function(t,r){var o=e.sprites[t],i=r*o.w,a=n*o.h;e.context.putImageData(o.imageData,i,a)})}),this.cachedCanvas=t.cloneCanvas(this.canvas),this.canvas):this.cachedCanvas},t.cloneCanvas=function(t){var n=document.createElement("canvas"),e=n.getContext("2d");return n.width=t.width,n.height=t.height,e.drawImage(t,0,0),n},t}(),i=(r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n}(o),u=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),c=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return u(n,t),n}(o),s=function(){function t(t,n,e){this.logicModel=t,this.uiModel=n,this.mainCanvas=this.setupMainCanvas(),this.mainContext=this.mainCanvas.getContext("2d"),this.bgRenderer=new a(e.terrain),this.unitRenderer=new c(e.units)}return t.prototype.render=function(){var t=this.getGameState(),n=(this.getUIState(),this.renderGame(t));this.paintToCanvas(n)},t.prototype.paintToCanvas=function(){for(var t=this,n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];n.forEach(function(n){t.mainContext.drawImage(n,0,0)})},t.prototype.renderGame=function(t){return this.bgRenderer.render(t)},t.prototype.renderUI=function(t){return this.bgRenderer.render(t)},t.prototype.getGameState=function(){return this.logicModel.getState()},t.prototype.getUIState=function(){return this.uiModel.getState()},t.prototype.setupMainCanvas=function(){var t=document.getElementById("canvas");return t.height=600,t.width=800,t},t}(),f=function(){function t(t){this.uiModel=t}return t.prototype.handleKeyPress=function(t){var n=t.keyCode.toString();this.uiModel.send(n)},t}(),l=function(){function t(t){}return t.prototype.send=function(t){},t.prototype.getState=function(){},t}(),p=function(){function t(){}return t.prototype.getState=function(){},t}(),h=function(){function t(){this.logicModel=new p}return t.prototype.getState=function(){return{idGrid:[[1,1,0,1,0,1],[1,1,0,1,0,1],[1,1,0,1,0,1],[1,1,0,1,0,1],[1,1,0,1,0,1],[1,1,0,1,0,1]]}},t}(),d={path:"assets/terrain/spriteSheet.png",data:{type:"terrain",sprites:{0:{name:"grass",x:217,y:1567,w:16,h:16},1:{name:"sea",x:340,y:1567,w:16,h:16}}}},y={path:"assets/ui/UISprites.png",data:{type:"UI",sprites:{0:{name:"cursor",x:44,y:6,w:28,h:31}}}},v=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(a,u)}c((r=r.apply(t,n||[])).next())})},g=function(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},w=function(){function t(){}return t.load=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return v(this,void 0,void 0,function(){var e=this;return g(this,function(r){return n.forEach(function(n){return v(e,void 0,void 0,function(){var e,r,o,i;return g(this,function(a){switch(a.label){case 0:return[4,t.addImageProcess(n.path)];case 1:for(o in e=a.sent(),r=t.getContext(e),n.data.sprites)(i=n.data.sprites[o]).imageData=t.getImageData(i,r);return[2]}})})}),[2]})})},t.getContext=function(n){var e=t.setupCanvas(n).getContext("2d");return e.drawImage(n,0,0),e},t.setupCanvas=function(t){var n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n},t.addImageProcess=function(t){return new Promise(function(n,e){var r=new Image;r.onload=function(){return n(r)},r.onerror=function(t){return e(t)},r.src=t})},t.getImageData=function(t,n){var e=t.x,r=t.y,o=t.w,i=t.h;return n.getImageData(e,r,o,i)},t}(),m=function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(a,u)}c((r=r.apply(t,n||[])).next())})},b=function(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},x=function(){function t(){this.logicModel=new h,this.uiModel=new l(this.logicModel),this.view=new s(this.logicModel,this.uiModel,{terrain:d,ui:y}),this.controller=new f(this.uiModel),console.log(Date.now()),this.performAsyncSetup()}return t.prototype.performAsyncSetup=function(){return m(this,void 0,void 0,function(){return b(this,function(t){switch(t.label){case 0:return[4,Promise.all([w.load(d,y)])];case 1:return t.sent(),console.log(Date.now()),console.log("images Loaded"),this.runGame(),[2]}})})},t.prototype.runGame=function(){var t=this;setInterval(function(){t.view.render()},1e3)},t}();(new(function(){function t(){}return t.prototype.run=function(){new x;console.log("Engine set up")},t}())).run()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVFbmdpbmVfMi92aWV3L3N1YnJlbmRlcmVycy9zdWJyZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZUVuZ2luZV8yL3ZpZXcvc3VicmVuZGVyZXJzL2JnUmVuZGVyZXIvYmdSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZUVuZ2luZV8yL3ZpZXcvc3VicmVuZGVyZXJzL3VuaXRSZW5kZXJlci50cy91bml0UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVFbmdpbmVfMi92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVFbmdpbmVfMi9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVFbmdpbmVfMi9tb2RlbC91aU1vZGVsL3VpTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVFbmdpbmVfMi9tb2RlbC9sb2dpY01vZGVsL2xvZ2ljTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVFbmdpbmVfMi9tb2RlbC9sb2dpY01vZGVsL21lZGlhdG9yL21lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVycmFpbi90ZXJyYWluc2hlZXREYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdWkvdWlTaGVldERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVFbmdpbmVfMi92aWV3L3N1YnJlbmRlcmVycy9pbWFnZUxvYWRlci9pbWFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZUVuZ2luZV8yL2VuZ2luZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJTdWJyZW5kZXJlciIsInNwcml0ZXNoZWV0RGF0YSIsInRoaXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNhY2hlZENhbnZhcyIsInNwcml0ZXMiLCJkYXRhIiwicmVuZGVyIiwic3RhdGUiLCJfdGhpcyIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiaWRHcmlkIiwiZm9yRWFjaCIsInJvdyIsInJvd051bWJlciIsImlkIiwiY29sTnVtYmVyIiwic3ByaXRlIiwieCIsInciLCJ5IiwiaCIsInB1dEltYWdlRGF0YSIsImltYWdlRGF0YSIsImNsb25lQ2FudmFzIiwib2xkQ2FudmFzIiwibmV3Q2FudmFzIiwiZHJhd0ltYWdlIiwiX3N1cGVyIiwiQmdSZW5kZXJlciIsIl9fZXh0ZW5kcyIsInN1YnJlbmRlcmVyIiwiVW5pdFJlbmRlcmVyIiwidW5pdFJlbmRlcmVyX2V4dGVuZHMiLCJWaWV3IiwibG9naWNNb2RlbCIsInVpTW9kZWwiLCJzcHJpdGVzaGVldHMiLCJtYWluQ2FudmFzIiwic2V0dXBNYWluQ2FudmFzIiwibWFpbkNvbnRleHQiLCJiZ1JlbmRlcmVyIiwidGVycmFpbiIsInVuaXRSZW5kZXJlciIsInVuaXRzIiwiZ2FtZVN0YXRlIiwiZ2V0R2FtZVN0YXRlIiwiZ2FtZUNhbnZhcyIsImdldFVJU3RhdGUiLCJyZW5kZXJHYW1lIiwicGFpbnRUb0NhbnZhcyIsImNhbnZhc2VzIiwiX2kiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyZW5kZXJVSSIsInVpU3RhdGUiLCJnZXRTdGF0ZSIsImdldEVsZW1lbnRCeUlkIiwiQ29udHJvbGxlciIsImhhbmRsZUtleVByZXNzIiwiZSIsImlucHV0Iiwia2V5Q29kZSIsInRvU3RyaW5nIiwic2VuZCIsIlVJTW9kZWwiLCJpbnN0cnVjdGlvbiIsIkxvZ2ljTW9kZWwiLCJNZWRpYXRvciIsImxvZ2ljTW9kZWxfbG9naWNNb2RlbCIsInRlcnJhaW5fdGVycmFpbnNoZWV0RGF0YSIsInBhdGgiLCJ0eXBlIiwiMCIsIjEiLCJ1aVNoZWV0RGF0YSIsIkltYWdlTG9hZGVyIiwibG9hZCIsInNwcml0ZXNoZWV0RGF0YUFycmF5IiwiX19hd2FpdGVyIiwiYWRkSW1hZ2VQcm9jZXNzIiwic3ByaXRlc2hlZXQiLCJfYSIsInNlbnQiLCJ0ZW1wQ29udGV4dCIsImdldEltYWdlRGF0YSIsImltYWdlIiwic2V0dXBDYW52YXMiLCJzcmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltZyIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsImVyciIsIkVuZ2luZSIsIm1lZGlhdG9yIiwidWlNb2RlbF91aU1vZGVsIiwidmlldyIsInVpIiwiY29udHJvbGxlciIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwibm93IiwicGVyZm9ybUFzeW5jU2V0dXAiLCJhbGwiLCJpbWFnZUxvYWRlciIsInJ1bkdhbWUiLCJzZXRJbnRlcnZhbCIsIkFwcCIsInJ1biIsImdhbWVFbmdpbmVfMl9lbmdpbmUiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEVBQUEsR0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxHQUFBLENBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsUUFBQSxJQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFK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RUFBQUksRUFDaEIsT0FBT3JCLEVBQVFzRixhQUFhcEUsRUFBR0UsRUFBR0QsRUFBR0UsSUFFekN3RCxFQXZDQSxpekNDV0EsV0FLRSxTQUFBcUIsSUFFRXRHLEtBQUt1QyxXQUFhLElBQUlnRSxFQUV0QnZHLEtBQUt3QyxRQUFVLElBQUlnRSxFQUFReEcsS0FBS3VDLFlBQ2hDdkMsS0FBS3lHLEtBQU8sSUFBSUEsRUFBS3pHLEtBQUt1QyxXQUFZdkMsS0FBS3dDLFFBQVMsQ0FBQ00sUUFBUzZCLEVBQWtCK0IsR0FBSTFCLElBQ3BGaEYsS0FBSzJHLFdBQWEsSUFBSUEsRUFBVzNHLEtBQUt3QyxTQUN0Q29FLFFBQVFDLElBQUlDLEtBQUtDLE9BQ2pCL0csS0FBS2dILG9CQW9CVCxPQWpCUVYsRUFBQTVHLFVBQUFzSCxrQkFBTixtR0FHRSxTQUFNbEIsUUFBUW1CLElBQUksQ0FDaEJDLEVBQVloQyxLQUFLUCxFQUFrQkssb0JBRHJDTyxFQUFBQyxPQUlBb0IsUUFBUUMsSUFBSUMsS0FBS0MsT0FDakJILFFBQVFDLElBQUksaUJBQ1o3RyxLQUFLbUgsb0JBR1BiLEVBQUE1RyxVQUFBeUgsUUFBQSxlQUFBeEcsRUFBQVgsS0FDRW9ILFlBQVksV0FDVnpHLEVBQUs4RixLQUFLaEcsVUFDVCxNQUVQNkYsRUFqQ0EsSUNYZSxlQUFJLFNBQUFlLEtBS25CLE9BSkVBLEVBQUEzSCxVQUFBNEgsSUFBQSxXQUNpQixJQUFJQyxFQUNuQlgsUUFBUUMsSUFBSSxrQkFFaEJRLEVBTGUsS0NBWEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gJy4vaW1hZ2VMb2FkZXIvaW1hZ2VMb2FkZXInXG5pbXBvcnQgSVNwcml0ZXNoZWV0RGF0YSBmcm9tICdzcmMvYXNzZXRzL0lTcHJpdGVzaGVldERhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnJlbmRlcmVyIHtcbiAgc3ByaXRlczogSVNwcml0ZXNoZWV0RGF0YVsnZGF0YSddWydzcHJpdGVzJ107XG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgY2FjaGVkQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihzcHJpdGVzaGVldERhdGE6IElTcHJpdGVzaGVldERhdGEpe1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGhpcy5jYWNoZWRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIHRoaXMuc3ByaXRlcyA9IHNwcml0ZXNoZWV0RGF0YS5kYXRhLnNwcml0ZXNcbiAgfVxuXG4gIHJlbmRlcihzdGF0ZT86IElTdGF0ZSk6IEhUTUxDYW52YXNFbGVtZW50IHtcblxuICAgIC8vIFJldHVybiB0aGUgY2FjaGVkIGNhbnZhcyBpZiBubyBuZXcgc3RhdGUgaGFzIGJlZW4gZ2l2ZW5cbiAgICBpZiAoIXN0YXRlKSByZXR1cm4gdGhpcy5jYWNoZWRDYW52YXNcblxuICAgIC8vIENsZWFyIHRoZSBleGlzdGluZyBjYW52YXMgY29udGV4dCBcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcblxuICAgIC8vIEN5Y2xlIHRocm91Z2ggdGhlIHN0YXRlJ3MgaWRHcmlkIGFuZCByZW5kZXIgZWFjaCBzcHJpdGUgdG8gdGhlIGNvbnRleHRcbiAgICBzdGF0ZS5pZEdyaWQuZm9yRWFjaCgocm93LCByb3dOdW1iZXIpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChpZCwgY29sTnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuc3ByaXRlc1tpZF1cbiAgICAgICAgY29uc3QgeCA9IGNvbE51bWJlciAqIHNwcml0ZS53XG4gICAgICAgIGNvbnN0IHkgPSByb3dOdW1iZXIgKiBzcHJpdGUuaFxuICAgICAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKHNwcml0ZS5pbWFnZURhdGEsIHgsIHkpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBDYWNoZSB0aGlzIGNhbnZhcyBmb3IgZnV0dXJlIHVzZVxuICAgIHRoaXMuY2FjaGVkQ2FudmFzID0gU3VicmVuZGVyZXIuY2xvbmVDYW52YXModGhpcy5jYW52YXMpXG5cbiAgICByZXR1cm4gdGhpcy5jYW52YXNcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZUNhbnZhcyhvbGRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgXG4gICAgLy9jcmVhdGUgYSBuZXcgY2FudmFzXG4gICAgdmFyIG5ld0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAvL3NldCBkaW1lbnNpb25zXG4gICAgbmV3Q2FudmFzLndpZHRoID0gb2xkQ2FudmFzLndpZHRoO1xuICAgIG5ld0NhbnZhcy5oZWlnaHQgPSBvbGRDYW52YXMuaGVpZ2h0O1xuXG4gICAgLy9hcHBseSB0aGUgb2xkIGNhbnZhcyB0byB0aGUgbmV3IG9uZVxuICAgIGNvbnRleHQuZHJhd0ltYWdlKG9sZENhbnZhcywgMCwgMCk7XG5cbiAgICAvL3JldHVybiB0aGUgbmV3IGNhbnZhc1xuICAgIHJldHVybiBuZXdDYW52YXM7XG4gIH1cbn0iLCJpbXBvcnQgU3VicmVuZGVyZXIgZnJvbSAnLi4vc3VicmVuZGVyZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJnUmVuZGVyZXIgZXh0ZW5kcyBTdWJyZW5kZXJlciB7fSAvLyBBZGQgYW55IGJnIHNwZWNpZmljIHJlbmRlcmluZyIsImltcG9ydCBTdWJyZW5kZXJlciBmcm9tICcuLi9zdWJyZW5kZXJlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdFJlbmRlcmVyIGV4dGVuZHMgU3VicmVuZGVyZXIge30gLy8gQWRkIGFueSBVbml0IHNwZWNpZmljIHJlbmRlcmluZ1xuIiwiaW1wb3J0IEJnUmVuZGVyZXIgZnJvbSAnLi9zdWJyZW5kZXJlcnMvYmdSZW5kZXJlci9iZ1JlbmRlcmVyJ1xuaW1wb3J0IFVJUmVuZGVyZXIgZnJvbSAnLi9zdWJyZW5kZXJlcnMvdWlSZW5kZXJlci91aVJlbmRlcmVyJztcbmltcG9ydCBVSU1vZGVsIGZyb20gJy4uL21vZGVsL3VpTW9kZWwvdWlNb2RlbCc7XG5pbXBvcnQgTG9naWNNb2RlbCBmcm9tICcuLi9tb2RlbC9sb2dpY01vZGVsL2xvZ2ljTW9kZWwnO1xuaW1wb3J0IElTcHJpdGVzaGVldERhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL0lTcHJpdGVzaGVldERhdGEnO1xuaW1wb3J0IFVuaXRSZW5kZXJlciBmcm9tICcuL3N1YnJlbmRlcmVycy91bml0UmVuZGVyZXIudHMvdW5pdFJlbmRlcmVyJztcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tICcuL3N1YnJlbmRlcmVycy9pbWFnZUxvYWRlci9pbWFnZUxvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIGJnUmVuZGVyZXI6IEJnUmVuZGVyZXI7XG4gIHVpUmVuZGVyZXI6IFVJUmVuZGVyZXI7XG4gIHVuaXRSZW5kZXJlcjogYW55O1xuICB1aU1vZGVsOiBVSU1vZGVsO1xuICBsb2dpY01vZGVsOiBMb2dpY01vZGVsO1xuICBtYWluQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgbWFpbkNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBjb25zdHJ1Y3Rvcihsb2dpY01vZGVsOiBMb2dpY01vZGVsLCB1aU1vZGVsOlVJTW9kZWwsIHNwcml0ZXNoZWV0czp7W2tleTpzdHJpbmddOklTcHJpdGVzaGVldERhdGF9KSB7XG4gICAgdGhpcy5sb2dpY01vZGVsID0gbG9naWNNb2RlbFxuICAgIHRoaXMudWlNb2RlbCA9IHVpTW9kZWxcblxuICAgIHRoaXMubWFpbkNhbnZhcyA9IHRoaXMuc2V0dXBNYWluQ2FudmFzKClcbiAgICB0aGlzLm1haW5Db250ZXh0ID0gdGhpcy5tYWluQ2FudmFzLmdldENvbnRleHQoJzJkJylcblxuXG5cbiAgICB0aGlzLmJnUmVuZGVyZXIgPSBuZXcgQmdSZW5kZXJlcihzcHJpdGVzaGVldHMudGVycmFpbilcbiAgICAvLyB0aGlzLnVpUmVuZGVyZXIgPSBuZXcgVUlSZW5kZXJlcihzcHJpdGVzaGVldHMudWkpXG4gICAgdGhpcy51bml0UmVuZGVyZXIgPSBuZXcgVW5pdFJlbmRlcmVyKHNwcml0ZXNoZWV0cy51bml0cylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgLy8gUXVlc3Rpb24gLSB0aGUgdmFyaWFibGVzIGRlZmluZWQgaGVyZSBhcmUgcHVyZWx5IGZvciByZWFkYWJpbGl0eSxcbiAgICAvLyAgd291bGQgaXQgYmUgYmV0dGVyIHRvIHVzZSBhIGZ1bmN0aW9uYWwgc3R5bGUgaGVyZT9cbiAgICBjb25zdCBnYW1lU3RhdGUgPSB0aGlzLmdldEdhbWVTdGF0ZSgpXG4gICAgY29uc3QgdWlTdGF0ZSA9IHRoaXMuZ2V0VUlTdGF0ZSgpXG4gICAgY29uc3QgZ2FtZUNhbnZhcyA9IHRoaXMucmVuZGVyR2FtZShnYW1lU3RhdGUpXG4gICAgLy8gY29uc3QgdWlDYW52YXMgPSB0aGlzLnJlbmRlclVJKHVpU3RhdGUpXG4gICAgLy8gdGhpcy5wYWludFRvQ2FudmFzKGdhbWVDYW52YXMsIHVpQ2FudmFzKVxuICAgIHRoaXMucGFpbnRUb0NhbnZhcyhnYW1lQ2FudmFzKVxuICB9XG5cbiAgcHJpdmF0ZSBwYWludFRvQ2FudmFzKC4uLmNhbnZhc2VzOiBIVE1MQ2FudmFzRWxlbWVudFtdKXtcbiAgICBjYW52YXNlcy5mb3JFYWNoKChjYW52YXMpID0+IHtcbiAgICAgIHRoaXMubWFpbkNvbnRleHQuZHJhd0ltYWdlKGNhbnZhcywgMCwgMClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJHYW1lKGdhbWVTdGF0ZTpJU3RhdGUpOiBIVE1MQ2FudmFzRWxlbWVudHtcbiAgICByZXR1cm4gdGhpcy5iZ1JlbmRlcmVyLnJlbmRlcihnYW1lU3RhdGUpXG4gIH1cblxuICBwcml2YXRlIHJlbmRlclVJKHVpU3RhdGU6IElTdGF0ZSk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5iZ1JlbmRlcmVyLnJlbmRlcih1aVN0YXRlKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRHYW1lU3RhdGUoKXtcbiAgICByZXR1cm4gdGhpcy5sb2dpY01vZGVsLmdldFN0YXRlKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VUlTdGF0ZSgpe1xuICAgIHJldHVybiB0aGlzLnVpTW9kZWwuZ2V0U3RhdGUoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cE1haW5DYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIGNvbnN0IGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmhlaWdodCA9IDYwMDsgLy8gc2V0IGRpbWVuc2lvbnMgaW4gY29uZmlnP1xuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG59IiwiaW1wb3J0IFVJTW9kZWwgZnJvbSBcIi4uL21vZGVsL3VpTW9kZWwvdWlNb2RlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgdWlNb2RlbDogVUlNb2RlbDtcbiAgY29uc3RydWN0b3IodWlNb2RlbDogVUlNb2RlbCl7XG4gICAgdGhpcy51aU1vZGVsID0gdWlNb2RlbFxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZTogS2V5Ym9hcmRFdmVudCl7XG4gICAgY29uc3QgaW5wdXQgPSBlLmtleUNvZGUudG9TdHJpbmcoKSAvLyBwYXJzZSBpbnB1dCBoZXJlXG4gICAgdGhpcy51aU1vZGVsLnNlbmQoaW5wdXQpXG4gIH1cbn0iLCJpbXBvcnQgTG9naWNNb2RlbCBmcm9tIFwiLi4vbG9naWNNb2RlbC9sb2dpY01vZGVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTW9kZWx7XG4gIGNvbnN0cnVjdG9yKGxvZ2ljTW9kZWw6TG9naWNNb2RlbCl7fVxuICBzZW5kKGluc3RydWN0aW9uOnN0cmluZyl7fVxuICBnZXRTdGF0ZSgpOklTdGF0ZXtyZXR1cm59XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naWNNb2RlbHtcbiAgZ2V0U3RhdGUoKTpJU3RhdGV7cmV0dXJufVxufSIsImltcG9ydCBMb2dpY01vZGVsIGZyb20gJy4uL2xvZ2ljTW9kZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhdG9yIGltcGxlbWVudHMgTG9naWNNb2RlbCB7XG4gIGxvZ2ljTW9kZWw6IExvZ2ljTW9kZWw7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5sb2dpY01vZGVsID0gbmV3IExvZ2ljTW9kZWxcbiAgfVxuICBnZXRTdGF0ZSgpOklTdGF0ZXtcbiAgICByZXR1cm4ge1xuICAgICAgaWRHcmlkOiBbXG4gICAgICAgIFsxLDEsMCwxLDAsMV0sXG4gICAgICAgIFsxLDEsMCwxLDAsMV0sXG4gICAgICAgIFsxLDEsMCwxLDAsMV0sXG4gICAgICAgIFsxLDEsMCwxLDAsMV0sXG4gICAgICAgIFsxLDEsMCwxLDAsMV0sXG4gICAgICAgIFsxLDEsMCwxLDAsMV0sXG4gICAgICBdXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IElTcHJpdGVzaGVldERhdGEgZnJvbSAnLi4vSVNwcml0ZXNoZWV0RGF0YSdcblxuY29uc3QgdGVycmFpbnNoZWV0RGF0YTogSVNwcml0ZXNoZWV0RGF0YSA9IHtcbiAgcGF0aDogJ2Fzc2V0cy90ZXJyYWluL3Nwcml0ZVNoZWV0LnBuZycsXG4gIGRhdGE6IHtcbiAgICB0eXBlOiAndGVycmFpbicsXG4gICAgc3ByaXRlczoge1xuICAgICAgMDoge1xuICAgICAgICBuYW1lOiAnZ3Jhc3MnLFxuICAgICAgICB4OiAyMTcsIFxuICAgICAgICB5OiAxNTY3LCBcbiAgICAgICAgdzogMTYsIFxuICAgICAgICBoOiAxNiwgXG4gICAgICB9LFxuICAgICAgMToge1xuICAgICAgICBuYW1lOiAnc2VhJyxcbiAgICAgICAgeDogMzQwLFxuICAgICAgICB5OiAxNTY3LFxuICAgICAgICB3OiAxNixcbiAgICAgICAgaDogMTZcbiAgICAgIH0sXG4gICAgICAvLyBldGMuIGV0Yy5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVycmFpbnNoZWV0RGF0YSIsImltcG9ydCBJU3ByaXRlc2hlZXREYXRhIGZyb20gJy4uL0lTcHJpdGVzaGVldERhdGEnXG4vLyBTdG9yZSB0aGVzZSBmaWxlcyBpbiBhc3NldHMgd2l0aCB0aGVpciBpbWFnZXM/XG5jb25zdCB1aXNoZWV0RGF0YTogSVNwcml0ZXNoZWV0RGF0YSAgPSB7XG4gIHBhdGg6ICdhc3NldHMvdWkvVUlTcHJpdGVzLnBuZycsXG4gIGRhdGE6IHtcbiAgICB0eXBlOiAnVUknLFxuICAgIHNwcml0ZXM6IHtcbiAgICAgIDA6IHtcbiAgICAgICAgbmFtZTogJ2N1cnNvcicsXG4gICAgICAgIHg6IDQ0LFxuICAgICAgICB5OiA2LFxuICAgICAgICB3OiAyOCxcbiAgICAgICAgaDogMzEsXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVpc2hlZXREYXRhIiwiaW1wb3J0IElTcHJpdGVzaGVldERhdGEgZnJvbSAnc3JjL2Fzc2V0cy9JU3ByaXRlc2hlZXREYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gIHN0YXRpYyBhc3luYyBsb2FkKC4uLnNwcml0ZXNoZWV0RGF0YUFycmF5OiBJU3ByaXRlc2hlZXREYXRhW10pIHtcbiAgICBzcHJpdGVzaGVldERhdGFBcnJheS5mb3JFYWNoKGFzeW5jIChzcHJpdGVzaGVldERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHNwcml0ZXNoZWV0ID0gPEhUTUxJbWFnZUVsZW1lbnQ+IGF3YWl0IEltYWdlTG9hZGVyLmFkZEltYWdlUHJvY2VzcyhzcHJpdGVzaGVldERhdGEucGF0aClcbiAgICAgIGNvbnN0IHRlbXBDb250ZXh0ID0gSW1hZ2VMb2FkZXIuZ2V0Q29udGV4dChzcHJpdGVzaGVldClcbiAgICAgIGZvciAobGV0IGlkIGluIHNwcml0ZXNoZWV0RGF0YS5kYXRhLnNwcml0ZXMpIHtcbiAgICAgICAgbGV0IHNwcml0ZSA9IHNwcml0ZXNoZWV0RGF0YS5kYXRhLnNwcml0ZXNbaWRdXG4gICAgICAgIHNwcml0ZS5pbWFnZURhdGEgPSBJbWFnZUxvYWRlci5nZXRJbWFnZURhdGEoc3ByaXRlLCB0ZW1wQ29udGV4dClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGdldENvbnRleHQoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpe1xuICAgIGNvbnN0IGNhbnZhcyA9IEltYWdlTG9hZGVyLnNldHVwQ2FudmFzKGltYWdlKVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMClcbiAgICByZXR1cm4gY29udGV4dFxuICB9XG5cbiAgc3RhdGljIHNldHVwQ2FudmFzKGltYWdlOkhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBjb25zdCBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgcmV0dXJuIGNhbnZhc1xuICB9XG5cbiAgc3RhdGljIGFkZEltYWdlUHJvY2VzcyhzcmM6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbWc6SFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICAgIGltZy5vbmVycm9yID0gKGVycikgPT4gcmVqZWN0KGVycik7XG4gICAgICBpbWcuc3JjID0gc3JjO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldEltYWdlRGF0YSAoc3ByaXRlOiBJU3ByaXRlc2hlZXREYXRhWydkYXRhJ11bJ3Nwcml0ZXMnXVswXSwgY29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOkltYWdlRGF0YSB7XG4gICAgY29uc3Qge3gsIHksIHcsIGh9ID0gc3ByaXRlXG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0SW1hZ2VEYXRhKHgsIHksIHcsIGgpXG4gIH1cbn0iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcvdmlldydcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci9jb250cm9sbGVyJ1xuaW1wb3J0IFVJTW9kZWwgZnJvbSAnLi9tb2RlbC91aU1vZGVsL3VpTW9kZWwnXG5pbXBvcnQgTWVkaWF0b3IgZnJvbSAnLi9tb2RlbC9sb2dpY01vZGVsL21lZGlhdG9yL21lZGlhdG9yJ1xuaW1wb3J0IElTcHJpdGVzaGVldERhdGEgZnJvbSAnLi4vYXNzZXRzL0lTcHJpdGVzaGVldERhdGEnO1xuaW1wb3J0IExvZ2ljTW9kZWwgZnJvbSAnLi9tb2RlbC9sb2dpY01vZGVsL2xvZ2ljTW9kZWwnO1xuLy8gaW1wb3J0IExvZ2ljTW9kZWwgZnJvbSAnLi9sb2dpY01vZGVsL2xvZ2ljTW9kZWwvbG9naWNNb2RlbCdcblxuLy8gTG9hZCBzcHJpdGVzaGVldERhdGEgYnkgY29uZmlnP1xuaW1wb3J0IHRlcnJhaW5zaGVldERhdGEgZnJvbSAnLi4vYXNzZXRzL3RlcnJhaW4vdGVycmFpbnNoZWV0RGF0YSdcbmltcG9ydCB1aXNoZWV0RGF0YSBmcm9tICcuLi9hc3NldHMvdWkvdWlTaGVldERhdGEnXG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi92aWV3L3N1YnJlbmRlcmVycy9pbWFnZUxvYWRlci9pbWFnZUxvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZ2luZSB7XG4gIHZpZXc6IFZpZXc7XG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXI7XG4gIHVpTW9kZWw6IFVJTW9kZWw7XG4gIGxvZ2ljTW9kZWw6IExvZ2ljTW9kZWw7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyB0aGlzIGNvdWxkIGJlIGBuZXcgTG9naWNNb2RlbGAgaW4gYSBsb2NhbCB2ZXJzaW9uLCBhcyBtZWRpYXRvciB3aWxsIGltcGxlbWVudCB0aGUgTG9naWNNb2RlbCBpbnRlcmZhY2VcbiAgICB0aGlzLmxvZ2ljTW9kZWwgPSBuZXcgTWVkaWF0b3IoKVxuXG4gICAgdGhpcy51aU1vZGVsID0gbmV3IFVJTW9kZWwodGhpcy5sb2dpY01vZGVsKVxuICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KHRoaXMubG9naWNNb2RlbCwgdGhpcy51aU1vZGVsLCB7dGVycmFpbjogdGVycmFpbnNoZWV0RGF0YSwgdWk6IHVpc2hlZXREYXRhfSkgLy8gZ2V0IHNwcml0ZXNoZWV0IGRhdGEgZnJvbSBhIGNvbmZpZyBmaWxlP1xuICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHRoaXMudWlNb2RlbCkgLy8gQW5kIHRoaXMudmlldyBpZiB1c2luZyBtb3VzZSBpbnB1dD9cbiAgICBjb25zb2xlLmxvZyhEYXRlLm5vdygpKVxuICAgIHRoaXMucGVyZm9ybUFzeW5jU2V0dXAoKVxuICB9XG5cbiAgYXN5bmMgcGVyZm9ybUFzeW5jU2V0dXAoKSB7XG4gICAgLy8gQ2FsbCBhbmQgYXdhaXQgYWxsIGluaXRpYWwgYXN5bmMgZnVuY3Rpb25zIGhlcmUuXG4gICAgLy8gRWcuIHRoaXMudmlldy5sb2FkU3ByaXRlc2hlZXRzKClcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBJbWFnZUxvYWRlci5sb2FkKHRlcnJhaW5zaGVldERhdGEsIHVpc2hlZXREYXRhKVxuICAgICAgLy8gQW55IG90aGVyIGFzeW5jIHNldCB1cCBmdW5jdGlvbnNcbiAgICBdKVxuICAgIGNvbnNvbGUubG9nKERhdGUubm93KCkpXG4gICAgY29uc29sZS5sb2coJ2ltYWdlcyBMb2FkZWQnKVxuICAgIHRoaXMucnVuR2FtZSgpXG4gIH1cblxuICBydW5HYW1lKCl7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy52aWV3LnJlbmRlcigpXG4gICAgfSwgMTAwMClcbiAgfVxufSIsImltcG9ydCBFbmdpbmUgZnJvbSAnLi4vZ2FtZUVuZ2luZV8yL2VuZ2luZSdcblxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIEFwcCB7XG4gIHJ1biAoKSB7XG4gICAgY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZSgpXG4gICAgY29uc29sZS5sb2coJ0VuZ2luZSBzZXQgdXAnKVxuICB9XG59IiwiaW1wb3J0IGFwcCBmcm9tICcuL2FwcC9hcHAnXG5cbmFwcC5ydW4oKSJdLCJzb3VyY2VSb290IjoiIn0=