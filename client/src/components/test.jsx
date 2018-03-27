import React from 'react'
import '../css/test.css'

class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      authors: []
    }
  }
  componentDidMount() {
    fetch('/api/fakeData')
    .then(res => res.json())
    .then(authors => this.setState({authors}, () => console.log('authors fetched', authors)))
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

export default Test