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
			text,
			changeFontSizeValue,
			changeLineHeightValue,
			changeTextArea
		} = this.props

		return (
			<div className={styles.form}>
				<dl className={styles.formControl}>
					<dt className={styles.formControlTitle}>font−size</dt>
					<dd className={styles.formControlBody}>
						<input
							className={styles.formControlInput}
							type="number"
							name="fontSize"
							defaultValue={fontSize}
							onChange={(e) => changeFontSizeValue(e.target.value)}
						/>
						<span
							className={styles.formControlUnit}
						>px</span>
					</dd>
				</dl>
				<dl className={styles.formControl}>
					<dt className={styles.formControlTitle}>line-height</dt>
					<dd className={styles.formControlBody}>
						<input
							className={styles.formControlInput}
							type="number"
							name="lineHeight"
							defaultValue={lineHeight}
							onChange={(e) => changeLineHeightValue(e.target.value)}
						/>
						<span
							className={styles.formControlUnit}
						>px</span>
					</dd>
				</dl>
				<dl className={styles.formControl}>
					<dt className={styles.formControlTitle}>text</dt>
					<dd className={
									`${styles.formControlBody} ${styles.formControlBodyNotFlex}`
								}>
						<textarea
							className={
									`${styles.formControlInput} ${styles.formControlTextarea}`
								}
							name="textArea"
							defaultValue={text}
							onChange={(e) => changeTextArea(e.target.value)}
						/>
						<span className={styles.formControlAttention}>改行を行う場合は、テキスト入力枠内にて改行を行って下さい。</span>
					</dd>
				</dl>
			</div>
		)
	}
}

