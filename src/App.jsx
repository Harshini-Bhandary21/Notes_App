import React, { useState } from 'react'

function App() {


  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const [notes, setnotes] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    const newNote = [...notes]
    newNote.push({title,content})
    setnotes(newNote)
    console.log(newNote)
    settitle('')
    setcontent('')
  }

  const deleteNote = (idx) => {
    const newNotes = [...notes];
    newNotes.splice(idx, 1);
    setnotes(newNotes);
  }

  return (
    <div className='h-screen bg-black text-white'>
      <h1 className=' text-2xl text-extrabold pt-10 pl-20'>Add Your Notes Here!</h1>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex justify-between items-start gap-5 p-10 '>
        <div className='flex w-full flex-col gap-5 p-8 '>


          <input className='font-medium px-5 py-2 border-2 rounded'
                  type="text" 
                  placeholder='Enter Notes Heading'
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  />


          <textarea className='font-medium h-min-60 h-60 px-5 py-2 flex items-start flex-row border-2 rounded' type='text' placeholder='Enter Notes Details'
                    value={content}
                    onChange={(e) => setcontent(e.target.value)}
          ></textarea>


          <button className=' font-medium bg-white text-black h-15 rounded active:bg-gray-300'>Add Note</button>
        </div>
      </form>

      <div className='p-10 w-full bg-black'>
        <h1 className='text-xl font-bold pl-10'>Your Notes</h1>
        <div className='flex flex-wrap gap-1 mt-5 h-52 overflow-auto'>
          {notes.map((note, index)=>{
            return <div key={index} className='ml-10 flex flex-col justify-between rounded h-52 w-40 bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] text-black'>
              <div>
                <h3 className='p-2 pt-4 leading-tightfont-bold text-3xl text-black'>{note.title}</h3>
                <p className='mt-1 p-1 leading-tight font-medium text-gray-500'>{note.content}</p>
              </div>
              <button onClick={() => {
                deleteNote(index);
              }} className='bg-red-500 cursor-pointer rounded text-white p-1 m-2 font-bold active:bg-rose-950'>Delete</button>
            </div>
          })}
        </div>  
      </div>
    </div>
  )
}

export default App
