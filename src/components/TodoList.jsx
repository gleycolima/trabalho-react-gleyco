import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  // State para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Configurar o ambiente de desenvolvimento com Vite e React', concluida: true },
    { id: 2, texto: 'Realizar o primeiro commit no repositório GitHub', concluida: false },
    { id: 3, texto: 'Implementar a funcionalidade para adicionar novas tarefas', concluida: false },
    { id: 4, texto: 'Criar componentes Header, Footer e ListaAlunos', concluida: false },
  ]);
  
  // State para o input de nova tarefa
  const [novaTarefa, setNovaTarefa] = useState('');

  // Função para adicionar uma nova tarefa
  const handleAdicionarTarefa = (e) => {
    e.preventDefault(); // Evita que o formulário recarregue a página
    if (novaTarefa.trim() === '') return;

    const novaTarefaObj = {
      id: Date.now(), // ID único baseado no timestamp
      texto: novaTarefa,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefaObj]); // Adiciona ao array
    setNovaTarefa(''); // Limpa o input
  };

  // Função para alternar o status de conclusão
  const handleToggleConcluida = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };
  
  // Função para remover a tarefa (opcional)
  const handleRemoverTarefa = (id) => {
      setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };


  return (
    <div style={{ marginBottom: '30px' }}>
      <h3>Lista de Tarefas (To-Do) - Usando State e Props</h3>
      
      {/* Formulário para adicionar tarefa */}
      <form onSubmit={handleAdicionarTarefa} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite a nova tarefa..."
          style={{ flexGrow: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button 
          type="submit"
          style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Adicionar
        </button>
      </form>

      {/* Listagem das tarefas */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tarefas.map((tarefa) => (
          <TodoItem
            key={tarefa.id}
            tarefa={tarefa} // Passa o objeto tarefa como prop
            onToggleConcluida={handleToggleConcluida} // Passa a função de evento como prop
            onRemoverTarefa={handleRemoverTarefa} // Passa a função de remoção
          />
        ))}
      </ul>
      
      {/* Renderização Condicional: Mensagem de lista vazia */}
      {tarefas.length === 0 && (
          <p style={{ fontStyle: 'italic', color: '#6c757d' }}>Nenhuma tarefa pendente! Bom trabalho!</p>
      )}
    </div>
  );
};

export default TodoList;