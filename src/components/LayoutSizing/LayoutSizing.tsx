import React, { useEffect } from 'react'
import './LayoutSizing.scss'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux/store'
import { setSize } from '../../redux/reducers/selected'
import { setSizes } from '../../redux/reducers/listing'

const LayoutSizing: React.FC = () => {
  const { sizes } = useSelector((state: RootState) => state.listing.listing)
  const { size } = useSelector((state: RootState) => state.selected.selected)
  const dispatch = useDispatch()

  const fetchSizes = (): void => {
    fetch('/src/data/sizes.json')
      .then(async (res) => await res.json())
      .then(async (data) => {
        dispatch(setSizes(data))
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchSizes()
  }, [])

  return (
    <div className="row">
          {sizes.map((option: any) => (
      <div className="column">
          <label className={`card frame-selection ${size.title === option.title ? 'active' : ''}`} key={option.title}>
            <div className="col justify-content-end d-flex">
              <span className='custom-select'></span>
              <input
                type="radio"
                className='radioBtn'
                value={option.title}
                checked={size.title === option.title}
                onChange={() => { dispatch(setSize(option)) }}
            />
            </div>
          
            <p>{option.title}</p>
            <span>{option.size_inc}</span>
            <span>{option.size_cm}</span>
          </label>
      </div>
        ))}
    </div>
  )
}

export default LayoutSizing
