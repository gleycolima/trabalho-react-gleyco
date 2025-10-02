import React from 'react';

// Recebe 'tarefa', 'onToggleConcluida' e 'onRemoverTarefa' como props
const TodoItem = ({ tarefa, onToggleConcluida, onRemoverTarefa }) => {
  return (
    <li 
      style={{ 
        padding: '10px', 
        borderBottom: '1px solid #eee', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: tarefa.concluida ? '#f0fff0' : 'white'
      }}
    >
      <span 
        style={{ 
          // Renderização Condicional: Risco e cor
          textDecoration: tarefa.concluida ? 'line-through' : 'none',
          color: tarefa.concluida ? '#6c757d' : '#333',
          cursor: 'pointer',
          flexGrow: 1
        }}
        onClick={() => onToggleConcluida(tarefa.id)}
      >
        {tarefa.texto}
      </span>
      
      <div>
          {/* Quadrado para marcar como concluída */}
          <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => onToggleConcluida(tarefa.id)}
              style={{ marginRight: '10px', transform: 'scale(1.2)' }}
          />
          
          {/* Botão de Ação: Remover */}
          <button 
              onClick={() => onRemoverTarefa(tarefa.id)}
              style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' }}
          >
              Remover
          </button>
      </div>
    </li>
  );
};

export default TodoItem;