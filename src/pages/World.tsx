import LorePage from "../components/lore/LorePage";


export default function World() {

  return (

    <LorePage

      title="O Mundo"

      description="
        Registros das terras, dimensões e civilizações
        de Fragmentos da Eternidade.

        Novos mapas e informações serão revelados
        conforme a jornada avançar.
      "

    >

      <section className="world-preview">


        <header className="chapter-preview-header">

          <span>
            REGISTROS FUTUROS
          </span>


          <h2>
            Fragmentos ainda não descobertos
          </h2>


          <p>
            Alguns registros permanecem selados.
            Conforme a jornada avançar, novas regiões,
            personagens e mistérios serão revelados.
          </p>

        </header>



        <div className="chapter-preview-list">


          <article className="preview-card locked">

            <span>
              🔒 CAPÍTULO II
            </span>

            <h3>
              O Continente Esquecido
            </h3>

            <p>
              Após despertar os primeiros Fragmentos,
              Caleb descobrirá que a cidade perdida
              era apenas uma pequena parte de algo
              muito maior.
            </p>

          </article>



          <article className="preview-card locked">

            <span>
              🔒 CAPÍTULO III
            </span>

            <h3>
              O Governo Mundial
            </h3>

            <p>
              Os primeiros registros sobre a grande
              organização que controla o conhecimento
              do mundo começam a surgir.
            </p>

          </article>



          <article className="preview-card locked">

            <span>
              🔒 CAPÍTULO IV
            </span>

            <h3>
              Os Herdeiros dos Fragmentos
            </h3>

            <p>
              Novos personagens surgirão e antigas
              forças começarão a despertar.
            </p>

          </article>


        </div>


      </section>


    </LorePage>

  );
}