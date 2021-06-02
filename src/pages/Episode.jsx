import { useEffect } from 'react';

const Episode = (props) => {
  useEffect(() => {
    document.title = "Episode"
    console.log(props.match.params.id)
  },[props])

  return (
    <div id="episode">
      episode page
    </div>
  )
}

export default Episode;