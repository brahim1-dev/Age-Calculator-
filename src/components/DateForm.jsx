import moment from 'moment'
import { FaCalculator } from 'react-icons/fa'

function DateForm({ birthDate, onBirthDateChange, onSubmit }) {
  return (
    <form className="calculator-form" onSubmit={onSubmit}>
      <label className="visually-hidden" htmlFor="birth-date">
        Date of birth
      </label>
      <input
        id="birth-date"
        type="date"
        value={birthDate}
        max={moment().format('YYYY-MM-DD')}
        onChange={(event) => onBirthDateChange(event.target.value)}
        required
      />
      <button type="submit">
        <FaCalculator aria-hidden="true" />
        <span>Calculate</span>
      </button>
    </form>
  )
}

export default DateForm