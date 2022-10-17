import React from 'react'
import { CometChatUI } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";

const MainChat = () => {

    return (
        <div className='wrapper'>
            <div style={{ width: '800px', height: '800px' }}>
                <CometChatUI />
            </div>
        </div>
    )
}

export default MainChat