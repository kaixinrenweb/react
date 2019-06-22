function render(element, container){
    if(typeof element=='string' || typeof element=='number'){
        return container.appendChild(document.createTextNode(element));
    }
    let {type, props} = element;
    let ele = document.createElement(type);
    //判断是否有children
    if(props.children){
        //判断children属性 是可能一个字符串，还是一个数组
        if(!Array.isArray(props.children)){
            props.children = [props.children];
        }
        props.children.forEach(child=>{
            render(child, ele);
        });     
    }
    container.appendChild(ele);
}
export default {
    render
}