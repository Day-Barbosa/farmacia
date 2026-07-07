import { Link } from 'react-router-dom'
import type Categoria from '../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
  aoDeletar: () => void
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border border-green-700 rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-green-700">{categoria.nome}</h3>
        <p className="text-gray-600 text-sm mt-1">{categoria.descricao}</p>
      </div>
      <div className="flex gap-3 mt-4">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="text-sm bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
        >
          Editar
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria