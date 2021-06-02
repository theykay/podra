import { useEffect } from 'react';

const Browse = () => {
  useEffect(() => {
    document.title = "Browse"  
  },[])

  return (
    <div id="browse">
      browse page
    </div>
  );
};

export default Browse;