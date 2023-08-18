
import { useState } from 'react'
import { MenuContent } from './components/MenuContent/index.jsx'
import { links } from './consts/links.jsx'
export const MainLayout = ({ children }) => {
  const [opens, setopens] = useState(null)
  const [selectedLink, setSelectedLink] = useState()
  const [anchorEl, setAnchorEl] = useState(null)
  const [showLinks, setShowLinks] = useState(false)
  const handleOpenUserMenu = (e) => {
    setAnchorEl(e.target)
    setopens(true)
  }
  const handleSelectLink = (event, newLink) => {
    if (selectedLink === newLink) {
      setSelectedLink(null)
      return
    }
    setSelectedLink(newLink)
    setAnchorEl(event.target)

  }
  const handleClose = () => {
    setSelectedLink(null)
    setAnchorEl(null)

  }
  const open = Boolean(opens)
  const handleClick = (event) => {
    setopens(event.currentTarget)
  }
  const Close = () => {
    setopens(null)
  }
  return (
    <MenuContent
      handleClose={handleClose}
      Close={Close}
      handleClick={handleClick}
      showLinks={showLinks}
      setShowLinks={setShowLinks}
      open={open}
      links={links}
      selectedLink={selectedLink}
      anchorEl={anchorEl}
      children={children}
      handleSelectLink={handleSelectLink}
      handleOpenUserMenu={handleOpenUserMenu}
    />
  )
}
