import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './expansion-panel.scss'
import { FiPlusSquare } from 'react-icons/fi'

export default function ExpansionPanel(props) {
  const [open, setOpen] = useState(false)

  let expansionComponent
  let chevronComponent
  let headerComponent

  function toggleExpansion() {
    const isOpen = !open
    setOpen(isOpen)
   
    
    const headerComponentList = headerComponent.classList
    const expansionComponentList = expansionComponent.classList
    const chevronComponentList = chevronComponent.children[0].classList
    console.log(expansionComponentList)
    console.log(chevronComponentList)
    headerComponentList.remove('open')
    expansionComponentList.remove('open')
    chevronComponentList.remove('open')

    if (isOpen) {
      headerComponentList.add('open')
      expansionComponentList.add('open')
      chevronComponentList.add('open')
    }
  }

  return (
<div className='panelwrap' ref={(c) => {headerComponent = c}}>  
      <button className='expansion-header' onClick={toggleExpansion}  >
        <p>{props.header}</p>
        
        <div className='chevronwrapper' ref={(c) => {chevronComponent = c}}>
          <FiPlusSquare className='chevron' />
       
        </div>
      </button>

      <div ref={(c) => {expansionComponent = c}} className='expand'>
        <div className='inner'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

ExpansionPanel.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node
}