import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(120, 100%, 30%)',
        input: 'hsl(120, 100%, 10%)',
        ring: 'hsl(120, 100%, 50%)',
        background: 'hsl(0, 0%, 0%)',
        foreground: 'hsl(120, 100%, 50%)',
        primary: {
          DEFAULT: 'hsl(120, 100%, 50%)',
          foreground: 'hsl(0, 0%, 0%)'
        },
        secondary: {
          DEFAULT: 'hsl(120, 100%, 30%)',
          foreground: 'hsl(120, 100%, 50%)'
        },
        accent: {
          DEFAULT: 'hsl(120, 100%, 40%)',
          foreground: 'hsl(0, 0%, 0%)'
        },
        destructive: {
          DEFAULT: 'hsl(0, 84%, 60%)',
          foreground: 'hsl(0, 0%, 98%)'
        },
        muted: {
          DEFAULT: 'hsl(120, 20%, 15%)',
          foreground: 'hsl(120, 50%, 70%)'
        },
        popover: {
          DEFAULT: 'hsl(0, 0%, 0%)',
          foreground: 'hsl(120, 100%, 50%)'
        },
        card: {
          DEFAULT: 'hsl(0, 0%, 0%)',
          foreground: 'hsl(120, 100%, 50%)'
        }
      },
      fontFamily: {
        mono: ['Courier New', 'monospace']
      },
      keyframes: {
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.97' }
        }
      },
      animation: {
        'blink': 'blink 1s step-start infinite',
        'flicker': 'flicker 0.15s infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 0%;
    --foreground: 120 100% 50%;
    --primary: 120 100% 50%;
    --primary-foreground: 0 0% 0%;
    --border: 120 100% 30%;
    --ring: 120 100% 50%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-mono overflow-x-hidden;
    font-family: 'Courier New', monospace;
  }

  ::selection {
    background: rgba(0, 255, 0, 0.3);
    color: #00ff00;
  }
}

@layer components {
  .terminal-window {
    @apply bg-black border-2 border-primary shadow-[0_0_20px_rgba(0,255,0,0.3)];
    position: relative;
  }

  .terminal-window::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 255, 0, 0.02) 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 1;
  }

  .terminal-window > * {
    position: relative;
    z-index: 2;
  }

  .terminal-header {
    @apply text-primary text-sm;
    text-shadow: 0 0 5px rgba(0, 255, 0, 0.7);
  }

  .terminal-header-bar {
    @apply bg-black;
    box-shadow: 0 2px 10px rgba(0, 255, 0, 0.2);
  }

  .terminal-button {
    @apply bg-black border-2 border-primary text-primary px-4 py-2 transition-all;
    text-shadow: 0 0 5px rgba(0, 255, 0, 0.7);
  }

  .terminal-button:hover:not(:disabled) {
    @apply bg-primary text-black;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
  }

  .terminal-button:disabled {
    @apply opacity-50 cursor-not-allowed;
  }

  .terminal-badge {
    @apply px-2 py-1 border border-primary text-xs bg-black;
  }

  .terminal-scanlines {
    position: relative;
  }

  .terminal-scanlines::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 255, 0, 0.02) 50%
    );
    background-size: 100% 3px;
    pointer-events: none;
    z-index: 9999;
  }

  .terminal-scanlines::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
    pointer-events: none;
    z-index: 9998;
  }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.97; }
}

.animate-blink {
  animation: blink 1s step-start infinite;
}

.animate-flicker {
  animation: flicker 0.15s infinite;
}

@media (max-width: 768px) {
  .terminal-window {
    @apply text-xs p-4;
  }
}
*/
