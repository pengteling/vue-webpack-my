import '../assets/styles/header.scss'

export default {
  data() {
    return {}
  },
  props:{
    id:{
      type:String,
      required:false
    }
  },
  render() {
    return (     
        <header class="main-header">
          <h1>Todo</h1>
        </header>      
    )
  }
}



