const event=require("../model/Event");

const getAllEvents = async () => {
    try {
        return await event.getAllEvents();
    } catch (e) {
        throw new Error("Error in action file");
    }
}
const getEventById = async (id) => {
    try {
        return await event.getEventById(id);
    } catch (e) {
        throw new Error("Error in action file");
    }
}
const addEvent = async (event) => {
    try {
        return await event.addEvent(event);
    } catch (e) {
        throw new Error("Error in action file");
    }
}
const updateEvent = async (id, event) => {
    try {
        return await event.updateEvent(id, event);
    } catch (e) {
        throw new Error("Error in action file");
    }
}
const deleteEvent = async (id) => {
    try {
        return await event.deleteEvent(id);
    } catch (e) {
        throw new Error("Error in action file");
    }
}

module.exports = { getAllEvents, getEventById, addEvent, updateEvent, deleteEvent };