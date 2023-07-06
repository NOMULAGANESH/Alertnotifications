// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderInfo = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="container">
        <h1 className="heading">Info</h1>
        <p className="des">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  const renderWarning = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="container">
        <h1 className="heading">Warning</h1>
        <p className="des">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="container">
        <h1 className="heading">Error</h1>
        <p className="des">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderSuccess = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="container">
        <h1 className="heading">Success</h1>
        <p className="des">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1>Alert Notifications</h1>
        {renderSuccess()}
        {renderError()}
        {renderWarning()}
        {renderInfo()}
      </div>
    </div>
  )
}

export default AlertNotifications
