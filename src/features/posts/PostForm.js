import React, { useState } from 'react'

const PostForm = () => {
    const [text, setText] = useState("")
    
    const onTextChanged = event => setText(event.value.target)

    return (
        <section>
            <form>
                <input 
                    type="text"
                    id="postContent"
                    value={text}
                    onChange={onTextChanged}>
                </input>
                <button type="button">Post It</button>
            </form>
        </section>
    )
}

export default PostForm