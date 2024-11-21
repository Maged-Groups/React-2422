// Layouts
import Header from "./layout/Header";
import TopNav from "./layout/TopNav";
import Footer from "./layout/Footer";

// Routes
import Pages from './pages'

// Modals
import Modals from "./modals";
import { ToastContainer } from "react-toastify";

function App() {
  const app_title = 'My Company';

  const app_version = '1.0.1';


  return (
    <div className="text-gray-100 text-xl">
      {/* <Header app_title={app_title} username='Maged' /> */}

      <Modals />

      {/* Main Toast container */}
      <ToastContainer />

      <TopNav />

      <div className="p-4">
        <Pages />
      </div>

      <Footer />
    </div>
  );
}

export default App;
