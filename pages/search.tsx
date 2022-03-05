import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard"
import { format } from "date-fns";

interface searchResultsInterface {
searchResults: InfoCardInterface[]
}

interface InfoCardInterface {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
}

function Search({searchResults}:searchResultsInterface) {
  const router = useRouter();

  console.log(searchResults)

  const {location, startDate, endDate, numberOfGuests} = router.query;
 
  const formattedStartDate = format(new Date(startDate), "DD MMMM YYYY");
  const formattedEndDate = format(new Date(endDate), "DD MMMM YYYY");
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`}/>

      <main className="flex">
      <section className="flex-grow pt-14 px-6">


        <p className="text-xs">300+ Stays - {range} for {numberOfGuests} guests</p>

        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="filter">Cancellation Flexibility</p>
          <p className="filter">Type of Place</p>
          <p className="filter">Free Wifi</p>
          <p className="filter">Kitchen</p>
          <p className="filter">Gym</p>
          <p className="filter">Dedicated Workspace</p>
        </div>

        <div className="flex flex-col"> 
        {searchResults.map(({ img, location, title, description, star, price, total}:InfoCardInterface) => (
          <InfoCard 
          key = {img}
          img={img}
          location={location}
          title={title}
          description={description}
          star={star}
          price={price}
          total={total}
          />
        ))}
        </div>

      </section>
      </main>

      <Footer/>
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());

  return {
    props:{
      searchResults,
    },
  }
}