const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const teamName = process.env.TEAM_NAME || "Tundmatu tiim (Viga!)";

app.get("/api/info", (req, res) => {
    res.json({
        meeskond: teamName
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});