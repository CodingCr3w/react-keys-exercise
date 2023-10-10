import React from "react"

import "./styles.css"

const SCORES = [
  { nickname: "Mike.McGlynn", score: 15562, color: "#947875" },
  { nickname: "Alice5", score: 97773, color: "#ba9693" },
  { nickname: "Nicolette_Marks", score: 33094, color: "#583354" },
  { nickname: "Una_Glover", score: 29041, color: "#642d42" },
  { nickname: "Claudine.Deckow10", score: 4686, color: "#3b182a" },
  { nickname: "Cloyd_Kihn98", score: 16718, color: "#22db9b" },
  { nickname: "Jordon.Bruen", score: 8764, color: "#e69cb2" },
  { nickname: "Mckenzie.Kerluke64", score: 78545, color: "#e09db6" },
  { nickname: "Wilburn.Bosco", score: 84700, color: "#cc6882" },
  { nickname: "Viviane_Streich", score: 46049, color: "#976370" },
  { nickname: "Erick49", score: 72709, color: "#d2adbd" },
  { nickname: "Euna_Steuber", score: 36107, color: "#d88688" },
  { nickname: "Bernie23", score: 58211, color: "#9d6d7c" },
  { nickname: "Celine.Gutmann", score: 75501, color: "#e4cbcd" },
  { nickname: "Stanton89", score: 60042, color: "#dbbabd" },
  { nickname: "Herminia_Rogahn54", score: 20060, color: "#d2a9ad" },
  { nickname: "Forrest33", score: 91060, color: "#ffeafb" },
  { nickname: "Scarlett_Boyer", score: 89911, color: "#cfdfff" },
  { nickname: "Randall20", score: 68018, color: "#aceeca" },
  { nickname: "Reece88", score: 82022, color: "#cfd9e4" },
]
const NB_INITIAL_ENTRIES = 5

export default function App() {
  const [{ scores, nextScoreIdx }, setState] = React.useState({
    scores: SCORES.slice(0, NB_INITIAL_ENTRIES),
    nextScoreIdx: NB_INITIAL_ENTRIES,
  })

  function addItem() {
    setState((prev) => ({
      scores: [SCORES[prev.nextScoreIdx], ...prev.scores],
      nextScoreIdx: prev.nextScoreIdx + 1,
    }))
  }

  function removeItem(nickname: string) {
    setState((prev) => ({
      ...prev,
      scores: prev.scores.filter((item) => item.nickname !== nickname),
    }))
  }

  return (
    <div className="App">
      <h1>React Keys - Issue demo</h1>
      <h3>Add or remove items to see the issue in action</h3>
      {nextScoreIdx < SCORES.length && (
        <button onClick={addItem}>Add item</button>
      )}
      {scores.map(({ nickname, score, color }, idx) => (
        <div className="counter" style={{ backgroundColor: color }}>
          <button title="Remove" onClick={() => removeItem(nickname)}>
            <span aria-label="remove" role="img">
              🗑
            </span>
          </button>
          <label htmlFor={`counter-${nickname}`}>
            <strong>{nickname}</strong>'s counter
          </label>
          <input
            id={`counter-${nickname}`}
            type="number"
            defaultValue={score}
          />
        </div>
      ))}
    </div>
  )
}
