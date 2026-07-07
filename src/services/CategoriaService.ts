import axios from 'axios'
import type Categoria from '../models/Categoria'

const api = axios.create({
  baseURL: 'https://farmacia-jjxo.onrender.com'
})

export const listar = async (): Promise<Categoria[]> => {
  const resposta = await api.get('/categorias')
  return resposta.data
}

export const listarPorId = async (id: number): Promise<Categoria> => {
  const resposta = await api.get(`/categorias/${id}`)
  return resposta.data
}

export const cadastrar = async (categoria: Categoria): Promise<Categoria> => {
  const resposta = await api.post('/categorias', categoria)
  return resposta.data
}

export const atualizar = async (categoria: Categoria): Promise<Categoria> => {
  const resposta = await api.put('/categorias', categoria)
  return resposta.data
}

export const deletar = async (id: number): Promise<void> => {
  await api.delete(`/categorias/${id}`)
}