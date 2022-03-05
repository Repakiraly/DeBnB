import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';


interface InfoCardInterface {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
}

function InfoCard({ img, location, title, description, star, price, total }:InfoCardInterface) {
  console.log(img)
  return (

    // Info card div - whole card
    <div className="flex pr-4 py-7 px-2 border-b cursor-pointer
                    hover:opacity-80  hover:bg-slate-100 hover:shadow-lg transform transition duration-300 ease-out first: border-t">

      {/* Image div - left side */}
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image 
        src={img} 
        layout='fill' 
        objectFit="cover"
        className="rounded-lg"/>
      </div>

      {/* Info div - right side */}
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <FavoriteBorderIcon className="h-7 cursor-pointer"></FavoriteBorderIcon>
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"/>

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
      
      <div className="flex justify-between items-end pt-5">
        <div className="flex items-center">
          <StarIcon className="h-5 text-slate-900"/>
          {star}
        </div>

        <div >
          <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
          <p className="text-right font-extralight">{total}</p>
        </div>
        </div>
      
      </div>

    </div>
  )
}

export default InfoCard;