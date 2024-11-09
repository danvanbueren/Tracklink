export const metadata = {
  title: "NEXT TESTBED",
  description: "NEXT TESTBED",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
