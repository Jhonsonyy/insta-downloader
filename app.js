const express = require('express');
const axios = require('axios');
const path = require('path')
const instagramDl = require('@sasmeee/igdl');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

const dir = path.join(__dirname, 'public');
let final_obj = ""
let getdata = "";
let thumbnail = "";

app.use(express.static(dir));


app.post('/downloadpage', async (req, res) => {
  getdata = req.body;
  console.log(getdata.key)
  res.send("got it")
})


app.get('/object_grab', async (req, res) => {
    const download_obj = await instagramDl(getdata.key)
    final_obj = download_obj[0]
    res.json(final_obj)

})



app.listen(port, () => {
  console.log("running on port: ", port)
});


