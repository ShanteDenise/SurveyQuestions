import React  from 'react'





class RadioButton extends React.Component {
    state = {
        selectedOption : ""
    }

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
            
        })
       
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('You have selected:', this.state.selectedOption);
    }


  render() {
    return (
      <div>
          <form onSubmit={this.handleFormSubmit}>
              <div className="radio">
              <h3>How much wood would a woodchuck chuck if a woodchuck could chuck wood? </h3>
              <label>
                  <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'}
                                                      onChange={this.handleOptionChange}/>
                  Option 1
              </label>         
              </div>
              <div className="radio">
              <label>
                  <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'}
                                                      onChange={this.handleOptionChange}/>
                  Option 2
              </label>
              </div>
              <div className="radio">
              <label>
                  <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'}
                                                      onChange={this.handleOptionChange}/>
                  Option 3
              </label>
              </div>
              <button className="btn-default" type="submit">Submit</button>       
          </form>       
      </div>
      
    )
  }
}

export default RadioButton;