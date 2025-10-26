'use client';

import { useEffect, useState } from 'react';

const BotpressChatbot = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Defer chatbot loading until after window.onload to prevent render blocking
    const loadChatbot = () => {
      if (isLoaded) return;

      // Add styles to head
      const style = document.createElement('style');
      style.textContent = `
        #webchat .bpWebchat {
          position: unset;
          width: 100%;
          height: 100%;
          max-height: 100%;
          max-width: 100%;
        }
        
        #webchat .bpFab {
          display: none;
        }

        /* Style the floating action button to look like the original glowing chatbot */
        div[class*="fab"], button[class*="fab"], .bpw-floating-button, .bpw-fab, [data-testid*="fab"] {
          background: radial-gradient(circle, #1a1a2e, #16213e) !important;
          border-radius: 50% !important;
          box-shadow: 
            0 0 20px rgba(255, 215, 0, 0.8), 
            0 0 40px rgba(255, 215, 0, 0.6),
            0 0 60px rgba(255, 215, 0, 0.4),
            inset 0 0 20px rgba(255, 215, 0, 0.2) !important;
          animation: chatbotGlow 2s ease-in-out infinite alternate !important;
          border: 3px solid #FFD700 !important;
          width: 60px !important;
          height: 60px !important;
          position: relative !important;
          overflow: hidden !important;
        }

        /* Hide all images and content inside the fab button */
        div[class*="fab"] *, button[class*="fab"] *, .bpw-floating-button *, .bpw-fab *, [data-testid*="fab"] * {
          display: none !important;
          visibility: hidden !important;
        }

        /* Show our custom chat bubble icon */
        div[class*="fab"]::before, button[class*="fab"]::before, .bpw-floating-button::before, .bpw-fab::before, [data-testid*="fab"]::before {
          content: '💬' !important;
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          font-size: 24px !important;
          color: #FFD700 !important;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.8) !important;
          z-index: 999 !important;
          display: block !important;
          visibility: visible !important;
        }

        @keyframes chatbotGlow {
          from {
            box-shadow: 
              0 0 20px rgba(255, 215, 0, 0.8), 
              0 0 40px rgba(255, 215, 0, 0.6),
              0 0 60px rgba(255, 215, 0, 0.4),
              inset 0 0 20px rgba(255, 215, 0, 0.2);
            border-color: #FFD700;
          }
          to {
            box-shadow: 
              0 0 30px rgba(255, 215, 0, 1), 
              0 0 60px rgba(255, 215, 0, 0.8),
              0 0 90px rgba(255, 215, 0, 0.6),
              inset 0 0 30px rgba(255, 215, 0, 0.3);
            border-color: #FFF700;
          }
        }
      `;
      document.head.appendChild(style);

      // Load Botpress script
      const script = document.createElement('script');
      script.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Initialize Botpress
        window.botpress.init({
          botId: '95fc13b1-eca2-47a0-93a0-b949e32eab13',
          configuration: {
            version: 'v2',
            composerPlaceholder: '',
            botName: 'DNA Assistant',
            botAvatar:
              'https://files.bpcontent.cloud/2025/10/18/21/20251018210548-IT1P7WMI.png',
            botDescription: 'Dr. Noor Academy AI Helper',
            fabImage: '',
            website: {},
            email: {},
            phone: {},
            termsOfService: {},
            privacyPolicy: {},
            color: '#F5B800',
            variant: 'solid',
            headerVariant: 'glass',
            themeMode: 'dark',
            fontFamily: 'inter',
            radius: 2.5,
            feedbackEnabled: false,
            footer: '',
            allowFileUpload: false,
            soundEnabled: false,
            proactiveMessageEnabled: false,
            proactiveBubbleMessage: 'Hi! 👋 Need help?',
            proactiveBubbleTriggerType: 'afterDelay',
            proactiveBubbleDelayTime: 10,
          },
          clientId: '33d9a96a-6c9c-4056-a311-728a2dd6e89d',
          selector: '#webchat',
        });
      };

      setIsLoaded(true);
    };

    // Load chatbot after window.onload to prevent render blocking
    if (document.readyState === 'complete') {
      // Page already loaded
      setTimeout(loadChatbot, 100);
    } else {
      // Wait for window.onload
      window.addEventListener('load', () => {
        setTimeout(loadChatbot, 100);
      });
    }

    return () => {
      // Cleanup if component unmounts before loading
      if (isLoaded) {
        const style = document.querySelector('style[data-chatbot-styles]');
        const script = document.querySelector('script[src*="botpress"]');
        if (style) document.head.removeChild(style);
        if (script) document.head.removeChild(script);
      }
    };
  }, [isLoaded]);

  return (
    <div
      id="webchat"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        zIndex: 1000,
      }}
    />
  );
};

declare global {
  interface Window {
    botpress: {
      init: (config: {
        botId: string;
        configuration: Record<string, unknown>;
        clientId: string;
        selector: string;
      }) => void;
      on: (event: string, callback: () => void) => void;
      open: () => void;
    };
  }
}

export default BotpressChatbot;
