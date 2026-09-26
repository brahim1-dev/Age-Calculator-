import { useState } from 'react'
import moment from 'moment'
import Swal from 'sweetalert2'
import AgeResults from './components/AgeResults.jsx'
import DateForm from './components/DateForm.jsx'
import SiteFooter from './components/SiteFooter.jsx'

function calculateAge(dateValue) {
  const birthDate = moment(dateValue, 'YYYY-MM-DD', true).startOf('day')
  const today = moment().startOf('day')

  if (!birthDate.isValid() || birthDate.isAfter(today)) return null

  const years = today.diff(birthDate, 'years')
  const afterYears = birthDate.clone().add(years, 'years')
  const months = today.diff(afterYears, 'months')
  const afterMonths = afterYears.clone().add(months, 'months')

  return {
    years,
    months,
    days: today.diff(afterMonths, 'days'),
  }
}

function App() {
  const [birthDate, setBirthDate] = useState('')
  const [age, setAge] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const nextAge = calculateAge(birthDate)

    if (!nextAge) {
      Swal.fire({
        title: 'Choose a valid date',
        text: 'Your birth date must be today or earlier.',
        icon: 'warning',
        confirmButtonColor: '#77e4d0',
        background: '#111019',
        color: '#f7f7fb',
      })
      return
    }

    setAge(nextAge)
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <h1>Age Calculator</h1>
      </header>

      <main className="calculator" aria-label="Age calculator">
        <DateForm
          birthDate={birthDate}
          onBirthDateChange={(value) => {
            setBirthDate(value)
            setAge(null)
          }}
          onSubmit={handleSubmit}
        />
        <AgeResults age={age} />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App