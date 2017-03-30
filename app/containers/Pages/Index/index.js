// ======================
// Depends
// ======================
import styles from './_styles'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// ======================
// Components
// ======================
import Button from '_app/components/Button'
import SVG from '_app/components/SVG'


// ======================
// Actions
// ======================
import { getAll } from '_app/actions'

const IndexPage = class IndexPage extends Component {

  static propTypes = {
    movies: PropTypes.array
  }

  static defaultProps = {
    movies: []
  }

  componentWillMount() {
    this.props.dispatch(getAll())
  }

  renderNotFound() {
    return(
      <div className={styles.notfound}>
        <h3>nothing to see right now :(</h3>
      </div>
    ) 
  }

  renderUsers(movies) {
    return (
      <ul>
        {movies.map((user, key) => {
          return (
            <li key={key}>{user.firstname}</li>
          )
        })}
      </ul>
    )
  }

  render() {

    const { movies } = this.props

    return (
      <section className={styles.container}>
        <h1>Movies database:</h1>
        <div className={styles.buttonContainer}>
          <Button text='add new one' href='movie/new' />
        </div>
        
        <div className={styles.list}>
          { movies.length === 0 
            ? this.renderNotFound() 
            : this.renderUsers(movies)
          }
        </div>
      </section>
    )
  }
}

/**
 * Mapping states to properties
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
const mapStateToProps = state => ({
  movies: state.movies
})

// Wrap it by redux and return back
export default connect(mapStateToProps)(IndexPage)
