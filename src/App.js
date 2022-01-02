import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';


import './App.css'; 

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="e41e9f80-cb66-4346-a2dc-7c44d2ab21b3"
            userName="AdminGroup" 
            userSecret="123456"
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        
        />
    )
}

export default App; 