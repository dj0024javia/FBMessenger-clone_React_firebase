import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'


// forwardRef is used to render things in a more stylish way. ref is used for reference to the tags that in particular to be
// used as rendering.
const Message = forwardRef( ({object, username}, ref) => {

    const isUser = (username === object.username);

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userclass" : "message__defaultclass"}>
                <CardContent>
                    <Typography variant="h6" component='h2' color='white'>
                        {!isUser && `${object.username || 'Unknown User'} says:`} {object.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
