import React from 'react'
import UploadDocuments from '../components/UploadDocuments'
import ImgDiv from '../components/ImgDiv'
import { Outlet } from 'react-router-dom/dist'
import Popup from '../components/Popup'

function Upload() {
  return (
    <>
      {/* <Popup /> */}
      <div className='upload'>
        <UploadDocuments />
        <ImgDiv />
      </div>
      <Outlet />
    </>
  )
}

export default Upload
