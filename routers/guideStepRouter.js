const express = require("express");
const multer = require("multer");
const guideStepAction = require("../actions/guideStepAction");

const router = express.Router();

// הגדרת multer לשמירת קבצים בתיקייה "uploads"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // תיקייה לשמירת הקבצים
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // שם ייחודי לקובץ
    },
});
const upload = multer({ storage });

// קבלת כל השלבים
router.get("/", async (req, res) => {
    try {
        const guideSteps = await guideStepAction.getAllGuideStep();
        res.json(guideSteps);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// הוספת שלב חדש עם העלאת קובץ וידאו
router.post("/", upload.single("video"), async (req, res) => {
    try {
        const guideStep = req.body;
        const videoFileName = req.file ? req.file.filename : null; // שם הקובץ שהועלה
        const newGuideStep = await guideStepAction.addTodo(guideStep, videoFileName);
        res.status(201).json(newGuideStep);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// עדכון שלב קיים עם העלאת קובץ וידאו
router.put("/:id", upload.single("video"), async (req, res) => {
    try {
        const guideStep = req.body;
        const videoFileName = req.file ? req.file.filename : null; // שם הקובץ שהועלה
        const updatedGuideStep = await guideStepAction.updateGuideStep(req.params.id, guideStep, videoFileName);
        res.json(updatedGuideStep);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;