<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="text" class="filtro" placeholder="Filtrar pelo Titulo" @input="filtro = $event.target.value">
    <ul class="lista-fotos">
      <li v-for="foto in fotosComFiltro" class="lista-fotos-item" >
        <meu-painel :titulo="foto.titulo">
          <minha-imagem :url="foto.url" :titulo="foto.titulo" v-meu-transform="{incremento: 45, animate: true}" />
          <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)" :confirmacao="true" estilo="perigo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImageResponsive from '../shared/image-responsive/ImageResponsive.vue';
import Botao from '../shared/botao/Botao.vue';

export default {
  components : {
    "meu-painel" : Painel,
    "minha-imagem": ImageResponsive,
    "meu-botao": Botao,
  },
  data() {
    return {
      titulo : 'AluraPIC',
      fotos : [],
      filtro : ''
      // fotos : [
      //   {
      //     url : 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/deadpool-vika-chan.jpg',
      //     titulo: 'Deadpool'
      //   },
      //   {
      //     url: 'https://www.updateordie.com/wp-content/uploads/2017/12/Wolverine8.jpg',
      //     titulo: 'Wolverine'
      //   },
      //   {
      //     url: 'https://geekandsundry.com/wp-content/uploads/2015/06/gambit-title-970x545.jpg',
      //     titulo: 'Gambit'
      //   },
      //   {
      //     url: 'https://kanto.legiaodosherois.com.br/w750-h1200/wp-content/uploads/2015/05/storm-xmen-by-robert-atkins.jpg',
      //     titulo: 'Storm'
      //   },
      //   {
      //     url: 'https://vignette.wikia.nocookie.net/x-men/images/d/d9/Magneto.jpg/revision/20150529105722',
      //     titulo: 'Magneto'
      //   }
      // ]
    }
  },
  computed : {
      fotosComFiltro() {
        if (this.filtro) {
          /* FILTRAR */
          let exp = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => exp.test(foto.titulo));
        } else {
          return this.fotos;
        }
      }
  },
  created() {
    //PROMISE COM PROMISE
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  },
  methods: {
    remove(foto) {
        alert("Foto removida");
    }
  }
}
</script>

<style scoped>
.lista-fotos {
  list-style: none;
}
.lista-fotos-item {
  display: inline-block;
}
.filtro {
  display: block;
  width: 100%;
}
</style>
