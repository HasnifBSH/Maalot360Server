const db = require("../config/database");

const getAllEvents = async () => { 
    return await db.query("SELECT * FROM events");
}

const getEventById = async (id) => {
    const result = await db.query("SELECT * FROM events WHERE id = ?", [id]);
    return result[0]; // Assuming only one result is returned
};

const addEvent = async (event) => {
    const queryString = `INSERT INTO events VALUES( 
        0,    
        '${event.title}',  
        '${event.startDate}' , 
        '${event.endDate}', 
        ${event.userId} )`;

    const result = await db.query(queryString);
    event.id = result.insertId;
    return event;
}
// Update an existing event
const updateEvent = async (id, event) => {
    const queryString = `UPDATE events SET title = ?, startDate = ?, endDate = ? WHERE id = ?`;
    await db.query(queryString, [
        event.title,
        event.startDate,
        event.endDate,
        id,
    ]);
    return { id, ...event };
};
const deleteEvent = async (id) => {
    await db.query("DELETE FROM events WHERE id = ?", [id]);
    return { message: `Event with ID ${id} deleted successfully` };
};

module.exports = {
    getAllEvents,
    getEventById,
    addEvent,
    updateEvent,
    deleteEvent,
};


