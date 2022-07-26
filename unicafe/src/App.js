import { useState } from 'react'

const StatisticsLine = ({ state, text }) => (
  <tr>
    <td>{text}</td>
    <td>{state}</td>
  </tr>
)

const Button = ({func, text}) => (
  <button onClick={func}>
  {text}
  </button>
)

const Total = ({score}) => (score.good + score.neutral + score.bad)

const Average = ({score}) => ((score.good - score.bad) / (score.good + score.bad + score.neutral))

const Percentage = ({score}) => (score.good / (score.good + score.neutral + score.bad))

const Statistics = ({score}) => {
  if(score.good + score.neutral + score.bad === 0) {
    return (
    <tbody>
      <tr>
        <td>No feedback given</td>
      </tr>
    </tbody>
    )
  }
  
  return (
  <tbody>
      <StatisticsLine state={score.good} text='Good: ' />
      <StatisticsLine state={score.neutral} text='Neutral: ' />
      <StatisticsLine state={score.bad} text='Bad: ' />
      <StatisticsLine state={<Total score={score} />} text='Total: ' />
      <StatisticsLine state={<Average score={score} />} text='Average: ' />
      <StatisticsLine state={<Percentage score={score} />} text='Positive: ' />
  </tbody>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [score, setScore] = useState({
  good: 0, neutral: 0, bad: 0})

  const handleGood = () => setScore({...score, good: score.good + 1})
  const handleNeutral = () => setScore({...score, neutral: score.neutral + 1})
  const handleBad = () => setScore({...score, bad: score.bad + 1})


  return (
  <>
    <div>
      <h1>Give feedback!</h1>
      <Button func={handleGood} text = 'Good' />

      <Button func={handleNeutral} text = 'Neutral' />

      <Button func={handleBad} text = 'Bad' />

      <h1>Statistics</h1>
    </div>
    <table> 
      <Statistics score={score} />
    </table>
  </>
  )
}

export default App
