import React from 'react'

const Loader = () => {
  return (
    <div className={Style.Loader}>
      <div className={Style.Loader_box}>
      <Image  src={images.loader} alt="loader" width={100} height={70} />
      </div>
    </div>
    
  )
}

export default Loader