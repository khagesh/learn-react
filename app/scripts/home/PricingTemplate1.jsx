'use strict'

var React = require('react')

var PricingTemplate1 = React.createClass({
    displayName: 'PricingTemplate1',
    render: function(){
    	var templateClass = "template-1";
        return (
        	<div className="template-1">
	            <div className="template-1-header">Text</div>
	        	<div className="template-1-content">	
	        		<ul className="template-1-list">
	        			<li className="template-1-list-item-odd"> 10 GB User Space </li>
	        			<li className="template-1-list-item-even"> ParaVirtualisation </li>
	        			<li className="template-1-list-item-odd"> VMWare Space </li>
	        			<li className="template-1-list-item-even"> nGinx Loaders </li>
	        			<li className="template-1-list-item-odd"> Limited Online Support </li>
	        		</ul>
	        	</div>
	        	<div className="template-1-footer"> Bottom content </div>
        	</div>
        )
    }
});

module.exports = PricingTemplate1;