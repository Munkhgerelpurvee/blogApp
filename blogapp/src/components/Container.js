export const Container = ({ children }) => {
  return (
    <div className="w-screen">
      <div className="w-full h-full m-auto Lg:max-w-screen-lg">{children}</div>
    </div>
  );
};
