import { useEffect, useState } from 'react'
import QuizInfinite from './component/QuizInfinite'
import './App.css'
import quiz from './quiz.json'
import Icon from '@mdi/react'
import { mdiHeart } from '@mdi/js'

function App() {
  const [randomQuestion, setRandomQuestion] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [lives, setLives] = useState<number>(3)
  const [check, setCheck] = useState<string>('')
  const [endGame, setEndGame] = useState<boolean>(false)

  const handleRestart = () => {
    setLives(3)
    setScore(0)
    setEndGame(false)
  }

  useEffect(() => {
    const randomize = Math.floor(Math.random() * quiz.length)
    setRandomQuestion(randomize)
    setCheck('')

    if (check) {
      if (check === 'correct') {
        setScore((prevScore) => {
          if (prevScore < 14) return prevScore + 1
          setEndGame(true)
          return prevScore
        })
      } else if (check === 'wrong') {
        setLives((prevLives) => {
          if (prevLives > 1) return prevLives - 1
          setEndGame(true)
          return prevLives
        })
      }
    }
  }, [check])

  return (
    <div className='max-w-4xl m-auto container flex flex-col gap-10 mt-16 p-10 font-mono'>
      <div className='flex justify-between center'>
        <div>Score: {score}</div>
        <div className='flex'>
          {Array(lives)
            .fill(null)
            .map((_, index) => (
              <Icon key={index} path={mdiHeart} size={1} />
            ))}
        </div>
      </div>
      {!endGame ? (
        <QuizInfinite
          question={quiz[randomQuestion].question}
          choices={quiz[randomQuestion].choices}
          answer={quiz[randomQuestion].answer}
          setCheck={setCheck}
        />
      ) : (
        <div className='border border-black p-14 flex flex-col justify-center items-center gap-20'>
          <h1 className='text-8xl'>Play Again?</h1>
          <div className='flex gap-5'>
            <button className='border-2 rounded-sm p-3 w-32 hover:bg-stone-100 transition duration-200'>
              Return Home
            </button>
            <button
              onClick={() => handleRestart()}
              className='border-2 rounded-sm p-3 w-32  hover:bg-stone-100 transition duration-200'
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
