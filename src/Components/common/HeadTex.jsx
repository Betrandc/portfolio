import './HeadText.css'

export const HeadText = ({text}) => {
  return (
    <div className='headtext'>
        <div className="leftline"></div>
        <div className="text">{text}</div>
        <div className="rightline"></div>
    </div>
  )
}
