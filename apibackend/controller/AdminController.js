const Helper = require('../common/helper');

async function directNotification(req, res) {
    const {
      userFrom,
      userToId,
      title,
      body
    } = req.body.params;

    try{
        Helper.sendDirectNotification({
            userFrom,
            userToId,
            title,
            body
        });
    } catch(e) {
        console.log("sending failed:", e);
        return res.status(400).json(e);
    }

    return res.send({success: {
        userToId: userToId,
    }});
}

module.exports = {
    directNotification,
};
