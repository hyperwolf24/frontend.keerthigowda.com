import { useState, useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pt-16">
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      <div className="relative bg-[#0a192f] rounded-lg p-6 w-[90vw] h-[85vh] max-w-4xl shadow-2xl border border-[#018c6d]/20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#018c6d] text-xl font-semibold">Resume</h2>
          <div className="flex gap-4">
            <a
              href="/KEERTHI GOWDA RESUME_1.pdf"
              download
              className="px-4 py-2 bg-[#018c6d] text-white rounded hover:bg-[#016b54] transition-colors"
            >
              Download
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
        <div className="h-[calc(85vh-8rem)] bg-white rounded overflow-hidden">
          <embed
            src="/KEERTHI GOWDA RESUME_1.pdf#toolbar=0&navpanes=0"
            type="application/pdf"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
} 