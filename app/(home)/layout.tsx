import Navbar from "@/components/general/Navbar";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
    </main>
  );
};
export default HomeLayout;
