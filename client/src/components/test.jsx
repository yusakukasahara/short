import React from 'react'
import '../css/test.css'
import Axios from 'axios'

export default class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      authors: []
    }
  }
  componentDidMount() {
    Axios.get('/api/fakeData')
    .then(res => this.setState({authors: res.data}, () => console.log('authors retrieved: ', res)))
  }
  
  render() {
    return (
      <div>
        <p>I looked into the windows of her SOUL ! and I said: Biiiiiiiiitch </p>
        <div>
          <p>Project By: </p>
          <ul>
            {this.state.authors.map(author => 
              <li key={author.id}> {author.first} {author.last} - id: {author.id}  </li>
            )}
          </ul>  
        </div>
      </div>
    )
  }
}