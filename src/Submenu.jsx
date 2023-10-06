import { useGlobalContext } from "./Context"
import sublinks from "./data"



const Submenu = () => {
  const {pageID} = useGlobalContext()
  const page = sublinks.find((link) => link.pageId === pageID)
  console.log(page)
  return (
    <div className="submenu1">
        <h5>{page?.page}</h5>
        <div className="submenu-links" style={{gridTemplateColumns:page?.links?.length> 3 ? '1fr 1fr' : '1fr'}}>
         

    </div>
  )
}

export default Submenu
