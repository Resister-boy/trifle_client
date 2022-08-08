import axios from 'axios';
import React, { useEffect } from 'react'

function WebSearch() {
  const apiUrl = `https://customsearch.googleapis.com/customsearch/v1?key=${''}&cx=07986711742b84d6e&q=${''}`;

  useEffect(() => {
    axios.get(apiUrl)
  }, [])

  return (
    <div>
      <div class="gcse-search"></div>
    </div>
  )
}

export default WebSearch