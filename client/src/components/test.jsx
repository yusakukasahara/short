import React from 'react'

class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      names: []
    }
  }
  componentDidMount() {
    fetch('/api/fakeData')
    .then(res => res.json())
    .then(names => this.setState({names}, () =>console.log('fakeData route test', this.state.names)))
  }
  render() {
    return (
      <div>
        <p>I looked into the windows of her SOUL ! and I said: Biiiiiiiiitch </p>
        <div>
          <p>Project By:</p>
        </div>
      </div>
    )
  }
}

export default Test