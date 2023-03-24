


import React, { useState} from 'react'

import { Form, Button } from 'react-bootstrap'

import { redirect, useParams } from 'react-router'

import { useNavigate }  from 'react-router-dom'

export const SearchBox = ({ }) => {

    const navigate = useNavigate()

    const ids = useParams()

    

    const submitHandler = (e : any) => {
        e.preventDefault();

        if(keyword.trim()) {
           // history.push(`/search/${keyword}`)

           navigate(`/search/${keyword}`)
        }
        else {
            //history.push(('/users'))

            navigate('/users')
        }
    }
    const [keyword, setKeyword] = useState('')
    return (
        <div>
            <Form onSubmit={submitHandler} >
                <Form.Control type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search Users....'
                className='mr-sm-2 ml-sm-5'
                style={{marginRight: '5px',padding: '4px'}}
                ></Form.Control>
                <Button type='submit'
                variant ='outline-success'
                className ='p-1'
                >
                Search Users</Button>
            </Form>
        </div>
    )
}

export default SearchBox