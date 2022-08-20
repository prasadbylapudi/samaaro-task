import { useState } from 'react'
import './Dropdown.css'
function Dropdown(props) {
  const [value, setValue] = useState('A')
  const onChange = (event) => {
    event.preventDefault()
    setValue(event.target.value)
    // console.log(props.idx)
    // console.log(Object.values(props.arr),"values")
    props.handleChange(event.target.value, props.idx)
  }
  return (
    <div className="container">
      <div className="dropdown">
        <label>
          Select a value:
          <div className="select">
            <select value={value} onChange={onChange}>
              <option
                value="0"
                disabled={Object.values(props.arr).includes('0')}
              >
                A
              </option>
              <option
                value="1"
                disabled={Object.values(props.arr).includes('1')}
              >
                B
              </option>
              <option
                value="2"
                disabled={Object.values(props.arr).includes('2')}
              >
                C
              </option>
              <option
                value="3"
                disabled={Object.values(props.arr).includes('3')}
              >
                D
              </option>
              <option
                value="4"
                disabled={Object.values(props.arr).includes('4')}
              >
                E
              </option>
            </select>
          </div>
        </label>
      </div>
    </div>
  )
}

export default Dropdown
