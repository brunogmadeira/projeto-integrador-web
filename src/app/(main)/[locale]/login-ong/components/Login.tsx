import React from 'react';
import Link from 'next/link';


const Login = () => {
  return (
    <div className="max-w-md mx-auto p-4 border border-gray-400 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <input
          type="text"
          placeholder="Seu e-mail"
          required
          className="mb-2 p-2 border border-gray-400 rounded"
        />
        <input
          type="password"
          placeholder="Sua senha"
          required
          className="mb-4 p-2 border border-gray-400 rounded"
        />
        <button className="bg-gray-400 text-white rounded py-2 px-4 hover:bg-gray-500">
          Entrar
        </button>
      </form>
      <Link href="/FormularioCadastro" className="text-blue-500">
        Não possui uma conta? Cadastre-se!
      </Link>
    </div>
  );
};

export default Login;