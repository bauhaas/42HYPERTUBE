export const SignLayout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen">
        <img
          className="object-cover w-screen md:w-1/2 md:h-screen"
          src="https://picsum.photos/200/200"
        ></img>
        {children}
      </div>
    </>
  );
};
