import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric

class DesignCanvas extends React.Component {
  state = {
    canvas: null,
  }
  
  componentDidMount() {
    const canvas = new fabric.Canvas(this.c)
    this.setState({ canvas })
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        canvas: this.state.canvas,
      })
    })
  
    return (
      <Fragment>
        <canvas ref={c => (this.c = c)} width={200} height={200} />
        {this.state.canvas && children}
      </Fragment>
    )
  }
}

export default DesignCanvas
