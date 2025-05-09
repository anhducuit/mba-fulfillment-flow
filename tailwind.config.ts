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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// White (80%) + Navy Blue (20%) theme
				"mba-blue": "#0A2463", // Navy blue for accents and text on white
				"mba-gray": "#627D98", // Slate gray - professional neutral
				"mba-light-gray": "#E2E8F0", // Light gray for subtle backgrounds
				"mba-white": "#FFFFFF", // White for backgrounds (80% of the design)
				"mba-dark-blue": "#0A2463", // Navy blue for headers and accents
				"mba-deeper-blue": "#051C57", // Darker navy for contrast
				"mba-light-blue": "#F0F4F8", // Very light blue-gray for subtle backgrounds
				"mba-orange": "#FF7F11", // Energetic orange for CTAs and highlights
				"mba-teal": "#2D8A9E", // Teal for technology and innovation accents
				"mba-light-teal": "#BEE3F8" // Light teal for subtle accents
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-right": {
					"0%": { opacity: "0", transform: "translateX(-20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"fade-left": {
					"0%": { opacity: "0", transform: "translateX(20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"truck-move": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(200%)" },
				},
				"bounce-subtle": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" },
				},
				"pulse-subtle": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
				"fade-right": "fade-right 0.5s ease-out",
				"fade-left": "fade-left 0.5s ease-out",
				"truck-move": "truck-move 10s infinite linear",
				"bounce-subtle": "bounce-subtle 2s infinite ease-in-out",
				"pulse-subtle": "pulse-subtle 2s infinite ease-in-out",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"wave-pattern": "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264.888-.14 1.346 1.782 3.074 3.199 4.286 4.572 1.452 1.64 2.796 3.434 4.27 5.04 2.902 3.19 6.154 5.396 11.9 6.464 2.505.47 5.02.693 7.953.317 1.834-.234 3.543-.468 5.396-1.3 1.803-.807 3.66-2.105 4.878-3.9.21-.3.355-.796.175-1.11-.197-.323-.662-.38-.95-.17-1.04.796-1.95 1.757-3.272 2.024-1.13.238-2.21.238-3.272-.222-.13-.565 1.027-.34 1.503-.52 1.45-.565 2.927-1.1 4.115-2.075 1.32-1.093 2.47-2.44 2.96-3.925.4-1.2.467-2.834-.035-4.08-1.092-2.79-3.968-4.446-6.856-5.505-2.766-1.016-5.79-1.63-8.804-1.425-5.06.34-10.37 2.444-14.153 5.836-1.36 1.214-2.5 2.636-3.51 4.235-1.58 2.48-2.462 5.42-2.393 8.95.066 3.43.86 7.616 2.184 10.305.273.575.48 1.046.315 1.695-.298.95-1.083 1.41-1.494 2.273-.315.668-.324 1.489.025 2.146.352.665 1.017 1.076 1.778 1.077 1.512.002 2.45-.78 3.224-1.71.595-.723 1.05-1.642.864-2.613-.06-.32-.192-.55-.17-.87.013-.218.188-.798.34-.733 1.814.76 3.83 1.12 5.935 1.126 2.048.005 4.086-.265 6-1.014 2.73-1.066 5.176-2.8 7.23-5.037 1.85-2.01 3.32-4.34 4.77-6.62.81-1.28 1.6-2.56 2.33-3.9l.8-.03c1.19 1.05 2.08 2.41 2.66 3.93.56 1.45.96 3.06 1.24 4.7l-.03-.05c.4 2.17.37 4.76-.47 6.77-.35.85-.83 1.6-1.22 2.48-.42.95-.36 2.08-.03 3.33.36 1.37 1.11 2.6 1.91 3.67 1.35 1.81 2.83 3.56 4.3 5.33l-.1-.13c1.26 1.44 2.6 2.89 4.13 3.94 1.5 1.01 3.28 1.61 5.04 1.53 3.34-.14 6.23-2.4 7.58-5.48.34-.76.57-1.57.7-2.4.16-1.08.12-2.19-.11-3.28-.1-.47-.24-.93-.42-1.37-.21-.51-.48-1.01-.75-1.5-.6-1.06-1.29-2.1-1.85-3.19-.62-1.15-1.02-2.39-1.29-3.66-.4-1.9-.45-3.85-.37-5.81.06-1.64.3-3.28.65-4.88l.06-.22c.41-1.54.93-3.07 1.5-4.54.24-.61.49-1.22.77-1.83.86-1.9 2.07-4.14 4.04-5.12.2-.1.4-.19.62-.26.28-.08.57-.13.85-.16.33-.02.68-.01 1.05.1.25.08.47.2.74.35.8.44 1.39 1.2 1.63 2.12.22.84.08 1.75-.31 2.42-.32.55-.75 1.03-1.18 1.5-.39.42-.74.91-1.04 1.51-.17.36-.31.75-.36 1.21-.06.43-.05.79.06 1.07.32.82 1.22 1.1 1.92 1.06.81-.05 1.56-.42 2.33-.76.35-.16.7-.3 1.09-.39.4-.09.88-.13 1.37-.05 1.35.23 2.45 1.53 2.85 2.86.36 1.24.21 2.55-.05 3.84-.46 2.31-1.26 4.57-2.27 6.71l.05-.12c-2.06 4.3-4.41 8.69-7.91 11.79-3.52 3.12-8.56 4.45-13.02 3.24-2.2-.61-4.14-1.92-5.58-3.75-1.44-1.82-2.2-4.13-2.14-6.36.06-2.44.87-4.65 1.75-6.84.82-2.05 1.73-4.1 2.69-6.08l.15-.31c.96-1.98 1.95-3.94 2.72-5.97 1.96-5.13 2.4-11.59-.74-16.27-1.9-2.85-5.14-4.58-8.33-4.91-2.15-.22-4.31.2-6.01 1.34-3.43 2.3-4.56 6.87-5.06 10.78-.57 4.43-.5 9.04-.05 13.25.23 2.13.62 4.11 1.08 5.47.2.59.39 1.04.53 1.38.12.3.16.4.16.4l.27.84-.82-.3c-.32-.12-1.04-.48-1.97-1.04-.94-.57-1.97-1.32-3.05-2.23-2.26-1.88-4.76-4.37-6.4-7.43-.78-1.47-1.35-3.08-1.56-4.74-.1-.77-.12-1.54-.02-2.28.1-.71.32-1.38.64-1.97.96-1.74 2.7-2.57 4.35-3.09 1.82-.58 3.65-.81 5.32-.54 1.88.3 3.51 1.15 4.94 2.03 1.46.9 2.68 1.86 3.92 2.63 2.39 1.5 4.85 2.38 7.18 2.35 2.37-.03 4.62-.91 6.62-2.35 1.94-1.4 3.57-3.26 4.82-5.6.48-.9.85-1.83 1.11-2.74.48-1.65.55-3.25.28-4.58-.39-1.87-1.52-3.26-2.88-4.2-.93-.64-1.94-1.11-3.02-1.49-1.05-.37-2.17-.68-3.34-.96l-.44-.1c-1.15-.26-2.33-.5-3.5-.67-1.17-.18-2.32-.3-3.39-.38-2.06-.16-3.79-.23-4.96-.27-2.31-.07-3.04-.08-3.25-.08l-.97.01z' fill='%236B7A8F' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
				// Adding new blue gradient patterns
				"blue-gradient": "linear-gradient(to right, #0A2463, #1F3A6C)",
				"soft-blue-gradient": "linear-gradient(to bottom, #FFFFFF, #F0F4F8)",
				// Adding new logistics gradient patterns
				"logistics-gradient": "linear-gradient(to right, #0A2463, #1F3A6C)",
				"logistics-accent-gradient": "linear-gradient(to right, #FF7F11, #F45D01)",
				"logistics-secondary-gradient": "linear-gradient(to right, #2D8A9E, #1C5D6B)"
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
