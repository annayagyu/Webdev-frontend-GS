import { } from 'react'
import bebe from '../assets/bebe.png'
import dados from '../assets/dados.jpg'
import alimentacao from '../assets/alimentação.jpg'
import gadget from '../assets/gadget.jpg'

function Home() {
    return (
        <>
            <div className='Home'>
                <main>
                    <img src={gadget} alt="Pessoa com dores no ombro" className="main_img" />
                    <section className="main_info">
                        <h1 className='main-title'>Monitoramento da saúde do seu filho a toda hora.</h1>
                        <p>
                        O problema que o VitaKids pretende resolver é a dificuldade que pais e cuidadores de bebês e crianças têm em monitorar a saúde de seus filhos de forma fácil e conveniente, sem a necessidade de precisar usar vários medidores e sensores, que muitas vezes incomoda a criança e causa estresse desnecessário para ambas as partes.
                        </p>
                    </section>
                  
                </main>
                <aside>
                    <section className='aside-container'>
                        <article className='aside-item'>
                            <h1>Qual a solução?</h1>
                            <p>1° passo : Adquirir o kit de pulseira ou tornozeleira e o app da VitaKids <br />2° passo: Ajustar ao corpo do seu filho o gadget escolhido e parear com o app <br />3° passo: Acompanhar a saúde do seu filho.</p>
                        </article>
                        <hr width='90%' className='aside-separador'></hr>
                        <article className='aside-item'>
                            <h1>O que ela fará:</h1>
                            <p>O VitaKids fornece informações essenciais sobre a saúde da criança, tais como temperatura, batimentos cardíacos, níveis de açúcar no sangue, percentagem de gordura corporal (IMC), então pode ajudar a identificar problemas de saúde precocemente, antes que eles se agravem, evitando assim mortes de recém-nascidos e crianças menores de 5 anos, com metas específicas de mortalidade neonatal e infantil.</p>
                        </article>
                        <hr width='90%' className='aside-separador'></hr>
                        <article className='aside-item'>
                            <h1>Como funcionará:</h1>
                            <p> A ferramenta permite que os pais e responsáveis monitorem a saúde de seus filhos de forma remota, a qualquer hora e em qualquer lugar. Isso pode proporcionar aos pais e responsáveis maior tranquilidade e segurança, pois eles poderão acompanhar o desenvolvimento e a saúde de seus filhos de forma mais próxima e automática O Vitakids é um produto inovador que oferece uma solução completa para o monitoramento remoto da saúde de bebês e crianças. O Vitakids é portátil, seguro, preciso, pequeno, confortavel e as medições são exibidas em tempo real no aplicativo. Além disso, o Vitakids pode ajudar a detectar precocemente problemas de saúde, o que pode ajudar a prevenir complicações. </p>
                        </article>
                    </section>

                </aside>
            </div>
            <section className="vantagens">
                <h1 className='vantagens-titulo'>Vantagens</h1>
                <div className='cards'>
                    <article className='vantagens-article'>
                        <img src={bebe} alt='bebe saudável' className='article-img' />
                        <div className='article-div'>
                            <h1 className='vantagens-numero'>01</h1>
                            <h1 className='vantagens-vantagem'>Zero estresse</h1>
                            <p className='vantagem-texto'>Gadget pequeno e confortável que não atrapalha no dia a dia do seu pequeno.</p>
                        </div>
                    </article>

                    <article className='vantagens-article'>
                        <img src={alimentacao} alt='Plano de alimentação personalizado' className='article-img' />
                        <div className='article-div'>
                            <h1 className='vantagens-numero'>02</h1>
                            <h1 className='vantagens-vantagem'>Alimentação regulada</h1>
                            <p className='vantagem-texto'>Sensores que verificam a porcentagem de gordura da criança, e informa os pais sobre a saúde do seu filho.</p>
                        </div>
                    </article>

                    <article className='vantagens-article'>
                        <img src={dados} alt='Banco de dados da crianca' className='article-img' />
                        <div className='article-div'>
                            <h1 className='vantagens-numero'>03</h1>
                            <h1 className='vantagens-vantagem'>Monitoramento de dados</h1>
                            <p className='vantagem-texto'>Acompanhe dados atuais e anteriores que os sensores coletaram durante ao uso do aparelho e do app.</p>
                        </div>
                    </article>
                </div>
            </section>
            <span className="d-flex justify-content-center mt-3">
                            Global Solution 2023
            </span>
        </>
    )
}

export default Home