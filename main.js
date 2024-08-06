let btn1 = document.getElementById('btn1')
let test2 = document.getElementById('testr')
let inp = document.getElementById('inp')
let btn2 = document.getElementById('btn2')
let h3 = document.getElementById('h3')

function test(){
    test2.classList.remove('test_c')
    test2.classList.add('test_c2')
    count = 0
    for (i=0;i<3;i++){
        testlar = [
            "1. Iqlim o'zgarishi nima sababli sodir bo'ladi?",
            "2. O'rmonlarning kesilishi qanday ekologik muammolarni keltirib chiqaradi?",
            '3. Daraxtlar kesilishini kamaytirish uchun nima qilsa boladi?'
            
        ]
        h3.innerHTML = testlar[count]
        
    
    }               
    btn2.addEventListener('click' ,()=>{
        count= count+1
        console.log(count);
        
        h3.innerHTML= testlar[count]
        inp.value = ''
    })
    

}



btn1.addEventListener('click' , ()=>{
    test()
})
