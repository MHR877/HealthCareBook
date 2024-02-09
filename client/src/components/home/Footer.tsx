function Footer() {
  return (
    <footer className='h-[100px] bg-[#10217d] p-6 flex items-center justify-center'>
        <p className='text-2xl text-white'>COPYRIGHT {(new Date()).getFullYear()} MDC, ALL RIGHT RESERVED</p>
    </footer>
  )
}

export default Footer