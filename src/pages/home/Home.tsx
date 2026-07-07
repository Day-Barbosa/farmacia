import gatinho from '../../assets/img_4231.png'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
      <h1 className="text-4xl font-bold text-green-700">
        Bem-vindo à Farmácia do{' '}
        <span className="relative group inline-block cursor-default">
          Logan
          <img
            src={gatinho}
            alt="gatinho"
            className="absolute -top-14 left-1/2 -translate-x-1/2 w-12 opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 pointer-events-none"
          />
        </span>
      </h1>
      <p className="text-gray-600">Sistema de gerenciamento de produtos</p>
    </div>
  )
}

export default Home