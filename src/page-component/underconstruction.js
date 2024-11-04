import './css/underconstruction.css'
export default function UnderConstruction() {
  return (
    <>
      <h1 style={{color:'#E8E8E8'}} className='title-cons'>That's right, this page is under construction</h1>
      <button onClick={() => window.history.back()} className='back-cons'>Back</button>
    </>
  )
}