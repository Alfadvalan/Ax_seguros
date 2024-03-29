import Formulario from "./Formulario";

function PageForm() {
  return (
    <>
      <section id='lp'>
        <div id='content'>
          <div id='logo_lp'>
            <img src="/images/logo.png" alt="Logo AX" />
          </div>      
          <div id="content_text">
            <h1>Você está a um passo de garantir a melhor seguradora para seu veículo!</h1>
            <p>Preencha o formulário que em instantes a nossa equipe entrará em contato. </p>
          </div>
          <div id="formulario">
            <Formulario />
          </div>        
        </div>       
      </section>
    </>
  )
}

export default PageForm;