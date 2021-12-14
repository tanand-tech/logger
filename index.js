!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.logger=t():e.logger=t()}(global,(function(){return(()=>{"use strict";var e={607:function(e,t,o){var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&r(t,e,o);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.updateSettings=void 0;const u=i(o(142)),l=o(956),s=["silly","trace","debug","info","warn","error","fatal"];let a={displayFunctionName:!1,exposeErrorCodeFrame:!1,delimiter:"\t",dateTimeTimezone:"Asia/Kuala_Lumpur",prettyInspectOptions:{colors:!0,compact:!1,depth:null},jsonInspectOptions:{colors:!0,compact:!1,depth:null},logLevelsColors:{0:"cyan",1:"white",2:"green",3:"blue",4:"yellow",5:"red",6:"magenta"}};t.updateSettings=function(e){a={...a,...e}},t.default=function(e,...t){u.config();const o=process.env.LOGGER_MIN_LEVEL?.toLowerCase(),r=o&&s.includes(o)?o:"info";return new l.Logger({name:`[0m[1m${e}[0m${t.reduce(((e,t)=>e+" "+t),"")}[90m`,displayFilePath:"true"===process.env.LOGGER_DISPLAY_FILE_PATH?.toLowerCase()?"hideNodeModulesOnly":"hidden",minLevel:r,...a})}},142:e=>{e.exports=require("dotenv")},956:e=>{e.exports=require("tslog")}},t={};var o=function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}(607);return o})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkNBQUEsU0FBMkNBLEVBQU1DLEdBQzFCLGlCQUFaQyxTQUEwQyxpQkFBWEMsT0FDeENBLE9BQU9ELFFBQVVELElBQ1EsbUJBQVhHLFFBQXlCQSxPQUFPQyxJQUM5Q0QsT0FBTyxHQUFJSCxHQUNlLGlCQUFaQyxRQUNkQSxRQUFnQixPQUFJRCxJQUVwQkQsRUFBYSxPQUFJQyxJQVJuQixDQVNHSyxRQUFRLFdBQ1gsTSxvcEJDVkEsa0JBQ0EsU0FFTUMsRUFBNkIsQ0FBQyxRQUFTLFFBQVMsUUFBUyxPQUFRLE9BQVEsUUFBUyxTQVl4RixJQUFJQyxFQUEwQixDQUMxQkMscUJBQXFCLEVBQ3JCQyxzQkFBc0IsRUFDdEJDLFVBQVcsS0FDWEMsaUJBQWtCLG9CQUNsQkMscUJBQXNCLENBQ2xCQyxRQUFRLEVBQ1JDLFNBQVMsRUFDVEMsTUFBTyxNQUVYQyxtQkFBb0IsQ0FDaEJILFFBQVEsRUFDUkMsU0FBUyxFQUNUQyxNQUFPLE1BRVhFLGdCQXpCb0MsQ0FDcEMsRUFBRyxPQUNILEVBQUcsUUFDSCxFQUFHLFFBQ0gsRUFBRyxPQUNILEVBQUcsU0FDSCxFQUFHLE1BQ0gsRUFBRyxZQXVCUCwwQkFBK0JDLEdBQzNCWCxFQUFVLElBQUtBLEtBQVlXLElBRy9CLG1CQUErQkMsS0FBaUJDLEdBQzVDQyxFQUFPQyxTQUNQLE1BQU1DLEVBQVdDLFFBQVFDLElBQUlDLGtCQUFrQkMsY0FDekNDLEVBQTBCTCxHQUFZakIsRUFBVXVCLFNBQVNOLEdBQVlBLEVBQVcsT0FFdEYsT0FBTyxJQUFJLEVBQUFPLE9BQU8sQ0FDZFgsS0FBTSxXQUFpQkEsUUFBY0MsRUFBS1csUUFBTyxDQUFDQyxFQUFHQyxJQUFNRCxFQUFJLElBQU1DLEdBQUcsV0FDeEVDLGdCQUM0RCxTQUF4RFYsUUFBUUMsSUFBSVUsMEJBQTBCUixjQUEyQixzQkFBd0IsU0FDN0ZDLFNBQUFBLEtBQ0dyQixNLFFDakRYTCxFQUFPRCxRQUFVbUMsUUFBUSxXLFFDQXpCbEMsRUFBT0QsUUFBVW1DLFFBQVEsV0NDckJDLEVBQTJCLEdDRS9CLElBQUlDLEVEQ0osU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVKLEVBQXlCRyxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYXhDLFFBR3JCLElBQUlDLEVBQVNtQyxFQUF5QkcsR0FBWSxDQUdqRHZDLFFBQVMsSUFPVixPQUhBMEMsRUFBb0JILEdBQVVJLEtBQUsxQyxFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTc0MsR0FHcEVyQyxFQUFPRCxRQ2xCV3NDLENBQW9CLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dnZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2xvZ2dlci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9sb2dnZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9sb2dnZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJ0c2xvZ1wiIiwid2VicGFjazovL2xvZ2dlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sb2dnZXIvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxvZ2dlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsb2dnZXJcIl0gPSBmYWN0b3J5KCk7XG59KShnbG9iYWwsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHsgTG9nZ2VyLCBUTG9nTGV2ZWxDb2xvciwgVExvZ0xldmVsTmFtZSwgSVNldHRpbmdzUGFyYW0gfSBmcm9tICd0c2xvZyc7XG5cbmNvbnN0IGxvZ0xldmVsczogVExvZ0xldmVsTmFtZVtdID0gWydzaWxseScsICd0cmFjZScsICdkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InLCAnZmF0YWwnXTtcblxuY29uc3QgbG9nTGV2ZWxzQ29sb3JzOiBUTG9nTGV2ZWxDb2xvciA9IHtcbiAgICAwOiAnY3lhbicsIC8vIFNpbGx5XG4gICAgMTogJ3doaXRlJywgLy8gVHJhY2VcbiAgICAyOiAnZ3JlZW4nLCAvLyBEZWJ1Z1xuICAgIDM6ICdibHVlJywgLy8gSW5mb1xuICAgIDQ6ICd5ZWxsb3cnLCAvLyBXYXJuXG4gICAgNTogJ3JlZCcsIC8vIEVycm9yXG4gICAgNjogJ21hZ2VudGEnLCAvLyBGYXRhbFxufTtcblxubGV0IGNvbmZpZ3M6IElTZXR0aW5nc1BhcmFtID0ge1xuICAgIGRpc3BsYXlGdW5jdGlvbk5hbWU6IGZhbHNlLFxuICAgIGV4cG9zZUVycm9yQ29kZUZyYW1lOiBmYWxzZSxcbiAgICBkZWxpbWl0ZXI6ICdcXHQnLFxuICAgIGRhdGVUaW1lVGltZXpvbmU6ICdBc2lhL0t1YWxhX0x1bXB1cicsXG4gICAgcHJldHR5SW5zcGVjdE9wdGlvbnM6IHtcbiAgICAgICAgY29sb3JzOiB0cnVlLFxuICAgICAgICBjb21wYWN0OiBmYWxzZSxcbiAgICAgICAgZGVwdGg6IG51bGwsXG4gICAgfSxcbiAgICBqc29uSW5zcGVjdE9wdGlvbnM6IHtcbiAgICAgICAgY29sb3JzOiB0cnVlLFxuICAgICAgICBjb21wYWN0OiBmYWxzZSxcbiAgICAgICAgZGVwdGg6IG51bGwsXG4gICAgfSxcbiAgICBsb2dMZXZlbHNDb2xvcnMsXG59O1xuXG5leHBvcnQgdHlwZSB7IExvZ2dlciwgVExvZ0xldmVsTmFtZSBhcyBMb2dMZXZlbCB9O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2V0dGluZ3Moc2V0dGluZ3M6IElTZXR0aW5nc1BhcmFtKSB7XG4gICAgY29uZmlncyA9IHsgLi4uY29uZmlncywgLi4uc2V0dGluZ3MgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nZ2VyKG5hbWU6IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pOiBMb2dnZXIge1xuICAgIGRvdGVudi5jb25maWcoKTtcbiAgICBjb25zdCBsb2dMZXZlbCA9IHByb2Nlc3MuZW52LkxPR0dFUl9NSU5fTEVWRUw/LnRvTG93ZXJDYXNlKCkgYXMgVExvZ0xldmVsTmFtZSB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBtaW5MZXZlbDogVExvZ0xldmVsTmFtZSA9IGxvZ0xldmVsICYmIGxvZ0xldmVscy5pbmNsdWRlcyhsb2dMZXZlbCkgPyBsb2dMZXZlbCA6ICdpbmZvJztcblxuICAgIHJldHVybiBuZXcgTG9nZ2VyKHtcbiAgICAgICAgbmFtZTogYFxceDFiWzBtXFx4MWJbMW0ke25hbWV9XFx4MWJbMG0ke2FyZ3MucmVkdWNlKChuLCBzKSA9PiBuICsgJyAnICsgcywgJycpfVxceDFiWzkwbWAsXG4gICAgICAgIGRpc3BsYXlGaWxlUGF0aDpcbiAgICAgICAgICAgIHByb2Nlc3MuZW52LkxPR0dFUl9ESVNQTEFZX0ZJTEVfUEFUSD8udG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnID8gJ2hpZGVOb2RlTW9kdWxlc09ubHknIDogJ2hpZGRlbicsXG4gICAgICAgIG1pbkxldmVsLFxuICAgICAgICAuLi5jb25maWdzLFxuICAgIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRzbG9nXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJnbG9iYWwiLCJsb2dMZXZlbHMiLCJjb25maWdzIiwiZGlzcGxheUZ1bmN0aW9uTmFtZSIsImV4cG9zZUVycm9yQ29kZUZyYW1lIiwiZGVsaW1pdGVyIiwiZGF0ZVRpbWVUaW1lem9uZSIsInByZXR0eUluc3BlY3RPcHRpb25zIiwiY29sb3JzIiwiY29tcGFjdCIsImRlcHRoIiwianNvbkluc3BlY3RPcHRpb25zIiwibG9nTGV2ZWxzQ29sb3JzIiwic2V0dGluZ3MiLCJuYW1lIiwiYXJncyIsImRvdGVudiIsImNvbmZpZyIsImxvZ0xldmVsIiwicHJvY2VzcyIsImVudiIsIkxPR0dFUl9NSU5fTEVWRUwiLCJ0b0xvd2VyQ2FzZSIsIm1pbkxldmVsIiwiaW5jbHVkZXMiLCJMb2dnZXIiLCJyZWR1Y2UiLCJuIiwicyIsImRpc3BsYXlGaWxlUGF0aCIsIkxPR0dFUl9ESVNQTEFZX0ZJTEVfUEFUSCIsInJlcXVpcmUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9