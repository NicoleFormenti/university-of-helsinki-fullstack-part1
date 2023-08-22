import { useState } from "react"

const Button = ({ text, handleClick }) => {
	return <button onClick={handleClick}>{text}</button>
}

const Statistics = ({ good, neutral, bad }) => {
	if (good === 0 && neutral === 0 && bad === 0) {
		return <p>No feedback given</p>
	}

	return (
		<table>
			<tbody>
				<StatisticLine text="Good" value={good} />
				<StatisticLine text="Neutral" value={neutral} />
				<StatisticLine text="Bad" value={bad} />

				<StatisticLine text="All" value={good + neutral + bad} />
				<StatisticLine
					text="Average"
					value={(good * 1 + bad * -1) / (good + neutral + bad)}
				/>
				<StatisticLine
					text="Positive"
					value={(good / (good + neutral + bad)) * 100 + "%"}
				/>
			</tbody>
		</table>
	)
}

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleGood = () => {
		setGood(good + 1)
	}

	const handleNeutral = () => {
		setNeutral(neutral + 1)
	}

	const handleBad = () => {
		setBad(bad + 1)
	}

	return (
		<div>
			<h1>give feedback</h1>
			<Button text="good" handleClick={handleGood} />
			<Button text="neutral" handleClick={handleNeutral} />
			<Button text="bad" handleClick={handleBad} />

			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

export default App
