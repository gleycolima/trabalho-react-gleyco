import React from 'react';

// Dados gerados manualmente (ou com IA) para a lista de alunos/cards
const listaDeDados = [
  { id: 1, nome: 'João Silva', matricula: '2023001', curso: 'ADS' },
  { id: 2, nome: 'Maria Souza', matricula: '2023002', curso: 'ADS' },
  { id: 3, nome: 'Pedro Lima', matricula: '2023003', curso: 'ADS' },
];

// Componente reutilizável para o Card (usando props)
const Card = ({ titulo, conteudo, estilo }) => (
    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px', margin: '10px', width: '250px', display: 'inline-block', ...estilo }}>
        <h4>{titulo}</h4>
        <p>{conteudo}</p>
    </div>
);


const ListaAlunos = () => {
  return (
    <div>
      <h3>Lista de Alunos (Demonstração de Cards Reutilizáveis)</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {listaDeDados.map((aluno) => (
          <Card 
            key={aluno.id}
            titulo={aluno.nome} 
            conteudo={`Matrícula: ${aluno.matricula} | Curso: ${aluno.curso}`}
            estilo={{ backgroundColor: aluno.id % 2 === 0 ? '#e9ecef' : '#f8f9fa' }} // Estilização condicional
          />
        ))}
      </div>
    </div>
  );
};

export default ListaAlunos;