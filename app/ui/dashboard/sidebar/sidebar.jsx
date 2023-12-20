import styles from "../sidebar/sidebar.css"
import {
	MdDashboard,
	MdSupervisedUserCircle,

} from "react-icons/md"


const menuItems = [
	{
		title: "Pages",
		list: [
			{
				title: "dashboard",
				path: "/dashboard",
				icon:<MdDashboard/>
			}
		]
	}
]
const Sidebar = () => {
	return (
	  <div className={styles.container}>sidebar</div>
	)
  }
  
export default Sidebar