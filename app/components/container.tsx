import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 overflow-y-auto">
      <div
        className={clsx(
          "bg-shop-light-pink py-4 px-6 sm:px-10 rounded-2xl w-full max-w-md shadow-2xl",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
