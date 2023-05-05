import './index.css'
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FlatwareIcon from '@mui/icons-material/Flatware';
import GroupIcon from '@mui/icons-material/Group';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { Container, ContainerAll, ItemLi, TagReview, Title } from '../../App/styles';
import { Card } from '../../App/styles/index';
import Churos from '../../images/imgsPages/churos.jpg';



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
            <ItemLi onClick={onClick}>
                <div className="icon_li">{icon}</div>
                <div className="name_li">{name}</div>
            </ItemLi>

        </>
    )
}
export const HomePage = () => {

    return (
        <>
            <ContainerAll>
                <div className="side_bar">
                    <Container>
                        <Title>Home</Title>
                        <div className="menu">
                            {links.map((i) => {
                                return (<Links key={i.name} {...i} />)
                            })}
                        </div>
                    </Container>
                </div>
                <div className="cards-home">
                    <Card className='card'>
                        <img src={Churos} alt="" />
                        <div className="card_content">
                            <h1 className='title-recipe'>
                                Churos da hora mesmo
                            </h1>
                            <p className='stars-recipe'>five estars 132</p>
                        </div>
                        <div className="card_footer">
                            <div className="card-user-image">Image</div>
                            <div className="card-username-smscounter">
                                <div className="username">Temotio luis</div>
                                <div className="smscounterchats">
                                    <div>12</div>
                                    <div>212</div>
                                </div>
                            </div>
                            <TagReview className="card-review-score">
                               99.2
                            </TagReview>
                        </div>
                    </Card>
                </div>
            </ContainerAll>

        </>
    )
}