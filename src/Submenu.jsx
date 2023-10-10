import { useGlobalContext } from "./Context"
import sublinks from "./data"
import { useRef } from "react"


const Submenu = () => {
  const {pageId, setPageId} = useGlobalContext()
  const currentPage = sublinks.find((item => item.pageId === pageId))
  console.log(currentPage)

const submenuContainer = useRef(null)


  const handleMouseLeave = (event) =>{
    const submenu = submenuContainer.current;
    
    //When function is called we can destructure the values and use them in our conditional statement
    const {left,right,bottom} = submenu.getBoundingClientRect();
    const {clientX,clientY} = event;

    if(clientX < left -1 || clientX > right -1 || clientY > bottom -1){
      setPageId(null)
    }
    
  }




  return (
    <div className={currentPage ? "submenu show-submenu" : "submenu"}
    onMouseLeave={handleMouseLeave}
    ref={submenuContainer}
    >
        <h5>{currentPage?.page}</h5>
        <div className="submenu-links" style={{gridTemplateColumns:currentPage?.links?.length> 3 ? '1fr 1fr' : '1fr'
        }}
        >
          {currentPage?.links.map(link => {
            const {id,label,icon,url} = link
            return(
              <a key={id} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
    </div>
  )
}

export default Submenu
