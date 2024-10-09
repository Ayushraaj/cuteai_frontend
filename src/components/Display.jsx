import  { useState } from "react";
import Nav from "./Nav";
// import Scrollabe from "./Scrollabe";
// import Input from "./Input";
import History from "./History";
import Sidebar from "./sidebar/Sidebar";

function Display() {
  const [messages, setMessages] = useState([]); // State to hold messages
  const [input, setInput] = useState(""); // State to hold current input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    if (input.trim()) {
      // Check if input is not empty
      // Update messages with the user message
      setMessages((prevMessages) => [...prevMessages, { text:input, type: "user" }]);
      // Add the response after a slight delay for better UX
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: ` ${input}`, type: "response" }]);
      }, 100); // 100ms delay for the response

      setInput(""); // Clear the input field
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-900 border-gray-600 p-4 h-screen w-1/5">
        <Sidebar />
      </div>

      <div className="centered-div w-4/5 bg-gray-900 border border-gray-500 p-4 h-screen rounded-lg flex flex-col">
        {/* Nav bar */}
        <div className="mb-5">
          <Nav />
        </div>

        {/* Display messages in the blank space */}
        <div className="flex-1 bg-black rounded-md overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-6 p-2 rounded-md ${
                msg.type === "user" 
                  ? "bg-blue-600 text-white self-start" 
                  : "bg-gray-700 text-white self-end"
              }`}
              style={{ maxWidth: '100%', wordWrap: 'break-word' }} // Ensure messages don't overflow
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input field at the bottom */}
        <form onSubmit={handleSubmit} className="flex items-center p-4 bg-gray-900 border-t border-gray-900">
          <input
            type="text"
            placeholder="Type your message..."
            value={input} // Bind input value to state
            onChange={(e) => setInput(e.target.value)} // Update state on input change
            className="flex-1 p-2 border border-gray-900 rounded-lg mr-2 text-black"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-200"
          >
            Send
          </button>
        </form>
      </div>

      <div className="bg-gray-900 border-white p-4 h-screen w-1/3">
        <History />
      </div>
    </div>
  );
}

export default Display;
