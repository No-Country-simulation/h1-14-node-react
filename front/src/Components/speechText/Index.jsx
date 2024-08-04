//*************************modelo 4 ********** */
import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from "@/Components/ui/button";
import { Mic, Save, CircleStop, ListRestart, RefreshCcwDot, SaveAll } from "lucide-react";
import { Label } from "@/Components/ui/label";
import { Textarea } from '@/Components/ui/textarea';
import FileSaver from 'file-saver';

const SpeechTestSP = () => {
   const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
   const [conversations, setConversations] = useState([]);
   const [currentSpeaker, setCurrentSpeaker] = useState("doctor");

   useEffect(() => {
      if (listening && transcript) {
         const lastChar = transcript.slice(-1);
         if (/[.!?]/.test(lastChar)) {
            stopListening();
            saveTranscription();
         }
      }
   }, [transcript, listening]);

   if (!browserSupportsSpeechRecognition) {
      return <div>Browser doesn't support speech recognition.</div>;
   }

   const startListening = () => {
      SpeechRecognition.startListening({ continuous: true, language: 'es-ES' });
   };

   const stopListening = () => {
      SpeechRecognition.stopListening();
   };

   const saveTranscription = () => {
      const timestamp = new Date().toLocaleString();
      const updatedConversations = [...conversations, { speaker: currentSpeaker, text: transcript, time: timestamp }];
      setConversations(updatedConversations);
      resetTranscript();
   };

   const downloadTranscription = () => {
      const conversationText = conversations.map(conv => `${conv.time} - ${conv.speaker}: ${conv.text}`).join('\n');
      const blob = new Blob([conversationText], { type: "text/plain;charset=utf-8" });
      FileSaver.saveAs(blob, "transcription.txt");
   };

   const switchSpeaker = () => {
      setCurrentSpeaker(currentSpeaker === "doctor" ? "patient" : "doctor");
   };

   return (
      <div className='flex bg-white'>
         <div className="w-3/5 p-6 bg-bgHome">
            <h1 className="text-3xl font-bold mb-4">Transcripción</h1>
            <div>
               <Label className=" block text-sm font-medium mb-2">
                  <span className=' flex float-right text-mic space-x-2'>
                     <Button variant="ghost" onClick={startListening}><Mic /></Button>
                     <Button variant="ghost" onClick={stopListening}><CircleStop stroke='#D92626' /></Button>
                     <Button variant="ghost" onClick={saveTranscription}><Save />Agregar</Button>
                     <Button variant="ghost" onClick={switchSpeaker}><RefreshCcwDot />
                        Cambiar a {currentSpeaker === "doctor" ? "paciente" : "doctor"}
                     </Button>
                  </span>
               </Label>
               <Label>Transcripción:</Label>
               <p className='text-xs text-circleStop'>{listening ? 'Escuchando...' : ''}</p>
               <Textarea value={transcript} readOnly className="mb-4" />
            </div>
            <Button variant="ghost" onClick={resetTranscript}><ListRestart />Reiniciar</Button>
            <Button variant="ghost" onClick={downloadTranscription}><SaveAll />Guardar</Button>
         </div>
         <div className="w-2/5 p-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Conversación</h2>
            <div className='bg-white p-4 border rounded-md'>
            <div className="space-y-4 ">
               {conversations.map((conv, index) => (
                  <div key={index} className={`p-2 rounded ${conv.speaker === "doctor" ? "bg-blue-200 text-left" : "bg-green-200 text-right"} ${conv.speaker === "doctor" ? "ml-0" : "ml-auto"} max-w-fit`}>
                     <p className="font-bold">{conv.speaker} ({conv.time})</p>
                     <p>{conv.text}</p>
                  </div>
               ))}
            </div>
            </div>
         </div>
      </div>
   );
};

export default SpeechTestSP;