'use strict';

import React from 'react'
import { ReactDOM } from 'react-dom'
import { connect } from 'react-redux'
//component
//style
import styles from '../../css/components/form.css'

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
			<div className={styles.form}>
				<dl>
					<dt>font−size</dt>
					<dd>
						<input
							type="number"
							name="fontSize"
							defaultValue={fontSize}
							onChange={(e) => changeFontSizeValue(e.target.value)}
						/>
						<span>px</span>
					</dd>
				</dl>
				<dl>
					<dt>line-height</dt>
					<dd>
						<input
							type="number"
							name="lineHeight"
							defaultValue={lineHeight}
							onChange={(e) => changeLineHeightValue(e.target.value)}
						/>
						<span>px</span>
					</dd>
				</dl>
				<dl>
					<dt>text</dt>
					<dd>
						<textarea defaultValue='aaaaaaa' />
					</dd>
				</dl>
			</div>
		)
	}
}

