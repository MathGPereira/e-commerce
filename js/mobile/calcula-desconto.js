export default function calculaDesconto(desconto, precoOriginal) {
    return (parseFloat(desconto / 100) * parseFloat(precoOriginal)).toFixed(2);
}
