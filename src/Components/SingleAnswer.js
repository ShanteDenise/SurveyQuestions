import React from 'react'

 class SingleAnswer extends React.Component {
     state = {
         singleAnswer: ""
     }
     handleChange = (e) => {
       const value = e.target.value
       this.setState({
           singleAnswer: value
       })
     }
     handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('You have selected:', this.state.singleAnswer);
    }
 
  render() {
    return (
        
      <div>
          <h3> Tell me how Awesome Shante is? </h3>
          <form onSubmit={this.handleFormSubmit}>
              <input onChange={this.handleChange} type="text" name="single-answer" value={this.state.singleAnswer}></input>
              <button className="btn-default" type="submit">Submit</button>           
          </form>
        
      </div>
    )
  }
}

export default SingleAnswer;