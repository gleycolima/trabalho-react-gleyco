import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListaAlunos from "./components/ListaAlunos";
import TodoList from "./components/TodoList";

function App() {
  const [alertaVisivel, setAlertaVisivel] = useState(false);
  const [contador, setContador] = useState(0);

  // Função para demonstrar uso de state e evento
  const handleClickBotao = () => {
    setContador(contador + 1);
    setAlertaVisivel(!alertaVisivel); // Alterna o alerta a cada clique
  };

  return (
    <div
      className="app-container"
      style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}
    >
      <Header />

      {/* Mensagem de Boas-Vindas e Nome */}
      <h2 style={{ color: "#000000", textAlign: "center" }}>
        Olá! Bem-vindo(a) à minha mini-aplicação React;
      </h2>
      <p style={{ textAlign: "center", color: "#555", marginTop: "-10px" }}>
        <strong>Eu sou Gleyco, desenvolvedor desta aplicação.</strong>
      </p>
      <hr />

      <h3 style={{ color: "#000000ff" }}>Demonstração de Eventos e Estado:</h3>

      {/* Botão com Texto Mais Claro */}
      <button
        onClick={handleClickBotao}
        style={{
          padding: "10px 15px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Clique aqui! Você já clicou {contador}{" "}
        {contador === 1 ? "vez" : "vezes"}.
      </button>

      {/* Renderização Condicional com Melhor Descrição */}
      <div style={{ marginTop: "15px", marginBottom: "20px" }}>
        {alertaVisivel ? (
          <p
            style={{
              padding: "10px",
              backgroundColor: "#d4edda",
              color: "#155724",
              border: "1px solid #c3e6cb",
              borderRadius: "4px",
            }}
          >
            ✔️ <strong>Alerta Verde</strong>: <strong>Sucesso!</strong> Você
            clicou no botão. Continue explorando a aplicação!
          </p>
        ) : (
          <p
            style={{
              padding: "10px",
              backgroundColor: "#f8d7da",
              color: "#721c24",
              border: "1px solid #f5c6cb",
              borderRadius: "4px",
            }}
          >
            ⚠️ <strong>Alerta Vermelho</strong>: <strong>Atenção!</strong> Tente
            clicar no botão para ativar o contador.
          </p>
        )}
      </div>

      <hr />

      {/* Componente principal da lista de tarefas */}
      <h3 style={{ color: "#343a40" }}>Sua Lista de Tarefas:</h3>
      <TodoList />

      <hr />

      {/* Componente da lista de alunos e cards (opcional) */}
      <h3 style={{ color: "#343a40" }}>Lista de Alunos:</h3>
      <ListaAlunos />

      <Footer />
    </div>
  );
}

export default App;
