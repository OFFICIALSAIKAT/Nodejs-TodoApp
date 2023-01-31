require("dotenv").config()
const app = require("./app")
const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`)
})