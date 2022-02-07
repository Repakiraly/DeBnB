import Head from "next/head"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Smallcard from "../components/Smallcard";
import Mediumcard from "../components/Mediumcard";
import medcard from "../sources/medcard.json"

export default function Home({exploreData} : {exploreData:any}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    {/*Header*/}
    <Header></Header>
    {/* Banner */}
    <Banner></Banner>

     <main className="max-w-7xl mx-auto px-8 sm:px-16">
       <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5">
          Explore Nearby
        </h2>

        {/* Pull some data from Server , API endpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
             {exploreData?.map((item: any) => (
        <Smallcard 
        key={item.img}
        img={item.img} distance={item.distance} location={item.location} 
        />
          ))}
        </div>
     
       </section>

      <section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        <div className="flex space-x-3 overflow-scroll">
           {medcard?.map((item: any) => (
        <Mediumcard
        key={item.img}
        img={item.img} title={item.title}  
        />
          ))} 
        </div>
       
      </section>

       </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res => res.json())
  );

  // const cardsData = await fetch('https://jsonkeeper.com/b/VHHT').then(
  //   (res => res.json())
  // );

  return {
    props: {
      exploreData,
      // cardsData
    }
  }
}
