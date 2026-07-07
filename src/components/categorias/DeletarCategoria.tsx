import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type Categoria from '../../models/Categoria'
import { deletar, listarPorId } from '../../services/CategoriaService'

function DeletarCategoria() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [categoria, setCategoria] = useState<Categoria | null>(null)

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(Number(id))
    }
  }, [id])

  async function buscarPorId(id: number) {
    try {
      const dados = await listarPorId(id)
      setCategoria(dados)
    } catch (error) {
      console.error('Erro ao buscar categoria:', error)
    }
  }

  async function aoDeletar() {
    try {
      if (id !== undefined) {
        await deletar(Number(id))
      }
      navigate('/categorias')
    } catch (error) {
      console.error('Erro ao deletar categoria:', error)
    }
  }

  return (
    <div className="flex justify-center p-8">
      <div className="w-full max-w-md flex flex-col gap-4 border border-red-600 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-red-600">Deletar Categoria</h2>
        <p>Tem certeza que deseja excluir a categoria abaixo?</p>

        {categoria && (
          <div className="bg-gray-100 rounded p-4">
            <p className="font-bold">{categoria.nome}</p>
            <p className="text-sm text-gray-600">{categoria.descricao}</p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={aoDeletar}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Sim, deletar
          </button>
          <button
            onClick={() => navigate('/categorias')}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarCategoria