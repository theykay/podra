import { useEffect } from 'react';

const Default = () => {
  useEffect(() => {
    document.title = "oops"
  },[])

  return (
    <>
    </>
  )
}

export default Default;