const widgets = require("widget");
const tabs = require("tabs");
var pageMod = require("page-mod");


pageMod.PageMod({
  include: "*",
  contentScript: 'document.listdocwrts=[];' + 
  'function docrwtinterceptor(str){document.listdocwrts.push(str);console.log(document.listdocwrts);}' +
  'document.write=docrwtinterceptor;' +
  'document.writeln=docrwtinterceptor;'
});


var widget = widgets.Widget({
  id: "docwrtevil",
  label: "Show evil things",
  contentURL: "http://www.mozilla.org/favicon.ico",  
  onClick: function() {
    tabs.activeTab.attach({
      contentScript:
        'alert(document.listdocwrts)'
    });
  }
});