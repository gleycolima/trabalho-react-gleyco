// Dados gerados manualmente (ou com IA) para a lista de alunos/cards
const listaDeDados = [
  { id: 1, nome: 'Gleyco', matricula: '2023001', curso: 'ADS' },
  { id: 2, nome: 'Maria', matricula: '2023002', curso: 'ADS' },
  { id: 3, nome: 'João', matricula: '2023003', curso: 'ADS' },
];

// Componente reutilizável para o Card (usando props e children)
const Card = ({ titulo, children, estilo }) => (
  <div
    style={{
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      margin: '10px',
      width: '250px',
      display: 'inline-block',
      ...estilo,
    }}
  >
    <h4 style={{ color: '#000' }}>{titulo}</h4> {/* Nome do aluno em preto */}
    <div>{children}</div> {/* Conteúdo customizável */}
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
        >
            <p style={{ color: '#000', margin: '4px 0' }}>
              <strong>Matrícula:</strong> {aluno.matricula}
            </p>
            <p style={{ color: '#000', margin: '4px 0' }}>
              <strong>Curso:</strong> {aluno.curso}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ListaAlunos;
