module.exports = {
    index: (req,res) => { 
        // Show login form
        const pagetitle = "LOGIN"
        const data = {
            pagetitle: pagetitle
        }
        res.render("../views/user/index",{ data : data})
    },

    login: (req,res) => {
        // Processing login
        res.send("LOGIN PROC")
    }, 

    register_form: (req,res) => {
        // Show register form
        res.send("REGISTER FORM")
    },

    register_process: (req,res) => {
        // Show register form
        res.send("REGISTER PROC")
    }
    
}