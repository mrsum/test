// Depends
import styles from './_styles'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Form, Control, Errors, actions } from 'react-redux-form'

// Actions
import { create, update, read } from '_app/actions/movie'

const FormPage = class FormPage extends Component {

  state = {
    id: false
  }

  handleSubmit(movie = {}) {
    const { dispatch, history } = this.props
    const { id } = this.state

    id
      ? dispatch(update(id, movie)).then(() => { history.push('/') })
      : dispatch(create(movie)).then(() => { history.push('/') })    
  }


  renderYears() {
    // current year
    const current = new Date().getFullYear()
    let years = []
    for (let i = current; i >= (current - 100); i--) {
      years.push(<option key={i} value={i}>{i}</option>)
    }

    return years
  }

  componentDidMount() {
    const { id } = this.props.match.params
    const { dispatch } = this.props

    id 
      ? dispatch(read(id)).then(data => {
          this.setState({ id })
          dispatch(actions.merge('movie', data.value))
        })
      : dispatch(actions.reset('movie'))
  }

  render() {

    let { movie } = this.props

    return(
      <Form model='movie'
        className={styles.form}
        onSubmit={(movie) => this.handleSubmit(movie)}>

        <div className={styles.header}>
          { movie && movie.title
            ? (<h1>{ movie.title }</h1>)
            : (<h1>Create new</h1>)
          }
        </div>

        <div className={styles.field}>
          <label>Title</label>
          <Control.text
            model='.title'
            placeholder='Title'
            label = '111'
            validators={{ 
              required: val => val && val.length
            }} />

          <Errors
            className={styles.error}
            model='.title'
            show='touched'
            messages={{
              required: 'Field is required'
            }} />
        </div>

        <div className={styles.field}>
          <label>Description</label>
          <Control.text
            model='.description'
            placeholder='Description'
            validators={{
              required: val => val && val.length
            }} />

          <Errors
            className={styles.error}
            model='.description'
            show='touched'
            messages={{
              required: 'Field is required'
            }} />
        </div>

        <div className={styles.field}>
          <label>Genre</label>
          <Control.select
            validators={{
              required: val => val && val.length
            }}
            model=".genre">
            <option></option>

            {['Drama', 'Comedy', 'Action', 'Trash', 'Triller'].map(item => {
              return (<option key={item} value={item}>{item}</option>)
            })}
          
          </Control.select>
        
          <Errors
            className={styles.error}
            model='.genre'
            show='touched'
            messages={{
              required: 'Field is required'
            }} />
        </div>

        <div className={styles.field}>
          <label>Year</label>
          <Control.select
            validators={{
              required: val => val && val.length
            }}
            model=".year">
            <option></option>
            { this.renderYears() }
          </Control.select>
        </div>

        <div className={styles.field}>
          <label>Cover URL</label>
          <Control.text
            model='.cover'
            placeholder='Cover'
            validators={{
              isUrl: val => val && val.match('http://') || val.match('https://')
            }} />

          <Errors
            className={styles.error}
            model='.cover'
            show='touched'
            messages={{
              isUrl: 'Is not valid URL'
            }} />
        </div>

        <Control.reset model='movie' type='reset'>Reset</Control.reset>
        <button type='submit'>Submit</button>

      </Form>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movie
})

export default connect(mapStateToProps)(FormPage)
