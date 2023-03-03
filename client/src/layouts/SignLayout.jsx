export const SignLayout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen">
        <img
          className="w-screen object-cover md:h-screen md:w-1/2"
          src="https://picsum.photos/200/200"
        ></img>
        {children}
      </div>
    </>
  );
};
