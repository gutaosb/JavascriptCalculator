function calculate(type, item){
    try{
        var textBoxInput = document.getElementById('text-box-input')

        if(type === 'val'){
            textBoxInput.value += item
        }
        else if(type === 'action'){
            
            if(item === 'c'){
                textBoxInput.value = ''
            }
            else if(item === '='){
                textBoxInput.value = eval(textBoxInput.value)
            }else{
                textBoxInput.value += item
            }
        }
    }
    catch{
        textBoxInput.value = ''
    }
}
