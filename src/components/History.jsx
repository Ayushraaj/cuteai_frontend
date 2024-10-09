
import ChatHistory from '../components/History/ChatHistory'
import { FaTrash } from 'react-icons/fa';


function History() {
  return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
          {/* History Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p className="text-start ml-4 decoration-sky-500 text-current text-2xl font-bold font-sans">History</p>
              <p className="bg-gray-700 rounded-full p-1">6/20</p>
          </div>
          <div className='mt-4 h-96 bg-gray-900 overflow-y-auto rounded-md'>
          {/* Chat history */}
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          <ChatHistory />
          </div>

          {/* Button at the bottom */}
          <div className='mt-8 flex justify-center items-center'>
            <button className="bg-gray-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <FaTrash className="mr-2" /> {/* Add icon with margin */}
                Clear Chat
            </button>
        </div>

      </div>
  );
}

export default History;





  
  
  
