'use strict';

import React from 'react'
import { ReactDOM } from 'react-dom'
import { connect } from 'react-redux'
//component
import FontLayer from './FontLayer'
import Form from './Form'
//action
import { changeFirst, changeFontSize, changeLineHeight, changeTextArea } from '../action/action'
//style
import styles from '../../css/components/layout.css'

export class Home extends React.Component {

	render() {
		const {
			lineHeight,
			fontSize,
			changeFontSizeValue,
			changeLineHeightValue,
			changeTextArea,
			text
		} = this.props

		// console.log(this.props)

		return (
			<div>
				<FontLayer
				{...{
					lineHeight,
					fontSize,
					text
				}}
				></FontLayer>
				<Form
				{...{
					lineHeight,
					fontSize,
					text,
					changeFontSizeValue,
					changeLineHeightValue,
					changeTextArea
				}}></Form>
			</div>
		)
	}
}

function mapStateToProps(state) {
    return state.home
}

function mapDispatchToProps(dispatch) {
	return {
		changeValue: (event) => { dispatch(changeFirst(event)) },
		changeFontSizeValue: (event, lineHeight) => { dispatch(changeFontSize(event,lineHeight)) },
		changeLineHeightValue: (event) => { dispatch(changeLineHeight(event)) },
		changeTextArea: (event) => { dispatch(changeTextArea(event)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
