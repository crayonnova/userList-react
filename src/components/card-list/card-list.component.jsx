import React from 'react'
import './card-list.styles.css'
import {Card} from './card.component'
// option 1
export const CardList = ( props ) => {
    return (
        <div className='card-list'>
            {
                props.monsters.map( monster => {
                    return (<Card key={monster.id} monster={monster} />)
                })
            }
        </div>
    )
    
}

// option 2
// const CardList = props => {
//     console.log(props);
//     return (<div></div>)
// }
// export default CardList  



