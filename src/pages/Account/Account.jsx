import { useEffect } from 'react';

const Account = () => {
  useEffect(() => {
    document.title = "Account"
  }, [])

  return (
    <div id="account">
      account page
    </div>
  )
}

export default Account;