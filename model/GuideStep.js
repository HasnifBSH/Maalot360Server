const db = require("../config/database");


const getAllGuidesStep = async () => {
    return await db.query("SELECT * FROM guideStep");
}
const getGuideStepById = async (id) => {
    const result = await db.query("SELECT * FROM guideStep WHERE id = ?", [id]);
    return result[0]; // Assuming only one result is returned
};
const addGuideStep = async (guideStep) => {
    const queryString = `INSERT INTO guideStep VALUES( 
        0,    
        '${guideStep.guide}',  
        '${guideStep.stepNumber}' , 
       '${guideStep.stepName}', 
        ${guideStep.video} )`;

    const result = await db.query(queryString);
    guideStep.id = result.insertId;
    return guideStep;
}
// Update an existing guide step
const updateGuideStep = async (id, guideStep) => {
    const queryString = `UPDATE guideStep SET guide = ?, stepNumber = ?, stepName = ?, video = ? WHERE id = ?`;
    await db.query(queryString, [
        guideStep.guide,
        guideStep.stepNumber,
        guideStep.stepName,
        guideStep.video,
        id,
    ]);
    return { id, ...guideStep };
};
const deleteGuideStep = async (id) => {
    await db.query("DELETE FROM guideStep WHERE id = ?", [id]);
    return { message: `Guide step with ID ${id} deleted successfully` };
};
module.exports = {
    getAllGuidesStep,
    getGuideStepById,
    addGuideStep,
    updateGuideStep,
    deleteGuideStep,
};