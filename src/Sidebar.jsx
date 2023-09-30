import { useGlobalContext } from "./Context"
import sublinks from "./data"
import { FaBars } from "react-icons/fa"


const Sidebar = () => {
  const {isSidebarOpen, openSidebar} = useGlobalContext()
  return (
    <aside >
      <div className="sidebar-container">
        <button className="close-btn" onClick={openSidebar}>
          <FaBars/>
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
              const {pageId,page,links} = item
              return(
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const {id,label,icon,url} = link
                    return (
                      <a key={id} href={url} className="link">
                        {icon}
                        {label}
                      </a> 
                    )
                  })}
                </div>
              </article>
              )
          })}
      </div>    
    </div>
  </aside>
  )
}

export default Sidebar
