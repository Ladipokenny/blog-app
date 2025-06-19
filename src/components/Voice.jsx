import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import html2canvas from "html2canvas";
import { toast } from "react-hot-toast";
import { Mic } from "lucide-react";

const Voice = () => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (transcript.toLowerCase().includes("snap")) {
      captureScreen();
    }
  }, [transcript]);

  const startListening = () => {
    setHasStarted(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const captureScreen = async () => {
    try {
      const canvas = await html2canvas(document.body, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const link = document.createElement("a");
      link.download =
`screenshot-${timestamp}.png`;
;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();

      toast.success("📸 Screenshot captured!");
    } catch (error) {
      console.error("Capture error:", error);
      toast.error("Failed to capture screenshot");
    }
  };

  if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) {
    return null;
  }

  return (
    <>
      <div className="fixed top-4 left-4 z-50 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-xl shadow-md text-sm font-medium">
        🎙 Voice — Say <strong>"snap "</strong> to capture a screenshot
      </div>

      {!listening && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={startListening}
            className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-110">
            <Mic className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-semibold">
              Start Listening
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default Voice;