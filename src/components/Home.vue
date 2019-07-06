<template>
    <div class="container" id="big-new">
    <div class="row">
    	<div class="col-lg-12" v-show="bigNewFilter()">
    		<router-link :to="'/detail/' + bigNew[0].id">
        <div class="carousel slide" data-ride="carousel">
			  <div class="carousel-inner">
			    <div class="big new-bg carousel-item active" :style="{ backgroundImage: 'url(' + bigNew[0].image + ')' }">
			    	<div class="new-header-container">
			    		<h3>{{bigNew[0].title}}</h3>
			    		<p>{{bigNew[0].snippet}}</p>
			    	</div>
			    </div>
			  </div>
			</div>
    		</router-link>
    	</div>
    </div>

    <div class="row" v-show="smallNewsFilter()">
    	<div v-for="news in smallNews" class="col-lg-4 mt-4">
    		<router-link :to="'/detail/' + news.id">
        <div class="carousel slide" data-ride="carousel">
			  <div class="carousel-inner">
			    <div class="small carousel-item active" :style="{ backgroundImage: 'url(' + news.image + ')' }">
			    	<div class="new-header-container">
			    		<h3 class="fs-22">{{news.title}}</h3>
			    		<p>{{news.snippet}}</p>
			    	</div>
			    </div>
			  </div>
			</div>
    		</router-link>
    	</div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data () {
    return {
      news: null,
      bigNew:null,
      smallNews:null
    }
  },
  mounted () {
    axios.get('http://arabam.getsandbox.com/news').then(response => (
      this.news = response.data
    ));
  },
  methods:{
    bigNewFilter: function(){
      return this.bigNew = this.news.filter(item => item.isFeatured)
    },
    smallNewsFilter:function(){
      return this.smallNews = this.news.filter(item => !item.isFeatured);
    }
  }
}
</script>

<style>

</style>
