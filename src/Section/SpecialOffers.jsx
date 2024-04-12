import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffers = () => {
  return (
    <section id="SpecialOffer"  className="flex
    justify-wrap items-center
    max-xl:flex-col-reverse
    gap-10 max-container"> 
      <div className="flex-1">
        <img src={offer}
          width={773}
          height={687}
          className="object-contain w-full"

        />
        </div>
      <div className="flex flex-1 flex-col">
        <h2
          className="
        font-palanquin
        text-4xl
        capitalize
        font-bold
        lg:max-w-lg"
        >
          <span
            className="text-coral-red"
          >
            Special
          </span> Offer
        </h2>
        <p
          className="mt-4 lg:max-w-lg
          info-text"
        >
          Ensuring premium comfort and style, our 
          meticulously crafted footwear is designed
          to elevate your experience, providing you
          with unmatched quality, innovation
          and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedicated to detail and execellence 
          ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap
        gap-4
        ">
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="View Details"
          backgroundColor = "bg-white"
          borderColor="border-slate-gray"
          textColor= "text-slate-gray" />
        </div>
        
     </div>

    </section>
  )
}

export default SpecialOffers