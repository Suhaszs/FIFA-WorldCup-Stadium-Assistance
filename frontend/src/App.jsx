import { useState } from "react";
import { MessageCircle, Sun, Moon } from "lucide-react";
import Chat from "./components/Chat";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container-custom py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏟️</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">StadiumAI</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">
                FIFA World Cup 2026
              </span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Main Content - Only Chat */}
        <main className="container-custom py-8">
          <Chat />
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <div className="container-custom py-4 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2026 StadiumAI - FIFA World Cup 2026 Smart Stadium Assistant
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
