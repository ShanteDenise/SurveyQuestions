import React from 'react'

 class EssayQuestion extends React.Component {
     state = {
         essayQuestion: ""
     }
     handleChange = (e) => {
         const value = e.target.value
         this.setState({
             essayQuestion: value
         })
     }
     handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('You have selected:', this.state.essayQuestion);
    }

  render() {
    return (
      <div>
          <h3>Additional Comments</h3>
          <form onSubmit={this.handleFormSubmit}>
              <textarea 
                    onChange={this.handleChange} rows="6" col="100" type="textarea" name="essay-question" 
                    value={this.state.essayQuestion}></textarea>
              <button className="btn-default" type="submit">Submit</button>       
          </form>      
      </div>
    )
  }
}

export default EssayQuestion;