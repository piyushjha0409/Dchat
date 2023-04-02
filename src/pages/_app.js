import '@/styles/globals.css'
//INTERNAL IMPORT 
import chatAppProvider from '../../Context/ChatAppContext'

export default function App({ Component, pageProps }) {
  return (
  <chatAppProvider>
  <Component {...pageProps} />
  </chatAppProvider>
  )
}
