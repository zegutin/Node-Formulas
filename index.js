const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function retornar() {
    rl.question(` Selecione o numero da formula que deseja calcular:

            Digite [1] para retangulo:
            Digite [2] para triangulo:
            Digite [3] para quadrado:
            Digite [4] para trapézio:
            Digite [5] para poligono regular:
            Digite [6] para cilindro:
            Digite [7] para cone:
            Digite [8] para esfera:
            Digite [9] para prisma:
            Digite [10] para poligono irregular:

            Numero escolhido:`, (day) => {


        switch (day) {

            case '1':
                console.log('você selecionou o retangulo')

                rl.question('Digite a altura do retangulo: ', (altura) => {
                    rl.question('Digite a largura do retangulo: ', (largura) => {
                        const numero1 = parseFloat(altura);
                        const numero2 = parseFloat(largura);

                        if (!isNaN(numero1) && !isNaN(numero2)) {
                            const resultado = numero1 * numero2;
                            console.log(`A área total do retangulo é ${resultado}`);
                            rl.question(`
                            
        1. voltar
        2. finalizar
                                             
        valor selecionado: `, (voltar) => {
                                if (voltar == 1) {
                                    retornar()
                                }
                                else if (voltar == 2) {
                                    rl.close()
                                } else {
                                    console.log('valor invalido')
                                    rl.close()
                                }
                            })
                        } else {
                            console.log('Os valores não podem ser iguais.');

                    }

                    })
                })

                break;

            case '2':
                console.log('você selecionou o triangulo')

                rl.question('Digite o valor da base do triangulo: ', (base) => {
                    rl.question('Digite o valor da altura do triangulo: ', (altura) => {
                        const numero1 = parseFloat(base)
                        const numero2 = parseFloat(altura)
                        resultado = (numero1 * numero2) / 2
                        console.log(`A área total do triangulo é ${resultado}`)

                        rl.question(`
                            
        1. voltar
        2. finalizar
                                             
        valor selecionado: `, (voltar) => {
                                if (voltar == 1) {
                                    retornar()
                                }
                                else if (voltar == 2) {
                                    rl.close()
                                } else {
                                    console.log('valor invalido')
                                    rl.close()
                                }
                            })
                    })
                })

                break;

            case '3':
                console.log('você selecionou o quadrado')

                rl.question('Digite o valor de uma das extremidades do quadrado: ', (extremidade) => {
                    const numero1 = parseFloat(extremidade)
                    resultado = numero1 * 4
                    console.log(`A área total do quadrado é ${resultado}`)

                    rl.question(`
                            
        1. voltar
        2. finalizar
                                             
        valor selecionado: `, (voltar) => {
                                if (voltar == 1) {
                                    retornar()
                                }
                                else if (voltar == 2) {
                                    rl.close()
                                } else {
                                    console.log('valor invalido')
                                    rl.close()
                                }
                            })
                })
                break;

            case '4':
                console.log('você selecionou o trapézio')
                rl.question('Digite o valor da base maior: ', (baseMaior) => {
                    rl.question('Digite o valor da base menor: ', (baseMenor) => {
                        rl.question('Digite o valor da altura: ', (altura) => {

                            const numero1 = parseFloat(baseMaior)
                            const numero2 = parseFloat(baseMenor)
                            const numero3 = parseFloat(altura)

                            resultado = ((numero1 + numero2) * numero3) / 2

                            console.log(`A área total do trapézio é ${resultado}`);

                            rl.question(`
                            
        1. voltar
        2. finalizar
                                             
        valor selecionado: `, (voltar) => {
                                if (voltar == 1) {
                                    retornar()
                                }
                                else if (voltar == 2) {
                                    rl.close()
                                } else {
                                    console.log('valor invalido')
                                    rl.close()
                                }
                            })
                        })
                    })
                })
                break;

            case '5':
                console.log('você selecionou o poligono regular')

                rl.question("Informe o número de lados do polígono regular: ", (numLados) => {
                    rl.question("Informe o comprimento de um lado: ", (comprimentoLado) => {
                        // Converter as entradas do usuário em números
                        const n = parseInt(numLados);
                        const s = parseFloat(comprimentoLado);

                        // Calcular a área do polígono regular
                        const area = (n * s * s) / (4 * Math.tan(Math.PI / n));

                        console.log(`A área do polígono regular com ${n} lados e comprimento de lado ${s} é ${area.toFixed(2)}`);

                        rl.question(`
                            
                        1. voltar
                        2. finalizar
                                                             
                        valor selecionado: `, (voltar) => {
                                                if (voltar == 1) {
                                                    retornar()
                                                }
                                                else if (voltar == 2) {
                                                    rl.close()
                                                } else {
                                                    console.log('valor invalido')
                                                    rl.close()
                                                }
                                            })
                    });
                });


                break;

            case '6':
                console.log('você selecionou o cilindro')

                rl.question("Informe o raio da base do cilindro: ", (raio) => {
                    rl.question("Informe a altura do cilindro: ", (altura) => {
                        // Converter as entradas do usuário em números
                        const r = parseFloat(raio);
                        const h = parseFloat(altura);

                        // Calcular a área da superfície do cilindro
                        const areaSuperficie = 2 * Math.PI * r * (r + h);

                        console.log(`A área da superfície do cilindro com raio ${r} e altura ${h} é ${areaSuperficie.toFixed(2)}`);

                        rl.question(`
                            
                        1. voltar
                        2. finalizar
                                                             
                        valor selecionado: `, (voltar) => {
                                                if (voltar == 1) {
                                                    retornar()
                                                }
                                                else if (voltar == 2) {
                                                    rl.close()
                                                } else {
                                                    console.log('valor invalido')
                                                    rl.close()
                                                }
                                            })

                    });
                });

                break;

            case '7':
                console.log('você selecionou o cone')

                rl.question("Informe o raio da base do cone: ", (raio) => {
                    rl.question("Informe a altura do cone: ", (altura) => {
                        // Converter as entradas do usuário em números
                        const r = parseFloat(raio);
                        const h = parseFloat(altura);

                        // Calcular a área da superfície do cone
                        const slantHeight = Math.sqrt(r * r + h * h);
                        const areaSuperficie = Math.PI * r * (r + slantHeight);

                        console.log(`A área da superfície do cone com raio da base ${r} e altura ${h} é ${areaSuperficie.toFixed(2)}`);

                        rl.question(`
                            
                        1. voltar
                        2. finalizar
                                                             
                        valor selecionado: `, (voltar) => {
                                                if (voltar == 1) {
                                                    retornar()
                                                }
                                                else if (voltar == 2) {
                                                    rl.close()
                                                } else {
                                                    console.log('valor invalido')
                                                    rl.close()
                                                }
                                            })

                    });
                });
                break;

            case '8':
                console.log('você selecionou o esfera')

                rl.question("Informe o raio da esfera: ", (raio) => {
                    // Converter a entrada do usuário em um número
                    const r = parseFloat(raio);

                    // Calcular a área da superfície da esfera
                    const areaSuperficie = 4 * Math.PI * r * r;

                    console.log(`A área da superfície da esfera com raio ${r} é ${areaSuperficie.toFixed(2)}`);

                    rl.question(`
                            
                    1. voltar
                    2. finalizar
                                                         
                    valor selecionado: `, (voltar) => {
                                            if (voltar == 1) {
                                                retornar()
                                            }
                                            else if (voltar == 2) {
                                                rl.close()
                                            } else {
                                                console.log('valor invalido')
                                                rl.close()
                                            }
                                        })

                });
                break;

            case '9':
                console.log('você selecionou o prisma')

                rl.question("Informe o número de lados da base: ", (numLados) => {
                    rl.question("Informe o comprimento de um lado da base: ", (comprimentoLado) => {
                        rl.question("Informe a altura da base: ", (alturaBase) => {
                            rl.question("Informe a altura do prisma: ", (alturaPrisma) => {
                                // Converter as entradas do usuário em números
                                const n = parseInt(numLados);
                                const s = parseFloat(comprimentoLado);
                                const hBase = parseFloat(alturaBase);
                                const hPrisma = parseFloat(alturaPrisma);

                                // Calcular a área total do prisma
                                const areaBase = (n * s * hBase) / 2; // Área da base (triangular ou poligonal)
                                const areaLateral = n * s * hPrisma; // Área das faces laterais
                                const areaTotal = 2 * areaBase + areaLateral; // Área total

                                console.log(`A área total do prisma com ${n} lados na base, comprimento de lado ${s}, altura da base ${hBase} e altura do prisma ${hPrisma} é ${areaTotal.toFixed(2)}`);

                                rl.question(`
                            
                                1. voltar
                                2. finalizar
                                                                     
                                valor selecionado: `, (voltar) => {
                                                        if (voltar == 1) {
                                                            retornar()
                                                        }
                                                        else if (voltar == 2) {
                                                            rl.close()
                                                        } else {
                                                            console.log('valor invalido')
                                                            rl.close()
                                                        }
                                                    })

                            });
                        });
                    });
                });
                break;

            case '10':
                console.log('você selecionou o poligono irregular')

                const vertices = [];

                function calcularArea(vertices) {
                    let area = 0;

                    for (let i = 0; i < vertices.length; i++) {
                        const x1 = vertices[i][0];
                        const y1 = vertices[i][1];
                        const x2 = vertices[(i + 1) % vertices.length][0];
                        const y2 = vertices[(i + 1) % vertices.length][1];
                        area += (x1 * y2 - x2 * y1);
                    }

                    return Math.abs(area) / 2;
                }

                function pedirCoordenadas() {
                    rl.question("Informe a coordenada x do vértice: ", (x) => {
                        rl.question("Informe a coordenada y do vértice: ", (y) => {
                            const xCoord = parseFloat(x);
                            const yCoord = parseFloat(y);
                            vertices.push([xCoord, yCoord]);
                            rl.question("Deseja inserir mais vértices? (sim/não): ", (resposta) => {
                                if (resposta.toLowerCase() === "sim") {
                                    pedirCoordenadas();
                                } else {
                                    const area = calcularArea(vertices);
                                    console.log(`A área do polígono irregular é ${area.toFixed(2)}`);
                                    rl.question(`
                            
                                    1. voltar
                                    2. finalizar
                                                                         
                                    valor selecionado: `, (voltar) => {
                                                            if (voltar == 1) {
                                                                retornar()
                                                            }
                                                            else if (voltar == 2) {
                                                                rl.close()
                                                            } else {
                                                                console.log('valor invalido')
                                                                rl.close()
                                                            }
                                                        })
                                }
                            });
                        });
                    });
                }

                pedirCoordenadas();

                break;

                
            default:
                console.log('Valor invalido')
                break;
        }



    });

}
retornar()