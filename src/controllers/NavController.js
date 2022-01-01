import NavView from '../views/NavView'

const NavController = () => {
    return (
        <NavView>
            <nav-logo href="/"/>
            <nav-home href="/" />
            <nav-about href="/about" />
            <nav-blog href="/blog" />
            <nav-contact href="/contact" />
            <nav-playlist href="/playlist" />
        </NavView>
    )
}

export default NavController
