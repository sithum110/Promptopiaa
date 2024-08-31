import '@style/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "promtoidea",
    description: "AI-powered web development",
}

const Root_layout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <provider>
            <div className='main'>
                <div className='gradient'></div>
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
            </provider>
        </body>
    </html>
  );
}

export default Root_layout;
