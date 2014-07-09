'use strict';

define(function(require)
{

var prefix = '//cdnjs.cloudflare.com/ajax/libs/';

var config = {

	shim: {
		jquery: { exports: 'jQuery'},
		'dagre-d3': { exports: 'dagreD3' },
		'dot-lib': { exports: 'graphlibDot' }
	},

	paths: {
		jquery: prefix + 'jquery/2.1.1/jquery.min',
		'dot-lib': 'http://cpettitt.github.io/project/graphlib-dot/latest/graphlib-dot.min',
		'dagre-d3': 'http://cpettitt.github.io/project/dagre-d3/latest/dagre-d3',
		ace: 'ace/lib/ace'
	}
};

return config;

});
