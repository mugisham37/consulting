import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'maroon': {
          DEFAULT: '#8B1538',
          hover: '#6B0F2A',
          light: '#A91D42',
        },
        'neutral': {
          50: '#ffffff',
          100: '#f8f8f8',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#474747',
          900: '#0a0a0a',
        },
      },
      letterSpacing: {
        'tight': '-0.03em',
        'widest': '0.15em',
      },
      lineHeight: {
        'tight': '1.11',
      },
    },
  },
  plugins: [],
};

export default config;