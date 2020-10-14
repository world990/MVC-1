import $ from 'jquery' 
import './app4.css'

const $circle=$('#app4 .circle')

$circle.on('mouseover',()=>{
    $circle.toggleClass('active')
})