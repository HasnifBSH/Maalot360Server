const {Router} = require("express");

const eventActions = require("../actions/eventAction")

const eventRouter = Router();

eventRouter.get("/", async (req, res) => {
    try {
        const events = await eventActions.getAllEvents();
        res.send(events);
    }
    catch (e) {
        res.send(e);
    }})
eventRouter.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const event =  await eventActions.getEventById(id);
        res.send(event);
    }
    catch (e) {
        res.send(e);
    }
    })

eventRouter.post("/", async (req, res) => {
    const event = req.body;

    try {
        const newEvent = await eventActions.addEvent(event);
        res.status(200).send(newEvent);
    }
    catch (e) {
        res.send(e);
    }
})
eventRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const event = req.body;

    try {
        const updatedEvent = await eventActions.updateEvent(id, event);
        res.status(200).send(updatedEvent);
    }
    catch (e) {
        res.send(e);
    }
})
eventRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedEvent = await eventActions.deleteEvent(id);
        res.status(200).send(deletedEvent);
    }
    catch (e) {
        res.send(e);
    }
})

module.exports = eventRouter;
