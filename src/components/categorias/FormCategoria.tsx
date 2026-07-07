import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type Categoria from '../../models/Categoria'
import { cadastrar, atualizar, listarPorId } from '../../services/CategoriaService'

function FormCategoria() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: ''
  })

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

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function aoEnviar(e: React.FormEvent) {
    e.preventDefault()
    try {
      if (id !== undefined) {
        await atualizar(categoria)
      } else {
        await cadastrar(categoria)
      }
      navigate('/categorias')
    } catch (error) {
      console.error('Erro ao salvar categoria:', error)
    }
  }

  return (
    <div className="flex justify-center p-8">
      <form onSubmit={aoEnviar} className="w-full max-w-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-green-700">
          {id !== undefined ? 'Editar Categoria' : 'Nova Categoria'}
        </h2>

        <div className="flex flex-col gap-1">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={categoria.nome}
            onChange={atualizarEstado}
            className="border border-green-700 rounded px-3 py-2"
            required
            minLength={3}
            maxLength={100}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            id="descricao"
            value={categoria.descricao}
            onChange={atualizarEstado}
            className="border border-green-700 rounded px-3 py-2"
            required
            minLength={5}
            maxLength={255}
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          Salvar
        </button>
      </form>
    </div>
  )
}

export default FormCategoria