import React from 'react';

// import { CardWrapper } from '../../CardWrapper';

function mockData(data) {
  for (let index = 0; index < 20; index++) {
    data.push({
      id: index,
      url: 'http://placehold.it/200x200'
    });
  }

  return data;
}

export function Gallery() {
  let data = [];
  mockData(data);

  return (
    <div className="container">
      <div className="row">
        {data.map((value, index) => {
          return (
            <div
              key={index}
              style={{ marginBottom: '1rem', marginTop: '1rem' }}
              className="col-lg-3 col-md-4 col-sm-6"
            >
              <a href={value.url}>
                <div className="card shadow-sm">
                  <img src={value.url} alt={index} className="card-img-top" />
                  <div
                    style={{ padding: '0.35rem' }}
                    className="card-body text-center"
                  >
                    {value.id}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
