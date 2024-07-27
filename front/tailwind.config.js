/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      rotate: {
        '5': '5deg',
      },
      backgroundImage: {
        'custom-bg': "url('/src/assets/bg-pattern.png')",
        'pattern': "url('/img/pattern.webp')",
        'bg-login': "url('/src/assets/omgLogin/login.png')"
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
        // 'form-pattern': "url('/img/hero-pattern.svg')",
      },
      colors: {
        blacCardTitle: "#252846",
        blackCardText: "#5A5A60",
        blackBadgeText: "#0D0D0D",
        blue500: "#667CCB",
        blue900: "#3F458E",
        purple500: "#978CBF",
        greenTableTittle: "#61A691",
        greenAddBadgeText: "#4D8762",
        greenBadge: "#9BCABA",
        yellowBadge: "#F2CD5C",
        bgHome: "#F3F5FB",
        borderCard:"#cdd7f0",
        bgLanding: '#E3e8F6',
        inputPrimary: '#5666bf',
        bgNavBar: '#252846',
        inputSecundary: '#535db2',
        colorInputBorder: '#CDD7F0',
        inputSecundaryColor1: '#E3E8F6',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
 
    },
  },
  plugins: [require("tailwindcss-animate")],
}