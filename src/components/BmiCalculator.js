import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import FormInput from './FormInput'

const BmiCalculator = (props) => {
  const { updateBmi } = props
  const [heightUnit, setHeightUnit] = useState('')
  const [weightUnit, setWeightUnit] = useState('')
  const [unit, setUnit] = useState('')
  const [count, setCount] = useState({
    heightCount: '0',
    inchesCount: '0',
    weightCount: '0',
  })

  const { heightCount, inchesCount, weightCount } = count

  useEffect(() => {
    switch (unit) {
      case '':
        setUnit('Metric')
        break
      case 'Metric':
        setHeightUnit('cm')
        setWeightUnit('kg')
        break
      case 'Imperial':
        setHeightUnit('ft')
        setWeightUnit('lbs')
        break
      default:
        break
    }
  }, [unit])

  const metricBMI = (height, weight) => {
    if (height > 0 && weight > 0) {
      const heightToMeter = height / 100
      const bmi = weight / Math.pow(heightToMeter, 2)
      updateBmi(Math.round(bmi))
    }
  }
  const imperialBM = (height, weight, inches) => {
    if (height > 0 && weight > 0 && inches > 0) {
      // 12 inches make a foot
      // convert feet to inches and add it to inches value
      const heightToInches = height * 12 + parseInt(inches)
      const bmi = 703 * (weight / (heightToInches * heightToInches))
      updateBmi(Math.round(bmi))
    }
  }

  useEffect(() => {
    metricBMI(heightCount, weightCount)
    imperialBM(heightCount, weightCount, inchesCount)
    // eslint-disable-next-line
  }, [heightCount, weightCount, inchesCount])

  const onChangeInput = (e) => {
    const { name, value } = e.target
    setCount((prevState) => ({ ...prevState, [name]: value }))
  }

  const onSelectTag = (e) => {
    const value = e.target.value
    setUnit(value)
  }

  const onReset = (e) => {
    e.preventDefault()
    setUnit('Metric')
    updateBmi(0)
    setCount({
      heightCount: '0',
      inchesCount: '0',
      weightCount: '0',
    })
  }

  return (
    <>
      <div className="bmi-inputs">
        <div className="input-fields">
          <div>
            <span className="label-unit">Unit</span>
            <div className="unit">
              <select
                className="form-control form-control-sm"
                name="unit"
                value={unit}
                onChange={onSelectTag}
              >
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>
          <FormInput
            type="text"
            name="heightCount"
            title={`Height (${heightUnit})`}
            value={heightCount}
            onChange={onChangeInput}
          />
          {unit === 'Imperial' && (
            <FormInput
              type="text"
              name="inchesCount"
              title={`Height (in)`}
              value={inchesCount}
              onChange={onChangeInput}
            />
          )}
          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (${weightUnit})`}
            value={weightCount}
            onChange={onChangeInput}
          />
        </div>
        <button className="button" type="submit" onClick={onReset}>
          Reset
        </button>
      </div>
    </>
  )
}

BmiCalculator.propTypes = {
  updateBmi: PropTypes.func.isRequired,
}

export default BmiCalculator
