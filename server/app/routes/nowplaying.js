export default async function nowPlayingHandler(req, res) {
	const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjc1NDM3MTZhMDAyNWIxYmI0MjRkMzFhZTY3MDdjMCIsInN1YiI6IjY1N2ZhN2U4MzRlMTUyMDg2MDA3NjNlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bz1xGjgdzZ2Ue5EbccurF6Yzrj4WxWhQEl1kt6MLCBY'
		}
	};

	fetch(url, options)
		.then(res => res.json())
		// .then(json => console.log(json))
		.catch(err => console.error('error:' + err));

	try {
		let response = await fetch(url, options);
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
}

