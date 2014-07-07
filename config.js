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
		ace: '//cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/'
	}
};

return config;

});
