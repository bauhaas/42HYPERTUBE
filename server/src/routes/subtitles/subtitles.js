import dotenv from 'dotenv';
import express from 'express';
import Opensubtitles from 'opensubtitles.com';

const router = express.Router();
dotenv.config();
console.log(process.env.OPENSUBTITLES_API_KEY);
const os = new Opensubtitles({
  apikey: process.env.OPENSUBTITLES_API_KEY,
});

os.login({
  username: process.env.OPENSUBTITLES_USERNAME,
  password: process.env.OPENSUBTITLES_PASSWORD,
})
  .then((response) => {
    /* response {
	  token: '<YOUR BEARER TOKEN>',
	  user: { <USER PROFILE DETAIL > },
	  status: 200
	}*/
    console.log(JSON.stringify(response));
  })
  .catch(console.error);

function download_subs(imdb_id_str) {
  console.log(`Downloading subs for ${imdb_id_str}`);
  return os
    .subtitles({
      imdb_id: imdb_id_str,
    })
    .then((response) => {
      /* response {
		  total_pages: 1,
		  total_count: 13,
		  page: 1,
		  data: <SUBTITLES LIST>
		} */
      console.log(JSON.stringify(response));
    })
    .catch(console.error);
}

// Home page route.
router.get('/', function (req, res) {
  res.send('Return all subtitles?');
});

router.get('/:imdb_id', async function (req, res, next) {
  // Can take both tt0887883 and 0887883 as the imdb id.
  download_subs(req.params.imdb_id);
  res.send(200); // signal the response is successful
});

export default router;
