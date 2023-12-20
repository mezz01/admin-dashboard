import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"

const Layout = ({children}) => {
	return (
	  <div>
		<div>
			<Sidebar></Sidebar>
		</div>
		<div>
			<Navbar></Navbar>
		</div>
		<div>
			{children}
		</div>
	  </div>
	)
  }
  
  export default Layout