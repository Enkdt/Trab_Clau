/*Prezado leitor do código, poderiamos fazer o 
uso de dicts/arrays para a otimização de tal. 
Entretanto, não podiamos devido à limitação
imposta pelo professor regente. Obrigado pela
compreensão*/


formas = 5
formulas = 5
console.log('Troque a variável formas para selecionar a forma e formulas para selecionar a formula 🔥\n')

switch (formas){
    case 0:
        /*Quadrados e retângulo*/
        switch (formulas){
            case 0:
                console.log('Area do quadrado: l²')
                break;
            case 1:
                console.log('Volume do quadrado:l² * H')
                break;
            case 2: 
                console.log('Área do retângulo: b * h')
                break;
            case 3: 
                console.log('Volume do retângulo: b * h * H')                
                break;
            default:
                console.log('Inválido')
                break;
        }
        break;
    case 1:
        /*triangulo*/
        switch (formulas){
            case 0:
                console.log('Area do triangulo: b*h/2')
                break;
            case 1:
                console.log('Volume do triangulo: b*h/2 * H')
                break;
            case 2:
                console.log('Pitagoras: Hip² = Co² + Ca²')
                break;
            case 3:
                console.log('Hierão: \u221Ap(p-a)(p-b)(p-c)')
                break;
            case 4:
                console.log('Lei dos Cossenos: a² = b² + c² - 2 * b * c * cos(α)')
                break;
            case 5:
                console.log('Lei dos Senos: a/sen(α) + b/seb(β) + c/sen(γ)')
                break;                
            default:
                console.log('Inválido')
                break;
        }
        break;
    case 2:
        /*trapézio e losango*/
        switch (formulas){
            case 0:
                console.log('Area do trapezio: (b+B)*h/2')
                break;
            case 1:
                console.log('Volume do trapezio/prisma:(b+B)*h/2 *h\'')
                break;
            case 2:
                console.log('Area do losango: D * d/2')
                break;
            case 3:
                console.log('Volume do losango: D * d/2')
                break;
            default:
                console.log('Inválido')
                break;            
        }
        break;
    case 3:
        /*circulo e esfera*/
        switch (formulas){
            case 0:
                console.log('Area do circulo: π * r²')
                break;
            case 1:
                console.log('Volume do circulo: π * r² * h')
                break;
            case 2:
                console.log('Volume da esfera: 4/3 * π * r³')
                break;
            default:
                console.log('Inválido')
                break;        
        }
        break;   
    case 4:
        /*adicionais*/
        switch (formulas){
            case 0:
                console.log('Equação de 1º grau: f(x) = ax + b')
                break;
            case 1:
                console.log('Equação de 2º grau: f(x) = ax² + bx + c')
                break;
            case 2:
                console.log('Quadrática/Bhaskara: -b \u00B1 \u221Ab²-4ac)/2a')
                break;
            case 3:
                console.log('Área de figuras a partir do pentagono: aT * n')
                break;
            case 4:
                console.log('Volume do cone: 1/3 * π * r² * h')
                break;
            default:
                console.log('Inválido')
                break;        
        }
    break;
    default:
        console.log('Inválido')
        break;               
}
