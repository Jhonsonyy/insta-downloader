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
  const global_link = req.body.url;
  if (global_link !== '' && global_link.includes('instagram')) {
    try {
      const download_obj = await instagramDl(global_link);
      const download_Link = download_obj[0].download_link;
      // Use axios to download the video
      const response = await axios.get(download_Link, { responseType: 'stream' });

      // Set the appropriate headers for the file download
      function delayFiveSeconds() {
  setTimeout(() => {
    console.log('5 seconds have passed.');
      res.setHeader('Content-Disposition', 'attachment; filename=InstaGrabX_video.mp4');
      res.setHeader('Content-Type', 'video/mp4');
     res.setHeader('Content-Length', response.headers['content-length']);
      
      // Pipe the response data to the client's response
      response.data.pipe(res);
  }, 5000); 
}
delayFiveSeconds();

// Call the function to start the 5-second timer
    } catch (error) {
      res.status(500).send('Error downloading video.');
    }
  } else {
    res.status(400).send('Invalid Instagram URL.');
  }
});

app.listen(port, () => {

});


