import { Link } from "react-router-dom";

function LastPage() {
    return (
        <section id="last_page">
            <div className="logo_ax">
                <img src="/images/logo.png" alt="Logo AX" />
            </div>
            <div className="conteudo_page">
                <h1>Obrigado por nos escolher!</h1>
                <p>Falta pouco para você ficar protegido! Dentro de alguns instantes nossa equipe entrará em contato.</p>
                <div id="button-voltar">
                    <Link to='/'>
                        <button>Voltar para página inicial</button>
                    </Link>
                </div>
            </div>
            
        </section>
    );
}

export default LastPage;