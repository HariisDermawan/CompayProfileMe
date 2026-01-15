
tailwind.config = {
    theme: {
        extend: {
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite',
                'slide-in-right': 'slide-in-right 0.8s ease-out',
                'slide-in-left': 'slide-in-left 0.8s ease-out',
                'hologram': 'hologram 3s ease-in-out infinite',
                'orbit': 'orbit 20s linear infinite',
                'shimmer': 'shimmer 2s infinite',
                'scan': 'scan 2s linear infinite',
                'matrix': 'matrix 20s linear infinite',
                'particles': 'particles 4s ease-in-out infinite',
                'typing': 'typing 3.5s steps(40, end)',
                'cursor': 'cursor .75s step-end infinite',
                'cyber-scan': 'cyberScan 3s linear infinite',
                'data-stream': 'dataStream 2s linear infinite',
                'cyber-pulse': 'cyberPulse 2s ease-in-out infinite',
                'circuit-glow': 'circuitGlow 3s ease-in-out infinite',
                'terminal-blink': 'terminalBlink 1s step-end infinite',
                'glitch': 'glitch 0.3s linear infinite',
                'neon-border': 'neonBorder 2s ease-in-out infinite alternate',
                'particle-spark': 'particleSpark 2s ease-out infinite',
                'cyber-wave': 'cyberWave 4s linear infinite',
                'matrix-fall': 'matrixFall 10s linear infinite',
            },
            keyframes: {
                glow: {
                    '0%, 100%': {
                        'text-shadow': '0 0 20px #0ff, 0 0 40px #0ff, 0 0 60px #0ff',
                        'filter': 'brightness(1.2)'
                    },
                    '50%': {
                        'text-shadow': '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff',
                        'filter': 'brightness(1)'
                    }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(5deg)' }
                },
                'neon-flicker': {
                    '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: 1 },
                    '20%, 24%, 55%': { opacity: 0.4 }
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100px) scale(0.9)', opacity: 0 },
                    '100%': { transform: 'translateX(0) scale(1)', opacity: 1 }
                },
                'slide-in-left': {
                    '0%': { transform: 'translateX(-100px) scale(0.9)', opacity: 0 },
                    '100%': { transform: 'translateX(0) scale(1)', opacity: 1 }
                },
                hologram: {
                    '0%, 100%': { opacity: 0.8, transform: 'translateY(0)' },
                    '50%': { opacity: 1, transform: 'translateY(-10px)' }
                },
                orbit: {
                    '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' }
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200px 0' },
                    '100%': { backgroundPosition: '200px 0' }
                },
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(400%)' }
                },
                matrix: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(100%)' }
                },
                particles: {
                    '0%, 100%': { transform: 'translate(0, 0)', opacity: 0 },
                    '10%': { opacity: 1 },
                    '90%': { opacity: 0 }
                },
                typing: {
                    'from': { width: '0' },
                    'to': { width: '100%' }
                },
                cursor: {
                    'from, to': { borderColor: 'transparent' },
                    '50%': { borderColor: '#00f3ff' }
                },
                cyberScan: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0.5' },
                    '100%': { transform: 'translateY(100vh)', opacity: '0' }
                },
                dataStream: {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '100px 0' }
                },
                cyberPulse: {
                    '0%, 100%': {
                        'box-shadow': '0 0 5px #00f3ff, 0 0 10px #00f3ff, 0 0 15px #00f3ff',
                        'border-color': '#00f3ff'
                    },
                    '50%': {
                        'box-shadow': '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
                        'border-color': '#ff00ff'
                    }
                },
                circuitGlow: {
                    '0%, 100%': { opacity: '0.3', filter: 'brightness(1)' },
                    '50%': { opacity: '0.6', filter: 'brightness(1.5)' }
                },
                terminalBlink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.3' }
                },
                glitch: {
                    '0%, 100%': { transform: 'translate(0)' },
                    '10%': { transform: 'translate(-1px, 1px)' },
                    '20%': { transform: 'translate(1px, -1px)' },
                    '30%': { transform: 'translate(-1px, 0)' },
                    '40%': { transform: 'translate(1px, 0)' },
                    '50%': { transform: 'translate(0)' }
                },
                neonBorder: {
                    '0%': { 'border-color': '#00f3ff', 'box-shadow': '0 0 10px #00f3ff, inset 0 0 10px #00f3ff' },
                    '100%': { 'border-color': '#ff00ff', 'box-shadow': '0 0 20px #ff00ff, inset 0 0 20px #ff00ff' }
                },
                particleSpark: {
                    '0%': { transform: 'scale(0) rotate(0deg)', opacity: '1' },
                    '100%': { transform: 'scale(2) rotate(180deg)', opacity: '0' }
                },
                cyberWave: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                matrixFall: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' }
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'circuit': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2300f3ff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                'cyber-grid': 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
                'data-stream': 'linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.2), transparent)',
                'matrix-bg': 'linear-gradient(transparent 90%, rgba(0, 243, 255, 0.05) 90%)',
                'neon-gradient': 'linear-gradient(45deg, #00f3ff, #9d00ff, #ff00ff)',
            }
        }
    }
}