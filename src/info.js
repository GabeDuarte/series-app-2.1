import React from "react";
import "./info.css";
import { Link } from "react-router-dom";



export default class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          id:'1',
          nome: "The Big Bang Theory",
          imagem_url:
            "https://s2.glbimg.com/476xiyzHwobzomhiO6QZ8ZaZPCM=/362x536/https://s2.glbimg.com/gw3G9SRdfhWZbNxnMuwbznGiAW0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/s/Y/z9FwyXQjq1flWRIm3mUA/2020-726-series-warner-the-big-bang-theory-poster.jpg",
          ano_lancamento: "2007",
          qtd_temp: "12",
          
        },
        {
            id:'5',
          nome: "Breaking Bad",
          imagem_url: "https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535",
          ano_lancamento: "2008",
          qtd_temp: "5",
        },
        {
            id:'6',
          nome: "Breaking Bad",
          imagem_url: "https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535",
          ano_lancamento: "2008",
          qtd_temp: "5",
        },
        {
            id:'7',
          nome: "Breaking Bad",
          imagem_url: "https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535",
          ano_lancamento: "2008",
          qtd_temp: "5",
        },
      ],
      id:'',
      nomeSerie:'',
      imagem_urlSerie:'',
      ano_lancamentoSerie:'',
      qtd_tempSerie:'',
      editando: false,
      indexEditando: null,
    };
  };

  onSubmit= (e) =>{
    e.preventDefault();

    const {series, editando, indexEditando, idSerie, nomeSerie,  imagem_urlSerie, qtd_tempSerie, ano_lancamentoSerie } = this.state;

    if (editando){
      const seriesAtualizadas = series.map((serie, index) => {
        if (indexEditando === index){
          serie.id = idSerie;
          serie.nome = nomeSerie;
          serie.ano_lancamento = ano_lancamentoSerie;
          serie.imagem_url = imagem_urlSerie;
          serie.qtd_temp = qtd_tempSerie;

        }
        return serie;

      });
      this.setState({
        series: seriesAtualizadas,
        indexEditando: null,
        editando: false,
      });

    } else {
      this.setState({
        series: [
          ...series,
          {
            id: idSerie,
            nome: nomeSerie,
            ano_lancamento: ano_lancamentoSerie,
            imagem_url: imagem_urlSerie,
            qtd_temp: qtd_tempSerie
          },
        ]
      });
    };
    this.setState({
      idSerie:'',
      nomeSerie: '',
      imagem_urlSerie:'',
      qtd_tempSerie: '',
      ano_lancamentoSerie:''
    });
  };

 

  deletar =(index) => {
    const {series} = this.state;
    this.setState({
      series: series.filter((serie, i)=> i!== index),
    })
  };


  render(){
    const {series, } = this.state;
    return (
    <html>

      <body>
        {/* <div className='pp'>
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
                    <button type='submit'>enviar</button>
                </form>
            </div>
        </div> */}
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
           <main>
             <div className='flex-container'>
               {series.map((s, index) => (
                 <div className="item">
                   <h2>Nome: {s.nome}</h2>
                   <img src={s.imagem_url} alt={s.nome}></img>
                   <h3>Ano de lançamento: {s.ano_lancamento}</h3>
                   <h3>Quantidade de temporadas: {s.qtd_temp}</h3>
                   <div className='botoes'>
                    <button onClick={() => this.deletar(index)}>Deletar</button>
                    <br/>
                    <button id='btn'
                    onClick={ ()=>{
                      
                      this.setState({
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
            </main> 
         </div>
         <footer>
           <ul>
             <li>Desenvolvido por: Gabriel Soares.</li>
             <li> WhatsApp: 61 99445-2945 </li>
           </ul>
         </footer>
        </main>
      </body>
    </html> 
    )
  }
}
