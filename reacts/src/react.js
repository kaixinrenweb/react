function createElement(type, config={}, children){
    let props = {};
    for(let propName in config){
        props[propName] = config[propName];   
    }
    //判断后面的children
    let childrenLength = arguments.length - 2;
    if(childrenLength == 1){
        props.children = children;
    }else if(childrenLength>1){
        props.children = Array.from(arguments).slice(2);
    }
    return {
        type, props
    }
}

export default {
    createElement
};