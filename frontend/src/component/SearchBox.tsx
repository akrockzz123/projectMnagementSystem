


import React, { useState} from 'react'

import { Form, Button } from 'react-bootstrap'

import { redirect, useParams } from 'react-router'

import { useNavigate }  from 'react-router-dom'

type Props = {

    func : any
}

export const SearchBox : any  = (props : Props) => {

    const navigate = useNavigate()

    const ids = useParams()

  
    const submitHandler = (e : any) => {
        e.preventDefault();
        e.stopPropagation();

        if(keyword.trim()) {
           // history.push(`/search/${keyword}`)

        //    navigate(`/search/${keyword}`)

        console.log(keyword,props.func)
          props.func(keyword)
        }
        else {
            //history.push(('/users'))

            // navigate('/users')

            props.func("aniket")
            
        }
    }
    const [keyword, setKeyword] = useState('')
    return (
        <div>
            <Form onSubmit={submitHandler}  >
               <div style ={{display: 'flex'}}> <Form.Control type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search User By Id....'
                className='mr-sm-2 ml-sm-5'
                style={{marginRight: '5px',padding: '4px'}}


               
                ></Form.Control>
                <Button type='submit'
                variant ='outline-success'
                className ='p-1'
                >
                Search Users</Button>
             </div>
            </Form>
        </div>
    )
}

export default SearchBox