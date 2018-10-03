var x = 2;
localStorage.lanzar = x;
var x2 = 2;
localStorage.lanzar2 = x2;
var x3 = 2;
localStorage.lanzar3 = x3;
var x4 = 2;
localStorage.lanzar4 = x4;
var turnosV = 1;

html2canvas(document.body, {
    onrendered(canvas) {
        var link = document.getElementById('download');;
        var image = canvas.toDataURL();
        link.href = image;
        link.download = 'TABLERO GENERADO.png';
    }
});

// Al empezar, se oculta los dados de ambas modalidades.

ocultaDados1();
ocultaDados2();
ocultaDados3();
ocultaDados4();

function ocultaDados1() {
    document.getElementById('11').style.display = 'none';
    document.getElementById('21').style.display = 'none';
    document.getElementById('31').style.display = 'none';
    document.getElementById('41').style.display = 'none';
    document.getElementById('51').style.display = 'none';
    document.getElementById('61').style.display = 'none';
}

function ocultaDados2() {
    document.getElementById('12').style.display = 'none';
    document.getElementById('22').style.display = 'none';
    document.getElementById('32').style.display = 'none';
    document.getElementById('42').style.display = 'none';
    document.getElementById('52').style.display = 'none';
    document.getElementById('62').style.display = 'none';
}

function ocultaDados3() {
    document.getElementById('13').style.display = 'none';
    document.getElementById('23').style.display = 'none';
    document.getElementById('33').style.display = 'none';
    document.getElementById('43').style.display = 'none';
    document.getElementById('53').style.display = 'none';
    document.getElementById('63').style.display = 'none';
}

function ocultaDados4() {
    document.getElementById('14').style.display = 'none';
    document.getElementById('24').style.display = 'none';
    document.getElementById('34').style.display = 'none';
    document.getElementById('44').style.display = 'none';
    document.getElementById('54').style.display = 'none';
    document.getElementById('64').style.display = 'none';
}

// Ver la modalidad para así seleccionar los botones a usar.

if (localStorage.modalidad == "1VBOT") {
    document.getElementById('botón1').style.display = 'none';
    document.getElementById('botón2').style.display = 'none';
    document.getElementById('morado').style.display = 'none';
    document.getElementById('amarillo').style.display = 'none';
    document.getElementById('botón4').disabled = true;
} else {
    document.getElementById('botón3').style.display = 'none';
    document.getElementById('morado2').style.display = 'none';
    document.getElementById('botón4').style.display = 'none';
    document.getElementById('amarillo2').style.display = 'none';
}

// Mover el jugador 1 por medio del botón 1 (Modalidad 1V1).

function lanzar() {
    x = 1;
    localStorage.lanzar = x;
    turnosV = 2;
    if (player.spot + player.roll <= tiles.length - 1) {
        if (player.roll == 6) {
            document.getElementById('61').style.display = 'unset';
            turnosV = 1;
        } else {
            turnosV = 2;
            if (player.roll == 1) {
                document.getElementById('11').style.display = 'unset';
            }
            if (player.roll == 2) {
                document.getElementById('21').style.display = 'unset';
            }
            if (player.roll == 3) {
                document.getElementById('31').style.display = 'unset';
            }
            if (player.roll == 4) {
                document.getElementById('41').style.display = 'unset';
            }
            if (player.roll == 5) {
                document.getElementById('51').style.display = 'unset';
            }
        }
        ocultaDados2();
    } else {
        if (player.roll == 1) {
            document.getElementById('11').style.display = 'unset';
        }
        if (player.roll == 2) {
            document.getElementById('21').style.display = 'unset';
        }
        if (player.roll == 3) {
            document.getElementById('31').style.display = 'unset';
        }
        if (player.roll == 4) {
            document.getElementById('41').style.display = 'unset';
        }
        if (player.roll == 5) {
            document.getElementById('51').style.display = 'unset';
        }
        player.next = player.spot;
        ocultaDados2();
        turnosV = 2;
        if (player.roll == 6) {
            document.getElementById('61').style.display = 'unset';
            turnosV = 1;
        }
    }
    if (player.spot + player.roll == tiles.length - 1) {
        alert("El jugador 1 ha ganado.");
        location = 'opciones.html';
    }/*
    if (player.l. + player.roll == tiles.length - 1) {
        alert("El jugador 1 ha ganado.");
        location = 'opciones.html';
    }*/
}

// Mover el jugador 2 por medio del botón 2 (Modalidad 1V1).

function lanzar2() {
    x2 = 1;
    localStorage.lanzar2 = x2;
    if (player2.spot + player2.roll <= tiles.length - 1) {
        if (player2.roll == 6) {
            document.getElementById('62').style.display = 'unset';
            turnosV = 2;
        } else {
            turnosV = 1;
            if (player2.roll == 1) {
                document.getElementById('12').style.display = 'unset';
            }
            if (player2.roll == 2) {
                document.getElementById('22').style.display = 'unset';
            }
            if (player2.roll == 3) {
                document.getElementById('32').style.display = 'unset';
            }
            if (player2.roll == 4) {
                document.getElementById('42').style.display = 'unset';
            }
            if (player2.roll == 5) {
                document.getElementById('52').style.display = 'unset';
            }
        }
        ocultaDados1();
    } else {
        if (player2.roll == 1) {
            document.getElementById('12').style.display = 'unset';
        }
        if (player2.roll == 2) {
            document.getElementById('22').style.display = 'unset';
        }
        if (player2.roll == 3) {
            document.getElementById('32').style.display = 'unset';
        }
        if (player2.roll == 4) {
            document.getElementById('42').style.display = 'unset';
        }
        if (player2.roll == 5) {
            document.getElementById('52').style.display = 'unset';
        }
        if (player2.roll == 6) {
            document.getElementById('62').style.display = 'unset';
        }
        player2.next = player2.spot;
        ocultaDados1();
        turnosV = 1;
        if (player2.roll == 6) {
            document.getElementById('62').style.display = 'unset';
            turnosV = 2;
        }
    }
    if (player2.spot + player2.roll == tiles.length - 1) {
        alert("El jugador 2 ha ganado.");
        location = 'opciones.html';
    }
}

// Mover el jugador 3 por medio del botón 3 (Modalidad 1VBOT).

function lanzar3() {
    x3 = 1;
    localStorage.lanzar3 = x3;
    if (player3.spot + player3.roll <= tiles.length - 1) {
        if (player3.roll == 6) {
            document.getElementById('63').style.display = 'unset';
            turnosV = 2;
            setTimeout(turnos2, 3000);
        } else {
            turnosV = 1;
            if (player3.roll == 1) {
                document.getElementById('13').style.display = 'unset';
            }
            if (player3.roll == 2) {
                document.getElementById('23').style.display = 'unset';
            }
            if (player3.roll == 3) {
                document.getElementById('33').style.display = 'unset';
            }
            if (player3.roll == 4) {
                document.getElementById('43').style.display = 'unset';
            }
            if (player3.roll == 5) {
                document.getElementById('53').style.display = 'unset';
            }
            setTimeout(lanzar4, 3000);
        }
        ocultaDados4();
    } else {
        if (player3.roll == 1) {
            document.getElementById('13').style.display = 'unset';
        }
        if (player3.roll == 2) {
            document.getElementById('23').style.display = 'unset';
        }
        if (player3.roll == 3) {
            document.getElementById('33').style.display = 'unset';
        }
        if (player3.roll == 4) {
            document.getElementById('43').style.display = 'unset';
        }
        if (player3.roll == 5) {
            document.getElementById('53').style.display = 'unset';
        }
        player3.next = player3.spot;
        ocultaDados4();
        turnosV = 1;
        if (player3.roll == 6) {
            document.getElementById('63').style.display = 'unset';
            turnosV = 2;
            setTimeout(turnos2, 3000)
        }
        setTimeout(lanzar4, 3000);
    }
    if (player3.spot + player3.roll == tiles.length - 1) {
        alert("El jugador 1 ha ganado.");
        location = 'opciones.html';
    }
}

// VERIFICAR EL DADO 6 CON EL TIMER

// Mover al bot por medio del botón 3 (Modalidad 1VBOT).

function lanzar4() {
    x4 = 1;
    localStorage.lanzar4 = x4;
    if (playerbot.spot + playerbot.roll <= tiles.length - 1) {
        if (playerbot.roll == 6) {
            document.getElementById('64').style.display = 'unset';
            document.getElementById('botón3').disabled = true;
            setTimeout(lanzar4, 500);
        } else {
            turnosV = 2;
            if (playerbot.roll == 1) {
                document.getElementById('14').style.display = 'unset';
            }
            if (playerbot.roll == 2) {
                document.getElementById('24').style.display = 'unset';
            }
            if (playerbot.roll == 3) {
                document.getElementById('34').style.display = 'unset';
            }
            if (playerbot.roll == 4) {
                document.getElementById('44').style.display = 'unset';
            }
            if (playerbot.roll == 5) {
                document.getElementById('54').style.display = 'unset';
            }
        }
        ocultaDados3();
    } else {
        if (playerbot.roll == 1) {
            document.getElementById('14').style.display = 'unset';
        }
        if (playerbot.roll == 2) {
            document.getElementById('24').style.display = 'unset';
        }
        if (playerbot.roll == 3) {
            document.getElementById('34').style.display = 'unset';
        }
        if (playerbot.roll == 4) {
            document.getElementById('44').style.display = 'unset';
        }
        if (playerbot.roll == 5) {
            document.getElementById('54').style.display = 'unset';
        }
        playerbot.next = playerbot.spot;
        ocultaDados3();
        turnosV = 2;
        if (playerbot.roll == 6) {
            document.getElementById('64').style.display = 'unset';
            document.getElementById('botón3').disabled = true;
            setTimeout(lanzar4, 500);
        }
    }
    setTimeout(turnos2, 500);
    if (playerbot.spot + playerbot.roll == tiles.length - 1) {
        alert("El bot ha ganado.");
        location = 'opciones.html';
    }
}

// Nos servirá para intercalar los turnos (Modalidad 1V1).

function turnos() {
    if ((turnosV % 2) == 0) {
        document.getElementById('botón1').disabled = true;
        document.getElementById('botón2').disabled = false;
    } else {
        document.getElementById('botón2').disabled = true;
        document.getElementById('botón1').disabled = false;
    }
}

function turnos2() {
    if ((turnosV % 2) == 0) {
        document.getElementById('botón3').disabled = false;
    } else {
        document.getElementById('botón3').disabled = true;
    }
}