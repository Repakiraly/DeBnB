import React from 'react';

function Footer() {
  return ( 
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-12 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Support</h5>
        <p>Help Centre</p>
        <p>Safety Information</p>
        <p>Cancellation Options</p>
        <p>Supporting people with disabilities</p>
        <p>Report a neighbourhood concern</p>
        </div>
        
        <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Community</h5>
        <p>Support Afghan Refugees</p>
        <p>Celebrating diversity</p>
        <p>Combating discrimination</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Hosting</h5>
        <p>Try Hosting</p>
        <p>Explore hosting Resources</p>
        <p>How to host responsibly</p>
        <p>Visit out community forum</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
        </div>

    </div>
  );
}

export default Footer;
