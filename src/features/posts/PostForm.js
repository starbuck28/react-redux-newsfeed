import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postsSlice'
import profilePicture from '../../maya.jpg'
import styled from 'styled-components'
import { getRandomId, getCurrentTimestamp } from '../../transformers'

const PostForm = () => {
    const [content, setContent] = useState("")
    const dispatch = useDispatch()
    
    const onTextChanged = event => setContent(event.target.value)

    const onPostClicked = (event) => {
        event.preventDefault()
        if (content) {
            const post = {
                id: getRandomId(),
                date: getCurrentTimestamp(),
                user: {
                    name: 'Maya',
                    location: 'Pandora'
                },
                content,
                likes: 0,
                showComments: false,
                comments: {
                    total: 0,
                    individualComments: []
                }
            }

            dispatch(addPost(post))
            setContent("")
        }
    }

    const onEnterKeyPressed = (event) => {event.key === 'Enter' && event.preventDefault()}

    return (
        <StyledSection>
            <StyledForm>
                <StyledInputDiv>
                    <ProfilePicture src={profilePicture} alt="profile"/>
                    <StyledInput 
                        type="text"
                        id="postContent"
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={onTextChanged}
                        onKeyPress={onEnterKeyPressed}>
                    </StyledInput>
                </StyledInputDiv>
                <Divider></Divider>
                <StyledButtonSection>
                    <StyledButton 
                        data-testid="post-submit-button" 
                        type="button" 
                        onClick={onPostClicked}>Post It</StyledButton>
                </StyledButtonSection>
            </StyledForm>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    width: 95%;
    border-radius: 8px;
    `

const StyledForm = styled.form`
    border-radius: 8px;
    background: #ffffff;
`

const ProfilePicture = styled.img`
    width: 50px;
    border-radius: 50%;
    `

export const StyledInput = styled.input`
    border: none;
    margin-left: 20px;
    font-size: 18px;
    &:focus {
        outline: none;
      }
`

const StyledInputDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 20px;
`

const StyledButton = styled.button`
      background: #8FB1F7;
      width: 70px;
      height: 27px;
      border: none;
      border-radius: 3px;
      color: #ffffff;
  
      &:focus {
          outline: none;
        }
`

const StyledButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 5px 20px 15px 20px;
`

const Divider = styled.hr`
    border-top: 1px solid #DFDFDF;
`

export default PostForm