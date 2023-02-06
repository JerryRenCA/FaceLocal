import React from 'react'
import tw from 'tailwind-styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

//Style Components
const Container=tw.div`border-2 grow rounded-md pl-1 flex overflow-hidden self-stretch bg-white text-black`
const SearchBtn=tw.button` bg-primary-purple w-24 hover:bg-primary-purple-lighter text-white`
//module
const SearchBox = () => {
    return (
        <Container>
            <SearchOutlinedIcon className='my-auto ' />
            <input type="text" className='grow outline-none pl-3'/>
            <SearchBtn>Search</SearchBtn>
        </Container>
    )
}
export default SearchBox