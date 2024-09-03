class adminController{
    static dashboard = async (req, res) => {
        try {
            res.render('admin/dashboard')
        } catch (errror) {
            console.log(error)
        }
    }
}