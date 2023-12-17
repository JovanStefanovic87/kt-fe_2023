interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
  const headerHeight = 68;

  return (
    <div
      className='md:w-calendar-lg bg-ktBg flex flex-1 flex-col py-4 overflow-auto'
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      <div className='flex flex-col '>{children}</div>
    </div>
  );
};

export default Container;
