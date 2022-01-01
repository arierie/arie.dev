import NavigationView from '../views/NavigationView'

const NavigationController = () => {
    return (
        <NavigationView>
            <nav-home href="/" />
            <nav-about href="/about" />
            <nav-blog href="/blog" />
            <nav-contact href="/contact" />
            <nav-playlist href="/playlist" />
        </NavigationView>
    )
}

export default NavigationController
