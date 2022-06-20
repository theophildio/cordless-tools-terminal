import { useEffect, useState } from "react"

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('https://cordless-tools-terminal.herokuapp.com/tool', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then (res => res.json())
    .then (data => setTools(data));
  }, []);
  return [tools, setTools];
}

export default useTools;