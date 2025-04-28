const GuideStep = require("../model/GuideStep");

const getAllGuideStep =async ()=>{
    try{
        return await GuideStep.getAllGuidesStep();
    }
    catch(e){
        throw new Error("Erro in action file");
    }
}

const getTodosByUserId = async (id)=>{
    return await GuideStep.getGuideStepById(id);
}

const addTodo = async (todo)=>{
    return await GuideStep.addGuideStep(todo);
}

const updateGuideStep = async (id, guideStep) => {
    return await GuideStep.updateGuideStep(id, guideStep);
};

const deleteGuideStep = async (id) => {
    return await GuideStep.deleteGuideStep(id);
}


module.exports = {getAllGuideStep, getTodosByUserId, addTodo, updateGuideStep, deleteGuideStep};