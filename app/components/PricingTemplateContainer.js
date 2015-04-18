'use strict'

import React from 'react';
import { PricingTemplate } from './PricingTemplate';

const PricingTemplateContainer = React.createClass({
	render(){
		var elementCount = 4,
			templates = [];
		for(var index=0; index < elementCount ; index++){
			templates.push(<PricingTemplate templateType="template"/>);
		}

		return <div className="template-container">{templates}</div>
	}
});

export { PricingTemplateContainer }