import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'

function Message({object, username}) {

    const isUser = (username === object.username);

    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userclass" : "message__defaultclass"}>
                <CardContent>
                    <Typography variant="h6" component='h2' color='white'>
                        {object.username}: {object.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
