import { useState } from 'react'

const App = () => {
	const anecdotes = 
    [
      "If it hurts, do it more often.",
      "Adding manpower to a late software project makes it later!",
      "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "Premature optimization is the root of all evil.",
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    ]
  let typedVotes = new Int8Array(anecdotes.length)
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(typedVotes)
	const [voted, setVoted] = useState(0)

	const handlePoints = () => {
		let click = 0
		const copy = [...points]
		copy[selected] += 1
		for (let i = 0; i < copy.length; i++) {
			if (click < copy[i]) {
				click = copy[i]
				setVoted(i)
			}
		}
		return setPoints(copy)
	}

  const handleNext = () => {
		let text = Math.floor(Math.random() * anecdotes.length)
		return setSelected(text)
	}
  return (
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <br /><br />
        <div>This anectode has: {points[selected]} votes</div>
        <br /><br />
        <div>
          <button onClick={handlePoints}>Vote</button>
          <button onClick={handleNext}>See next</button>
        </div>
          <h2>Most voted anectode:</h2>
          {anecdotes[voted]}
          <p>This anectode has {points[voted]} votes</p>
        </div>
  )
}

export default App
