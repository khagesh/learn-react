'use strict'

import React from 'react';

const PricingTemplate = React.createClass({
    render(){
    	var templateClass = "template";
        return (
        	<div className={this.props.templateType}>
	            <div className="vertical-align-middle template-header"> AWS </div>
	        	<div className="template-content">	
	        		<ul className="template-list">
	        			<li className="vertical-align-middle template-list-item-odd"> 10 GB User Space </li>
	        			<li className="vertical-align-middle template-list-item-even"> ParaVirtualisation </li>
	        			<li className="vertical-align-middle template-list-item-odd"> VMWare Space </li>
	        			<li className="vertical-align-middle template-list-item-even"> nGinx Loaders </li>
	        			<li className="vertical-align-middle template-list-item-odd"> Limited Online Support </li>
	        		</ul>
	        	</div>
	        	<div className="vertical-align-middle template-footer"> 
	        		Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
	        		<div className="content"> Team </div>
        		</div>
        	</div>
        )
    }
});

export { PricingTemplate }