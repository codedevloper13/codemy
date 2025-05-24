export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="w-full h-screen">
          <div className="flex h-full w-full items-center justify-center">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-300 to-green-200 z-[-1]"/>
              {children}
          </div>
    </div>
  );
}
