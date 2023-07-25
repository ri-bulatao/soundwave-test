import React, { useEffect } from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux/store'
import { setFrames } from '../../redux/reducers/listing'
import { setFrame } from '../../redux/reducers/selected'

const FrameOptions: React.FC = () => {
  const { listing } = useSelector((state: RootState) => state.listing)
  const { selected } = useSelector((state: RootState) => state.selected)
  const dispatch = useDispatch()

  const fetchFrames = (): void => {
    fetch('/src/data/frames.json')
      .then(async (res) => await res.json())
      .then(async (data) => {
        dispatch(setFrames(data))
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchFrames()
  }, [])

  return (
    <div className="row row-cols-1 row-cols-md-1 g-2 mb-4 p-2">
        {listing.frames.map((option: any) => (
    <div className="col">
      <div className="card h-100">
          <label className={`frame-selection frame rounded ${selected.frame.value === option.value ? 'active' : ''}`} key={option.value}>
            <span className='custom-select'></span>
            <input
                type="radio"
                value={option.value}
                checked={selected.frame.value === option.value}
                onChange={() => { dispatch(setFrame(option)) }}
            />
            <div className="row" style={{marginLeft: "-px"}}>
              <div className="col-auto">
                <img src={option.image} className="img-fluid rounded-start" alt={option.image}/>
              </div>
            <div className="col-auto">
              {option.title}
            </div>
            </div>
          </label>
      </div>
    </div>
        ))}
        
  </div>
  )
}

export default FrameOptions
