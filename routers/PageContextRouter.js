const {Router}  = require("express");
const PageContextActions = require("../actions/PageContextActions")

const PageContextRouter = Router();


//getAll
PageContextRouter.get("/", async (req, res) => {
    try {
        const PageContextInfo = await PageContextActions.getAllPageContext();
        res.send(PageContextInfo);
    }
    catch (e) {
        res.send(e);
    }
})
//getById
PageContextRouter.get("/:id", async (req, res) => {

    const { id } = req.params;

    try {
        const userPageContextInfo =  await PageContextActions.getPageContextByUserId(id);
        res.send(userPageContextInfo);
    }
    catch (e) {
        res.send(e);
    }
})

//add
PageContextRouter.post("/", async (req, res) => {
    const pageContextInfo = req.body;
    try {
        const newPageContext = await PageContextActions.addPageContext(pageContextInfo);
        res.status(200).send(newpageContext);
    }
    catch (e) {
        res.send(e);
    }
}
)
//delete
PageContextRouter.delete("/:id", async (req, res) => {
    try {
        const deletedPageContext = await PageContextActions.deletePageContextByUserId(id);
        res.status(200).send(deletedPageContext);
    }
    catch (e) {
        res.send(e);
    }
}
)
//update
PageContextRouter.put("/:id", async (req, res) => {
    const pageContextInfo = req.body;
    try {
        const newPageContext= await PageContextActions.UpdatePageContext(req.params.id,pageContextInfo);
        res.status(200).send(newPageContext);
    }
    catch (e) {
        res.send(e);
    }
}
)


module.exports = PageContextRouter