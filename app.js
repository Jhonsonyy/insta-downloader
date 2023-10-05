const express = require('express');
const axios = require('axios');
const path = require('path')
const instagramDl = require('@sasmeee/igdl');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

const dir = path.join(__dirname, 'public');


app.use(express.static(dir));



app.post('/download', async (req, res) => {
  const global_link = req.body.url
  if(global_link != "" && global_link.includes("instagram")){
    res.send("File is downloading...")
    const download_obj = await instagramDl(global_link);
    const download_Link = download_obj[0].download_link;

    // Use axios to download the video
    const response = await axios.get(download_Link, { responseType: "stream" });

    if (response) {
        // Set the appropriate headers for the file download
        res.setHeader('Content-Disposition', 'attachment; filename=InstaGrabX_video.mp4');
        res.setHeader('Content-Type', 'video/mp4');
        response.data.pipe(res); // Pipe the response data to the client's response
    } else {
        res.status(404).send("No data found.");
    }
  }
  else{
    res.send("incorrect url")
  }
});


app.listen(port, () => {

});


