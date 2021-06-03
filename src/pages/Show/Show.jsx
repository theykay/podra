import { useEffect } from 'react';

const Show = (props) => {
  useEffect(() => {
    document.title = "Show";
    console.log(props.match.params.name)
  },[props]);

  return (
    <div id="Show">
      show page
    </div>
  )
}

export default Show;