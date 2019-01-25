import React  from 'react'


const checkboxes = [
    {
    name: 'check1',
    key: 'checkBox1',
    label: 'Check Box 1',
},
{
    name: 'check2',
    key: 'checkBox2',
    label: 'Check Box 2'
},
{
    name: 'check3',
    key: 'checkBox3',
    label: 'Check Box 3'
},
{
    name: 'check4',
    key: 'checkBox4',
    label: 'Check Box 4'
},
]



 class CheckBox extends React.Component {
    CheckBox = ({ type = 'checkbox', name, checked = false, onChange }) => (
        <input type={type} name={name} checked={checked} onChange={onChange} />
    )

    state = {
        checkedItems: new Map()
    }

    handleChange = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
            
    }
    handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log('You have selected:', this.state.checkedItems);

    }

  render() {


    return (
      <div>
          <form onSubmit={this.handleFormSubmit}>
          <h3>Select all of Shante's best qualities.</h3>
          <p> Select all options that Apply </p>
             
        {
          checkboxes.map(item => (
            <label key={item.key}>
              {item.name}
              <input type="checkbox" name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange || false}  />
            </label>
          ))
        }
          
          <button className="btn-default" type="submit">Submit</button>       
          </form>
      </div>
    )
    }
 }

 export default CheckBox;