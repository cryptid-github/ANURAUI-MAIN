import React from 'react';
import './sidebar.scss';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';



const MapPage = [
    {
      Header: 'SVARGA',
      InnerText: `Older than the Gods themselves and from an age nearly forgotten. This ancient creature once ruled the seas during the “Age of the Serpent,” but since the emergence of Anura and her children The Leviathan remains reclusive. Until recently, it was believed that the titan slumbers at depths seldom traversed. Rumors circulate of the emergence of a massive tidal rift southeast of Pacifica, possibly indicating that the great Leviathan has awakened from its slumber. \n \n Scouting parties of the Devout venture forth to verify the cause of the Great Sea’s unrest. What will they uncover in depths seldom traversed? Given recent events, the Pacificans remain ever weary and warily spin tales of the mighty serpent that once reigned supreme.`

    },
    {
      Header: 'LORE ARCS',
      InnerText: '',
      SubPanels:[
        {
          Header: 'ARC 1',
          InnerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          Header: 'ARC 2',
          InnerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'    
        }
      ]
    },
    {
      Header: 'NFT',
      InnerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      Header: 'PROPOSALS',
      InnerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]

// if(x.address){ content = var}?
const content = MapPage;


function sidebar(){

    const elements = []
    for (let i = 0; i < content.length; i++) {
      const item = content[i]
      if (item.SubPanels) {
        const sub = []
        for (let x = 0; x < item.SubPanels.length; x++) {
          const subitem = item.SubPanels[x]
          const key = `sub${x}`
          sub.push(
            <Accordion.Item eventKey={key}>
              <Accordion.Header>
                <p>{subitem.Header}</p>
              </Accordion.Header>
              <Accordion.Body>
                <p>{subitem.InnerText}</p>
              </Accordion.Body>
           </Accordion.Item>
          )
        }
        const subkeydef = `sub0`
        elements.push(

            <Accordion.Item eventKey={i}>
              <Accordion.Header>
                <p>{item.Header}</p>
              </Accordion.Header>
              <Accordion.Body>
              <Accordion defaultActiveKey={subkeydef}>
                {sub}
              </Accordion>
              </Accordion.Body>
         </Accordion.Item>

        )
      }else{
        elements.push(
        
            <Accordion.Item eventKey={i}>
              <Accordion.Header>
                <p>{item.Header}</p>
              </Accordion.Header>
              <Accordion.Body>
                <p>{item.InnerText}</p>
              </Accordion.Body>
          </Accordion.Item>

        )
    }
  }
return(

<>
  <Container className='expansion-panel'>
      <Accordion defaultActiveKey="0">
        {elements}
      </Accordion>
  </Container>
</>

)}
export default sidebar;


