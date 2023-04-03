import '@/styles/globals.css'
//INTERNAL IMPORT 
import { chatAppProvider } from '../../Context/ChatAppContext'
import { Navbar } from '../../components/index'

const MyApp = ({ Component, pageProps }) => (
  <div>
  <chatAppProvider>
  <Component {...pageProps} />
  </chatAppProvider>
  </div>

);
export default MyApp;

