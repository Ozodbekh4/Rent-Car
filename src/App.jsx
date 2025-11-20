import Header from './layouts/Header'
import Content from './layouts/Content'
import Footer from './layouts/Footer'
import './scss/App/App.scss'
import './global.scss'

function App() {
	return (
		<div className='App'>
			<Header />
			<Content />
			<Footer />
		</div>
	)
}

export default App
