import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { DataProvider } from './Context/DataContext.jsx';
import firebaseConfig from './firebaseConfig .js';
createRoot(document.getElementById('root')).render(
<DataProvider>
    <StrictMode>
    <App />
  </StrictMode>
</DataProvider>
)
