import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-green-700 text-white flex justify-between items-center px-8 py-4">
      <Link to="/" className="text-xl font-bold">Farmácia</Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/categorias" className="hover:underline">Categorias</Link>
        <Link to="/cadastrarCategoria" className="hover:underline">Nova Categoria</Link>
      </div>
    </nav>
  )
}

export default Navbar