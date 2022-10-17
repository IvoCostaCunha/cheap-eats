import React from 'react'
import { CometChatUI } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";
import { CometChat } from "@cometchat-pro/chat";

const MainChat = () => {

    const AUTH_KEY = "00340bf938d658416e9b6067143e6d2eb3c2ca30";


    const appID = "222728aa23fd1c09";
    const region = "eu";
    const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
    CometChat.init(appID, appSetting).then(
        () => {
            console.log("Initialization completed successfully");
            // You can now call login function.
        },
        error => {
            console.log("Initialization failed with error:", error);
            // Check the reason for error and take appropriate action.
        }
    );

    let authKey = "AUTH_KEY";
    var uid = "superhero2";
    var name = "Captain America";

    var user = new CometChat.User(uid);
    user.setName(name);
    CometChat.createUser(user, authKey).then(
        user => {
            console.log("user created", user);
        }, error => {
            console.log("error", error);
        }
    )


    CometChat.login(uid, authKey).then(
        user => {
            console.log("Login Successful:", { user });
        },
        error => {
            console.log("Login failed with exception:", { error });
        }
    );


    return (
        <div className='wrapper'>
            <div style={{ width: '800px', height: '800px' }}>
                <CometChatUI />
            </div>
        </div>
    )
}

export default MainChat