import "../src/index.css" // Keep your existing global styles
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
