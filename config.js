'use strict';

define(function(require)
{

var prefix = '//cdnjs.cloudflare.com/ajax/libs/';

var config = {

	shim: {
		jquery: { exports: 'jQuery'}
	},

	paths: {
		jquery: prefix + 'jquery/2.1.1/jquery.min',
		d3: 'http://d3js.org/d3.v3.min.js',
		'dagre-d3': 'http://cpettitt.github.io/project/dagre-d3/latest/dagre-d3.min.js',
		ace: 'ace/lib/ace'
	}
};

return config;

});
