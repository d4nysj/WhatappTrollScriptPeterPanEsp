async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Tiene que estar una conversacion abierta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`

Hace tiempo, allá por 1880, vivía en la ciudad de Londres la familia Darling. Estaba formada por el señor y la señora Darling y sus hijos: Wendy, Michael y John. Sin olvidarnos de Nana, por supuesto, el perro niñera.

Vivían felices y tranquilos hasta que Peter Pan llegó a sus vidas. Todo comenzó la noche en que Nana tenía el día libre y la señora Darling se quedó a cargo de sus hijos. Cuando todos, incluida ella, estuvieron dormidos el muchacho entró por la ventana. Pero entonces ella se despertó y se asustó tanto al verle que lanzó un fuerte grito. Entonces apareció Nana, que cerró la ventana para evitar que saliera y acabó atrapando su sombra. Y así fue como la sombra de Peter Pan acabó en un cajón de la casa de los Darling.

Una noche el señor y la señora Darling salieron a cenar a casa de los vecinos del número 27. Los niños se quedaron en casa al cuidado de Nana y no tardaron en quedarse todos dormidos.
Pero cuando la casa estaba en silencio, entró una diminuta hada revoloteando a gran velocidad y tras ella, Peter Pan, dispuesto a recuperar su sombra. La encontró en el cajón en el que la había guardado Nana pero se entristeció mucho cuando comprobó que la sombra no le seguía. Probó a pegársela con jabón pero no dio resultado y desesperado se sentó en el suelo a llorar.

- ¿Quién está llorando? - preguntó Wendy, a quien despertaron los sollozos.
- Soy yo - contestó Peter
- ¿Cómo te llamas? - preguntó la niña, aunque ella estaba casi segura de saber quien era
- Peter Pan
- ¿Y qué te pasa Peter?
- Que no consigo que mi sombra se me quede pegada
- Tranquilo. Creo que podré cosértela

Wendy ayudó a Peter y mientras los dos niños comenzaron a hacerse amigos.

- Yo vivo en el País de Nunca Jamás. Es maravilloso, allí eres siempre un niño y no tienes que obedecer a nadie. Conmigo viven los Niños perdidos, ya sabes, los niños que caen de los carritos cuando la niñera mira a otro lado. Además hay piratas, hadas, indios y toda clase de seres.

Peter decía que era muy feliz allí aunque reconoció que a él y a los Niños perdidos les gustaría que hubiese alguien que les contara cuentos como hacía ella con sus hermanos. Peter le propuso ir con él al País de Nunca Jamás y a Wendy le pareció de inmediato una idea maravillosa.

- Pero, ¿y mis hermanos? ¿pueden venir ellos también?
- Si tu quieres, ¡claro!
- ¡Estupendo!

Wendy despertó a Michael y John y Peter para iniciar su viaje. Pero antes de partir Peter les explicó que debían aprender a volar. Les echó un poco de polvo de hada por encima y enseguida los tres niños comenzaron a elevarse por el aire. A todos les pareció muy divertido y comenzaron a dar vueltas y más vueltas por la casa. Armaron tal revuelo que acabaron despertando a Nana.

Peter la oyó venir así que pudieron volver a sus camas rápidamente como si no hubiese pasado nada. Así, cuando la niñera entró en la habitación creyó que los tres dormían plácidamente.

Pero Nana estaba intranquila y estaba casi segura de que algo raro estaba ocurriendo en el cuarto de los niños, de modo que corrió a avisar a los señores Darling. Pero cuando volvieron, los niños ya no estaban. Los tres habían partido rumbo a Nunca Jamás nerviosos e ilusionados por vivir aquella fantástica aventura.

Volaron durante días atravesando océanos pero al final llegaron al país de Nunca Jamas.

Al primero que vieron desde el aire fue al temible capitán Garfio, el peor enemigo de Peter Pan. En una lucha hacía tiempo Peter había logrado arrebatarle la mano derecha y por eso el pirata llevaba en su lugar ahora un garfio. Pero lo manejaba perfectamente y eso, unido a sus ganas de venganza, lo hacían muy peligroso. Aunque había algo a lo que el capitán Garfio tenía miedo: el cocodrilo. Una vez estuvo a punto de comérselo y por eso ahora no quería otra cosa que no fuese él. Menos mal que el capitán le arrojó un reloj y por eso ahora hacía tic-tac cada vez que se acercaba.

Llegaron hasta el lugar donde estaban los Niños perdidos. Pero Campanilla, que estaba muy celosa de Wendy porque estaba todo el tiempo junto a Peter, se adelantó para tramar algo.

- Peter dice que ataqueis a Wendy - le dijo a los Niños perdidos.
- ¡De acuerdo! - contestaron todos al unísono corriendo a por sus arcos y flechas

Así que los niños comenzaron a disparar sus arcos y flechas hacia Wendy y sus hermanos. Pero afortunadamente no les pasó nada.

En cuanto llegó Peter detrás de todos les echó una gran bronca.

- ¿Pero qué hacéis? ¡Encima que os traigo a una madre para que os cuente cuentos la recibís así!

Los Niños perdidos, que iban vestidos con las pieles de los osos que cazaban, se disculparon y Peter les presentó a Wendy y a los demás.

- Estos son Tootles, Slightly, Nibs, Curly y los gemelos
- Hola - contestó la muchacha - Estos son mis hermanos Michael y John y yo soy Wendy.

Wendy y sus hermanos decidieron quedarse allí y junto con los Niños perdidos y Peter formaron una gran familia que vivía feliz en su guarida subterránea.

Un día estaban los niños jugando en la laguna de las sirenas, concretamente en la Roca de los Desamparados, cuando sucedió algo extraño. De repente el Sol desapareció por completo, se hizo de noche y entre las sombras apareció un bote con dos de los piratas de Garfio, Smee y Starkey, que llevaban como prisionera a la princesa india Tigridia. Peter, Wendy y los demás se escondieron y vieron como arrojaban a Tigridia sobre la Roca de los Desamparados. Entonces a Peter se le ocurrió una idea.

- ¡Soltadla! - dijo a los piratas imitando la voz del capitán Garfio
- ¿Capitán? - dijeron los dos piratas mirando a todos los lados
- ¡Ya me habéis oído! ¡Hacedlo!

Así que los piratas cortaron las cuerdas que apresaban a la princesa. Entonces apareció por la laguna el capitán Garfio a bordo de su barco. Iba para contarles que sabía que los Niños perdidos habían encontrado una madre y de ninguna manera podían permitirlo.

- Los raptaremos, los obligaremos a lanzarse por la borda y Wendy se convertirá en nuestra madre.
- ¡Sí! ¡Es una idea estupenda capitán!, contestaron Smee y Starkey

Wendy se quedó pálida al oír aquello y Peter, que no aguantó más callado, de nuevo imitó la voz de Garfio. Pero esta vez el pirata fue más listo que en otras ocasiones y supo que se trataba de Peter Pan. Lo encontró y luchó contra él hasta que logró herirlo con su garfio, mientras los niños escapaban en el bote. Wendy se salvó gracias a la ayuda de las sirenas y a la cometa que Michael había perdido unos días antes y que apareció por allí, mientras que Peter logró sobrevivir gracias a la ayuda de la pájara de Nunca Jamás.

Aquella aventura hizo que Peter se hiciera muy amigo de los indios pieles rojas, pues le estaban agradecidos por haber salvado a la princesa Tigridia y prometieron defenderlo con sus arcos y flechas del ataque de los piratas.

Una noche estaba Wendy contando a los niños su cuento de antes de ir a dormir cuando habló de las madres, de lo buenas y atentas que son con sus hijos. Peter no estuvo de acuerdo con las ideas de Wendy y discutió con ella y al mismo tiempo los hermanos de la muchacha empezaron a sentir nostalgia por lo que entre todos decidieron que había llegado el momento de volver a casa.

- Nos iremos esta misma noche - contestó tajante Wendy

Los Niños perdidos se sintieron muy tristes al oír esto y decidieron que se irían con ella. No así Peter, que de ninguna manera quería abandonar el país de Nunca Jamás. Al menos se preocupó porque Campanilla y los pieles rojas acompañaran a los niños por el bosque en su camino de vuelta a Inglaterra.

Peter PanPero en su camino de vuelta surgieron nuevas complicaciones. Los piratas estaban al corriente de que iban a pasar por allí y los esperaban encaramados a los árboles del bosque. Los niños, y tampoco Peter Pan, se podían esperar algo así, así que los cogieron desprevenidos.

Mientras tanto Garfio acudió a la guarida secreta de Peter, donde el muchacho pasaba el tiempo en soledad haciendo ver que no le importaba haberse quedado solo. El pirata y se escondió dentro de un tronco y esperó a que Peter se durmiera para echar en un vaso que tenía el muchacho junto a su cama un poco del veneno secreto y mortal que siempre llevaba consigo. Esta vez conseguiría acabar con él.

Pero en mitad de la noche Campanilla llegó para contarle a Peter lo ocurrido y advertirle de que sabía que el capitán Garfio le había echado veneno en su vaso. Así que Peter salió veloz con sus armas dispuesto a rescatar a los niños.

Peter llegó hasta el barco de los piratas, el Jolly Roger, un barco siniestro en el que los niños estaban a punto de ser obligados a saltar por la pasarela al mar.

Los piratas estaban atando a Wendy al palo mayor en ese momento cuando de repente sonó algo que nadie esperaba... Tic- tac, tic-tac, tic-tac...

- ¡Es ese maldito cocodrilo! ¡Rápido Smee escóndeme! ¡No dejes que me coja!- gritó Garfio preso del pánico

Pero allí no había ningún cocodrilo, era Peter, que hábilmente se había hecho pasar por él. en cuanto Garfio fue a su camarote a esconderse Peter apareció en la cubierta del barco de un salto y empezó a acabar con los piratas uno por uno. Pero desde sus aposentos Garfio dejó de oír el tic-tac y creyó que el cocodrilo había huido y podía salir de nuevo.

Al salir Garfio se encontró con varios piratas muertos. Nadie sabía qué había ocurrido exactamente así que todos empezaron a pensar que el barco estaba maldito pues ya se sabe que los piratas son algo supersticiosos. Estaban a punto de lanzar a Wendy por la borda convencidos de que era ella quien atraía a la mala suerte, cuando Peter salió de su escondrijo para evitarlo.

- ¡Joven descarado, prepárate para morir! – dijo Garfio
- ¡De eso nada maldito capitán Garfio! ¡No es mi hora sino la tuya! - contestó el valiente Peter Pan

Se enzarzaron en una violenta lucha de espadas y al final Garfio acabó gravemente herido en las costillas, tanto, que no vio salida y decidió lanzarse por la borda sin saber que el cocodrilo lo estaba

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
