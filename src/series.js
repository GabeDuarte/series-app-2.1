import React from "react";

import "./inicio.css";

import { Link } from "react-router-dom";



export default class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],

      nomeSerie:'',
      imagem_urlSerie:'',
      ano_lancamentoSerie:'',
      qtd_tempSerie:'',
      yt_linkSerie: '',
      descriçaoSerie:'',
      editando: false,
      indexEditando: null,
    };
  }

  async buscarSeries(){
    this.setState({loading: true})
    const res = await fetch('http://localhost:5000/series');
    const json = await res.json();
    this.setState({series: json, loading:false});
  }

  componentDidMount() {
    this.buscarSeries()
  }

  onSubmit= async (e) =>{
    e.preventDefault();

    const {series, editando, idEditando, yt_linkSerie, descriçaoSerie, nomeSerie,  imagem_urlSerie, qtd_tempSerie, ano_lancamentoSerie } = this.state;

    if (editando){
      await fetch(`http://localhost:5000/series/${idEditando}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({nome: nomeSerie, imagem_url: imagem_urlSerie, ano_lancamento: ano_lancamentoSerie, qtd_temp: qtd_tempSerie, yt_link: yt_linkSerie, descriçao: descriçaoSerie})
      }); 
      this.buscarSeries();
      
      this.setState({
        indexEditando: null,
        editando: false,
      });

    } else {
      await fetch('http://localhost:5000/series', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          nome: nomeSerie, imagem_url: imagem_urlSerie, ano_lancamento: ano_lancamentoSerie, qtd_temp: qtd_tempSerie, yt_link: yt_linkSerie
        })
      })
    };
    this.setState({
      nomeSerie: '',
      imagem_urlSerie:'',
      qtd_tempSerie: '',
      ano_lancamentoSerie:'',
      yt_link: '',
      descriçao: '',

    });
  };

  deletar = async (idDeletar) =>{
    await fetch (`http://localhost:5000/series/${idDeletar}`,{
      method: 'DELETE'
    });
    this.buscarSeries();
  };


  render(){
    // const {series,} = this.state;
     const {series, nomeSerie, imagem_urlSerie, ano_lancamentoSerie, yt_linkSerie, descriçaoSerie, qtd_tempSerie, editando, indexEditando} = this.state;
    return (
    <html>
      <body>

        <main className="main">
          <header>
            <div className="Cabecalho">
              <nav>
                <ul>
                  <li><Link to ='/'>Home</Link></li>
                  <li><Link to ='/series'>Series</Link></li>
                  <li><Link to = '/adicionar'>Adicionar</Link></li>
                  <li><Link to='/info'> Info </Link></li>
                </ul>
              </nav>
            </div>
          </header>

          <div className="conteudo">
          <div className='editando'>
                  <h2>
                      {editando?`Editando:${series[indexEditando]?.nome}`:"Cadastrar uma nova serie"}
                  </h2>
                  <form onSubmit={this.onSubmit}>
                      <input placeholder = 'nome' value={nomeSerie} onChange={(e)=>{
                      this.setState({
                          nomeSerie: e.target.value
                      });
                      }}/>
                      <br></br>
                      <input placeholder = 'URL da imagem' value={imagem_urlSerie} onChange={(e)=>{
                      this.setState({
                          imagem_urlSerie: e.target.value
                      });
                      }}/>
                      <br></br>
                      <input placeholder = 'Ano de lançamento' value={ano_lancamentoSerie} onChange={(e)=>{
                      this.setState({
                          ano_lancamentoSerie: e.target.value
                      });
                      }}/>
                      <br></br>
                      <input placeholder = 'Quantidade de temporadas' value={qtd_tempSerie} onChange={(e)=>{
                      this.setState({
                          qtd_tempSerie: e.target.value
                      });
                      }}/>
                      <br></br>
                      <input placeholder = 'Link do YouTube' value={yt_linkSerie} onChange={(e)=>{
                      this.setState({
                          yt_linkSerie: e.target.value
                      });
                      }}/>
                      <br></br>
                      <input placeholder = 'Descrição' value={descriçaoSerie} onChange={(e)=>{
                      this.setState({
                          descriçaoSerie: e.target.value
                      });
                      }}/>
                      <br></br>
                      <button type='submit'>enviar</button>
                  </form>
              </div>
             <div className='flex-container'>
               {series.map((s, index) => (
                 <div className="item">
                   <h2>Nome: {s.nome}</h2>
                   <img src={s.imagem_url} alt={s.nome}></img>
                   <h3>Ano de lançamento: {s.ano_lancamento}</h3>
                   <h3>Quantidade de temporadas: {s.qtd_temp}</h3>
                   <iframe width="400" heigth='315' src={s.yt_link}></iframe>
                   <p> descrição: {s.descriçao}</p>
                   <div className='botoes'>
                    <button onClick={() => this.deletar(s._id)}>Deletar</button>
                    <br/>
                    <button id='btn'
                    onClick={()=>{
                      this.setState({
                        idEditando: s._id,
                        editando: true,
                        nomeSerie: s.nome,
                        imagem_urlSerie: s.imagem_url,
                        ano_lancamentoSerie: s.ano_lancamento,
                        qtd_tempSerie: s.qtd_temp,
                      });
                    }}
                    >Editar
                    </button>
                   </div>
                </div>
               ))}
             </div>
         </div>
        </main>
        <footer>
           <ul>
             <li>Desenvolvido por: Gabriel Soares.</li>
             <li> WhatsApp: 61 99445-2945 </li>
           </ul>
         </footer>
      </body>
    </html> 
    )
  }
}
