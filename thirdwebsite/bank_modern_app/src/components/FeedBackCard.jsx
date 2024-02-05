import { quotes } from "../assets";

const FeedBackCard = ({content, name, title, img}) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain" />
      
    </div>
  )

export default FeedBackCard
