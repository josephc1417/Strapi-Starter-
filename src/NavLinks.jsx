import sublinks from './data'
import { useGlobalContext } from './Context'
const NavLinks = () => {
  const {setPageId} = useGlobalContext()
  return (
    <div className='nav-links'>
      
      {sublinks.map((link) => {
        const {pageId,page} = link
        return(
        <button key={pageId} onMouseEnter={() => setPageId(pageId)} className='nav-link'>{page}</button>
        )
      })}
    </div>
  )
}

export default NavLinks
//₋These links will show on larger screen but not on smaller screen₋
//₋By default we want to hide the links until {min-width=992px}₋
