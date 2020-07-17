<!--route component-->

 <template><!--탬플릿엔 DOM 하나만 들어가야 하므로 div로 감싸준다.-->
  <div id="app">     
    <Navbar />   
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
    name: 'app',
    components: {Navbar},
    data () {
      return {     
    }
  }
}
</script>

<style>

</style>
