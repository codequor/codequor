
// import { MessageCircle, X, Bot } from "lucide-react";
// import { useState } from "react";
// export default function AIFloatingButton() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Floating AI Button – Always Visible */}
//       <div className="fixed bg-blue-700 bottom-6 right-6 z-50 flex flex-col items-end gap-4">
//         {/* Chat Bubble – Only shows when open */}
//         {isOpen && (
//           <div className="bg-gray-200 rounded-2xl shadow-2xl p-6 max-w-sm animate-in slide-in-from-bottom-2 duration-300">
//             <div className="flex justify-between items-start mb-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
//                   AI
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-800">JobPlartform AI Assistant</p>
//                   <p className="text-sm text-green-600 flex items-center gap-1">
//                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                     Online
//                   </p>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-400 hover:text-gray-600 transition"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
            
//             <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 mb-4">
//               <p className="text-gray-800 font-medium">
//                 Hello! 👋 I'm your AI Career Assistant
//               </p>
//               <p className="text-sm text-gray-600 mt-2">
//                 Ask me anything about jobs, CV, interviews, or salary in Nigeria!
//               </p>
//             </div>

//             <a 
//               href="https://ai.codequor.com/" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition transform hover:scale-105"
//             >
//               Start Chatting Now
//             </a>
//           </div>
//         )}

//         {/* Main Floating Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="group bg-blue-700 relative bg-gradient-to-br from-purple-600 to-pink-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
//         >
//           <Bot className="w-8 h-8" />
          
//           {/* Pulse Animation */}
//           <span className="absolute inset-0 rounded-full bg-purple-600/50 animate-ping"></span>
          
//           {/* Tooltip */}
//           <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
//             Chat with AI Assistant
//           </span>
//         </button>
//       </div>
//     </>
//   );
// }



import { MessageCircle, X, Bot } from "lucide-react";
import { useState } from "react";

export default function AIFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating AI Button – Always Visible – CodeQuor Consultancy Theme */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        
        {/* Chat Bubble – DARK ELEGANT BLUE */}
        {isOpen && (
          <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 max-w-sm border border-blue-700/60">
            {/* Header */}
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl ring-4 ring-cyan-400/40">
                  AI
                </div>
                <div>
                  <p className="font-bold text-white text-xl">CodeQuor AI Assistant</p>
                  <p className="text-sm text-cyan-300 flex items-center gap-1">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                    Online • Ready to Help
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-blue-300 hover:text-white hover:bg-white/10 p-2 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Message */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-5 border border-cyan-400/30">
              <p className="text-white font-semibold leading-relaxed text-lg">
                Hello! I'm CodeQuor's AI Consultant
              </p>
              <p className="text-sm text-cyan-200 mt-3 leading-relaxed">
                Ask me anything about software development, tech consulting, digital transformation, system architecture, or hiring top talent in Nigeria.
              </p>
            </div>

            {/* CTA Button */}
            <a 
              href="https://ai.codequor.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 shadow-xl border border-cyan-400/50 text-lg"
            >
              Start AI Consultation Now
            </a>
          </div>
        )}

        {/* Main Floating Button – Glassmorphism Blue */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative bg-blue-600/90 backdrop-blur-3xl text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-110 flex items-center justify-center border-4 border-cyan-400/60"
        >
          <Bot className="w-10 h-10 drop-shadow-2xl" />
          
          {/* Triple Pulse Rings – CodeQuor Style */}
          <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-80 animate-ping"></span>
          <span className="absolute inset-0 rounded-full bg-blue-400 opacity-60 animate-ping animation-delay-300"></span>
          <span className="absolute inset-0 rounded-full bg-indigo-400 opacity-40 animate-ping animation-delay-600"></span>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-5 py-3 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-2xl border border-cyan-400/50 font-medium">
            Chat with CodeQuor AI
          </span>
        </button>
      </div>

      {/* Animation Delays */}
      <style jsx>{`
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-600 { animation-delay: 600ms; }
      `}</style>
    </>
  );
}