var buttons = require('sdk/ui/button/action');
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

var button = buttons.ActionButton({
  id: "pimp-my-campus-virtual-button",
  label: "Pimp my Campus Virtual!",
  icon: {
    "16": "./img/icon-16.png",
    "32": "./img/icon-32.png",
    "64": "./img/icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
}

pageMod.PageMod({
  include: ["http://frre.cvg.utn.edu.ar*",
            "https://frre.cvg.utn.edu.ar*",
           ],
  contentScriptFile: self.data.url("js/patcher.js"),
  contentStyleFile: self.data.url("css/patcher.css"),
  onAttach: function onAttach(worker) {
    console.log(worker.tab.title);
  }
});
