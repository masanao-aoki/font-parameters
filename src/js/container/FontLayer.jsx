'use strict';

import React from 'react'
import { ReactDOM } from 'react-dom'
import { connect } from 'react-redux'
//component
//style
import styles from '../../css/components/font_layer.css'

export default class FontLayer extends React.Component {

	render() {

		const {
			lineHeight,
			fontSize,
			text
		} = this.props

		const textStyle = {
			fontSize: `${fontSize}px`,
			lineHeight: lineHeight / fontSize
		}

		const lineHeightStyleValue = (lineHeight - fontSize) / 2;
		const lineHeightStyle = {
			height: `${lineHeightStyleValue}px`
		}

		const textArrayLength = text.length;

		return (
			<div className={styles.layout}>
				<div className={styles.layoutBox}>
				<div className={styles.layoutInner}>
					{text.map((text,num) => {
						return <p
							style={textStyle}
							className={styles.layoutText}
							key={num}
						>
							<span
								style={lineHeightStyle}
								className={
									`${styles.layoutTopLineHeight} ${styles.layoutLineHeight}`
								}
							>
								<span
									className={styles.layoutLineHeightVal}
								>{lineHeightStyleValue}px
								</span>
							</span>

							{text}
							<span
								style={lineHeightStyle}
								className={
									`${styles.layoutBottomLineHeight} ${styles.layoutLineHeight}`
								}
							><span className={styles.layoutLineHeightVal}>{lineHeightStyleValue}px</span></span>
						</p>
					})}
				</div>
				</div>
			</div>
		)
	}
}

