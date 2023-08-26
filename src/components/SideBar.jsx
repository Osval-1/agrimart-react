import React,{useState} from 'react'


const SideBar = ({toogle}) => {
  return (
      <section className={` transition-all md:hidden  h-screen fixed  ${toogle?'right-0 w-2/3':'-right-96'} z-10 shadow-md overflow-y-auto bg-white`}>
        <div>
      SideBar
      <button>click this</button>
        </div>
      </section>
  )
}

export default SideBar