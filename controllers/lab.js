module.exports = {
    index: (req,res) => {
        require('dotenv').config() 
        const pagetitle = "LAB"
        const data = {
            pagetitle: pagetitle,
            bodyClass: "",
            env:process.env.DATABASE_HOST
        }
        res.render("../views/lab/index",{ data : data})
    },

   
    
}