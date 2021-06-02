import { useEffect } from 'react';

const Settings = () => {
  useEffect(() => {
    document.title = "Settings"
  },[]);

  return (
    <div id="settings">
      settings page
    </div>
  )
}

export default Settings;