import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../../redux/actions/profile'
import toast from 'react-hot-toast'

const ResetPassword = () => {
    const [password,setPassword]=useState('')
    const params= useParams()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {loading,message,error}=useSelector(state=>state.profile)
    const submitHandler=(e)=>{
      e.preventDefault()
      dispatch(resetPassword(params.token,password))
    }
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
  
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
        navigate('/login')
      }
    }, [dispatch, error, message,navigate]);
  return (
    <Container py={'16'} h={'90vh'}>
        <form action="" onSubmit={submitHandler}>
            <Heading my={'16'} textAlign={['center','left']}>Reset Password</Heading>
            <VStack spacing={'8'}>

            <Input
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={'Enter Your Password'}
              type="password"
              focusBorderColor={'yellow.500'}
            />
            <Button isLoading={loading} type='submit' w={'full'} colorScheme='yellow' >Reset Password</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ResetPassword