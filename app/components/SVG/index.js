
import styles from './_styles'
import React, { Component, PropTypes } from 'react'

export default class SVG extends Component {

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    id: 'icon',
    className: ''
  }

  render() {
    const { id, className } = this.props
    return (
      <svg className={[styles.svg, className].join(' ')}>
        <use xlinkHref={`#icon-${id}`} />
      </svg>
    )
  }
}
