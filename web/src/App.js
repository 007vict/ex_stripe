import "@stripe/stripe-js"
import Header from './pages/Header'
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import About from "./pages/About";
import {Route, Routes} from 'react-router-dom'
import importScript from "./utils/importScript";
import Home2 from './pages/Home2'
import Cancel from "./pages/stripe/Cancel";
import Success from "./pages/stripe/Success";



function App() {
	importScript("./../../public/assets/nicepage.js")
	return (
		<>
			<Header/>
			<Routes>
				<Route exact path="/cancel" element={<Cancel/>}/>
				<Route exact path="/success" element={<Success/>}/>
				<Route exact path="/О-нас.html" element={<About/>}/>
				<Route exact path="/Контакты.html" element={<Contact/>}/>
				{/*<Route exact path="/Главная.html" element={<Home/>}/>*/}
				<Route exact path="/" element={<Home2 />}/>
			</Routes>
			<Footer/>
		</>
	)
}

export default App;
