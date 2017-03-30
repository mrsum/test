// Depends
import styles from './_styles'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, Form, actions } from 'react-redux-form'

const FormPage = class FormPage extends Component {

  render() {

    return(
      <div className={styles.container}>
        <h1>yolo</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie
  }
}

export default connect(mapStateToProps)(FormPage)
