'use strict';

module.exports = function(app) {
    var jsonku = require('./controller.js');

    app.route('/')
    .get(jsonku.index);

    app.route('/tampil')
    .get(jsonku.tampilSemuaMahasiswa);
}

