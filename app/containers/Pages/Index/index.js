// ======================
// Depends
// ======================
import styles from './_styles'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// ======================
// Actions
// ======================
import { getAll, remove } from '_app/actions/movie'

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


  renderNotFoundMessage() {
    return(
      <div className={styles.notfound}>
        <h3>nothing to see right now :(</h3>
      </div>
    ) 
  }

  removeOne(id) {
    const { dispatch } = this.props

    // remove and fetch
    dispatch(remove(id))
      .then(() => {
        dispatch(getAll())
      })
  } 

  renderMoviesList(movies) {
    
    return (
      <div className={styles.list}>
        {movies.map((movie, key) => {
          return (
            <div key={key} className={styles.item}>
              <div onClick={(e) => this.removeOne.bind(this)(movie.id)} className={styles.remove}>x</div>
              <Link to={`/movie/${movie.id}`}>
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
              </Link>
              <img src={movie.cover} />
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    const { movies } = this.props

    return (
      <section className={styles.container}>
        <section className={styles.header}>
          <h1>Movies database</h1>
          <Link to='/movie/new'>add</Link>
        </section>
        
        { movies.length === 0 
          ? this.renderNotFoundMessage() 
          : this.renderMoviesList(movies)
        }

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
