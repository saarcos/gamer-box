import Navbar from "@/components/Navbar";
export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="max-w-screen bg-dark-purple">
        <Navbar />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}