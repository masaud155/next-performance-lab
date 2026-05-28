export default function SectionContainer({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-10 ${className}`}>
      {children}
    </div>
  );
}
