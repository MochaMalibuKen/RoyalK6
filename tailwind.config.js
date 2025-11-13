/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'royal-purple': '#8B5CF6',
        'rk6-gold': '#E8B923',
        'rk6-teal': '#4CB4B1',
        'bright-pink': '#F15BB5',
        'neutral-dark': '#0B0F14',
        'light-bg': '#FDFBF9',
        'rk6-text': '#1A1A1A',
        
        // Dark Mode Palette
        'purple-glow': '#A78BFA',
        'gold-glow': '#FFD347',
        'teal-deep': '#2AAE9A',
        'text-light': '#F5F5FF',
        'bg-dark': '#0B0F14',
        
        // Program Accent Colors
        'electric-blue': '#8B5CF6',
        'hot-pink': '#F15BB5',
        'bright-yellow': '#E8B923',
        'sunset-orange': '#FF6F59'
      },
      fontFamily: {
        'display': ['Permanent Marker', 'cursive'],
        'body': ['Inter', 'sans-serif']
      },
      animation: {
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0)' },
          '50%': { opacity: 1, transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' }
        }
      },
      backgroundImage: {
        'gradient-magic': 'linear-gradient(135deg, #8B5CF6, #F15BB5, #E8B923)',
        'gradient-dark': 'linear-gradient(135deg, #0B0F14, #2AAE9A)',
      }
    },
  },
  plugins: [],
}
