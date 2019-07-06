<template>
  <div class="container" id="big-new">
    <div class="row">
    	<div class="col-lg-12">
    		<div class="new-image" :style="{height:'390px', backgroundSize:'cover', backgroundPosition:'center', backgroundImage: 'url(' + news.image + ')' }"></div>

            <h3 class="mt-4">{{news.title}}</h3>
            <div v-html="news.body"></div>
    	</div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'detail',
  data () {
    return {
      id:this.$route.params.id,
      news:null
    }
  },
  mounted () {
    axios.get('http://arabam.getsandbox.com/news/'+this.id).then(response => (
        this.news = response.data
    ));
  }
}
</script>

<style>

</style>
