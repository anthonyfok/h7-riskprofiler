/*
 Highcharts JS v9.3.3 (2022-02-01)

 (c) 2014-2021 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/treemap",["highcharts"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,e,c,r){a.hasOwnProperty(e)||(a[e]=r.apply(null,c))}a=a?a._modules:{};f(a,"Series/ColorMapMixin.js",[a["Core/Globals.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"]],function(a,e,c){var r=
a.noop;a=a.seriesTypes;var l=c.defined;c=c.addEvent;c(e,"afterSetState",function(g){this.moveToTopOnHover&&this.graphic&&this.graphic.attr({zIndex:g&&"hover"===g.state?1:0})});return{PointMixin:{dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value}},SeriesMixin:{pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:r,parallelArrays:["x","y","value"],
colorKey:"value",pointAttribs:a.column.prototype.pointAttribs,colorAttribs:function(g){var a={};!l(g.color)||g.state&&"normal"!==g.state||(a[this.colorProp||"fill"]=g.color);return a}}}});f(a,"Series/Treemap/TreemapAlgorithmGroup.js",[],function(){return function(){function a(a,c,r,l){this.height=a;this.width=c;this.plot=l;this.startDirection=this.direction=r;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,c){return Math.max(a/
c,c/a)}}}a.prototype.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,
this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};a.prototype.reset=function(){this.lW=this.nW=0;this.elArr=[];this.total=0};return a}()});f(a,"Series/DrawPointComposition.js",[],function(){var a;(function(a){function c(a){var c=this,g=a.animatableAttribs,q=a.onComplete,b=a.css,n=a.renderer,K=this.series&&this.series.chart.hasRendered?void 0:this.series&&this.series.options.animation,t=this.graphic;a.attribs=a.attribs||{};a.attribs["class"]=this.getClassName();if(this.shouldDraw())t||
(this.graphic=t=n[a.shapeType](a.shapeArgs).add(a.group)),t.css(b).attr(a.attribs).animate(g,a.isNew?!1:K,q);else if(t){var e=function(){c.graphic=t=t&&t.destroy();"function"===typeof q&&q()};Object.keys(g).length?t.animate(g,void 0,function(){e()}):e()}}function e(){return!this.isNull}var l=[];a.compose=function(a){if(-1===l.indexOf(a)){l.push(a);var g=a.prototype;g.draw=c;g.shouldDraw||(g.shouldDraw=e)}return a}})(a||(a={}));return a});f(a,"Series/Treemap/TreemapPoint.js",[a["Series/DrawPointComposition.js"],
a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e,c){var r=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var n in b)b.hasOwnProperty(n)&&(a[n]=b[n])};return a(b,c)};return function(b,c){function n(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(n.prototype=c.prototype,new n)}}(),l=e.series.prototype.pointClass,g=e.seriesTypes;e=g.pie.prototype.pointClass;
var m=c.extend,k=c.isNumber,q=c.pick;c=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.name=void 0;b.node=void 0;b.options=void 0;b.series=void 0;b.value=void 0;return b}r(b,a);b.prototype.getClassName=function(){var a=l.prototype.getClassName.call(this),b=this.series,c=b.options;this.node.level<=b.nodeMap[b.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||q(c.interactByLeaf,!c.allowTraversingTree)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";
return a};b.prototype.isValid=function(){return!(!this.id&&!k(this.value))};b.prototype.setState=function(a){l.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})};b.prototype.shouldDraw=function(){return k(this.plotY)&&null!==this.y};return b}(g.scatter.prototype.pointClass);m(c.prototype,{setVisible:e.prototype.setVisible});a.compose(c);return c});f(a,"Series/Treemap/TreemapUtilities.js",[a["Core/Utilities.js"]],function(a){var e=a.objectEach,c;(function(a){function c(a,
e,k){void 0===k&&(k=this);a=e.call(k,a);!1!==a&&c(a,e,k)}a.AXIS_MAX=100;a.isBoolean=function(a){return"boolean"===typeof a};a.eachObject=function(a,c,k){k=k||this;e(a,function(e,b){c.call(k,e,b,a)})};a.recursive=c})(c||(c={}));return c});f(a,"Series/TreeUtilities.js",[a["Core/Color/Color.js"],a["Core/Utilities.js"]],function(a,e){function c(a,n){var b=n.before,e=n.idRoot,k=n.mapIdToNode[e],g=n.points[a.i],l=g&&g.options||{},D=[],m=0;a.levelDynamic=a.level-(!1!==n.levelIsConstant?0:k.level);a.name=
q(g&&g.name,"");a.visible=e===a.id||!0===n.visible;"function"===typeof b&&(a=b(a,n));a.children.forEach(function(b,e){var g=r({},n);r(g,{index:e,siblings:a.children.length,visible:a.visible});b=c(b,g);D.push(b);b.visible&&(m+=b.val)});b=q(l.value,m);a.visible=0<=b&&(0<m||a.visible);a.children=D;a.childrenTotal=m;a.isLeaf=a.visible&&!m;a.val=b;return a}var r=e.extend,l=e.isArray,g=e.isNumber,m=e.isObject,k=e.merge,q=e.pick;return{getColor:function(b,c){var e=c.index,g=c.mapOptionsToLevel,k=c.parentColor,
n=c.parentColorIndex,m=c.series,l=c.colors,r=c.siblings,f=m.points,C=m.chart.options.chart,v;if(b){f=f[b.i];b=g[b.level]||{};if(g=f&&b.colorByPoint){var x=f.index%(l?l.length:C.colorCount);var E=l&&l[x]}if(!m.chart.styledMode){l=f&&f.options.color;C=b&&b.color;if(v=k)v=(v=b&&b.colorVariation)&&"brightness"===v.key&&e&&r?a.parse(k).brighten(e/r*v.to).get():k;v=q(l,C,E,v,m.color)}var B=q(f&&f.options.colorIndex,b&&b.colorIndex,x,n,c.colorIndex)}return{color:v,colorIndex:B}},getLevelOptions:function(a){var b=
null;if(m(a)){b={};var c=g(a.from)?a.from:1;var e=a.levels;var f={};var r=m(a.defaults)?a.defaults:{};l(e)&&(f=e.reduce(function(a,b){if(m(b)&&g(b.level)){var e=k({},b);var l=q(e.levelIsConstant,r.levelIsConstant);delete e.levelIsConstant;delete e.level;b=b.level+(l?0:c-1);m(a[b])?k(!0,a[b],e):a[b]=e}return a},{}));e=g(a.to)?a.to:1;for(a=0;a<=e;a++)b[a]=k({},r,m(f[a])?f[a]:{})}return b},setTreeValues:c,updateRootId:function(a){if(m(a)){var b=m(a.options)?a.options:{};b=q(a.rootNode,b.rootId,"");m(a.userOptions)&&
(a.userOptions.rootId=b);a.rootNode=b}return b}}});f(a,"Series/Treemap/TreemapComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Series/Treemap/TreemapUtilities.js"],a["Core/Utilities.js"]],function(a,e,c){var f=c.addEvent,l=c.extend,g=!1;f(a.series,"afterBindAxes",function(){var a=this.xAxis,c=this.yAxis;if(a&&c)if(this.is("treemap")){var f={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,minPadding:0,max:e.AXIS_MAX,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]};l(c.options,f);l(a.options,
f);g=!0}else g&&(c.setOptions(c.userOptions),a.setOptions(a.userOptions),g=!1)})});f(a,"Series/Treemap/TreemapSeries.js",[a["Core/Color/Color.js"],a["Series/ColorMapMixin.js"],a["Core/Globals.js"],a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Series/Treemap/TreemapAlgorithmGroup.js"],a["Series/Treemap/TreemapPoint.js"],a["Series/Treemap/TreemapUtilities.js"],a["Series/TreeUtilities.js"],a["Core/Utilities.js"]],function(a,e,c,f,l,g,m,k,q,b){var n=this&&this.__extends||function(){var a=
function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var h in d)d.hasOwnProperty(h)&&(a[h]=d[h])};return a(b,d)};return function(b,d){function h(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(h.prototype=d.prototype,new h)}}(),r=a.parse;a=c.noop;var t=l.series;c=l.seriesTypes;var C=c.column,L=c.heatmap,G=c.scatter,D=q.getColor,M=q.getLevelOptions,N=q.updateRootId,H=b.addEvent,v=b.correctFloat,x=b.defined,E=b.error,
B=b.extend,O=b.fireEvent,I=b.isArray,P=b.isObject,F=b.isString,z=b.merge,w=b.pick,Q=b.stableSort;q=function(a){function b(){var d=null!==a&&a.apply(this,arguments)||this;d.axisRatio=void 0;d.data=void 0;d.mapOptionsToLevel=void 0;d.nodeMap=void 0;d.options=void 0;d.points=void 0;d.rootNode=void 0;d.tree=void 0;return d}n(b,a);b.prototype.algorithmCalcPoints=function(a,h,b,y){var d,c,p,e,g=b.lW,u=b.lH,f=b.plot,k=0,l=b.elArr.length-1;if(h)g=b.nW,u=b.nH;else var m=b.elArr[b.elArr.length-1];b.elArr.forEach(function(a){if(h||
k<l)0===b.direction?(d=f.x,c=f.y,p=g,e=a/p):(d=f.x,c=f.y,e=u,p=a/e),y.push({x:d,y:c,width:p,height:v(e)}),0===b.direction?f.y+=e:f.x+=p;k+=1});b.reset();0===b.direction?b.width-=g:b.height-=u;f.y=f.parent.y+(f.parent.height-b.height);f.x=f.parent.x+(f.parent.width-b.width);a&&(b.direction=1-b.direction);h||b.addElement(m)};b.prototype.algorithmFill=function(a,b,c){var d=[],h,p=b.direction,e=b.x,f=b.y,g=b.width,u=b.height,k,l,m,n;c.forEach(function(c){h=c.val/b.val*b.height*b.width;k=e;l=f;0===p?(n=
u,m=h/n,g-=m,e+=m):(m=g,n=h/m,u-=n,f+=n);d.push({x:k,y:l,width:m,height:n});a&&(p=1-p)});return d};b.prototype.algorithmLowAspectRatio=function(a,b,c){var d=[],h=this,p,e={x:b.x,y:b.y,parent:b},f=0,k=c.length-1,u=new g(b.height,b.width,b.direction,e);c.forEach(function(c){p=c.val/b.val*b.height*b.width;u.addElement(p);u.lP.nR>u.lP.lR&&h.algorithmCalcPoints(a,!1,u,d,e);f===k&&h.algorithmCalcPoints(a,!0,u,d,e);f+=1});return d};b.prototype.alignDataLabel=function(a,b,c){var d=c.style;d&&!x(d.textOverflow)&&
b.text&&b.getBBox().width>b.text.textWidth&&b.css({textOverflow:"ellipsis",width:d.width+="px"});C.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})};b.prototype.buildNode=function(a,b,c,e,A){var d=this,h=[],p=d.points[b],y=0,f;(e[a]||[]).forEach(function(b){f=d.buildNode(d.points[b].id,b,c+1,e,a);y=Math.max(f.height+1,y);h.push(f)});b={id:a,i:b,children:h,height:y,level:c,parent:A,visible:!1};d.nodeMap[b.id]=b;p&&(p.node=b);return b};b.prototype.calculateChildrenAreas=
function(a,b){var d=this,h=d.options,c=d.mapOptionsToLevel[a.level+1],e=w(d[c&&c.layoutAlgorithm]&&c.layoutAlgorithm,h.layoutAlgorithm),f=h.alternateStartingDirection,g=[];a=a.children.filter(function(a){return!a.ignore});c&&c.layoutStartingDirection&&(b.direction="vertical"===c.layoutStartingDirection?0:1);g=d[e](b,a);a.forEach(function(a,h){h=g[h];a.values=z(h,{val:a.childrenTotal,direction:f?1-b.direction:b.direction});a.pointValues=z(h,{x:h.x/d.axisRatio,y:k.AXIS_MAX-h.y-h.height,width:h.width/
d.axisRatio});a.children.length&&d.calculateChildrenAreas(a,a.values)})};b.prototype.drawDataLabels=function(){var a=this,b=a.mapOptionsToLevel,c,e;a.points.filter(function(a){return a.node.visible}).forEach(function(d){e=b[d.node.level];c={style:{}};d.node.isLeaf||(c.enabled=!1);e&&e.dataLabels&&(c=z(c,e.dataLabels),a._hasPointLabels=!0);d.shapeArgs&&(c.style.width=d.shapeArgs.width,d.dataLabel&&d.dataLabel.css({width:d.shapeArgs.width+"px"}));d.dlOptions=z(c,d.options.dataLabels)});t.prototype.drawDataLabels.call(this)};
b.prototype.drawPoints=function(){var a=this,b=a.chart,c=b.renderer,e=b.styledMode,f=a.options,g=e?{}:f.shadow,k=f.borderRadius,l=b.pointCount<f.animationLimit,m=f.allowTraversingTree;a.points.forEach(function(d){var b=d.node.levelDynamic,h={},p={},y={},A="level-group-"+d.node.level,J=!!d.graphic,R=l&&J,n=d.shapeArgs;d.shouldDraw()&&(d.isInside=!0,k&&(p.r=k),z(!0,R?h:p,J?n:{},e?{}:a.pointAttribs(d,d.selected?"select":void 0)),a.colorAttribs&&e&&B(y,a.colorAttribs(d)),a[A]||(a[A]=c.g(A).attr({zIndex:1E3-
(b||0)}).add(a.group),a[A].survive=!0));d.draw({animatableAttribs:h,attribs:p,css:y,group:a[A],renderer:c,shadow:g,shapeArgs:n,shapeType:"rect"});m&&d.graphic&&(d.drillId=f.interactByLeaf?a.drillToByLeaf(d):a.drillToByGroup(d))})};b.prototype.drillToByGroup=function(a){var d=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(d=a.id);return d};b.prototype.drillToByLeaf=function(a){var d=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!d;)a=this.nodeMap[a.parent],
a.parent===this.rootNode&&(d=a.id);return d};b.prototype.drillToNode=function(a,b){E(32,!1,void 0,{"treemap.drillToNode":"use treemap.setRootNode"});this.setRootNode(a,b)};b.prototype.drillUp=function(){var a=this.nodeMap[this.rootNode];a&&F(a.parent)&&this.setRootNode(a.parent,!0,{trigger:"traverseUpButton"})};b.prototype.getExtremes=function(){var a=t.prototype.getExtremes.call(this,this.colorValueData),b=a.dataMax;this.valueMin=a.dataMin;this.valueMax=b;return t.prototype.getExtremes.call(this)};
b.prototype.getListOfParents=function(a,b){a=I(a)?a:[];var d=I(b)?b:[];b=a.reduce(function(a,b,d){b=w(b.parent,"");"undefined"===typeof a[b]&&(a[b]=[]);a[b].push(d);return a},{"":[]});k.eachObject(b,function(a,b,c){""!==b&&-1===d.indexOf(b)&&(a.forEach(function(a){c[""].push(a)}),delete c[b])});return b};b.prototype.getTree=function(){var a=this.data.map(function(a){return a.id});a=this.getListOfParents(this.data,a);this.nodeMap={};return this.buildNode("",-1,0,a)};b.prototype.hasData=function(){return!!this.processedXData.length};
b.prototype.init=function(a,b){this.colorAttribs=e.SeriesMixin.colorAttribs;var d=H(this,"setOptions",function(a){a=a.userOptions;x(a.allowDrillToNode)&&!x(a.allowTraversingTree)&&(a.allowTraversingTree=a.allowDrillToNode,delete a.allowDrillToNode);x(a.drillUpButton)&&!x(a.traverseUpButton)&&(a.traverseUpButton=a.drillUpButton,delete a.drillUpButton)});t.prototype.init.call(this,a,b);delete this.opacity;this.eventsToUnbind.push(d);this.options.allowTraversingTree&&this.eventsToUnbind.push(H(this,
"click",this.onClickDrillToNode))};b.prototype.onClickDrillToNode=function(a){var b=(a=a.point)&&a.drillId;F(b)&&(a.setState(""),this.setRootNode(b,!0,{trigger:"click"}))};b.prototype.pointAttribs=function(a,b){var d=P(this.mapOptionsToLevel)?this.mapOptionsToLevel:{},c=a&&d[a.node.level]||{};d=this.options;var h=b&&d.states[b]||{},e=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||c.borderColor||h.borderColor||d.borderColor,"stroke-width":w(a&&a.borderWidth,c.borderWidth,h.borderWidth,d.borderWidth),
dashstyle:a&&a.borderDashStyle||c.borderDashStyle||h.borderDashStyle||d.borderDashStyle,fill:a&&a.color||this.color};-1!==e.indexOf("highcharts-above-level")?(a.fill="none",a["stroke-width"]=0):-1!==e.indexOf("highcharts-internal-node-interactive")?(b=w(h.opacity,d.opacity),a.fill=r(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==e.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=r(a.fill).brighten(h.brightness).get());return a};b.prototype.renderTraverseUpButton=function(a){var b=
this,d=b.options.traverseUpButton,c=w(d.text,b.nodeMap[a].name,"\u25c1 Back");if(""===a||b.is("sunburst")&&1===b.tree.children.length&&a===b.tree.children[0].id)b.drillUpButton&&(b.drillUpButton=b.drillUpButton.destroy());else if(this.drillUpButton)this.drillUpButton.placed=!1,this.drillUpButton.attr({text:c}).align();else{var e=(a=d.theme)&&a.states;this.drillUpButton=this.chart.renderer.button(c,0,0,function(){b.drillUp()},a,e&&e.hover,e&&e.select).addClass("highcharts-drillup-button").attr({align:d.position.align,
zIndex:7}).add().align(d.position,!1,d.relativeTo||"plotBox")}};b.prototype.setColorRecursive=function(a,b,c,e,f){var d=this,h=d&&d.chart;h=h&&h.options&&h.options.colors;if(a){var g=D(a,{colors:h,index:e,mapOptionsToLevel:d.mapOptionsToLevel,parentColor:b,parentColorIndex:c,series:d,siblings:f});if(b=d.points[a.i])b.color=g.color,b.colorIndex=g.colorIndex;(a.children||[]).forEach(function(b,c){d.setColorRecursive(b,g.color,g.colorIndex,c,a.children.length)})}};b.prototype.setPointValues=function(){var a=
this,b=a.xAxis,c=a.yAxis,e=a.chart.styledMode;a.points.forEach(function(d){var h=d.node,f=h.pointValues;h=h.visible;if(f&&h){h=f.height;var g=f.width,k=f.x,p=f.y,l=e?0:(a.pointAttribs(d)["stroke-width"]||0)%2/2;f=Math.round(b.toPixels(k,!0))-l;g=Math.round(b.toPixels(k+g,!0))-l;k=Math.round(c.toPixels(p,!0))-l;h=Math.round(c.toPixels(p+h,!0))-l;h={x:Math.min(f,g),y:Math.min(k,h),width:Math.abs(g-f),height:Math.abs(h-k)};d.plotX=h.x+h.width/2;d.plotY=h.y+h.height/2;d.shapeArgs=h}else delete d.plotX,
delete d.plotY})};b.prototype.setRootNode=function(a,b,c){a=B({newRootId:a,previousRootId:this.rootNode,redraw:w(b,!0),series:this},c);O(this,"setRootNode",a,function(a){var b=a.series;b.idPreviousRoot=a.previousRootId;b.rootNode=a.newRootId;b.isDirty=!0;a.redraw&&b.chart.redraw()})};b.prototype.setState=function(a){this.options.inactiveOtherPoints=!0;t.prototype.setState.call(this,a,!1);this.options.inactiveOtherPoints=!1};b.prototype.setTreeValues=function(a){var b=this,d=b.options,c=b.nodeMap[b.rootNode];
d=k.isBoolean(d.levelIsConstant)?d.levelIsConstant:!0;var e=0,f=[],g=b.points[a.i];a.children.forEach(function(a){a=b.setTreeValues(a);f.push(a);a.ignore||(e+=a.val)});Q(f,function(a,b){return(a.sortIndex||0)-(b.sortIndex||0)});var l=w(g&&g.options.value,e);g&&(g.value=l);B(a,{children:f,childrenTotal:e,ignore:!(w(g&&g.visible,!0)&&0<l),isLeaf:a.visible&&!e,levelDynamic:a.level-(d?0:c.level),name:w(g&&g.name,""),sortIndex:w(g&&g.sortIndex,-l),val:l});return a};b.prototype.sliceAndDice=function(a,
b){return this.algorithmFill(!0,a,b)};b.prototype.squarified=function(a,b){return this.algorithmLowAspectRatio(!0,a,b)};b.prototype.strip=function(a,b){return this.algorithmLowAspectRatio(!1,a,b)};b.prototype.stripes=function(a,b){return this.algorithmFill(!1,a,b)};b.prototype.translate=function(){var a=this,b=a.options,c=N(a);t.prototype.translate.call(a);var e=a.tree=a.getTree();var f=a.nodeMap[c];""===c||f&&f.children.length||(a.setRootNode("",!1),c=a.rootNode,f=a.nodeMap[c]);a.renderTraverseUpButton(c);
a.mapOptionsToLevel=M({from:f.level+1,levels:b.levels,to:e.height,defaults:{levelIsConstant:a.options.levelIsConstant,colorByPoint:b.colorByPoint}});k.recursive(a.nodeMap[a.rootNode],function(b){var c=!1,d=b.parent;b.visible=!0;if(d||""===d)c=a.nodeMap[d];return c});k.recursive(a.nodeMap[a.rootNode].children,function(a){var b=!1;a.forEach(function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});return b});a.setTreeValues(e);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=
c={x:0,y:0,width:k.AXIS_MAX,height:k.AXIS_MAX};a.nodeMap[""].values=c=z(c,{width:c.width*a.axisRatio,direction:"vertical"===b.layoutStartingDirection?0:1,val:e.val});a.calculateChildrenAreas(e,c);a.colorAxis||b.colorByPoint||a.setColorRecursive(a.tree);b.allowTraversingTree&&(b=f.pointValues,a.xAxis.setExtremes(b.x,b.x+b.width,!1),a.yAxis.setExtremes(b.y,b.y+b.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()};b.defaultOptions=z(G.defaultOptions,{allowTraversingTree:!1,animationLimit:250,
borderRadius:0,showInLegend:!1,marker:void 0,colorByPoint:!1,dataLabels:{defer:!1,enabled:!0,formatter:function(){var a=this&&this.point?this.point:{};return F(a.name)?a.name:""},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},traverseUpButton:{position:{align:"right",
x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,colorKey:"colorValue",opacity:.15,states:{hover:{borderColor:"#999999",brightness:L?0:.1,halo:!1,opacity:.75,shadow:!1}}});return b}(G);B(q.prototype,{buildKDTree:a,colorKey:"colorValue",directTouch:!0,drawLegendSymbol:f.drawRectangle,getExtremesFromAll:!0,getSymbol:a,optionalAxis:"colorAxis",parallelArrays:["x","y","value","colorValue"],pointArrayMap:["value"],pointClass:m,trackerGroups:["group","dataLabelsGroup"],utils:{recursive:k.recursive}});l.registerSeriesType("treemap",
q);"";return q});f(a,"masters/modules/treemap.src.js",[],function(){})});
//# sourceMappingURL=treemap.js.map