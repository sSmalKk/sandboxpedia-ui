import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import "./Console.css"

function Console() {
  // State variables for controlling the console
  const [consoleVisible, setConsoleVisible] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(null);
  const [consoleWidth, setConsoleWidth] = useState(300);
  const [command, setCommand] = useState('');
  const [messages, setMessages] = useState([]);

  // Toggle the visibility of the console
  const toggleConsole = () => {
    setConsoleVisible(!consoleVisible);
  };

  // Handle mouse down event for resizing
  const handleMouseDown = (e) => {
    setIsResizing(true);
    setStartX(e.clientX);
  };

  // Handle mouse up event for resizing
  const handleMouseUp = () => {
    setIsResizing(false);
  };

  // Handle mouse move for resizing
  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = consoleWidth + e.clientX - startX;
      setConsoleWidth(newWidth);
      setStartX(e.clientX);
    }
  };

  // Handle command submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessages = [...messages, command];
    setMessages(newMessages);
    setCommand('');
  };

  return (
    <div className="index-container">

      <div className={`console-container ${consoleVisible ? 'open' : ''}`} onMouseMove={handleMouseMove}>
        <div className="menu-icon">
          <Button variant="outlined" color="primary" onClick={toggleConsole}>
            ☰
          </Button>
        </div>

        <Drawer
          variant="temporary"
          anchor="left"
          open={consoleVisible}
          PaperProps={{ style: { width: consoleWidth, height: "100%" } }}
          ModalProps={{ onBackdropClick: toggleConsole }}
          className={`console-drawer ${consoleVisible ? 'open' : ''}`}
        >
          <div className="console">
            <div className="console-content">
              <ul className="console-messages">
                {messages.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
              <div className="resize-handle-right" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                ⋮
              </div>
              <form onSubmit={handleSubmit}>
                <TextField
                  className="consoleinput white-text"
                  label="Console"
                  variant="outlined"
                  fullWidth
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                />
              </form>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Console;
