import { useEffect, useState } from 'react'
import type Categoria from '../../models/Categoria'
import { listar } from '../../services/CategoriaService'
import CardCategoria from './CardCategoria'

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  useEffect(() => {
    buscarCategorias()
  }, [])

  async function buscarCategorias() {
    try {
      const dados = await listar()
      setCategorias(dados)
    } catch (error) {
      console.error('Erro ao buscar categorias:', error)
    }
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Categorias</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categorias.map((categoria) => (
          <CardCategoria
            key={categoria.id}
            categoria={categoria}
            aoDeletar={buscarCategorias}
          />
        ))}
      </div>
    </div>
  )
}

export default ListarCategorias