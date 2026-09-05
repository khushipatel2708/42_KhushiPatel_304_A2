const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// ------------------------------------
// Admin Inventory
// ------------------------------------

router.get(
    "/inventory",
    authMiddleware,
    adminMiddleware,
    (req, res) => {

        res.status(200).json({
            success: true,
            message: "Inventory dashboard"
        });

    }
);

module.exports = router;