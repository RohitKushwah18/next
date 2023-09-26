import '../styles/globals.css';
import '../App.css';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
