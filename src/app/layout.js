
import "./globals.css";

// importando componentes
import Header from "../components/header/header"
import Footer from "../components/footer/footer"




export const metadata = {
  title: "Gelateria",
  description: "Pagina de uma sorvteria ficticia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
