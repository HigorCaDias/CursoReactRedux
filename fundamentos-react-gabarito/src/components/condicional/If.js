export default props => {
    
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if(props.test) {
        return ifChildren
    } else if(elseChild) {
        return elseChild
    } else {
        return false
    }
}
// Retorna o que foi passado como children dentro de props
export const Else = props => props.children