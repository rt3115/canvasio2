import React, { useState } from 'react';
import './chatModule.css';
import SendIcon from '@material-ui/icons/Send';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import CodeIcon from '@material-ui/icons/Code';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ListIcon from '@material-ui/icons/List';
import ChatIcon from '@material-ui/icons/Chat';
import marked from 'marked';

const Chat = () => {
  const chat = []; // add example chat stuff here

  let [message, messageChange] = useState('');
  const [messages, addMessage] = useState(chat);

  const handleSend = (evt) => {
    evt.preventDefault();
    if (message !== '') {
      addMessage((prev) => [
        ...prev,
        { context: 'self', message: marked(message) },
      ]);
      messageChange('');
    }
  };

  const handleType = (evt) => {
    evt.preventDefault();
    messageChange(evt.target.value);
  };

  let [toggle, setToggle] = useState(false);

  const handleToggle = (evt) => {
    evt.preventDefault();
    setToggle(!toggle);
  };

  if (toggle) {
    return (
      <div id='chat'>
        <div className='chatTop' onClick={(e) => handleToggle(e)}>
          <div id='chatbanner'>Party Chat</div>
          <div id='controls'></div>
        </div>
        <div className='chatBody'>
          {messages.map((msg, id) => (
            <div
              className={
                msg.context === 'self' ? 'messageBlobSelf' : 'messageBlob'
              }
              key={id}
              dangerouslySetInnerHTML={{ __html: msg.message }}
            />
          ))}
        </div>
        <div className='chatInput'>
          <textarea
            contentEditable={true}
            id='chatInput'
            onChange={(e) => handleType(e)}
            value={message}
          />
          <div id='inputControls'>
            <span className='controlElement'>
              <FormatItalicIcon fontSize='large' />
            </span>
            <span className='controlElement'>
              <FormatUnderlinedIcon fontSize='large' />
            </span>
            <span className='controlElement'>
              <FormatBoldIcon fontSize='large' />
            </span>
            <span className='controlElement'>
              <CodeIcon fontSize='large' />
            </span>
            <span className='controlElement'>
              <FormatQuoteIcon fontSize='large' />
            </span>
            <span className='controlElement'>
              <ListIcon fontSize='large' />
            </span>
            <span className='controlElement' onClick={handleSend}>
              <SendIcon fontSize='large' />
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id='chatCollapsible' onClick={(e) => handleToggle(e)}>
        <ChatIcon fontSize='large' />
      </div>
    );
  }
};

export default Chat;
