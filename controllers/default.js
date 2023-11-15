module.exports = {
    index: (req,res) => { 
        const pagetitle = "HOME"
        const data = {
            pagetitle: pagetitle,
            bodyClass: "classbody"
        }
        res.render("../views/default/index",{ data : data})
    },

   
    
}