import React from 'react';

function Footer() {
  return ( 
    <div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-12 bg-gray-100 text-gray-600'>
          <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>Support</h5>
          <p>Help Centre</p>
          <p>Safety Information</p>
          <p>Cancellation Options</p>
          <p>Supporting people with disabilities</p>
          <p>Report a neighbourhood concern</p>
          </div>

          <div className='flex flex-col space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>Community</h5>
          <a href='https://www.globalgiving.org/projects/ukraine-crisis-relief-fund/'>Support Ukranian Refugees</a>
          <a href='https://www.savethechildren.org/us/where-we-work/afghanistan'>Support Afghan Refugees</a>
          <p>Celebrating diversity</p>
          <p>Combating discrimination</p>
          </div >

          <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>Hosting</h5>
          <p>Try Hosting</p>
          <p>Explore hosting Resources</p>
          <p>How to host responsibly</p>
          <p>V  isit out community forum</p>
          </div >

          <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>About</h5>
          <p>How Debnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          </div>

        </div>
        <div className="border-t text-xs font-semibold px-32 py-6 bg-gray-100 text-gray-600">
          <p>© 2022 Debnb, Inc.</p>
        </div>
        
    </div>
    
  );
}

export default Footer;
