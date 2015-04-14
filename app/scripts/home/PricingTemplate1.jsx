'use strict'

var React = require('react')

var PricingTemplate1 = React.createClass({
    displayName: 'PricingTemplate1',
    render: function(){
    	var templateClass = "template-1";
        return (
        	<div className="template-1">
	            <div className="vertical-align-middle template-1-header"> AWS </div>
	        	<div className="template-1-content">	
	        		<ul className="template-1-list">
	        			<li className="vertical-align-middle template-1-list-item-odd"> 10 GB User Space </li>
	        			<li className="vertical-align-middle template-1-list-item-even"> ParaVirtualisation </li>
	        			<li className="vertical-align-middle template-1-list-item-odd"> VMWare Space </li>
	        			<li className="vertical-align-middle template-1-list-item-even"> nGinx Loaders </li>
	        			<li className="vertical-align-middle template-1-list-item-odd"> Limited Online Support </li>
	        		</ul>
	        	</div>
	        	<div className="vertical-align-middle template-1-footer"> 
	        		Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
	        		<div className="content"> Team </div>
        		</div>
        	</div>
        )
    }
});

module.exports = PricingTemplate1;