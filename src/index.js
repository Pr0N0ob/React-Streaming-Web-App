import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=sippetadplaylist=PLwNdZFylGNgpp_dZlWsA0i9xlXeh4oiT2maxResults=50key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}
{ <ul className={styles.grid}>
    {
    data.items.map(({ id, snippet = {} }) => {
    const { title, thumbnails = {}, resourceId = {} } = snippet;
    const { medium } = thumbnails;
    return (
      <li key={id} className={styles.card}>
        <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
          <p>
            <img width={medium.width} height={medium.height} src={medium.url} alt="" />
          </p>
          <h3>{ title }</h3>
        </a>
      </li>
    )
  }) }
</ul>
}
export default function Home({ data }) {
    console.log('data', data);
}  

ReactDOM.render(<App />, document.getElementById('root'));
