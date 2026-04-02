import { useState, useEffect } from 'react'
import FormInput from './FormInput.tsx'

interface BmiCalculatorProps {
  updateBmi: (value: number) => void;
}

type UnitSystem = 'Metric' | 'Imperial';

const BmiCalculator = ({ updateBmi }: BmiCalculatorProps) => {
  const [heightUnit, setHeightUnit] = useState('')
  const [weightUnit, setWeightUnit] = useState('')
  const [unit, setUnit] = useState<UnitSystem | null>(null)
  const [count, setCount] = useState({
    heightCount: '0',
    inchesCount: '0',
    weightCount: '0',
  })

  const { heightCount, inchesCount, weightCount } = count

  useEffect(() => {
    switch (unit) {
      case null:
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

  const metricBMI = (height: number, weight: number) => {
    if (height > 0 && weight > 0) {
      const heightToMeter = height / 100
      const bmi = weight / Math.pow(heightToMeter, 2)
      updateBmi(Math.round(bmi))
    }
  }
  const imperialBM = (height: number, weight: number, inches: number) => {
    if (height > 0 && weight > 0 && inches > 0) {
      // 12 inches make a foot
      // convert feet to inches and add it to inches value
      const heightToInches = height * 12 + inches
      const bmi = 703 * (weight / (heightToInches * heightToInches))
      updateBmi(Math.round(bmi))
    }
  }

  useEffect(() => {
    metricBMI(+heightCount, +weightCount)
    imperialBM(+heightCount, +weightCount, +inchesCount)
  }, [heightCount, weightCount, inchesCount])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCount((prevState) => ({ ...prevState, [name]: value }))
  }

  const onSelectTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as UnitSystem
    setUnit(value)
  }

  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
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
                value={unit ?? ''}
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

export default BmiCalculator
