const {Router}  = require("express");
const guideStepActions = require("../actions/guideStepAction")

const guideStepRouter = Router();

guideStepRouter.get("/", async (req, res) => {
    try {
        const guideSteps = await guideStepActions.getAllGuideStep();
        res.send(guideSteps);
    }
    catch (e) {
        res.send(e);
    }
})

guideStepRouter.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const guideStep =  await guideStepActions.getTodosByUserId(id);
        res.send(guideStep);
    }
    catch (e) {
        res.send(e);
    }

    } )
guideStepRouter.post("/", async (req, res) => {
    const guideStep = req.body;

    try {
        const newGuideStep = await guideStepActions.addTodo(guideStep);
        res.status(200).send(newGuideStep);
    }
    catch (e) {
        res.send(e);
    }
})
guideStepRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const guideStep = req.body;

    try {
        const updatedGuideStep = await guideStepActions.updateGuideStep(id, guideStep);
        res.status(200).send(updatedGuideStep);
    }
    catch (e) {
        res.send(e);
    }
})
guideStepRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedGuideStep = await guideStepActions.deleteGuideStep(id);
        res.status(200).send(deletedGuideStep);
    }
    catch (e) {
        res.send(e);
    }
})
module.exports = guideStepRouter;      




