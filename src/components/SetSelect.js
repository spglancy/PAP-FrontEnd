/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'

function SetSelect(props) {
  const { setName, onClick, highlight } = props
  return (
    <span className={highlight} onClick={onClick}>{setName}</span>
  )
}

export default SetSelect
