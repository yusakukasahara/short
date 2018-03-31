import React from 'react'


export default class Shorten extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('url submitted: ' + this.state.value)
    event.preventDefault();
  }
  render() {
    return (
      <div> 
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type='text' value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type='submit' value="Create" />
        </form>
      </div>
    )
  }
}