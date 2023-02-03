import React from 'react'
import tw from 'tailwind-styled-components'

//type
type T_eventTile={
    title:string,
    uuid:string,
    expireDate:Date,
    eventHolder:string,
    provider:string,
    img:string,
}
//Styled Components
const Container=tw.div``

//Module
const EventTile = () => {
    return (
        <Container>
            EventTile
        </Container>
    )
}
export default EventTile