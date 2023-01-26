new Vue({
  el: '#app',
  
  data() {
    return {
      courses: [],
      title: '',
      time: null,
      isValid: true
    }
  },
  
  computed: {
    tiempoTotal(){
      let time = 0
      this.courses.map((el)=>{
        time += parseInt(el.time)
      })
      return time
    }
  },
  
  methods: {
    agregarCurso(){
      let newCourse = {
        title: this.title,
        time: this.time
      }
      if(newCourse.title != '' && newCourse.time != null){
        this.courses.push(newCourse)
        this.title = ''
        this.time = null
        this.isValid = true
      }else{
        this.isValid = false
      }
    }
  }
})