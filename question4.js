const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

let total = sp + rj + mg + es + outros

let percentualSp, percentualRj, percentualMg, percentualEs, percentualOutros
percentualSp = 100*sp/total
percentualRj = 100*rj/total
percentualMg = 100*mg/total
percentualEs = 100*es/total
percentualOutros = 100*outros/total

console.log(`Percentual São Paulo = ${percentualSp.toFixed(2)}%
Percentual Rio de Janeiro = ${percentualRj.toFixed(2)}%
Percentual Minas Gerais = ${percentualMg.toFixed(2)}%
Percentual Espírito Santo = ${percentualEs.toFixed(2)}%
Percentual Outros = ${percentualOutros.toFixed(2)}%
`)