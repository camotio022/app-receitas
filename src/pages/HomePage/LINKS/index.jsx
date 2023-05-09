const links = [
    {
        name: 'Home',
        icon: <HomeIcon />,
        onclick: onclick,
    },
    {
        name: 'Pages',
        icon: <MenuBookIcon />,
        onclick: onclick,
    },
    {
        name: 'Receitas',
        icon: <FlatwareIcon />,
        onclick: onclick,
    },
    {
        name: 'Comunidade',
        icon: <GroupIcon />,
        onclick: onclick,
    },
    {
        name: 'Videos',
        icon: <SlowMotionVideoIcon />,
        onclick: onclick,
    },
]
export const MenuLinks = () => {
    return (
        <>
            <div className="menu">
                <div className="wrap">
                    <div className="icon_li">{icon}</div>
                    <div className="name_li">{name}</div>
                </div>
            </div>
        </>
    )
}