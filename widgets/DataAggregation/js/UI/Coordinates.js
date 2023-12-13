// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/DataAggregation/js/UI/templates/Coordinates.html":'\x3cdiv class\x3d"pad-left-5 no-select"\x3e\r\n  \x3ctable class\x3d"page-table" cellpading\x3d"0" data-dojo-attach-point\x3d"coordinateTable"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd colspan\x3d"2" class\x3d"panel-title-td"\x3e\r\n          \x3cdiv class\x3d"panel-title-text" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.mapping.locationMapping} ${nls.coordinates.coordinatesPageHint}"\x3e${nls.mapping.locationMapping}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"bottom-border-bold task-instruction-row"\x3e\r\n        \x3ctd colspan\x3d"2" class\x3d"panel-title-hint-td"\x3e\r\n          \x3cdiv class\x3d"instruction"\x3e${nls.coordinates.coordinatesPageHint}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./templates/Coordinates.html dojo/_base/array jimu/dijit/formSelect".split(" "),function(p,q,k,h,r,t,u,v,w,l,m){return p([r,t,u,v],{baseClass:"cf-coordinates",declaredClass:"CriticalFacilities.Coordinates",templateString:w,_started:null,label:"Coordinates",parent:null,nls:null,map:null,appConfig:null,config:null,fields:[],xField:null,
yField:null,theme:"",styleColor:"",firstField:"",constructor:function(a){q.mixin(this,a)},postCreate:function(){this.inherited(arguments);this._initUI()},_initUI:function(){"X"===this.firstField?(this._initXField(),this._initYField()):(this._initYField(),this._initXField());this._setFields(this.fields,this.xField,this.yField)},_initXField:function(){var a=this._initSelectTd(this.xField.label+":");this.lblX=a.label;this.selectX=new m({name:"selectX",style:"min-width: 200px","aria-label":this.xField.label});
this.selectX.placeAt(a.select);this.selectX.startup()},_initYField:function(){var a=this._initSelectTd(this.yField.label+":");this.lblY=a.label;this.selectY=new m({name:"selectY",style:"min-width: 200px","aria-label":this.yField.label});this.selectY.placeAt(a.select);this.selectY.startup();this.lastFocusNode=this.selectY.domNode},_initSelectTd:function(a){var c=h.create("tr",{className:"bottom-border"},this.coordinateTable),b=h.create("td",{className:"field-control-td pad-left-10"},c);b=h.create("div",
{className:"main-text float-left"},b);b.innerHTML=a;return{select:h.create("td",{className:"float-right field-control-td"},c),label:b}},startup:function(){this._started=!0;this._updateAltIndexes()},onShown:function(){this.pageContainer.nextDisabled=!1;this.prevResult=this._getResults()},validate:function(a,c){var b=new k;"next-view"===a?b.resolve(this._nextView(c)):"back-view"===a?b.resolve(this._backView(c)):this._homeView(c).then(function(d){b.resolve(d)});return b},_updateAltIndexes:function(){this.pageContainer&&
!this._startPageView&&(this._startPageView=this.pageContainer.getViewByTitle("StartPage"),this._locationTypeView=this.pageContainer.getViewByTitle("LocationType"),this._startPageView&&this._locationTypeView?(this.altNextIndex=this._startPageView.index,this.altBackIndex=this._locationTypeView.index):this._startPageView&&(this.altBackIndex=this.altNextIndex=this._startPageView.index))},_nextView:function(a){a.currentView.label===this.label&&(a=0<this._getResults().fields.length,this.parent._locationMappingComplete=
a,this.emit("location-mapping-update",a));return!0},_backView:function(a){a.currentView.label===this.label&&(a=!1,this._setPreviousResult(this.prevResult?this.prevResult.fields:[]),this.prevResult&&(a=0<this.prevResult.fields.length),this.parent._locationMappingComplete=a,this.emit("location-mapping-update",a));return!0},_homeView:function(a){var c=new k;this.pageContainer.getViewByTitle("Home").verifyClearSettings(a).then(function(b){c.resolve(b)});return c},_setFields:function(a,c,b){var d=this._getDefaultFieldName(a,
c),f=this._getDefaultFieldName(a,b),g=[{label:this.nls.warningsAndErrors.noValue,value:this.nls.warningsAndErrors.noValue}],n=[{label:this.nls.warningsAndErrors.noValue,value:this.nls.warningsAndErrors.noValue}];l.forEach(a,function(e){g.push({label:e.label,value:e.value,selected:d===e.value});n.push({label:e.label,value:e.value,selected:f===e.value})});this.selectX.addOption(g);this.selectY.addOption(n)},_getDefaultFieldName:function(a,c){c=c.isRecognizedValues;for(var b=0;b<c.length;b++)for(var d=
c[b],f=0;f<a.length;f++){var g=a[f];if(g.value.toString().toUpperCase()===d.toString().toUpperCase())return g.value}},setStyleColor:function(a){this.styleColor=a},updateImageNodes:function(){},_getResults:function(){return{type:"xy",fields:this.selectX.value!==this.nls.warningsAndErrors.noValue&&this.selectY.value!==this.nls.warningsAndErrors.noValue?[{targetField:"X",sourceField:this.selectX.value},{targetField:"Y",sourceField:this.selectY.value}]:[]}},_setPreviousResult:function(a){if(0===a.length){a=
this._getDefaultFieldName(this.fields,this.xField);var c=this._getDefaultFieldName(this.fields,this.yField);a=[{targetField:"X",sourceField:a},{targetField:"Y",sourceField:c}]}l.forEach(a,function(b){var d=b.sourceField;void 0===d&&(d=this.nls.warningsAndErrors.noValue);b=b.targetField;"X"===b?this.selectX.set("value",d):"Y"===b&&this.selectY.set("value",d)},this)}})});