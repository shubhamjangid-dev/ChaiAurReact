function customRender(reactElement, Container)
{
    const createdElement = document.createElement(reactElement.type);
    createdElement.innerHTML = reactElement.children
    // createdElement.setAttribute('href', reactElement.props.href);
    // createdElement.setAttribute('target', reactElement.props.target);


    // in too many attributes
    for (const key in reactElement.props ){
        if(key ==='children')continue;
        createdElement.setAttribute(key, reactElement.props[key]);
    }
    Container.appendChild(createdElement);
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://react.dev/learn',
        target : '_blank'
    },
    children : 'click here to learn React'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);