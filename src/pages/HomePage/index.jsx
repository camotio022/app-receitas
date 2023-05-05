import './index.css'
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FlatwareIcon from '@mui/icons-material/Flatware';
import GroupIcon from '@mui/icons-material/Group';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { AppColors } from '../../colors';
import { Container, ContainerAll } from '../../App/styles';


const links = [
    {
        name: 'Home',
        icon: <HomeIcon />,
        onclick: 'home',
    },
    {
        name: 'Pages',
        icon: <MenuBookIcon />,
        onclick: 'pages',
    },
    {
        name: 'Receitas',
        icon: <FlatwareIcon />,
        onclick: 'receitas',
    },
    {
        name: 'Comunidade',
        icon: <GroupIcon />,
        onclick: 'comunidade',
    },
    {
        name: 'Videos',
        icon: <SlowMotionVideoIcon />,
        onclick: 'videos',
    },
]
export const Links = ({ name, icon, onclick, handlePages }) => {
    const onClick = () => {
        if (onclick == 'home') {
            handlePages()
        }
    }

    return (
        <>
            <div onClick={onClick} className="wrap">
                <div className="icon_li">{icon}</div>
                <div className="name_li">{name}</div>
            </div>
        </>
    )
}
export const HomePage = () => {

    return (
        <>
            <ContainerAll>
                <AppColors />
                <div className="side_bar">
                    <Container>
                        <h1 className="logo">20MinutesOk</h1>
                        <div className="menu">
                            {links.map((i) => {
                                return (<Links key={i.name} {...i} />)
                            })}
                        </div>
                    </Container>
                </div>
            </ContainerAll>

        </>
    )
}