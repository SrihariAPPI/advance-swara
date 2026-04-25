import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Copy, Check, X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function EmbedWidgetModal({ onClose }: Props) {
  const [copied, setCopied] = useState(false);
  
  // The production Vercel deployment URL where Swara is officially hosted
  const appUrl = 'https://advance-swara.vercel.app/';

  const embedCode = `<script>
(function(){
  var d = document.createElement('div');
  d.id = 'swara-widget-btn';
  d.style.position = 'fixed';
  d.style.bottom = '24px';
  d.style.right = '24px';
  d.style.width = '64px';
  d.style.height = '64px';
  d.style.background = 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)';
  d.style.borderRadius = '45%';
  d.style.boxShadow = '0 15px 25px rgba(0,0,0,0.4), inset -5px -5px 15px rgba(0,0,0,0.1), inset 5px 5px 15px rgba(255,255,255,1)';
  d.style.cursor = 'pointer';
  d.style.zIndex = '999999';
  d.style.padding = '6px';
  d.style.boxSizing = 'border-box';
  d.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  d.style.animation = 'swara-idle-bounce 3s infinite ease-in-out';
  d.title = 'Talk to Swara AI';

  // Inject keyframes
  var style = document.createElement('style');
  style.innerHTML = '@keyframes swara-idle-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }';
  document.head.appendChild(style);
  
  d.onmouseover = function() { d.style.animationPlayState = 'paused'; d.style.transform = 'scale(1.1) translateY(-5px)'; };
  d.onmouseout = function() { d.style.transform = ''; d.style.animationPlayState = 'running'; };
  d.onclick = function() { window.open('${appUrl}', '_blank'); };

  var s = document.createElement('div');
  s.style.width = '100%';
  s.style.height = '100%';
  s.style.background = 'radial-gradient(ellipse at top right, #2a2d35 0%, #111318 50%, #050505 100%)';
  s.style.borderRadius = '42%';
  s.style.position = 'relative';
  s.style.boxShadow = 'inset 0 6px 15px rgba(0,0,0,0.9), 0 2px 5px rgba(255,255,255,0.8)';
  s.style.overflow = 'hidden';
  
  var glare = document.createElement('div');
  glare.style.position = 'absolute'; glare.style.top = '-10%'; glare.style.left = '-10%';
  glare.style.width = '120%'; glare.style.height = '50%';
  glare.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)';
  glare.style.transform = 'rotate(-15deg)'; glare.style.borderRadius = '50%';
  
  var leftEye = document.createElement('div');
  leftEye.style.position = 'absolute'; leftEye.style.top = '35%'; leftEye.style.left = '20%';
  leftEye.style.width = '14px'; leftEye.style.height = '4px'; leftEye.style.background = '#fff';
  leftEye.style.borderRadius = '10px'; leftEye.style.transform = 'rotate(20deg)';
  leftEye.style.boxShadow = '0 0 10px rgba(255,255,255,0.9)';
  
  var rightEye = document.createElement('div');
  rightEye.style.position = 'absolute'; rightEye.style.top = '35%'; rightEye.style.right = '20%';
  rightEye.style.width = '14px'; rightEye.style.height = '4px'; rightEye.style.background = '#fff';
  rightEye.style.borderRadius = '10px'; rightEye.style.transform = 'rotate(-20deg)';
  rightEye.style.boxShadow = '0 0 10px rgba(255,255,255,0.9)';

  var mouth = document.createElement('div');
  mouth.style.position = 'absolute'; mouth.style.bottom = '25%'; mouth.style.left = '50%';
  mouth.style.transform = 'translateX(-50%)'; mouth.style.width = '16px'; mouth.style.height = '8px';
  mouth.style.borderBottom = '3px solid #fff'; mouth.style.borderRadius = '0 0 10px 10px';
  mouth.style.filter = 'drop-shadow(0 0 5px rgba(255,255,255,0.8))';
  
  s.appendChild(glare);
  s.appendChild(leftEye); 
  s.appendChild(rightEye); 
  s.appendChild(mouth);
  d.appendChild(s);
  document.body.appendChild(d);
})();
</script>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-2xl bg-[#111318]/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative z-10 flex flex-col"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-marigold to-terracotta" />
        
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-marigold/10 flex items-center justify-center border border-marigold/20">
              <Code size={20} className="text-marigold" />
            </div>
            <div>
              <h2 className="text-xl font-cute font-bold text-cream">Embed Swara</h2>
              <p className="text-xs text-cream/50">Add Swara to your own website</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-cream/60 hover:text-cream"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh] flex flex-col gap-6">
          <div className="bg-black/40 border border-white/5 rounded-2xl p-5">
             <p className="text-sm text-cream/80 leading-relaxed mb-4">
               Copy and paste this snippet anywhere inside the <code>&lt;body&gt;</code> tag of your website. It will add a beautiful, interactive 3D Swara floating button to the bottom right corner of your site. When your users click it, it will open Swara so she can help them!
             </p>

             <div className="relative group">
                <div className="absolute right-4 top-4 z-10">
                   <button 
                     onClick={copyToClipboard}
                     className="flex items-center gap-2 px-3 py-1.5 bg-[#2a2d35] hover:bg-[#3a3d45] border border-white/10 rounded-lg text-xs font-medium text-cream/90 transition-colors"
                   >
                     {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                     {copied ? "Copied!" : "Copy Code"}
                   </button>
                </div>
                <pre className="bg-[#050505] p-6 rounded-xl border border-white/10 overflow-x-auto text-[11px] leading-[1.6] text-emerald-300 font-mono shadow-inner">
                  {embedCode}
                </pre>
             </div>
          </div>
          
          <div className="flex items-center gap-4 bg-marigold/5 border border-marigold/10 p-4 rounded-xl">
             <style>{`@keyframes gentle-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }`}</style>
             <div 
                className="w-12 h-12 bg-gradient-to-br from-[#ffffff] to-[#cbd5e1] rounded-[45%] shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.1),inset_2px_2px_5px_rgba(255,255,255,1),0_5px_10px_rgba(0,0,0,0.4)] p-[4px] shrink-0"
                style={{ animation: 'gentle-bounce 3s infinite ease-in-out' }}
             >
               <div className="w-full h-full bg-[#111318] rounded-[42%] shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] relative flex justify-center items-center">
                  <div className="w-[8px] h-[3px] bg-white absolute top-[35%] left-[20%] rotate-[20deg] rounded-full" />
                  <div className="w-[8px] h-[3px] bg-white absolute top-[35%] right-[20%] rotate-[-20deg] rounded-full" />
                  <div className="w-[10px] h-[4px] border-b-[2px] border-white absolute bottom-[25%] rounded-[0_0_10px_10px]" />
               </div>
             </div>
             <p className="text-xs text-marigold/80 leading-relaxed font-medium">
               <strong>Preview:</strong> This is what the widget will look like on your website. It uses pure HTML and CSS to create the 3D effect instantly.
             </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
