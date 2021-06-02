import { useEffect } from 'react';

const Library = () => {
  useEffect(() => {
    document.title = "Library"
  },[])

  return (
    <div id="library">
      library page
    </div>
  )
}

export default Library;