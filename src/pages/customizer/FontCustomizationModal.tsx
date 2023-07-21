import React, { useState } from 'react'
import './FontCustomization.scss'

const FontCustomizationModal = ({ fontFamily, fontSize, isTitle, onClose, onFontFamilyChange, onFontSizeChange }) => {
  const [fontFamilyState, setFontFamilyState] = useState(fontFamily)
  const [fontSizeState, setFontSizeState] = useState(fontSize)

  // pang handle ng change ng  font family
  const handleFontFamilyChange = (event) => {
    const newFontFamily = event.target.value
    setFontFamilyState(newFontFamily)
    onFontFamilyChange(newFontFamily, isTitle)
  }

  // pang handle ng change ng font size
  const handleFontSizeChange = (event) => {
    const newFontSize = Number(event.target.value)
    setFontSizeState(newFontSize)
    onFontSizeChange(newFontSize, isTitle)
  }

  return (
    <div className="custom-modal">
      {isTitle ? <p>Customize Title</p> : <p>Customize Subtitle</p>}
      <div>
        <label htmlFor="fontFamily">{isTitle ? 'Title' : 'Subtitle'} Font Family:</label>
        <select id="fontFamily" value={fontFamilyState} onChange={handleFontFamilyChange}>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>
      <div className='custom-modal-subtitle'>
        <label htmlFor="fontSize">{isTitle ? 'Title' : 'Subtitle'} Font Size:</label>
        <input
          type="number"
          id="fontSize"
          value={fontSizeState}
          onChange={handleFontSizeChange}
          min={10}
          max={50}
        />
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default FontCustomizationModal
