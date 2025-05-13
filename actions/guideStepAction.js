const GuideStep = require("../model/GuideStep");

const getAllGuideStep = async () => {
    try {
        return await GuideStep.getAllGuidesStep();
    } catch (e) {
        throw new Error("Error in action file");
    }
};

const getTodosByUserId = async (id) => {
    return await GuideStep.getGuideStepById(id);
};

const addTodo = async (todo, videoFileName) => {
    // עדכון שם הקובץ של הווידאו
    todo.video = videoFileName;
    return await GuideStep.addGuideStep(todo);
};

const updateGuideStep = async (id, guideStep, videoFileName) => {
    // אם יש קובץ וידאו חדש, עדכן את שם הקובץ
    if (videoFileName) {
        guideStep.video = videoFileName;
    }
    return await GuideStep.updateGuideStep(id, guideStep);
};

const deleteGuideStep = async (id) => {
    return await GuideStep.deleteGuideStep(id);
};

module.exports = { getAllGuideStep, getTodosByUserId, addTodo, updateGuideStep, deleteGuideStep };