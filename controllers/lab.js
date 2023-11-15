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
    sequelize: (req,res) => {
        require('dotenv').config() 
        const pagetitle = "LAB"
        const data = {
            pagetitle: pagetitle,
            bodyClass: "",
            env: "SEQUELIZE"
        }
        res.render("../views/lab/sequelize",{ data : data})
    }

   
    
}