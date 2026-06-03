import { ReactNode } from 'react';
import type { DiscoData } from '../../const/discos';

function renderAlbumInfo(album: DiscoData['album'], disco: DiscoData): ReactNode {
  return (
    <>  
    {album.map((item, i) => (
      <div key={i} className="list-row">
        <span className="list-row-label">{item.label}</span>
        <span className={`list-row-value ${item.value}`}>
          {item.value}
        </span>
      </div>
    ))}
  </>
  );
}

export function getDiscoInfo(disco: DiscoData): ReactNode {
  return renderAlbumInfo(disco.album, disco as DiscoData & { partituraUrl?: string; letraUrl?: string });
}
