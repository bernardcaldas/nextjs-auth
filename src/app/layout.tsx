  // app/layout.tsx
  
  import { Providers } from "./providers";

  import Navbar from './components/NavbarTailwind';
import './globals.css'
import { CreditsContextProvider } from "./context/creditContext";

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <CreditsContextProvider>
            <Providers>
              
              <Navbar />
              {children}
            </Providers>
          </CreditsContextProvider>
        </body>
      </html>
    );
  } 