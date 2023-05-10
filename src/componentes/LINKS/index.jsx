


import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import './index.css'
import { Container } from '../../App/styles';
const links = [
    { name: 'Home', href: '' },
    { name: 'Pages', href: '' },
    { name: 'Blog', href: '' },
    { name: 'Recitas favoritas', href: '' },
    { name: 'Comunidade', href: '' },
]
export const Links_a = ({
    name, href
}) => {
    return (
        <div className="link">
            <Link to={href}>
                {name}
            </Link>
            <div className='showlinkIcon'><ArrowDropDownIcon /></div>
        </div>
    )
}



export const Links = () => {
    return (
        <>
            <Container className='links_menu'>
                <h2>20MinutesOk</h2>
                <div className='showlinkIcon'>
                    <MenuIcon />
                </div>
                <div className="links">
                    <h1 className='showlinkIcon'>
                        20MinutesOk
                    </h1>
                    {
                        links.map((li) => {
                            return (

                                <Links_a key={li.name} {...li} />
                            )
                        })
                    }
                </div>
            </Container>
        </>
    )
}