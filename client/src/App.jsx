import React, { useEffect, useRef, useState } from 'react'
import photo from './image/photo11.jpg'
import './App.css'
import { uploadImageApi } from './service/api'
export default function App() {
  const [file, setFile] = useState()
  const [result, setResult] = useState('')
  const fileRef = useRef()

  const uploadFile = () => {
    fileRef.current.click()
  }
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        console.log(data);
        const response = await uploadImageApi(data)
        setResult(response.path);
      }
    }
    getImage()

  }, [file])

  console.log(file);
  return (
    <>
      <div className='container'>
        <img src={photo} alt="photo" />
        <div className='wrapper'>
          <h1>Simple File Sharing !</h1>
          <p>Upload and share the download link</p>
          <button onClick={uploadFile}>Upload</button>
          <input type="file" ref={fileRef} style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />

          <a href={result} target='_blank'>{result}</a>
        </div>
      </div>
    </>
  )
}
