

function ChatHistory() {
  return (
    <div>
        <ul className="mt-4 space-y-2  overflow-y-auto hover:bg-gray-800 cursor-pointer rounded-md p-4 ">
          {/* List Item 1 */}
          <li className="flex items-start space-x-4">
            <input type="checkbox" className="mt-4" />
            <div>
              <p className="font-bold text-pretty justify-center items-center flex">Create welcome form</p>
              <p className="text-sm text-white ">This is the content for the first item.</p>
            </div>
          </li>
        </ul>
      
    </div>
  )
}

export default ChatHistory
