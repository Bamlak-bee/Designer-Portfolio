import clipboardCopy from 'clipboard-copy';
import { useState } from 'react';
import React from 'react'

function CopyButton() {

const [copied, setCopied] = useState(false);

const handleClick = () => {
  clipboardCopy('bamlakbee.12@gmail.com');
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 1000);
}

return (
  <button onClick={handleClick}>
    {copied ? 'Copied!' : 'Email'}
  </button>
)
}

export default CopyButton;