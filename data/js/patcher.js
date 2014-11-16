var formularioBusqueda = document.getElementById('coursesearch');
var divInst3 = document.getElementById('inst3');
var parentDiv = divInst3.parentNode;
var divForm = document.createElement('div');

self.port.on('detach', function() {
  'use strict';
});

document.getElementById('shortsearchbox').size = 20;
divForm.id = 'search-form';
divForm.appendChild(formularioBusqueda);
parentDiv.insertBefore(divForm, divInst3);
