import { useState } from 'react'

import axios from 'axios'

const CreateFeedback = () => {
  const [feedback, setFeedback] = useState('')
  const [feedbackers, setFeedbackers] = useState([])

  //GET
  const fetchFeedback = async () => {
    const response = await fetch('/api/Oblig9api')
    const data = await response.json()
    setFeedbackers(data)
  }

  //POST
  const handleSubmit = async () => {
    const response = await fetch('/api/Oblig9api', {
      method: 'POST',
      body: JSON.stringify({ feedback }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <>
        <div>
        <input
          type='text'
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit comment</button>
      </div>

   
    <button onClick={fetchFeedback}> Hente collection </button>
    {feedbackers.map(feedback => {
   return (
    <div key={feedback.id}>
      {feedback.id}. {feedback.text}
    </div>
  )
})}
    </>
  )
}

export default CreateFeedback