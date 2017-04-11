'use strict';

import React from 'react'
import { ReactDOM } from 'react-dom'
import { connect } from 'react-redux'
//component
//style
import styles from '../../css/components/font_layer.css'

export default class Form extends React.Component {

	render() {

		const {
			lineHeight,
			fontSize,
			changeFontSizeValue,
			changeLineHeightValue
		} = this.props

		console.log(styles);

		return (
			<div>
				<dl>
					<dt>font−size</dt>
					<dd>
						<span>{fontSize}px</span>
						<input
							type="range"
							name="fontSize"
							min="10"
							max="50"
							value={fontSize}
							onChange={(e) => changeFontSizeValue(e.target.value)}
						/>
					</dd>
				</dl>
				<dl>
					<dt>line-height</dt>
					<dd>
						<span>{lineHeight}px</span>
						<input
							type="range"
							name="lineHeight"
							min="1"
							max="72"
							value={lineHeight}
							onChange={(e) => changeLineHeightValue(e.target.value)}
						/>
					</dd>
				</dl>
				<dl>
					<dt>text</dt>
					<dd>
						<textarea value='aaaaaaa' />
					</dd>
				</dl>
			</div>
		)
	}
}

