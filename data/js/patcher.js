function relocateSearchBox(doc) {
  var formularioBusqueda = doc.getElementById('coursesearch');
  var divInst3 = doc.getElementById('inst3');
  var parentDiv = divInst3.parentNode;
  var divForm = doc.createElement('div');

  self.port.on('detach', function() {
    'use strict';
  });

  doc.getElementById('shortsearchbox').size = 20;
  divForm.id = 'search-form';
  divForm.appendChild(formularioBusqueda);
  parentDiv.insertBefore(divForm, divInst3);
}

relocateSearchBox(document);
