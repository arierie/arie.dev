import BlogView from '../views/BlogView'

const BlogController = () => {
    return (
        <BlogView>
            <btn-medium onClick={() => {
                window.open("https://medium.com/@arieridwan", "_blank");
            }}/>
        </BlogView>
    )
}

export default BlogController
