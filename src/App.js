import Dropdown from './components/Dropdown'
import { useState, useEffect } from 'react'
function App() {
  const [arr, setArr] = useState([false, false, false, false, false])
  const [arrValues, setArrValues] = useState(['A', 'B', 'C', 'D', 'E'])
  const [finalSubmit, setFinalSubmit] = useState(false)
  const [selectedIndexs, setSelectedIndexs] = useState({ 0: '', 1: '', 2: '' })
  const handleChange = (id, idx) => {
    setSelectedIndexs((prev) => {
      return { ...prev, [idx]: id }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(selectedIndexs).includes(''))
      alert('need to select all the options')
    setFinalSubmit(!Object.values(selectedIndexs).includes(''))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Dropdown
          arr={selectedIndexs}
          handleChange={handleChange}
          key={0}
          idx={0}
        />
        <Dropdown
          arr={selectedIndexs}
          handleChange={handleChange}
          key={1}
          idx={1}
        />
        <Dropdown
          arr={selectedIndexs}
          handleChange={handleChange}
          key={2}
          idx={2}
        />
        <button type="submit"> Submit </button>
      </form>
      <div>
        {finalSubmit
          ? Object.values(selectedIndexs).map((val, idx) => {
              return <div key={idx}>{arrValues[val]}</div>
            })
          : null}
      </div>
    </div>
  )
}

export default App
