import { useState } from 'react'

type Question = {
  question: string
  choices: string[]
  answer: number
}

type StateProps = {
  setCheck: React.Dispatch<React.SetStateAction<string>>
}

function QuizInfinite({
  question,
  choices,
  answer,
  setCheck,
}: Question & StateProps) {
  const [color, setColor] = useState<number>(0)
  const [selectedButton, setSelectedButton] = useState<number>(-1)

  const handleCheck = (index: number) => {
    setSelectedButton(index)

    if (index === answer) {
      setColor(1)
      setTimeout(() => {
        setColor(0)
        setCheck('correct')
      }, 2000)
    } else {
      setColor(2)
      setTimeout(() => {
        setColor(0)
        setCheck('wrong')
      }, 2000)
    }
  }

  return (
    <div className='flex flex-col gap-10'>
      <h1 className='text-center text-2xl mt-10 mb-10'>{question}</h1>
      <div className='flex flex-col gap-10'>
        {choices.map((choice, index) => (
          <button
            disabled={color === 1 || color === 2}
            key={index}
            className={`border-2 rounded-md border-stone-300 p-3 font-bold transition duration-300 ${
              color === 1 &&
              selectedButton == index &&
              'bg-green-700 border-green-700 text-white'
            } ${color === 1 && 'opacity-50 font-normal'} ${
              color === 2 && 'opacity-50 font-normal'
            } ${
              color === 2 &&
              selectedButton == index &&
              'bg-red-700 border-red-700 text-white '
            } ${color !== 1 && color !== 2 && 'hover:bg-stone-100'} `}
            onClick={() => handleCheck(index)}
          >
            {choice}
          </button>
        ))}
      </div>
      <button
        disabled={color === 1 || color === 2}
        className={`border-2 rounded-md border-red-200 p-3 text-red-700 font-semibold  transition duration-300 ${
          color !== 1 && color !== 2 && 'hover:bg-red-100'
        } ${color === 1 || (color === 2 && 'opacity-50')}`}
        onClick={() => handleCheck(10)}
      >
        I Don't Know
      </button>
    </div>
  )
}

export default QuizInfinite
