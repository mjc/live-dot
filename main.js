'use strict';

define(function(require)
{


var $ = require('jquery');
var ace = require('ace/ace');

function LiveDOT()
{

}


LiveDOT.prototype.init = function(elt)
{
	var editor = ace.edit(elt);
	editor.setTheme('ace/theme/monokai');
	editor.getSession().setMode('ace/mode/dot');
	return this;
};


return LiveDOT;


});
