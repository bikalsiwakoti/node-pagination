const express = require('express');
const userRoute = require('./routes/user')
const cors = require('cors')

const PORT = 8000;
const app = express();
app.use(cors())

app.use("/api", userRoute)

app.listen(PORT, () => {
  console.log(`listening on a port ${PORT}`);
})