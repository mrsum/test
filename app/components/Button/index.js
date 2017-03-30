// ======================
// Depends
// ======================
import styles from './_styles'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

const Button = class Button extends Component {

  static defaultProps = {
    text: 'Default text',
    href: false,
    className: '',
    onClick: () => {}
  }

  static propTypes = {
    text: PropTypes.string,
    href: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  render() {
    const { text, isHref, href, className, onClick } = this.props
    const Button = href
      ? (<Link to={href}>{text}</Link>)
      : (<span onClick={onClick}>{text}</span>)

    return (
      <div className={styles.button}>{Button}</div>
    )
  }
}

export default Button
