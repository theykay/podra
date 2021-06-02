import { useEffect } from 'react';

const Default = () => {
  useEffect(() => {
    document.title = "oops"
  },[])

  return (
    <div id="default">
      default page
    </div>
  )
}

export default Default;