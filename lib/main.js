var buttons = require('sdk/ui/button/action');
var pageMod = require('sdk/page-mod');
var self = require('sdk/self');
var tabs = require('sdk/tabs');

var button = buttons.ActionButton({
  id: 'pimp-my-campus-virtual-button',
  label: 'Clic para abrir el Campus Virtual en una nueva pestaña',
  icon: {
    '16': './img/icon-16.png',
    '32': './img/icon-32.png',
    '64': './img/icon-64.png'
  },
  onClick: handleClick
});

function handleClick(state) {
  'use strict';

  tabs.open('http://frre.cvg.utn.edu.ar');
}

pageMod.PageMod({
  include: ['http://frre.cvg.utn.edu.ar*',
            'https://frre.cvg.utn.edu.ar*',
           ],
  contentScriptFile: self.data.url('js/patcher.js'),
  contentStyleFile: self.data.url('css/patcher.css'),
  onAttach: function onAttach(worker) {
    'use strict';
  }
});
