'use strict';

import React from 'react'
import { ReactDOM } from 'react-dom'
import { connect } from 'react-redux'
//component

//action
import { changeFirst } from '../action/action'

export class Home extends React.Component {

	render() {
		const {
		} = this.props

		console.log(this.props)

		return (
			<div>
				<p>aaaaaa</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
    return state.home
}

function mapDispatchToProps(dispatch) {
	return {
		changeValue: (event) => { dispatch(changeFirst(event)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
