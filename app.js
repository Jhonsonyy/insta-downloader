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
  const link_length = global_link.length;
  if(link_length != 0 && global_link.includes("instagram")){
    const download_obj = await instagramDl(global_link);
    const download_Link = download_obj[0].download_link;

    // Use axios to download the video
    const response = await axios.get(download_Link, { responseType: "stream" });

    if (response) {
  // Set the appropriate headers for the file download
  res.setHeader('Content-Disposition', 'attachment; filename=InstaGrabX_video.mp4');
  res.setHeader('Content-Type', 'video/mp4');
  res.setHeader('Content-Length', response.headers['content-length']);

  // Stream the data and handle errors
  response.data.pipe(res);
  res.send("File is downloading...")

  response.data.on('error', (err) => {
    // Handle the error, e.g., send an error response to the client
    console.error('Error while streaming data:', err);
    res.status(500).send('Internal Server Error');
  });
} else {
  // Handle the case when response is null or undefined
  res.status(404).send('Not Found');
}

  }

});


app.listen(port, () => {

});


