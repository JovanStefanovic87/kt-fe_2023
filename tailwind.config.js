/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ktOrange: '#FC9815',
        ktBlueGray: '#7B8D8E',
        ktHeaderGray: '#202020',
        ktCyan: '#0D3B4E',
        ktBg: '#303030',
        ktAppointmentBg: '#555555',
        ktAppointmentTime: '#f8cc03',
        ktFormItemName: '#A05C03',
      },
      transitionDuration: {
        'instant': '0ms',
        'fast': '100ms',
        'medium': '500ms',
        'slow': '1000ms',
      },
      height: {
        'appointmentSlot': '7rem',
        'calHeight': '72dvh',
        'slotDayHeight': '3rem',
        'header': 68,
        'main': 'calc(100dvh - 75px)',
      },
      width: {
        'slotsWidth': 200,
        'calendarSlots': 200 * 7.22,
        'calendar-lg': 'calc(100dvw - 24rem)',
        'form': '850px',
        '98dvw': '98dvw'
      },
      minWidth: {
        'label': 140,
        'slotsWidth': 200,
        'form': '95dvw'
      },
      maxWidth: {
        '95': '95dvw',
        'select': 150,
        'slotsWidth': 200,
      },
      zIndex: {
        '3': 3,
      },
    },
  },
  plugins: [],
};
