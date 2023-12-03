import TabContentNavigation from "../../components/tab-content-navigation";

export default function CategoriesRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <TabContentNavigation />
      {children}
    </main>
  );
}
