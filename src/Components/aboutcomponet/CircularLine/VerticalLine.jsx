import './VerticalLine.css'

export const VerticalLine = ({degree,institution,year }) => {
  return (
  
    <div className="maincontainer">
      <div className='line-container'>
        <div className="ball"></div>
        <div className="verticalline"></div>
      </div>
      <div className="ballphone"></div>
      <div className="text">
        <h4>{degree}</h4> 
        <p>{institution}</p>
        <p>{year}</p>

      </div>

    </div>
  )
}
