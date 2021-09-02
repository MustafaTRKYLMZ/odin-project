(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){t(1,arguments);var a=e(n);return!isNaN(a)}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var i,o={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,d=r.width?String(r.width):t.defaultWidth;a=t.values[d]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function c(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,s=i[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?u(d,(function(t){return t.test(s)})):l(d,(function(t){return t.test(s)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var m=e.slice(s.length);return{value:o,rest:m}}}function l(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function u(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const m={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:function(t,e,n,a){return s[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(i.matchPattern);if(!n)return null;var a=n[0],r=t.match(i.parsePattern);if(!r)return null;var o=i.valueCallback?i.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(a.length);return{value:o,rest:s}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function h(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function g(n,a){t(2,arguments);var r=e(n).getTime(),i=h(a);return new Date(r+i)}function p(e,n){t(2,arguments);var a=h(n);return g(e,-a)}function f(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const v=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return f("yy"===e?a%100:a,e.length)},w=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):f(n+1,2)},T=function(t,e){return f(t.getUTCDate(),e.length)},y=function(t,e){return f(t.getUTCHours()%12||12,e.length)},C=function(t,e){return f(t.getUTCHours(),e.length)},b=function(t,e){return f(t.getUTCMinutes(),e.length)},k=function(t,e){return f(t.getUTCSeconds(),e.length)},E=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return f(Math.floor(a*Math.pow(10,n-3)),e.length)};var D=864e5;function B(n){t(1,arguments);var a=1,r=e(n),i=r.getUTCDay(),o=(i<a?7:0)+i-a;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function L(n){t(1,arguments);var a=e(n),r=a.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=B(i),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var d=B(s);return a.getTime()>=o.getTime()?r+1:a.getTime()>=d.getTime()?r:r-1}function S(e){t(1,arguments);var n=L(e),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=B(a);return r}var I=6048e5;function M(n,a){t(1,arguments);var r=a||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:h(o),d=null==r.weekStartsOn?s:h(r.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=e(n),l=c.getUTCDay(),u=(l<d?7:0)+l-d;return c.setUTCDate(c.getUTCDate()-u),c.setUTCHours(0,0,0,0),c}function P(n,a){t(1,arguments);var r=e(n,a),i=r.getUTCFullYear(),o=a||{},s=o.locale,d=s&&s.options&&s.options.firstWeekContainsDate,c=null==d?1:h(d),l=null==o.firstWeekContainsDate?c:h(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setUTCFullYear(i+1,0,l),u.setUTCHours(0,0,0,0);var m=M(u,a),g=new Date(0);g.setUTCFullYear(i,0,l),g.setUTCHours(0,0,0,0);var p=M(g,a);return r.getTime()>=m.getTime()?i+1:r.getTime()>=p.getTime()?i:i-1}function j(e,n){t(1,arguments);var a=n||{},r=a.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:h(i),s=null==a.firstWeekContainsDate?o:h(a.firstWeekContainsDate),d=P(e,n),c=new Date(0);c.setUTCFullYear(d,0,s),c.setUTCHours(0,0,0,0);var l=M(c,n);return l}var A=6048e5;function x(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+f(i,2)}function N(t,e){return t%60==0?(t>0?"-":"+")+f(Math.abs(t)/60,2):O(t,e)}function O(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+f(Math.floor(r/60),2)+n+f(r%60,2)}const H={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return v(t,e)},Y:function(t,e,n,a){var r=P(t,a),i=r>0?r:1-r;return"YY"===e?f(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):f(i,e.length)},R:function(t,e){return f(L(t),e.length)},u:function(t,e){return f(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return f(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return f(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return w(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return f(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(n,a,r,i){var o=function(n,a){t(1,arguments);var r=e(n),i=M(r,a).getTime()-j(r,a).getTime();return Math.round(i/A)+1}(n,i);return"wo"===a?r.ordinalNumber(o,{unit:"week"}):f(o,a.length)},I:function(n,a,r){var i=function(n){t(1,arguments);var a=e(n),r=B(a).getTime()-S(a).getTime();return Math.round(r/I)+1}(n);return"Io"===a?r.ordinalNumber(i,{unit:"week"}):f(i,a.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):T(t,e)},D:function(n,a,r){var i=function(n){t(1,arguments);var a=e(n),r=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var i=a.getTime(),o=r-i;return Math.floor(o/D)+1}(n);return"Do"===a?r.ordinalNumber(i,{unit:"dayOfYear"}):f(i,a.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return f(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return f(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return f(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return y(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):C(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):f(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):f(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):k(t,e)},S:function(t,e){return E(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return N(r);case"XXXX":case"XX":return O(r);case"XXXXX":case"XXX":default:return O(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return N(r);case"xxxx":case"xx":return O(r);case"xxxxx":case"xxx":default:return O(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+x(r,":");case"OOOO":default:return"GMT"+O(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+x(r,":");case"zzzz":default:return"GMT"+O(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return f(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return f((a._originalDate||t).getTime(),e.length)}};function U(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function W(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const Y={p:W,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return U(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",U(r,e)).replace("{{time}}",W(i,e))}};function R(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var q=["D","DD"],X=["YY","YYYY"];function J(t){return-1!==q.indexOf(t)}function F(t){return-1!==X.indexOf(t)}function z(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Q=/^'([^]*?)'?$/,_=/''/g,K=/[a-zA-Z]/;function V(a,r,i){t(2,arguments);var o=String(r),s=i||{},d=s.locale||m,c=d.options&&d.options.firstWeekContainsDate,l=null==c?1:h(c),u=null==s.firstWeekContainsDate?l:h(s.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=d.options&&d.options.weekStartsOn,f=null==g?0:h(g),v=null==s.weekStartsOn?f:h(s.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var w=e(a);if(!n(w))throw new RangeError("Invalid time value");var T=R(w),y=p(w,T),C={firstWeekContainsDate:u,weekStartsOn:v,locale:d,_originalDate:w},b=o.match($).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Y[e])(t,d.formatLong,C):t})).join("").match(G).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return Z(t);var n=H[e];if(n)return!s.useAdditionalWeekYearTokens&&F(t)&&z(t,r,a),!s.useAdditionalDayOfYearTokens&&J(t)&&z(t,r,a),n(y,t,d.localize,C);if(e.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return b}function Z(t){return t.match(Q)[1].replace(_,"'")}class tt{title;description;dueDate;priority;isOk;constructor(){this.description="",this.title="",this.dueDate="",this.priority=1,this.isOk=!1}set setList(t){this.title=t}get getList(){let t=JSON.parse(localStorage.getItem("library"));null!==t?this.reloadPage(t):t=[]}static deleteTask(t,e){const n=document.getElementById("taskContentHeaderId").innerText;if("X"===t.target.lastChild.textContent&&confirm("Are you sure to remove this item")){t.target.parentElement.parentElement.remove();let a=t.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;e.projects.forEach((t=>{t.title===n&&t.todos.forEach(((e,n)=>{e.title===a&&n>-1&&t.todos.splice(n,1)}))})),localStorage.setItem("projects",JSON.stringify(e))}}static setTitle(t,e){const n=document.getElementById("taskContentHeaderId").innerText;let a=t.target.parentElement.innerText,r=t.target;r.innerText="",r.innerHTML+=`\n                        <input type="text" id="titleInput" value="${a}"></input>\n                        `,document.getElementById("titleInput").addEventListener("change",(t=>{t.preventDefault(),r.innerText=t.target.value,e.projects.forEach((e=>{e.title===n&&e.todos.forEach((e=>{e.title===a&&(e.title=t.target.value)}))})),localStorage.setItem("projects",JSON.stringify(e))}))}static setDate(t,e){document.getElementById("rightContent");const n=document.getElementById("taskContentHeaderId").innerText;let a=t.target.parentElement.previousElementSibling.previousElementSibling.innerText,r=t.target;console.log("first content",r),r.innerText="",r.innerHTML+='\n                        <input type="date" id="dateInput" ></input>\n                        ';const i=document.getElementById("dateInput");console.log("hello from date Input",dateInput),i.addEventListener("change",(i=>{t.preventDefault();const o=document.getElementById(`dueDate${a}`);console.log("hello from set Date",i);const s=i.target.value,d=V(new Date(s),"dd/MM/yyyy");r.innerText=d,console.log("content date",r),console.log("content text",o),dateInput.remove(),e.projects.forEach((t=>{t.title===n&&t.todos.forEach((t=>{t.title===a&&(t.dueDate=d)}))})),localStorage.setItem("projects",JSON.stringify(e))}))}}class et{static getActions(){console.log("Hello from actions");let t=JSON.parse(localStorage.getItem("projects"));document.getElementById("newTasksId").addEventListener("click",(e=>{e.preventDefault(),console.log("path",e.path),"taskDetailDateCls"===e.path[1].className?tt.setDate(e,t):"taskDetailCls"===e.path[1].className?tt.setTitle(e,t):"taskCloseBtnCls"===e.path[1].className&&tt.deleteTask(e,t)}))}static getTimeLineTasks(){rt.clearRightSideBar();let t=JSON.parse(localStorage.getItem("projects"));if(null!==t){const e=document.getElementById("today"),n=document.getElementById("nextSevenDays"),a=V(new Date,"dd/MM/yyyy"),r=[];t.projects.forEach((t=>{t.todos.forEach((t=>{t.dueDate===a&&r.push(t)}))}));const i="Today";nt.setTimeTaskToRigtSide(r,i),e.addEventListener("click",(t=>{if(t.preventDefault(),"today"===t.path[0].className){const t=[];rt.clearRightSideBar(),JSON.parse(localStorage.getItem("projects")).projects.forEach((e=>{e.todos.forEach((e=>{e.dueDate===a&&t.push(e)}))}));const e="Today";nt.setTimeTaskToRigtSide(t,e)}})),n.addEventListener("click",(t=>{if(t.preventDefault(),"nextSevenDays"===t.path[0].className){let t=JSON.parse(localStorage.getItem("projects"));rt.clearRightSideBar();const n="Next Seven Days",a=[];var e=new Date;const r=V(new Date(e.getTime()+6048e5),"dd/MM/yyyy");t.projects.forEach((t=>{t.todos.forEach((t=>{const e=parseInt(r)-parseInt(t.dueDate);0<=e&&7>=e&&a.push(t)}))})),nt.setTimeTaskToRigtSide(a,n)}}))}}}class nt{todos=[];title;constructor(t){this.title=t}set setList(t){this.title=t}get getList(){let t=JSON.parse(localStorage.getItem("library"));null!==t?this.reloadPage(t):t=[]}static createRightSideHeader(t,e,n){t.projects.forEach((t=>{if(t.title===n.target.innerText){const n=document.createElement("HEADER");n.innerHTML=t.title,n.classList.add("taskContentHeaderCls"),n.setAttribute("id","taskContentHeaderId"),e.appendChild(n)}}))}static setTasksToRightSide(t,e,n,a,r){null!==t&&t.projects.forEach((t=>{if(t.title===r.target.innerText)for(let r=0;r<t.todos.length;r++){const i=t.todos[r],o=document.createElement("div");o.classList.add("tasks"),o.setAttribute("id",t.title),o.innerHTML+=`\n                                                    <div class="taskDetailCls">\n                                                    <input class='isOkButtons'  id="+"isOkButton"  type='radio'${i.isOk?"checked":"false"}>\n                                                    </div>\n                                                    <div class="taskDetailCls"><p>${i.title}</p></div>\n                                                    <div class="taskDetailCls"><p>${i.description}</p></div>`,null===i.dueDate||""===i.dueDate?o.innerHTML+=`\n                                                        <div class="taskDetailDateCls" id="noDateId${i.title}"><p>No Date</p></div>\n                                                        `:o.innerHTML+=`\n                                                        <div class="taskDetailDateCls" id="dueDate${i.title}"><p>${i.dueDate}</p></div>\n                                                        `,o.innerHTML+='\n                                                    <div class="taskCloseBtnCls"> <button  id="taskCloseBtnId">X</button></div>\n                                                    ',i.isOk?(a.appendChild(o),e.appendChild(a)):(n.appendChild(o),e.appendChild(n))}}))}static createTaskButtonArea(t){const e=document.createElement("div");e.classList.add("createTaskCls"),e.setAttribute("id","createTaskId"),e.appendChild(nt.createTaskButton("+ Add Task","createTaskButton")),t.appendChild(e)}static addTaskArea(){const t=document.getElementById("createTaskButton");t.addEventListener("click",(e=>{e.preventDefault(),nt.openInputTaskArea(),rt.canselEvent("newTaskCanselBtn","newTaskInputArea","newTaskCanselBtnCls",t),console.log("add Task Area"),nt.addNewTask()}))}static createNewSideBar(t,e,n){null!==t&&nt.createRightSideHeader(t,e,n);const a=document.createElement("div");a.classList.add("rightContent"),a.setAttribute("id","rightContent"),e.appendChild(a),nt.createTaskButtonArea(a);const r=document.createElement("div");r.classList.add("taskList"),r.setAttribute("id","tasklistId");const i=document.createElement("div");i.classList.add("newTasksCls"),i.setAttribute("id","newTasksId"),r.appendChild(i);const o=document.createElement("div");o.classList.add("newTaskCls"),o.setAttribute("id","oldTasksId"),r.appendChild(o),a.appendChild(r)}static setTimeTaskToRigtSide(t,e){const n=document.getElementById("rightSide");rt.createRightHeaderTime(n,e),rt.createRigtSideContentArea(n);const a=document.getElementById("tasklistId"),r=document.getElementById("newTasksId"),i=document.getElementById("oldTasksId");if(null!==t)for(let e=0;e<t.length;e++){const n=t[e],o=document.createElement("div");o.classList.add("tasks"),o.setAttribute("id",t.title),o.innerHTML+=`\n                                        <div class="taskDetailCls">\n                                        <input class='isOkButtons'  id="+"isOkButton"  type='radio'${n.isOk?"checked":"false"}>\n                                        </div>\n                                        <div class="taskDetailCls"><p>${n.title}</p></div>\n                                        <div class="taskDetailCls"><p>${n.description}</p></div>`,null===n.dueDate||""===n.dueDate?o.innerHTML+=`\n                                            <div class="taskDetailDateCls" id="noDateId${n.title}"><p>No Date</p></div>\n                                            `:o.innerHTML+=`\n                                            <div class="taskDetailDateCls" id="dueDate${n.title}"><p>${n.dueDate}</p></div>\n                                            `,o.innerHTML+='\n                                        <div class="taskCloseBtnCls"> <button  id="taskCloseBtnId">X</button></div>\n                                        ',n.isOk?(i.appendChild(o),a.appendChild(i)):(r.appendChild(o),a.appendChild(r))}}static getTasks(t){t.addEventListener("click",(t=>{t.preventDefault();const e=JSON.parse(localStorage.getItem("projects")),n=document.getElementById("rightSide");rt.clearRightSideBar(),nt.createNewSideBar(e,n,t);const a=document.getElementById("tasklistId"),r=document.getElementById("newTasksId"),i=document.getElementById("oldTasksId");nt.setTasksToRightSide(e,a,r,i,t),nt.addTaskArea(),et.getActions()}))}static createTask(t){null!==t&&t.addEventListener("click",(e=>{e.preventDefault();const n=document.getElementById("createTaskId");nt.openInputTaskArea(),rt.canselEvent("newTaskCanselBtn","newTaskInputArea","newTaskCanselBtnCls",t),at.addProject(n)}))}static addNewTask(){console.log("Hello from add task button"),document.getElementById("newTaskAddBtn").addEventListener("click",(t=>{if(console.log("add New Task =========",t),t.preventDefault(),!t.target.classList.contains("newTaskAddBtnCls"))return;const e=document.getElementById("newTaskInputTitle"),n=document.getElementById("taskContentHeaderId").innerText,a=new tt(e);a.setList=e.value,nt.setNewTask(a),nt.setTasksToLocal(a,n),e.value=""}))}static setTasksToLocal(t,e){const n=JSON.parse(localStorage.getItem("projects"));null!==n&&(n.projects.forEach((n=>{n.title===e&&(console.log("Todo ////////",n.todos),n.todos.push(t))})),localStorage.setItem("projects",JSON.stringify(n)))}static setNewTask(t){const e=document.getElementById("newTasksId"),n=document.createElement("div");n.classList.add("tasks"),n.setAttribute("id",t.title),n.innerHTML+=`\n                        <div class="taskDetailCls">\n                        <input class='isOkButtons'  id="+"isOkButton"  type='radio'${t.isOk?"checked":"false"}>\n                        </div>\n                        <div class="taskDetailCls"><p>${t.title}</p></div>\n                        <div class="taskDetailCls"><p> ${t.description}</p></div>`,null!==t.dueDate||""!==t.dueDate?n.innerHTML+='\n                            <div class="taskDetailDateCls" id="noDateId"><p>No Date</p></div>\n                            ':n.innerHTML+=`\n                            <div class="taskDetailCls" id="dueDate">${t.dueDate} <p>Date:</p></div>\n                            `,n.innerHTML+='\n                        <div class="taskCloseBtnCls"> <button id="taskCloseBtnId">X</button></div>\n                        ',e.appendChild(n)}static createTaskButton(t,e){const n=document.createElement("BUTTON");return n.innerHTML=t,n.setAttribute("id",`${e}`),n}static openInputTaskArea(){console.log("OPEN INPUT TASK AREA");const t=document.getElementById("createTaskId"),e=document.getElementById("createTaskButton"),n=document.createElement("div");n.classList.add("newProjectAdd"),n.setAttribute("id","newTaskInputArea");const a=document.createElement("div");a.classList.add("inputBtnGroups"),a.setAttribute("id","inputBtnGroupsTasks");const r=document.createElement("div"),i=document.createElement("input");i.setAttribute("id","newTaskInputTitle"),r.setAttribute("id","newTaskInput"),r.appendChild(i);const o=document.createElement("BUTTON");o.setAttribute("id","newTaskAddBtn"),o.classList.add("newTaskAddBtnCls"),o.innerHTML="Add";const s=document.createElement("BUTTON");s.setAttribute("id","newTaskCanselBtn"),s.classList.add("newTaskCanselBtnCls"),s.innerHTML="Cansel",n.appendChild(r),a.appendChild(o),a.appendChild(s),n.appendChild(a),t.appendChild(n),e.style.display="none"}}class at{projects=[];constructor(){this.projects}set setList(t){this.projects.push(t)}get getList(){let t=JSON.parse(localStorage.getItem("projects"));return null===t?new at:t}static setProjectsToLocal(t){const e=JSON.parse(localStorage.getItem("projects"));null!==e?(t.projects.forEach((t=>{e.projects.push(t)})),localStorage.setItem("projects",JSON.stringify(e))):localStorage.setItem("projects",JSON.stringify(t))}static createProject(){const t=document.getElementById("createProjectButton");console.log("here is create project funtion"),null!==t&&t.addEventListener("click",(e=>{e.preventDefault();const n=document.getElementById("projects");rt.openInputArea(n,"newProjectInputArea","newProjectAddBtn","newProjectCanselBtn","newProjectInputTitle","newProjectInput","inputBtnGroupsProject","newProjectCanselBtnCls","newProjectAddBtnCls",t),rt.canselEvent("newProjectCanselBtn","newProjectInputArea","newProjectCanselBtnCls",t),at.addProject(n)}))}static addProject(t){document.getElementById("newProjectAddBtn").addEventListener("click",(e=>{if(e.preventDefault(),!e.target.classList.contains("newProjectAddBtnCls"))return;const n=document.getElementById("newProjectInputTitle"),a=new at,r=new nt(n.value);r.setList=n.value,a.setList=r,at.setProjects(n.value,t),at.setProjectsToLocal(a),n.value=""}))}static setProjects(t,e){const n=document.createElement("div");n.classList.add("projectList"),n.setAttribute("id","projectListId");const a=document.createElement("div"),r=document.createElement("p");r.innerText=t,r.setAttribute("id","projectTitleId"),a.appendChild(r),n.appendChild(a);const i=document.createElement("div"),o=document.createElement("BUTTON");o.classList.add("closeProjectButtonCls"),o.setAttribute("id","closeProjectButtonId"),o.innerText="X",i.appendChild(o),n.appendChild(i),e.appendChild(n)}setCurrentProjects(t,e){const n=t.getList;null!==n&&n.projects.forEach((t=>{at.setProjects(t.title,e)})),e.addEventListener("click",(t=>{t.preventDefault(),"projectTitleId"===t.target.id?nt.getTasks(e):"closeProjectButtonId"===t.target.id&&at.deleteProject(t)}))}static deleteProject(t){if(confirm("Are you sure to remove this item")){const e=t.target.parentElement.previousSibling.innerText;t.target.parentElement.parentElement.remove();let n=JSON.parse(localStorage.getItem("projects"));console.log("projects",n),n.projects.forEach(((t,a)=>{t.title===e&&a>-1&&n.projects.splice(a,1)})),localStorage.setItem("projects",JSON.stringify(n))}}}class rt{static createHeader(){const t=document.createElement("HEADER"),e=document.createElement("IMG");return e.setAttribute("src","images/todoListIcon.png"),e.setAttribute("width","204"),e.setAttribute("height","128"),e.setAttribute("alt","Image not found"),t.innerText="Todolist",t.appendChild(e),t.classList.add("header"),t}static createLeftSideBar(){const t=document.createElement("div");return t.setAttribute("id","leftSide"),t.classList.add("leftSideBar"),t.appendChild(rt.timeLine()),t.appendChild(rt.createProjectButton("+ New Project","createProjectButton")),t.appendChild(rt.projects()),t}static projects(){const t=document.createElement("div"),e=document.createElement("p");return e.setAttribute("id","projectsP"),t.classList.add("projects"),t.setAttribute("id","projects"),e.innerHTML="PROJECTS",t.appendChild(e),t}static createProjectButton(t,e){const n=document.createElement("BUTTON");return n.innerHTML=t,n.setAttribute("id",`${e}`),n}static createCenterBody(){const t=new at;console.log("Hello Dear Center");const e=document.createElement("div");e.setAttribute("id","centerBody");const n=rt.createLeftSideBar(),a=rt.createRightSideBar();e.appendChild(n),e.appendChild(a),document.body.appendChild(e),et.getTimeLineTasks();const r=document.getElementById("projects");at.createProject(),t.setCurrentProjects(t,r)}static createRightHeaderTime(t,e){const n=document.createElement("HEADER");n.innerHTML=e,n.classList.add("taskContentHeaderCls"),n.setAttribute("id","taskContentHeaderId"),t.appendChild(n)}static createRigtSideContentArea(t){const e=document.createElement("div");e.classList.add("rightContent"),e.setAttribute("id","rightContent"),t.appendChild(e);const n=document.createElement("div");n.classList.add("taskList"),n.setAttribute("id","tasklistId");const a=document.createElement("div");a.classList.add("newTasksCls"),a.setAttribute("id","newTasksId"),n.appendChild(a);const r=document.createElement("div");r.classList.add("newTaskCls"),r.setAttribute("id","oldTasksId"),n.appendChild(r),e.appendChild(n)}static clearRightSideBar(){const t=document.getElementById("taskContentHeaderId"),e=document.getElementById("rightContent");null!==e&&e.remove(),null!==t&&t.remove()}static createRightSideBar(){const t=document.createElement("div");t.setAttribute("id","rightSide"),t.classList.add("rightSideBar");const e=document.createElement("div");return e.classList.add("rightContent"),e.setAttribute("id","rightContent"),e.innerHTML="Assignments",t.appendChild(e),t}static openInputArea(t,e,n,a,r,i,o,s,d,c){const l=document.createElement("div");l.classList.add("newProjectAdd"),l.setAttribute("id",e);const u=document.createElement("div");u.classList.add("inputBtnGroups"),u.setAttribute("id",o);const m=document.createElement("div"),h=document.createElement("input");h.setAttribute("id",r),m.setAttribute("id",i),m.appendChild(h);const g=document.createElement("BUTTON");g.setAttribute("id",n),g.classList.add(d),g.innerHTML="Add";const p=document.createElement("BUTTON");p.setAttribute("id",a),p.classList.add(s),p.innerHTML="Cansel",l.appendChild(m),u.appendChild(g),u.appendChild(p),l.appendChild(u),t.insertBefore(l,t.firstChild),c.style.display="none"}static canselEvent(t,e,n,a){const r=document.getElementById(t),i=document.getElementById(e);r.addEventListener("click",(t=>{t.preventDefault(),t.target.classList.contains(n)&&(i.remove(),a.style.display="block")}))}static timeLine(){const t=document.createElement("div");t.classList.add("timeLine"),t.setAttribute("id","timeLine");const e=document.createElement("div");e.classList.add("nextSevenDays"),e.setAttribute("id","nextSevenDays"),e.innerHTML="Next 7 Days";const n=document.createElement("div");return n.setAttribute("id","today"),n.classList.add("today"),n.innerHTML="Today",t.appendChild(e),t.appendChild(n),t}static createFooter(){const t=document.createElement("div");t.classList.add("footerCls"),t.setAttribute("id","footerId"),document.body.appendChild(t);const e=document.createElement("div");e.classList.add("copyRighCls"),e.setAttribute("id","copyRighClsId"),e.innerText="Copyright Ⓒ 2021 Mustafa",t.appendChild(e)}static loadPage(){document.body.appendChild(rt.createHeader()),rt.createCenterBody(),rt.createFooter()}}rt.loadPage()})();