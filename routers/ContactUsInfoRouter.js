const { Router } = require("express");
const ContactUsInfoActions = require("../actions/ContactUsInfoActions")
const ContactUsInfoRouter = Router();


//getAll
ContactUsInfoRouter.get("/", async (req, res) => {
    try {
        const ContactUsInfo = await ContactUsInfoActions.getAllContactUsInfo();
        res.send(ContactUsInfo);
    }
    catch (e) {
        res.send(e);
    }
})

ContactUsInfoRouter.get('/excell', async (req, res) => {
    const workbook = await ContactUsInfoActions.getMessagesInExcel();
    // שליחת הקובץ למשתמש
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=Messages.xlsx');

    return workbook.xlsx.write(res)
        .then(() => {
            res.end();
        });
    req.send('success');

})
//getById
ContactUsInfoRouter.get("/:id", async (req, res) => {

    const { id } = req.params;

    try {
        const userContactUsInfo = await ContactUsInfoActions.getContactUsInfoByUserId(id);
        res.send(userContactUsInfo);
    }
    catch (e) {
        res.send(e);
    }
})

//add
ContactUsInfoRouter.post("/", async (req, res) => {
    const contactUsInfo = req.body;
    try {
        const newContactUsInfo = await ContactUsInfoActions.addContactUsInfo(contactUsInfo);
        res.status(200).send(newContactUsInfo);
    }
    catch (e) {
        res.send(e);
    }
}
)

//delete
ContactUsInfoRouter.delete("/:id", async (req, res) => {
    try {
        const deletedContactUsInfo = await ContactUsInfoActions.deleteContactUsInfoByUserId(id);
        res.status(200).send(deletedContactUsInfo);
    }
    catch (e) {
        res.send(e);
    }
}
)
//update
ContactUsInfoRouter.put("/:id", async (req, res) => {
    const updateContactUsInfo = req.body;
    try {
        const newUpdateContactUsInfo = await ContactUsInfoActions.UpdateContactUsInfo(req.params.id, updateContactUsInfo);
        res.status(200).send(newUpdateContactUsInfo);
    }
    catch (e) {
        res.send(e);
    }
}
)


//changeStatus
ContactUsInfoRouter.put("/changeStatus/:id", async (req, res) => {
    try {

        const newContactUsInfo = await ContactUsInfoActions.changeStatus(req.params.id, req.body.status);
        res.status(200).send(newContactUsInfo);
    }
    catch (e) {
        res.send(e);
    }
}
)



// פונקציה להורדת הודעות כקובץ Excel
// ContactUsInfoRouter.get('/', async (req, res) => {

//     try {
//         const ContactUsInfo = await ContactUsInfoActions.getMessagesInExcel();
//         res.send(ContactUsInfo);
//     }
//     catch (e) {
//         res.send(e);
//     }
// try {
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Messages');

//     // הגדרת כותרות
//     worksheet.columns = [
//         { header: 'Message', key: 'message', width: 50 },
//     ];

//     // קבלת רק העמודה המתאימה מהמסד
//     db.query('SELECT message FROM maalot360db.contactusinfo', (err, results) => {
//         if (err) {
//             return res.status(500).send(err);
//         }

//         // הוספת כל הודעה לWorksheet
//         results.forEach(row => {
//             worksheet.addRow(row);
//         });

//         // שליחת הקובץ למשתמש
//         res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//         res.setHeader('Content-Disposition', 'attachment; filename=Messages.xlsx');

//         return workbook.xlsx.write(res)
//             .then(() => {
//                 res.end();
//             });
//     });
// } catch (error) {
//     res.status(500).send(error);
// }
// });



module.exports = ContactUsInfoRouter