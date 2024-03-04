import React, { useState } from "react";
import axios from "axios";  
import { FaComment } from 'react-icons/fa';
const Bot = () => {
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/chat",
      headers: {
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYzAzMjFlNmYtNzFhNS00ZDQ3LTk1MmMtNjI2NWU3MDc3NTkzIiwidHlwZSI6ImFwaV90b2tlbiJ9._8GgsMnWzUVQ2B8K6eWvq-7zKK-quIgpp56eSJLouKE",
      },
      data: {
        providers: "openai",
        text: text,   
        chatbot_global_action: "Act as an assistant",
        previous_history: [],
        temperature:   0.0,
        max_tokens:   150,
        fallback_providers: "",
      },
    };
   
    axios
      .request(options)
      .then((response) => {
        console.log("API Response:", response.data);
        // Access the generated_text correctly
        const generatedText = response.data.openai.generated_text;
        console.log("Generated Text:", generatedText);
        
        // Update the messages state with the new message
        setMessages([...messages, generatedText]);
        setText('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
  

      <button onClick={toggleChat} className="fixed bottom-0 right-0 m-4 p-4 bg-content text-white rounded-full ">
      <FaComment size={48} /> 
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-0 w-96 h-96 bg-gray-200 border border-gray-300 rounded-lg shadow-lg overflow-auto flex flex-col justify-between ">
          <div className="flex justify-between items-center bg-white text-content font-bold p-4">
            <h2>Chat with Tonify</h2>
            <button onClick={toggleChat} className="text-content">X</button>
          </div>
          <div className="p-4">
            {messages.map((message, index) => (
              <p key={index} className="my-2 p-4 rounded-lg bg-white ">
                {message}
              </p>
            ))}
          </div>
          <div className="p-4 flex items-center">
  <input  
    type="text"  
    value={text}  
    onChange={(e) => setText(e.target.value)}  
    placeholder="Enter your message"  
    className="border border-gray-300 p-2 rounded-lg mr-2"
    style={{ flex: '1' }} 
  />
  <button onClick={handleSendMessage} className="bg-white text-content px-4 py-2 rounded-lg">Send</button>
</div>

        </div>
      )}
    </div>
  );
};

export default Bot;