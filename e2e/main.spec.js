'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('Botao de Novo Carro', function() {
    expect(page.btn.getText()).toBe('Novo Carro');
  });
});
