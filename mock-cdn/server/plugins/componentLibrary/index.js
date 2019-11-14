const _ = require('lodash'),
	path = require('path'),
    pack = require(__dirname, '../../../package'),
    { lstatSync, readdirSync } = require('fs'),
    Handlebars = require('handlebars'),
    jsdoc2md = require('jsdoc-to-markdown'),
    showdown  = require('showdown'),
    converter = new showdown.Converter(),
    requireJSON = require('require-strip-json-comments');

converter.setOption('tables', true);

exports.plugin = {
	name: 'component-library',
	version: pack.version,
	register: async (server, options) => {

        server.views({
            engines: {
                html: Handlebars
            },
            relativeTo: __dirname,
            path: path.join(__dirname, './')
        });

        server.route({
            method: 'GET',
            path: '/',
            config: {
                auth: null
            },
            handler: (request, h) => {
                return h.view('templates/index', {
                    test: 'test'
                });
            }
        });

        server.route({
            method: 'GET',
            path: `/js/{param*}`,
            config: {
                auth: null
            },
            handler: {
                directory: {
                    path: `${path.join(__dirname, '../../../../output')}`,
                    redirectToSlash: false,
                    index: false,
                    listing: false
                }
            }
        });
	} // end of server
} // end of plugin wrapper
