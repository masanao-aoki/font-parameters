'use strict';

import React from 'react'
import { ReactDOM } from 'react-dom'
import { connect } from 'react-redux'
//component
import FontLayer from './FontLayer'
import Form from './Form'
//action
import { changeFirst, changeFontSize, changeLineHeight } from '../action/action'
//style
import styles from '../../css/components/layout.css'

export class Home extends React.Component {

	render() {
		const {
			lineHeight,
			fontSize,
			changeFontSizeValue,
			changeLineHeightValue,
			text
		} = this.props

		console.log(this.props)

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
					changeFontSizeValue,
					changeLineHeightValue
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
		changeFontSizeValue: (event) => { dispatch(changeFontSize(event)) },
		changeLineHeightValue: (event) => { dispatch(changeLineHeight(event)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
