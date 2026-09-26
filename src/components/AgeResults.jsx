function pluralize(value, unit) {
  return `${unit}${value === 1 ? '' : 's'}`
}

function AgeResults({ age }) {
  const results = [
    { value: age?.years ?? '-', unit: pluralize(age?.years ?? 0, 'Year') },
    { value: age?.months ?? '-', unit: pluralize(age?.months ?? 0, 'Month') },
    { value: age?.days ?? '-', unit: pluralize(age?.days ?? 0, 'Day') },
  ]

  return (
    <section className="age-results" aria-label="Your age" aria-live="polite">
      {results.map(({ value, unit }) => (
        <div className="age-result" key={unit}>
          <span className="age-value">{value}</span>
          <span className="age-unit">{unit}</span>
        </div>
      ))}
    </section>
  )
}

export default AgeResults