import React from "react";
import "./inicio.css";
import { Link } from "react-router-dom";


// function magica(){
//   var $element = document.getElementById('editando')

//   if ($element.hasAttribute('ativo')){
//       $element.removeAttribute('ativo')
//       $element.style.display='none';
//   }
//   else{
//     $element.setAttribute('ativo', 'true')
//     $element.style.display='block'
//   }
// }


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
            id:'2',
          nome: "gabriel duarte",
          imagem_url:
            "https://s2.glbimg.com/476xiyzHwobzomhiO6QZ8ZaZPCM=/362x536/https://s2.glbimg.com/gw3G9SRdfhWZbNxnMuwbznGiAW0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/s/Y/z9FwyXQjq1flWRIm3mUA/2020-726-series-warner-the-big-bang-theory-poster.jpg",
          ano_lancamento: "2007",
          qtd_temp: "12",
        },
        {
            id:'3',
          nome: "Friends",
          imagem_url: "https://br.web.img3.acsta.net/pictures/19/12/20/21/27/3055482.jpg",
          ano_lancamento: "1994",
          qtd_temp: "10",
        },
        {
            id:'4',
          nome: "Sex Education",
          imagem_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgnY2O8FTQtRqSDJNZpDlYMysAW5i7Z59V1jbbazOQRBKyXHaVRg8gA3wY123eihrTAU&usqp=CAU",
          ano_lancamento: "2019",
          qtd_temp: "3",
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
        {
            id:'8',
          nome: "Breaking Bad",
          imagem_url: "https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535",
          ano_lancamento: "2008",
          qtd_temp: "5",
        },
        {
            id:'9',
          nome: "Breaking Bad",
          imagem_url: "https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min.png?a7c535&a7c535",
          ano_lancamento: "2008",
          qtd_temp: "5",
        },
        {
            id:'10',
          nome: "The Big Bang Theory",
          imagem_url:
            "https://s2.glbimg.com/476xiyzHwobzomhiO6QZ8ZaZPCM=/362x536/https://s2.glbimg.com/gw3G9SRdfhWZbNxnMuwbznGiAW0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/s/Y/z9FwyXQjq1flWRIm3mUA/2020-726-series-warner-the-big-bang-theory-poster.jpg",
          ano_lancamento: "2007",
          qtd_temp: "12",
        },
        {
            id:'11',
          nome: "The Big Bang Theory",
          imagem_url:
            "https://s2.glbimg.com/476xiyzHwobzomhiO6QZ8ZaZPCM=/362x536/https://s2.glbimg.com/gw3G9SRdfhWZbNxnMuwbznGiAW0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/s/Y/z9FwyXQjq1flWRIm3mUA/2020-726-series-warner-the-big-bang-theory-poster.jpg",
          ano_lancamento: "2007",
          qtd_temp: "12",
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
  }

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
    const {series,} = this.state;
    // const {series, idSerie,  nomeSerie, imagem_urlSerie, ano_lancamentoSerie, qtd_tempSerie, editando, indexEditando} = this.state;
    return (
    <html>
      <body>
          {/* <div className='container-fluid'>
            <div Classname='menuLateral' id='side'>
                  <div>
                      <div className='algumaCoisa'>
                        <ul className="listaMenu">
                          <li>
                            <a href="#">Generos</a>
                          </li>
                          <li>
                            <a href="#">alguma coisa</a>
                          </li>
                        </ul>
                      </div>
                  </div>
              </div> 
          </div>     */}
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
                    onClick={()=>{
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



  // render() {
  //   const { series } = this.state;
  //   return (
  //     <body>
  //       <div className='title'><h1>Series</h1></div>
  //       <div className="conteudo">
  //         <main>
  //           <div >
  //             {series.map((serie) => (
  //               <div className="item">
  //                 <h2>Nome: {serie.nome}</h2>
  //                 <img src={serie.imagem_url} alt={serie.nome}></img>
  //                 <h3>Ano de lançamento: {serie.ano_lancamento}</h3>
  //                 <h3>Quantidade de temporadas: {serie.qtd_temp}</h3>
  //               </div>
  //             ))}
  //           </div>
  //         </main>
  //       </div>
  //     </body>
  //   );
  // }


}
