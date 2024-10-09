import { ChatBubbleLeftIcon, DocumentDuplicateIcon, FolderIcon, Cog6ToothIcon, QuestionMarkCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'; // Import correct icons
import logo from './a.svg'
function Sidebar() {
  return (
    <div className="h-96 w-64 bg-gray-900 text-white">
      {/* Company Logo and Name */}
      <div className="flex items-center p-4">
        <img
          src={logo} // Placeholder for company logo
          alt="Company Logo"
          className="h-10 w-10 flex justify-center items-center"
        />
        <span className="text-xl font-semibold cursor-pointer">CuteAi</span>
      </div>

      {/* Divider */}
      <hr className="border-gray-600" />

      {/* Chat Button */}
      <div className="mt-6">
        <button className="flex items-center p-4 w-full hover:bg-gray-700 focus:outline-none rounded-md">
          <ChatBubbleLeftIcon className="h-6 w-6 mr-3" />
          <span>Chat</span>
        </button>
      </div>

      {/* Templates Button */}
      <div className="mt-2">
        <button className="flex items-center justify-between p-4 w-full hover:bg-gray-700 focus:outline-none rounded-md">
          <div className="flex items-center">
            <DocumentDuplicateIcon className="h-6 w-6 mr-3" />
            <span>Templates</span>
          </div>
          <span className="text-sm text-gray-400">Pro</span>
        </button>
      </div>

      {/* My Projects Button */}
      <div className="mt-2">
        <button className="flex items-center justify-between p-4 w-full hover:bg-gray-700 focus:outline-none rounded-md">
          <div className="flex items-center">
            <FolderIcon className="h-6 w-6 mr-3" />
            <span>My Projects</span>
          </div>
          <span className="text-sm text-gray-400">Pro</span>
        </button>
      </div>

      {/* Settings Button */}
      <div className="mt-2">
        <button className="flex items-center p-4 w-full hover:bg-gray-700 focus:outline-none rounded-md">
          <Cog6ToothIcon className="h-6 w-6 mr-3" />
          <span>Settings</span>
        </button>
      </div>

      {/* Updates & FAQ Button */}
      <div className="mt-2">
        <button className="flex items-center p-4 w-full hover:bg-gray-700 focus:outline-none rounded-md">
          <QuestionMarkCircleIcon className="h-6 w-6 mr-3" />
          <span>Updates & FAQ</span>
        </button>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 my-4" />

      {/* Logout Button */}
      <div className="mt-auto">
        <button className="flex items-center p-4 w-full hover:bg-red-700 focus:outline-none rounded-md">
          <ArrowRightOnRectangleIcon className="h-6 w-6 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
