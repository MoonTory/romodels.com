import React from 'react';

export function Jumbotron() {
  return (
    <div
      style={{
        borderBottom: 'solid 2px #444',
        borderRadius: '0',
        marginBottom: '0'
      }}
      className='jumbotron jumbotron-fluid p-0 text-white bg-dark text-center'>
      <div
        className='view overlay'
        style={{
          backgroundSize: 'cover',
          backgroundPositionY: '50%',
          zIndex: '-1'
        }}>
        <div className='view overlay' style={{ background: '#EEF2F5', zIndex: '2', paddingBottom: '1rem' }}>
          <img alt='' src='assets/logo.svg' width='250' height='250' />
          <p className='lead text-dark' style={{ marginBottom: '0' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem eaque, assumenda dolore pariatur aliquid animi optio
            doloribus sed? Iusto quasi, minus quas, officia rem optio blanditiis consectetur perferendis accusantium, vel placeat
            aspernatur. Laboriosam quis magni quas doloremque eligendi ipsum molestias enim cupiditate culpa perspiciatis ut voluptas ad
            nobis facere quam aspernatur error corporis quaerat asperiores dicta nisi nam, dolorum obcaecati. Modi dolores, quo maxime
            labore enim reiciendis alias, esse nostrum minima unde possimus deserunt praesentium excepturi. Itaque quidem, modi animi vel
            error, labore neque reprehenderit repellat ducimus autem minus impedit veniam accusantium incidunt dicta nesciunt quasi! Modi,
            eveniet ratione.
          </p>
        </div>
      </div>
    </div>
  );
}
