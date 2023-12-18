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
        ktHeaderGrayLight: '#3C3C3C',
        ktCyan: '#0D3B4E',
        ktBg: '#303030',
        ktAppointmentBg: '#555555',
        ktAppointmentTime: '#f8cc03',
        ktListItemName: '#A05C03',
        sideBarBg: '#555555',
        sideBarBgHover: 'rgb(17 24 39)',
        backdrop: 'rgba(0, 0, 0, 0.85)',
      },
      transitionDuration: {
        instant: '0ms',
        fast: '100ms',
        medium: '500ms',
        slow: '1000ms',
      },
      height: {
        appointmentSlot: '7rem',
        calHeight: '72dvh',
        slotDayHeight: '3rem',
        header: 68,
        main: 'calc(100dvh - 68px)',
        list: 'calc(100dvh - 200px)',
        logo: 55,
      },
      width: {
        slotsWidth: 200,
        calendarSlots: 200 * 7.22,
        'calendar-lg': 'calc(100dvw - 24rem)',
        'calendar-sm': 'calc(100dvw - 3.5rem)',
        form: '850px',
        '98dvw': '98dvw',
        logo: 225,
        workingHoursSlotXl: '32%',
        workingHoursSlotLg: '49%',
      },
      minWidth: {
        label: 140,
        slotsWidth: 200,
        form: '95dvw',
        time: 100,
      },
      maxWidth: {
        95: '95dvw',
        select: 150,
        slotsWidth: 200,
      },
      margin: {
        header: 68,
        slotsWidth: 200,
      },
      spacing: {
        header: 68,
      },
      zIndex: {
        3: 3,
        4:4,
        5: 5,
        6: 6,
        7: 7,
      },
    },
  },
  plugins: [],
};
